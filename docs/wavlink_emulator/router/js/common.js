var pathName = document.location.pathname;
var isMobile = /mobile/i.test(navigator.userAgent) || /wcloud_app_/i.test(navigator.userAgent);
var isMobilePage = pathName.indexOf("/phone_ui/") != -1;
var FLAG = pathName == "/" || pathName.indexOf("login") != -1;
var opMode;
var timer = [];

if (!FLAG) {
	window.sessionStorage.getItem("token") && window.sessionStorage.getItem("status") == 1
	? applyLanguage($.cookie("i18next")) : toPage("login", 0);
}

$(document).ready(function () {
	agentCheckUrl();
	// select box
	$(".select > .dropdown-menu").on("click", "li", function(){
		var v = $(this).attr("data-value");
		var t = $(this).text();
		$(this).parent().siblings(".dropdown-toggle").text(t);
		$(this).parent().siblings("input[type='hidden']").val(v).trigger("changed", v);
	});
	$(".select > input").on("change", function(){
		var v = $(this).val();
		var t = $(this).siblings(".dropdown-menu").find("[data-value="+v+"]").text();
		$(this).next().text(t);
	});
	// init all modal box
	$(".modal").modal({
		backdrop: "static",
		keyboard: false,
		show: false
	});
	// switch
	$(".switch-checkbox").on("change", function(){
		$(this).val($(this).is(":checked") ? 1 : 0);
	});
	// close progress bar and reload current page
	$("#closeBarBtn").on("click", function(){
		$(this).parents(".modal").modal("hide");
		if (pathName.indexOf("wizard") != -1) {
			window.sessionStorage.setItem("init", 1);
			toPage("login", 0);
		}
	});
});

// show layer's tips or msg
function getMsg(msg, position, element) {
	// position => 1:top 2:right 3:bottom 4:left
    if (typeof(element) != "undefined") {
        $(element).focus();
        layer.tips("<span>"+msg+"</span>", element, {
            tips: [position, "red"]
        });
    } else {
		layer.msg(msg);
    }
}

function toPage(page, timeout) {
	// page: target page; timeout: target is Login page and whether timeout or not
	if (page == "login") {
		if (!isMobile) {
			window.sessionStorage.setItem("page", "main.html");
		}
		document.location = (FLAG?"./":"../")+"login.html?v="+new Date().getTime()+(timeout ? "&reject="+encodeURI("timeout") : '');
	} else {
		if (window.sessionStorage.getItem("MeshMode") != 2) {
			if (page == "wizard" || page == "index") {
				document.location = (isMobile?"./phone_ui/html/":FLAG?"./html/":"../")+page+".html?v="+new Date().getTime();
			} else {
				document.location = (FLAG?"./html/":"../")+page+".html?v="+new Date().getTime();
			}
		} else {
			document.location = (FLAG?"./html/":"../")+"agentupgrade.html?v="+new Date().getTime();
		}
	}
}

function agentCheckUrl() {
	if (window.sessionStorage.getItem("MeshMode") == 2) {
		if (pathName.indexOf("/wizard") != -1 || pathName.indexOf("/index") != -1) {
			toPage("login", 1);
		}
	}
}

// show error message
function locationUrl(error) {
	getMsg($.t("msgErrorCode"+error));
    if (error == 10007) {
		toPage("login", 1);
    }
}

function applyLanguage(lang, timeout) {
	$.i18n.init({
		lng: lang,
		fallbackLng: ['en_US'],
		resGetPath: (FLAG?"./":"../")+"public/i18n/locales/__lng__/__ns__.json"
	}, function (err, t) {
		$("[data-i18n]").i18n();
		// when it's login page
		if (pathName == "/" || pathName.indexOf("login") != -1) {
			$("#language").text($("[data-value="+lang+"]").text());
		} else {
			$("[data-i18n='lblTableFooter']").text($.t("lblTableFooter", {
				tPageStart: 0,
				tPageEnd: 0,
				tTotal: 0
			}));
		}
	});
}

