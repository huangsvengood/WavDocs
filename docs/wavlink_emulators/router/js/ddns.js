$(document).ready(function(){
    getDDNS();

    $("#enableDDNS").on("change", function(){
        $(this).is(":checked") ? $("#ddnsInfo").show() : $("#ddnsInfo").hide();
    });
    $("#setDDNS").on("click", function(){
        var enable = $("#enableDDNS").val();
        var server = $("#server").val();
        var userid = $("#username").val();
        var pwd = $("#pwd").val();
        var domain = $("#domain").val();
        if (enable == 1) {
            if (userid == "") {
                getMsg($.t("msgIpNone"), 1, "#username");
                return false;
            } else if (!checkSpecialCharacter(userid)) {
                getMsg($.t("msgLoginPasswordText8"), 1, "#username");
                return false;
            } else if (!SsidLenCheck(userid, 64)) {
                getMsg($.t("msgInputLengthError"), 1, "#username");
                return false;
            }
            if (pwd == "") {
                getMsg($.t("msgIpNone"), 1, "#pwd");
                return false;
            } else if (!checkSpecialCharacter(pwd)) {
                getMsg($.t("msgLoginPasswordText8"), 1, "#pwd");
                return false;
            } else if (!SsidLenCheck(pwd, 64)) {
                getMsg($.t("msgInputLengthError"), 1, "#pwd");
                return false;
            }
            if (domain == "") {
                getMsg($.t("msgIpNone"), 1, "#domain");
                return false;
            } else if (!checkSpecialCharacter(domain)) {
                getMsg($.t("msgLoginPasswordText8"), 1, "#domain");
                return false;
            } else if (!SsidLenCheck(domain, 149)) {
                getMsg($.t("msgDDNSDomainInputLengthError"), 1, "#domain");
                return false;
            }
        }

        $("#status").text($.t("lblConnecting"));
        startLoading(3000, $.t("btnSaveName"));
    });

    function getDDNS() {
        ajax({
            url: "network.json",
            success: function(data) {
                if (data.error == 0) {
                    var ddns = data.ddns;
                    if (ddns.enable == 1) {
                        if (ddns.status == 'ok') {
                            //connection succeeded
                            $("#status").text($.t("lblOnline"));
                        } else if (ddns.status == 'wait') {
                            //Waiting for connection
                            $("#status").text($.t("lblConnecting"));
                        } else if (ddns.status == 'no') {
                            //No response from server
                            $("#status").text($.t("lblUnconnected"));
                            getMsg($.t("msgWrongDDNSno"));
                        } else if (ddns.status == 'error_addr') {
                            //error address
                            $("#status").text($.t("lblUnconnected_addr"));
                            getMsg($.t("msgWrongDDNSAddr"));
                        } else if (ddns.status == 'error_info') {
                            //error username or password
                            $("#status").text($.t("lblUnconnected_user"));
                            getMsg($.t("msgWrongDDNSInfo"));
                        }
                    } else {
                        // 不开启时，无论什么状态都是未连接
                        $("#status").text($.t("lblOffline"));
                    }
                    $("#enableDDNS").prop("checked", ddns.enable == 1).change();
                    $("#server").val(ddns.server);
                    $("#username").val(ddns.userid);
                    $("#pwd").val(ddns.pwd);
                    $("#domain").val(ddns.domain);
                } else {
                    locationUrl(data.error);
                }
            }
        });
    }
});
