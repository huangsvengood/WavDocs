$(document).ready(function() {
    if (typeof($.loadPage) != "function") {
        // define loadPage function
        $.loadPage = function(parent, target) {
            if (timer.length) {
                timer.forEach(function(t){
                    clearInterval(t);
                });
                timer = [];
            }
            $(parent).load(target, function(res, status, xhr){
                $(this).find("[data-i18n]").i18n();
                $("[data-i18n='lblTableFooter']").text($.t("lblTableFooter", {
                    tPageStart: 0,
                    tPageEnd: 0,
                    tTotal: 0
                }));
                if ($(".select").length) {
                    $(".select > .dropdown-menu").on("click", "li", function(){
                        var v = $(this).attr("data-value");
                        var t = $(this).text();
                        $(this).parent().siblings(".dropdown-toggle").text(t);
                        $(this).parent().siblings("input[type='hidden']").val(v);
                        $(this).parent().siblings("input[type='hidden']").trigger("changed", v);
                    });
                    $(".select > input").on("change", function(){
                        var v = $(this).val();
                        var t = $(this).siblings(".dropdown-menu").find("[data-value="+v+"]").text();
                        $(this).next().text(t);
                    });
                }
                if ($(".modal").length) {
                    $(".modal").modal({
                        backdrop: "static",
                        keyboard: false,
                        show: false
                    });
                }
                if ($(".switch").length) {
                    $(".switch-checkbox").on("change", function(){
                        $(this).val($(this).is(":checked") ? 1 : 0);
                    });
                }
                if ($(".selectFile").length) {
                    $(".selectFile").on("click", function(){
                        $(this).siblings(":file").click();
                    });
                    $(":file").on("change", function(e){
                        var fileMsg = e.currentTarget.files;
                        $(this).siblings(".selectFile").val(fileMsg[0] ? fileMsg[0].name : '');
                    });
                }
                if ($(".eyes").length) {
                    $(".eyes").on("click", function(){
                        var input = $(this).siblings("input");
                        $(this).attr("src", function(i, v){
                            var flag = (v.indexOf("_off") != -1);
                            input.attr("type", flag ? "text" : "password");
                            return flag ? v.replace("_off", "_on") : v.replace("_on", "_off");
                        });
                    });
                }
                if ($("#vlanID").length) {
                    $("#vlanID").on("input", function() {
                        var value = $(this).val();
                        var newValue = value.replace(/[^0-9]/g, '');
                        $(this).val(newValue);
                    });
                }
            });
        }
    }
    ajax({
        url: "system.json",
        success: function(data) {
            if (data.error == 0) {
                if (data.sys.country != "CN") {
                    $("#w_wav").attr("href", $("#w_wav").attr("href").replace("zh_cn", "en_us"));
                }
                opMode = data.sys.opMode;
                switch(opMode) {
                    case 0:
                        if (data.sys.model.includes("AI")) {
                            $(".header .nav > li:eq(4)").show();
                        }
                        $(".header .nav > li:eq(2), .header .nav > li:eq(3)").show();
                        break;
                    case 2:
                    case 3:
                        $("[href='terminal.html']").attr("href", "repeaterterminal.html").parent().show();
                        break;
                }
            } else {
                locationUrl(data.error);
            }
        }
    });
    $("#header-menu").on("click", "a", function(e){
        e.preventDefault();
        var target = $(this), page = target.attr("href");
        var pageToCache = page;
        $("#header-menu").find(".active").removeClass("active").find("img").attr("src", function(i,v){return v.replace("_on", "_off")});
        target.parent().addClass("active").find("img").attr("src", function(i,v){return v.replace("_off", "_on")});
        if (page == "setting.html") {
            $("body > .container").removeClass("height-auto");
            var targetPage = window.sessionStorage.getItem("toPage");
            if (targetPage) {
                pageToCache = targetPage;
                window.sessionStorage.removeItem("toPage");
            } else {
                pageToCache = cachedPage.indexOf("/setting/") != -1 ? cachedPage : page;
            }
        } else {
            $("body > .container").addClass("height-auto");
        }
        window.sessionStorage.setItem("page", pageToCache);
        $.loadPage("#content", page);
    });
    var cachedPage = window.sessionStorage.getItem("page") || "main.html";
    var targetPage = cachedPage.indexOf("/setting/") != -1 ? "setting.html" : cachedPage;
    $("a[href='"+targetPage+"']")[0].click();
});