function ajax(opts, isUpload, upConfig) {
	var token = $.cookie("token");
	var defaultSettings = {
		type: "GET",
		dataType: "JSON",
		async: true,
		timeout: 0,
		url: (FLAG?"./":"../")+"data/",
		success: function(res) {
			if (typeof(res) != "string" && res.error !== 0) {
				locationUrl(res.error);
			}
		}
	}
	Object.keys(opts).forEach(function(k){
		k == "url" ? defaultSettings[k] += opts[k] : defaultSettings[k] = opts[k];
		if (isUpload && k == "data" && opts[k].indexOf("opt=set") != -1) {
			defaultSettings.type = "POST";
		}
	});
	// 文件上传
	if (isUpload) {
		defaultSettings.processData = false;
		defaultSettings.contentType = false;
		if (upConfig.to == "router") {
			defaultSettings.url = "/../cgi-bin/upload.cgi?token="+token;
		} else if (upConfig.to == "ap") {
			defaultSettings.url = "/../cgi-bin/uploadAP.cgi?token="+token;
		} else if (upConfig.to == "setting") {
			defaultSettings.url = "/../cgi-bin/upload_settings.cgi?token="+token;
		} else if (upConfig.to == "img") {
			defaultSettings.url = "/../cgi-bin/uploadImg.cgi?token="+token;
		} else if (upConfig.to == "vpn") {
			defaultSettings.url = "/../cgi-bin/uploadVpn.cgi?token="+token;
			if (upConfig.hasOwnProperty("type")) {
				defaultSettings.url += "?type=" + upConfig.type;
			}
		} else if (upConfig.to == "ark") {
			defaultSettings.url = "/../cgi-bin/uploadArk.cgi?token="+token;
		}
	}
	return $.ajax(defaultSettings);
}

