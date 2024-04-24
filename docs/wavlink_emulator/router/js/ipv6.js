$(document).ready(function(){
    var prefix;
    getIPv6Info();
    $("#enableIPv6").on("change", function(){
        $(this).is(":checked") ? $("#ipv6Info").show() : $("#ipv6Info").hide();
    });
    $("#wanObtainMethod").on("change", function(){
        $(this).val() == 2 ? $("#staticInfo").show() : $("#staticInfo").hide();
    });
    $("#ipv6AddrPreResBtn").on({
        "click": function(){
            $(this).addClass("loading");
        },
        "animationend": function(){
            $(this).removeClass("loading");
            $("#ipv6AddrPrefix").val(prefix);
            $("#lanIPv6AddrPrefix").val(prefix.slice(0, prefix.indexOf("/")));
        }
    });
    $("#setIPv6").on("click",function(){
        var enable = $("#enableIPv6").val();
        var wanObtainMethod = $("#wanObtainMethod").val();
        var ipv6IP = $("#ipv6IP").val();
        var prefixLen = $("#prefixLength").val();
        var ipv6Gateway = $("#ipv6Gateway").val();
        var dns1 = $("#DNS1").val();
        var dns2 = $("#DNS2").val();
        var lanObtainMethod = $("#lanObtainMethod").val();
        var lanIPv6AddrPrefix = $("#lanIPv6AddrPrefix").val();
        var lanPrefixLen = $("#lanPrefixLength").text();
        $("#lanIPv6Addr").val(lanIPv6AddrPrefix+lanPrefixLen);

        if (enable == 1) {
            if (wanObtainMethod == 2) {
                if (!checkIpv6Addr($("#ipv6IP")) || !checkIpv6Addr($("#ipv6Gateway"))
                    || !checkIpv6Addr($("#DNS1")) || !checkIpv6Addr($("#DNS2"))) {
                    return false;
                }

                if (!prefixLen.length || !checkStrnum(prefixLen) || prefixLen*1 <= 0 || prefixLen*1 > 128) {
                    getMsg($.t("msgPrefixLengthError"), 2, "#prefixLength");
                    return false;
                }
            }

            if (!checkIpv6AddrPrefix($("#lanIPv6Addr"))) {
                return false;
            }
        }

        setProgressBar(500, $.t("msgWaiting"), $.t("msgRefresh"));
    });

    function getIPv6Info() {
        ajax({
            url: "network.json",
            success: function(data) {
                if (data.error == 0) {
                    var ipv6 = data.ipv6;
                    prefix = ipv6.prefix;
                    $("#wanObtainMethod").val(ipv6.wanObtainMethod).change();
                    $("#ipv6IP").val(ipv6.ip);
                    $("#prefixLength").val(ipv6.prefixLength);
                    $("#ipv6Gateway").val(ipv6.gateway);
                    $("#DNS1").val(ipv6.DNS0);
                    $("#DNS2").val(ipv6.DNS1);
                    $("#lanObtainMethod").val(ipv6.lanObtainMethod);
                    $("#lanIPv6Addr").val(prefix);
                    $("#lanIPv6AddrPrefix").val(prefix.slice(0, prefix.indexOf("/")));
                    $("#enableIPv6").prop("checked", (ipv6.enable == 1)).change();
                } else {
                    locationUrl(data.error);
                }
            }
        });
    }
});
