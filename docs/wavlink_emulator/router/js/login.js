$(document).ready(function () {
	window.sessionStorage.removeItem("status");
	if (!isMobile) {
		$('[data-toggle="popover"]').popover();
	}
	var init = window.sessionStorage.getItem("init") || 0;
	var Request = new QueryString();   //Request["xxxx"]
	var loc = document.location.href;
	var n1 = loc.indexOf("reject=");
	var ob = decodeURI(loc.substring(n1 + 7));
	setLanguage(ob === "timeout" ? 1 : 0);
	getStatus();

	// select language
	$("#language ~ .dropdown-menu").on("click", "li", function () {
		var lang = $(this).attr("data-value");
		$.cookie("lang_sel", true);
		applyLanguage(lang);
	});

	function QueryString() {
		var name, value;
		var str = location.href;
		var num = str.indexOf("?");
		if (num === -1) {
			return "";
		}
		str = str.substring(num+1);
		var arrtmp = str.split("&");
		for(var i=0; i < arrtmp.length; i++){
			num = arrtmp[i].indexOf("=");
			if(num > 0){
				name = arrtmp[i].substring(0,num);
				value = arrtmp[i].substring(num+1);
				this[name] = value;
			}
		}
	}

	function getStatus() {
		ajax({
			url: "system.json",
			success: function(data) {
				if (data.error == 0) {
					var sys_info = data.sys;
					window.sessionStorage.setItem("MeshMode", sys_info.MeshMode);
					window.sessionStorage.setItem("opMode", sys_info.opMode);
					if (sys_info.brand != "STANDARD") {
						$("#download-app").show();
					} else {
						document.title = "ROUTER";
						$("#download-app").hide();
						$("#p-logo").attr("src", "./img/logo1.png").show();
					}
					if (!sys_info.init_status && init == 0) {
						$("#box2").show();
						$("#testBtn").on("click", function () {
							userLogin(0);
						});
					} else {
						$("#box1").show();
						$("#password, #loginBtn").keyup(function (e) {
							if (e.keyCode == 13 && !$("#loginBtn").is(":disabled")) {
								$("#loginBtn").click();
							}
						});
						$("#loginBtn").on("click", function () {
							var str = $("#password").val();
							if (!str.length) {
								getMsg($.t("msgLoginPasswordText4"), (isMobile ? 3 : 2), "#password");
								return false;
							}
							userLogin(1, str);
						});
						var errorTime = window.sessionStorage.getItem("time") || 0;
						errorTime*1 >= 5 ? countTime(1) : $("#loginBtn").attr("disabled", false);
					}
				} else {
					locationUrl(data.error);
				}
			}
		});
	}

	function userLogin(flag, str) {
		if (flag) {
			$("#loginBtn").text($.t("msgLoginPasswordText11")).attr("disabled", true);
			if (str != window.sessionStorage.getItem("token")) {
				var errorTime = window.sessionStorage.getItem("time");
				!errorTime ? errorTime = 1 : errorTime++;
				$("#password").val("").focus();
				// Determine if the password is wrong 5 times
				window.sessionStorage.setItem("time", errorTime);
				if (errorTime >= 5) {
					window.sessionStorage.setItem("timeFlag", (new Date()).getTime());
					countTime(0);
					return false;
				}
				getMsg($.t("msgLoginError3", {count: 5-errorTime}), (isMobile ? 3 : 2), "#password");
				$("#loginBtn").text($.t("msgLoginText2"));
				setTimeout(function(){
					$("#loginBtn").text($.t("lblLogin")).attr("disabled", false);
				}, 500);
				return false;
			}
		} else {
			window.sessionStorage.setItem("token", "admin");
		}

		window.sessionStorage.setItem("status", 1);
		window.sessionStorage.removeItem("time");
		window.sessionStorage.removeItem("timeFlag");
		toPage(init == 0 ? "wizard" : "index");
	}

	function countTime(flag) {
		var time = 30;
		if (flag) {
			var dif = Math.round(((new Date()).getTime() - window.sessionStorage.getItem("timeFlag")) / 1000);
			time = dif > time ? 0 : time - dif;
		}
		var err = setInterval(function(){
			$("#loginBtn").text($.t("msgLoginError4", {count: time}));
			if (time == 0) {
				clearInterval(err);
				$("#loginBtn").text($.t("lblLogin")).attr("disabled", false);
			}
			time--;
		}, 1000);
	}

	function setLanguage(flag) {
		var lang = $.cookie("i18next");
		var url_array = loc.split("/");
		var tmp = "";
		var langList = {
			"en_US": "EN",
			"zh_CN": "ZH",
			"zh_TW": "TW",
			"es_ES": "ES",
			"ja_JP": "JA",
			"de_DE": "DE",
			"fr_FR": "FR",
			"it_IT": "IT"
		};

		// when user didn't select language,default is navigator.language
		if ($.cookie("lang_sel") != "true" || !lang) {
			var sysLanguage = navigator.systemLanguage ? navigator.systemLanguage : navigator.language;
			tmp = sysLanguage.toUpperCase();

		}

		if (url_array[3].indexOf("lang") >= 0) {
			tmp = Request["lang"];
		}

		if (tmp != "") {
			Object.keys(langList).some(function(v) {
				if (tmp.indexOf(langList[v]) >= 0) {
					lang = v.replace(/1/g, "");
					return true;
				}
			});
		}
		lang = lang || "en_US";
		applyLanguage(lang);
	}
});