$.fn.initTable = function(data, config) {
	// data: 表格数据
	// 将数据进行分页处理，计算总条数和总页数
	var nPanel = this;  // nPanel: 当前表格所属折叠面板
	var perPage = (nPanel.find(".perPage").val()*1) || 10;    // perPage: 每页展示条数
	var total = data.length;    // total: 数据总条数
	var tPage = Math.ceil(total/perPage) || 1;   // tPage: 页面总数，没有数据时默认为1
	var pageSpan = nPanel.find(".nowPage");
	var nPage = (pageSpan.text()*1) || 1;   // nPage: 当前页数
	nPage = (nPage > tPage ? tPage : nPage);
	var table = nPanel.find(".table");
	var thead = table.find("thead > tr");
	var multi = (thead.find(".selectAll").length > 0);  // multi: 表格数据是否可多选
	var hasID = (thead.find("[data-i18n='lblID']").length > 0); // hasID: 表是否有序号列
	var hasOp = (thead.find("[data-i18n='lblOperate']").length > 0); // hasOp: 表是否有操作列
	// 先解绑事件，避免重复绑定
	nPanel.off("click changed");
	table.off("click");
	// 跳转到第一页或者上一页
	nPanel.on("click", ".startPage, .prevPage", function(e){
		if (nPage > 1) {
			nPage = (e.target.className == "startPage" ? 1 : nPage-1);
			render();
		} else {
			getMsg($.t("lblFirstPage"));
		}
	});
	// 跳转到最后一页或者下一页
	nPanel.on("click", ".endPage, .nextPage", function(e){
		if (nPage < tPage) {
			nPage = (e.target.className == "endPage" ? tPage : nPage+1);
			render();
		} else {
			getMsg($.t("lblLastPage"));
		}
	});
	// 更改每页展示条数
	nPanel.on("changed", ".perPage", function(e, v){
		perPage = v;
		tPage = Math.ceil(total/perPage);
		if (nPage > tPage) {
			nPage = tPage;
		}
		render();
	});
	if (multi) {
		// checkedIndex 数组存放所有被选中的数据在 data 数组中的索引号
		var checkedIndex = [];
		var selectAll = nPanel.find(".selectAll");
		selectAll.prop("checked", false);
		// 选中或取消选中所有条目
		nPanel.on("click", ".selectAll", function(){
			var checked = $(this).is(":checked");
			selectAll.prop("checked", checked);
			nPanel.find(".selectThis:not(:disabled)").prop("checked", checked);
			// 清空 checkedIndex 数组
			checkedIndex.splice(0, checkedIndex.length);
			if (checked) {
				// 全选了数据，将 data 数组中所有可多选数据的索引存入 checkedIndex 数组
				data.forEach(function(v, i){
					if (!v.disSelect) {
						checkedIndex.push(i);
					}
				});
			}
			table.attr("data-checked", checkedIndex.join(","));
		});
		// 选中或取消选中任意一条规则
		table.on("click", ".selectThis:not(:disabled)", function(){
			var checked = $(this).is(":checked");
			var index = perPage*(nPage-1)+$(this).parents("tr").prevAll().length;
			if (checked) {
				// 选中了一行数据，将其在 data 数组中的索引号存入 checkedIndex 数组
				checkedIndex.push(index);
			} else if (!checked) {
				// 取消选中一行数据，将其索引号从 checkedIndex 数组中删除
				checkedIndex.splice(checkedIndex.indexOf(index), 1);
				if (selectAll.is(":checked")) {
					// 当全选按钮被选中时，取消选中任意一条规则的同时取消选中全选
					selectAll.prop("checked", false);
				}
			}
			table.attr("data-checked", checkedIndex.join(","));
		});
	}
	render();

	// 渲染指定页的数据
	function render(){
		// 清空表格主体部分
		// table.find("tbody").empty();
		var nowPageData = [];
		// 当前页第一条数据在数组中的索引号
		var pageStart = (nPage-1)*perPage;
		// 当前页最后一条数据的序号
		var pageEnd = nPage*perPage > total ? total : nPage*perPage;

		if (config && config.serverPagination) {
			ajax({
				async: false,
				data: config.urlParams+"&pageSize="+perPage+"&pageNum="+nPage,
				success: function(data) {
					if (data.error == 0) {
						total = data.total;
						tPage = Math.ceil(total/perPage);
						pageEnd = pageEnd > total ? total : pageEnd;
						nowPageData = config.handleData(data);
					} else {
						locationUrl(data.error);
					}
				}
			});
		} else {
			// 获取当前页的数据
			nowPageData = data.slice(pageStart, pageEnd);
		}
		// 利用碎片化文档,避免频繁操作 DOM
		var dom = document.createDocumentFragment();
		if (total > 0) {
			// 遍历数组,将数据放到对应表格 td 中,得到表格主体 tbody 的内容
			nowPageData.forEach(function(v, i){
				var hasSwitch = 0;
				var trEle = $("<tr></tr>");
				// 可多选的表格，添加多选框，判断当前行是否已被选中，若被选中则将多选框设为选中状态
				if (multi) {
					if (v.isChecked) {
						checkedIndex.push(pageStart+i);
					}
					trEle.append("<td><input class='selectThis' type='checkbox'"
								 +(v.disSelect ? " disabled" : "")
								 +(checkedIndex.indexOf(pageStart+i) != -1 ? " checked" : "")+"></td>");
				}
				// 有序号列的表格，添加序号列
				if (hasID) {
					trEle.append("<td>"+(pageStart+1+i)+"</td>");
				}
				// 遍历主要的数据
				Object.keys(v).forEach(function(k){
					if (k != "isChecked" && k != "disSelect" && k != "disEdit" && k != "disDel") {
						if (k == "status" && v[k].indexOf("switch") != -1 && v[k].indexOf("checked") == -1) {
							hasSwitch = 1;
						}
						trEle.append("<td>"+v[k]+"</td>");
					}
				});
				// 有操作列的表格，添加操作列
				if (hasOp) {
					var opt = thead.find("[data-i18n='lblOperate']").attr("data-flag");
					if (opt == "onlyDelete") {
						// 操作项只有删除
						trEle.append("<td><span class='deleteThis"+(v.disDel ? " disabled'>" : "'>")
									+$.t("btnDelete")+"</span></td>");
					} else if (opt == "onlyEdit") {
						// 操作项只有编辑
						trEle.append("<td><span class='editThis"+(hasSwitch || v.disEdit ? " disabled'>" : "'>")
									+$.t("btnEdit")+"</span></td>");
					} else if (opt == "onlyOffline") {
						// 操作项只有强制下线
						trEle.append("<td><span class='deleteThis'>"+$.t("btnOffline")+"</span></td>");
					} else if (opt == "onlyChoose") {
						// 操作项只有复选框
						trEle.append("<td><input class='chooseThis' type='checkbox'></td>");
					} else if (!opt) {
						// 操作项默认有编辑和删除
						trEle.append("<td><span class='editThis"+(v.disEdit ? " disabled'>" : "'>")+$.t("btnEdit")
									+"</span> | <span class='deleteThis"+(v.disDel ? " disabled'>" : "'>")
									+$.t("btnDelete")+"</span></td>");
					}
				}
				dom.appendChild(trEle[0]);
			});
		} else if (total == 0) {
			var tdNum = thead.children("th").length;
			dom.appendChild($("<tr><td colspan="+tdNum+">"+$.t("lblNoData")+"</td></tr>")[0]);
		}
		// 将存放了表格主体内容的碎片化文档放到 DOM 中,完成一次性更新表格
		table.find("tbody").html(dom);
		// 可多选表格，将已选项存到 data-checked 自定义属性中方便读取
		if (multi) {
			table.attr("data-checked", checkedIndex.join(","));
		}
		// 更新当前页码
		pageSpan.text(nPage);
		// 触发页码的自定义事件 changed，并将当前页码作为参数传递过去
		// pageSpan.trigger("changed", nPage);
		// 更新当前页相关信息的说明
		nPanel.find("[data-i18n='lblTableFooter']").text($.t("lblTableFooter", {
			tPageStart: (total == 0) ? 0 : (pageStart+1),
			tPageEnd: pageEnd,
			tTotal: total
		}));
	}
}

function stop_key(){ //禁用键盘
	document.onkeydown=function(e){
		e=e||window.event;
		// if (e.keyCode == 32 || e.keyCode == 13)
		e.preventDefault();
	}
}

function setProgressBar(time, loadingText, completeText) {
	// time = 进度条总时长(单位为秒) * 10
	stop_key();
	var i = 0;
	var targetModal = $("#loadingBarModal");
	targetModal.find(".progress-bar").width(i+"%");
	targetModal.find(".progress-text").text(i+"%,"+loadingText);
	if (pathName.indexOf("/wizard") == -1) {
		targetModal.find("#closeBarBtn").hide();
		targetModal.modal("show");
	}
	var progress = setInterval(function() {
		targetModal.find(".progress-bar").width(i+"%");
		targetModal.find(".progress-text").text(i+"%,"+(i==100 ? completeText : loadingText));
		if (i >= 100) {
			clearInterval(progress);
			progress = null;
			targetModal.find("#closeBarBtn").show();
		}
		i++;
	}, time);
}

function startLoading(time, msg) {
	// time = 等待时长(单位为毫秒)
	var targetModal = $("#loadingModal");
	targetModal.find(".modal-title").text(msg);
	targetModal.modal("show");
	setTimeout(function() {
		targetModal.modal("hide");
	}, time);
}

function checkIP(field, isMask) {
	var ip_addr = field.val();
	if (ip_addr == "") {
		getMsg($.t("msgIpNone"), 2, field);
		return false;
	}
	if (!isMask) {
		var exp = /^(254|252|248|240|224|192|128)\.0\.0\.0$|^(255\.(254|252|248|240|224|192|128|0)\.0\.0)$|^(255\.255\.(254|252|248|240|224|192|128|0)\.0)$|^(255\.255\.255\.(254|252|248|240|224|192|128|0))$/;
		var reg = ip_addr.match(exp);
	} else {
		var exp = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
		var reg = ip_addr.match(exp);
	}
	switch(isMask)
	{
		case 0:
			if(reg == null) {
				getMsg($.t("msgMaskError"), 2, field);
				return false;
			}
			return true;
		case 1:
			if(reg == null) {
				getMsg($.t("msgIpError3"), 2, field);
				return false;
			}
			return true;
		case 2:
			if(reg == null) {
				getMsg($.t("msgDNSError"), 2, field);
				return false;
			}
			return true;
		case 3:
            if(reg == null) {
                getMsg($.t("msgGWError"), 2, field);
                return false;
            }
            return true;
		default:
			return false;
	}
}

function checkIP2(field, isMask) {
	var ip_addr = field.val();
	if (ip_addr == "") {
		getMsg($.t("msgIpNone"), 2, field);
		return false;
	}
	if (!isMask) {
		var exp = /^(254|252|248|240|224|192|128)\.0\.0\.0|255\.(254|252|248|240|224|192|128|0)\.0\.0|255\.255\.(254|252|248|240|224|192|128|0)\.0|255\.255\.255\.(254|252|248|240|224|192|128|0)$/;
		var reg = ip_addr.match(exp);
	} else {
		var exp = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
		var reg = ip_addr.match(exp);
	}
	switch(isMask)
	{
		case 0:
			if(reg == null) {
				getMsg($.t("msgMaskError"), 2, field);
				return false;
			}
			return true;
		case 1:
			if(reg == null) {
				getMsg($.t("msgIpError3"), 2, field);
				return false;
			}
			return true;
		case 2:
			if(reg == null) {
				getMsg($.t("msgStartIpError2"), 2, field);
				return false;
			}
			return true;
		case 3:
			if(reg == null) {
				getMsg($.t("msgEndIpError2"), 2, field);
				return false;
			}
			return true;
		default:
			return false;
	}
}

function checkIPInRange(lanIP, lanMask, ip, nowInput) {
	var netAddr = getNetAddr(lanIP, lanMask);
	var netAddr1 = getNetAddr(ip, lanMask);
	if (netAddr == netAddr1 && (ip.split(".")[3]*1<255 && ip.split(".")[3]*1>1)) {
		return true;
	} else {
		getMsg($.t("msgIpRangeError"), 2, nowInput);
		return false;
	}
}

function checkIPInRange2(deviceIp, nowInput, lan) {
	var lanStartIP = (lan.start).split(".")[3], lanEndIP = (lan.end).split(".")[3];
	var lanIP = lan.ip, lanMask = lan.mask;
	var netAddr = getNetAddr(lanIP, lanMask);
	var netAddr1 = getNetAddr(deviceIp, lanMask);
	var IP = deviceIp.split(".")[3];
	if ((netAddr == netAddr1) && ((IP*1 >= lanStartIP*1) && (IP*1 <= lanEndIP*1))) {
		return true;
	} else {
		getMsg($.t("msgIpRangeError"), 2, nowInput);
		return false;
	}
}

function checkIPInRange3(lanIP, lanMask, ip) {
	var netAddr = getNetAddr(lanIP, lanMask);
	var netAddr1 = getNetAddr(ip, lanMask);
	if (netAddr == netAddr1 && (ip.split(".")[3]*1<255 && ip.split(".")[3]*1>1)) {
		return true;
	} else {
		getMsg($.t("msgIpRangeError"));
		return false;
	}
}

function checkIpv6Addr(field) {
	var ipv6addr = field.val();
	var len = ipv6addr.length;

	if (len == 0) {
		getMsg($.t("msgIpNone"));
		return false;
	}

	for (var i=0; i<len; i++) {
		if (ipv6addr.charAt(i).charCodeAt() != 32) {//空格
			continue;
		} else {
			getMsg($.t("msgIPv6SpaceError"));
			return false;
		}
	}

	var exp = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
	var reg = ipv6addr.match(exp);
	if (reg == null) {
		getMsg($.t("msgIPv6Error"));
		return false;
	}

	return true;
}

function checkIpv6AddrPrefix(ipv6addr_prefix) {
	var ipv6addrPrefix = ipv6addr_prefix.val();
	var len = ipv6addrPrefix.length;

	if (len == 0) {
		getMsg($.t("msgIpNone"));
		return false;
	}

	for (var i=0; i<len; i++) {
		if (ipv6addrPrefix.charAt(i).charCodeAt() != 32) {//空格
			continue;
		} else {
			getMsg($.t("msgIPv6SpaceError"));
			return false;
		}
	}

	var exp = /^((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*\/(1[01][0-9]|12[0-8]|[0-9]{1,2})$/;
	var reg = ipv6addrPrefix.match(exp);
	if (reg == null) {
		getMsg($.t("msgIPv6PrefixError"));
		return false;
	}

	return true;
}

function checkNetworkServer(url) {
	if (url == "") {
		getMsg($.t("msgWrongServer"));
		return false;
	}
	var exp = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
	var reg = url.match(exp);
	if (reg == null) {
		exp =  /(([\w\-]+\.)+[\w\-]+(\/[\w\u4e00-\u9fa5\-\.\/?\@\%\!\&=\+\~\:\,]*)?)/ig;
		reg = url.match(exp);
		if (reg == null) {
			getMsg($.t("msgWrongServer"));
			return false;
		}
		return true;
	}
	return true;

}

function checkMAC(field) {
	var mac = !field.hasClass("macList") ? field.val() : field.find(":selected").text();
	var len = mac.length;
	if (len == 0) {
		getMsg($.t("msgMacError1"), 2, field);
		return false;
	} else if(len != 17) {
		getMsg($.t("msgMacError2"), 2, field);
		return false;
	}

	for (var i = 0; i < len; i++) {
		if ((i%3) == 2) {
			if (mac.charAt(i) == ':')
				continue;
		} else {
			if ((mac.charAt(i) >= '0' && mac.charAt(i) <= '9') ||
				(mac.charAt(i) >= 'a' && mac.charAt(i) <= 'f') ||
				(mac.charAt(i) >= 'A' && mac.charAt(i) <= 'F'))
				continue;
		}
		getMsg($.t("msgMacError2"), 2, field);
		return false;
	}
	return true;
}

function checkMACStr(mac) {
	var len = mac.length;
	if (len == 0) {
		getMsg($.t("msgMacError1"));
		return false;
	} else if (len != 17) {
		getMsg($.t("msgMacError2"));
		return false;
	}

	for (var i=0; i<len; i++) {
		if ((i%3) == 2) {
			if (mac.charAt(i) == ':')
				continue;
		} else {
			if ((mac.charAt(i) >= '0' && mac.charAt(i) <= '9') ||
				(mac.charAt(i) >= 'a' && mac.charAt(i) <= 'f') ||
				(mac.charAt(i) >= 'A' && mac.charAt(i) <= 'F'))
				continue;
		}
		getMsg($.t("msgMacError2"));
		return false;
	}
	return true;
}

function checkPort(field) {
	var port = field.val();

	if (checkStrnum(port) == false || port.indexOf(".") > -1 || port <= 0 || port > 65535) {
		getMsg($.t("msgPortError1"), 2, field);
		return false;
	}
	return true;
}

// 根据IP地址与子网掩码计算主机地址
function getHostAddr(ip, mask) {
	var ipAddr = ip.split(".");
	var maskAddr = mask.split(".");
	var hostAddr = new Array();
	for (var i = 0; i < ipAddr.length; i++) {
		hostAddr[i] = parseInt(ipAddr[i]) & parseInt(maskAddr[i]);
	}
	hostAddr = hostAddr.join(".");
	return hostAddr;
}

// 根据IP地址与子网掩码计算网络地址
function getNetAddr(ip, mask) {
	var ipAddr = ip.split(".");
	var maskAddr = mask.split(".");
	var netAddr = new Array();
	for (var i = 0; i < ipAddr.length; i++) {
		netAddr[i] = parseInt(ipAddr[i]) & parseInt(maskAddr[i]);
	}
	netAddr = netAddr.join(".");
	return netAddr;
}

// 根据子网掩码计算可分配的IP地址数量
function getHostNum(mask) {
	var maskAddr = mask.split(".");
	var num = 0;
	for (var i = 0; i < maskAddr.length; i++) {
		if(parseInt(maskAddr[i]) < 255){
			num = Math.pow(256,3-i) * (256 - parseInt(maskAddr[i]));
			return num;
		}
	}
}

// IP地址转换成十进制整数
function ipToNumber(ip) {
	var num = 0;
	var ipAddr = ip.split(".");
	var a = parseInt(ipAddr[0]);
	var b = parseInt(ipAddr[1]);
	var c = parseInt(ipAddr[2]);
	var d = parseInt(ipAddr[3]);
	num = a*256*256*256+b*256*256+c*256+d;
	return num;
}

// 十进制整数转换为IP地址格式
function numberToIP(num) {
	var ipAddr = new Array();
	for (var i = 0; i < 4; i++) {
		ipAddr[i] = (num << i * 8) >>> 24;
	}
	ipAddr = ipAddr.join(".");
	return ipAddr;
}

function check_network_segment(Addr1, Addr2, Mask, mode) {
	var res1 = [];
	var res2 = [];
	var i,ilen;
	var addr1 = Addr1.val();
	var addr2 = Addr2.val();
	var mask  = Mask.val();

	if (addr1 == addr2) {
		getMsg($.t("msgIpError8"), 2, Addr1);
		return false;
	}

	addr1 = addr1.split(".");
	addr2 = addr2.split(".");
	mask  = mask.split(".");
	for(i = 0,ilen = addr1.length; i < ilen ; i += 1)
	{
		res1.push(parseInt(addr1[i]) & parseInt(mask[i]));
		res2.push(parseInt(addr2[i]) & parseInt(mask[i]));
	}

	//on the same network segment
	if(res1.join(".") == res2.join("."))
	{
		return true;
	}
	//ip and ip are not on the same network segment
	else if(mode == 0)
	{
		getMsg($.t("msgIpError6"), 2, Addr2);
		return false;
	}
	else if(mode == 1)
	{
		getMsg($.t("msgIpError7"), 2, Addr2);
		return false;
	}
	else
	{
		getMsg($.t("msgDNSError1"), 2, Addr2);
		return false;
	}
}

function checkNetworkSettingStr(str) {
	var len = str.length;
	if (len == 0) {
		return false;
	}
	for (var i=0; i<len; i++) {
		if ((str.charAt(i).charCodeAt() != 44) && //,
		    (str.charAt(i).charCodeAt() != 59) && //;
		    (str.charAt(i).charCodeAt() != 32) && //空格
            (str.charAt(i).charCodeAt() != 35) && //#
            (str.charAt(i).charCodeAt() != 36) && //$
            (str.charAt(i).charCodeAt() != 38) && //&
	        (str.charAt(i).charCodeAt() != 40) && //(
			(str.charAt(i).charCodeAt() != 41) && //)
			(str.charAt(i).charCodeAt() != 42) && //*
            (str.charAt(i).charCodeAt() != 60) && //<
            (str.charAt(i).charCodeAt() != 62) && //>
            (str.charAt(i).charCodeAt() != 92) && //反斜杠
			(str.charAt(i).charCodeAt() != 10) && //换行
			(str.charAt(i).charCodeAt() != 13) &&//回车
			(str.charAt(i).charCodeAt() != 96)) {//`
			continue;
		} else {
			return false;
        }
	}
	return true;
}

function checkStrnum(str) {
	var len = str.length;
	for (var i=0; i<len; i++) {
		if ((str.charAt(i).charCodeAt() >= 48) && (str.charAt(i).charCodeAt() <= 57)) {
			continue;
		} else {
			return false;
		}
	}
	return true;
}

function checkStrPositivenum(str) {
    var len = str.length;
	for (var i=0; i<len; i++) {
		if ((str.charAt(i).charCodeAt() >= 48) && (str.charAt(i).charCodeAt() <= 57)) {
			continue;
		} else {
			return false;
		}
    }
    var num = str * 1;
    if (num <= 0 || num > 65535) {
        return false;
    }
	return true;
}

function checkStr(str) {
	var len = str.length;
	for (var i=0; i<len; i++) {
		if ( (str.charAt(i).charCodeAt() >= 32) && (str.charAt(i).charCodeAt() != 127)
			// (str.charAt(i).charCodeAt() != 44) && //,
		    // (str.charAt(i).charCodeAt() != 59) && //;
		    // (str.charAt(i).charCodeAt() != 32) && //空格
            // (str.charAt(i).charCodeAt() != 35) && //#
            // (str.charAt(i).charCodeAt() != 36) && //$
            // (str.charAt(i).charCodeAt() != 38) && //&
	        // (str.charAt(i).charCodeAt() != 40) && //(
			// (str.charAt(i).charCodeAt() != 41) && //)
			// (str.charAt(i).charCodeAt() != 42) && //*
            // (str.charAt(i).charCodeAt() != 60) && //<
            // (str.charAt(i).charCodeAt() != 62) && //>
            // (str.charAt(i).charCodeAt() != 92) && //反斜杠
			// (str.charAt(i).charCodeAt() != 10) && //换行
			// (str.charAt(i).charCodeAt() != 13) &&//回车
			// (str.charAt(i).charCodeAt() != 96)//`
			){
			continue;
		} else {
			return false;
		}
	}
	return true;
}

function htmlEscape(str) {
	return String(str)
		.replace(/&/g, '&amp;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;');
}

function checkSpecialCharacter(str){
	if (checkStr(str) != true || escape(str).indexOf("%u") != -1) {
		return false;
	}
	return true;
}

function checkSpecialCharacter2(str){
	var len =str.length;
	return true;
}

function SsidLenCheck(str, MaxSsidLen) {
	var len = 0, chineseLen = 0;
	for (var i=0, strLen=str.length; i<strLen; i++) {
		var c = str.charCodeAt(i);
		if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
			len++;
		} else {
			chineseLen++;
			len+=3;
		}
	}
	if (0 < len && len <= MaxSsidLen && chineseLen <= Math.floor(MaxSsidLen/3)) {
		return true;
	}
	return false;
}

function UTC2DST(tz, flag) {
	var sign = tz.charAt(3);
	var h = tz.slice(4,6);
	var m = tz.slice(7);
	if (flag == 1) {
		// UTC to DST
		if (sign == "+") {
			h = Number(h) - 1;
		} else {
			h = Number(h) + 1;
		}
	} else {
		// DST to UTC
		if (sign == "+") {
			h = Number(h) + 1;
		} else {
			h = Number(h) - 1;
		}
	}
	if (h <= 0) {
		h = "0"+h*(-1);
		sign = (sign == "+") ? "-" : "+";
	} else if (h < 10){
		h = "0" + h;
	}
	tz = "UTC" + sign + h + ":" + m;
	return tz;
}

function formatSeconds(value) {
    var theTime = parseInt(value);// 秒
    var theTime1 = 0;// 分
    var theTime2 = 0;// 小时
	var theTime3 = 0;// 天
    if (theTime >= 60) {
        theTime1 = parseInt(theTime / 60);
        theTime = parseInt(theTime % 60);
        if (theTime1 >= 60) {
            theTime2 = parseInt(theTime1 / 60);
            theTime1 = parseInt(theTime1 % 60);
			if (theTime2 >= 24) {
				theTime3 = parseInt(theTime2 / 24);
				theTime2 = parseInt(theTime2 % 24);
            }
        }
    }
	var result = "";
	if (theTime > 0) {
		result = theTime + $.t("lblSecond");
		// result = theTime + "s";
	}
    if (theTime1 > 0) {
        result = theTime1 + $.t("lblMinute") + " " + result;
        // result = theTime1 + "m " + result;
    }
    if (theTime2 > 0) {
        result = theTime2 + $.t("lblHour") + " " + result;
        // result = theTime2 + "h " + result;
    }
	if (theTime3 > 0) {
		if (theTime3 == 1) {
			result = theTime3 + $.t("lblDay") + " " + result;
			// result = theTime3 + "day " + result;
		} else {
			result = theTime3 + $.t("lblDays") + " " + result;
			// result = theTime3 + "days " + result;
		}
    }
    return result;
}

function toDecimal(x) {
    var f = parseFloat(x);
    if (isNaN(f)) {
        return;
    }
    f = Math.round(x * 100) / 100;
    return f;
}

function getBytes(d, s) {
    var data = toDecimal(parseInt(d) / 1024);
    var s = s || "";
    if (data < 1) {
        return toDecimal(d) + "B" + s;
    } else if (data >= 1 && data < 1024) {
        return data + "KB" + s;
    } else if (data >= 1024 && data < 1024 * 1024) {
        return toDecimal(data / 1024) + "MB" + s;
    } else {
        return toDecimal(data / (1024 * 1024)) + "GB" + s;
    }
}

function netSpeedTrans(speedStr){
	if (speedStr > 1024) {
		speedStr = (speedStr / 1024).toFixed(2) + "MB/s";
	} else {
		speedStr = speedStr + "KB/s";
	}
	return speedStr;
}

// 字符串前补零
String.prototype.padStrStart = function(len) {
	if (!this.length || this.length >= len) {
		return this;
	}
	return (Array(len).join('0') + this).slice(-len);
}

// throttle 节流: 指定时间内连续触发，实际只执行一次，传入回调函数和间隔时间
function throttle(fn, delay) {
	var flag = true;
	return function() {
		if (!flag) {
			return false;
		}
		fn();
		flag = null;
		setTimeout(function(){
			flag = true;
		}, delay);
	}
}

function checkPasswdStrength(val, target, minLen){
	var modes = 0;
	target.removeClass("mode1 mode2 mode3");
	if (val.length >= minLen) {
		if (/\d/.test(val)) modes++;
		if (/[a-z]/.test(val)) modes++;
		if (/[A-Z]/.test(val)) modes++;
		if (/\W/.test(val) || /_/.test(val)) modes++;
		if (modes < 2) {
			target.addClass("mode1");
		} else if (modes < 3) {
			target.addClass("mode2");
		} else {
			target.addClass("mode3");
		}
	}
}

function ChooseFirstSignalPng(mode, signal, name){
	var html;
	if (name == "2G") {
		if (mode == "OPEN") {
			if (signal <= 25) {
				html = '../img/2g_open_25.png';
			} else if(signal <= 50) {
				html = '../img/2g_open_50.png';
			} else if(signal <= 75) {
				html = '../img/2g_open_75.png';
			} else if(signal <= 100) {
				html = '../img/2g_open_100.png';
			}
		} else {
			if (signal <= 25) {
				html = '../img/2g_lock_25.png';
			} else if(signal <= 50) {
				html = '../img/2g_lock_50.png';
			} else if(signal <= 75) {
				html = '../img/2g_lock_75.png';
			} else if(signal <= 100) {
				html = '../img/2g_lock_100.png';
			}
		}
	} else if(name == "5G") {
		if (mode == "OPEN") {
			if (signal <= 25) {
				html = '../img/5g_open_25.png';
			} else if(signal <= 50) {
				html = '../img/5g_open_50.png';
			} else if(signal <= 75) {
				html = '../img/5g_open_75.png';
			} else if(signal <= 100) {
				html = '../img/5g_open_100.png';
			}
		} else {
			if (signal <= 25) {
				html = '../img/5g_lock_25.png';
			} else if(signal <= 50) {
				html = '../img/5g_lock_50.png';
			} else if(signal <= 75) {
				html = '../img/5g_lock_75.png';
			} else if(signal <= 100) {
				html = '../img/5g_lock_100.png';
			}
		}
	}
	return html;
}

function ChooseSecondSignalPng(signal){
	var html;

	if (signal <= 50) {
		html = '../img/ap_signal_50.png';
	} else if(signal <= 75) {
		html = '../img/ap_signal_75.png';
	} else if(signal <= 100) {
		html = '../img/ap_signal_100.png';
	}

	return html;
}

function appendNowEle(target, p) {
	if (typeof(p) == "string") {
		var pHtml = "<div><span>"+p+"</span><span class='delete'>&times;</span></div>";
		target.append(pHtml);
	} else {
		// 遍历已排序的时间段，插入到 html 中
		var dom = document.createDocumentFragment();
		p.forEach(function(v){
			// appendChild 方法的参数必须是一个节点，不能是字符串
			dom.appendChild($("<div><span>"+v+"</span><span class='delete'>&times;</span></div>")[0]);
		});
		target.html(dom);
	}
}

