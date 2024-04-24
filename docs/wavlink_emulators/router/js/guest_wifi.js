$(document).ready(function(){
    var mesh_ap = 0, touchList = "";
    getGuestInfo();

    $("#enableGuest").on("change", function(){
        $(this).is(":checked") ? $("#guestInfo").show() : $("#guestInfo").hide();
    });
    $("#guestMode").on("change", function(){
        var mode = $(this).val()*1;
        if (mode == 0) {
            $("#pwdInfo").show();
            $("#touchlinkInfo, #guestenterprise").hide();
        } else if (mode == 2) {
            $("#pwdInfo, #guestenterprise").hide();
            $("#touchlinkInfo").show();
            getTouchLinkInfo();
        } else if (mode == 1){
            $("#pwdInfo, #touchlinkInfo, #guestenterprise").hide();
        } else if (mode == 3) {
            $("#guestenterprise").show();
            $("#pwdInfo, #touchlinkInfo").hide();
        }
    });
    $("#guestPwd").on("keyup", function(){
        checkPasswdStrength($(this).val(), $(this).parent().siblings(".pwd-strength"), 8);
    });
    $("#touchTimeLimit").on("change", function(){
        $(this).val() == 0 ? $("#touchTimeInfo").hide() : $("#touchTimeInfo").show();
    });
    $("#setGuest").on("click", function(){
        var enable = $("#enableGuest").val()*1;
        var ssid = $("#guestSSID").val();
        var mode = $("#guestMode").val();
        var isolation = $("#isolation").val();
        var pwd = $("#guestPwd").val();
        var duration = $("#touchDuration").val();
        var timeLimit = $("#touchTimeLimit").val()*1;
        var expiration = (timeLimit == 0 ? 0 : $("#touchTime").val()*60);
        var radiusip = $("#guestradiusip").val();
        var radiusport = $("#guestradiusport").val();
        var radiuspwd = $("#guestradiuspwd").val();

        if (enable == 1) {
            if (!SsidLenCheck(ssid, 31)) {
                getMsg($.t("msgWifiSsidText2"), 1, "#guestSSID");
                return false;
            } else if (!checkStr(ssid)) {
                getMsg($.t("msgWifiSsidText1"), 1, "#guestSSID");
                return false;
            }

            if (mode == 0 && enable == 1) {
                if (!pwd.length) {
                    getMsg($.t("msgLoginPasswordText4"), 1, "#guestPwd");
                    return false;
                } else if (pwd.length > 63 || pwd.length < 8) {
                    getMsg($.t("msgWifiPasswordText2"), 1, "#guestPwd");
                    return false;
                } else if (!checkSpecialCharacter(pwd)) {
                    getMsg($.t("msgLoginPasswordText8"), 1, "#guestPwd");
                    return false;
                }
            } else if (mode == 3) {
                if (!checkIP($("#guestradiusip"), 1)) {
                    return false;
                }
                if (!checkPort($("#guestradiusport"))) {
                    return false;
                }
                if (!radiuspwd.length) {
                    getMsg($.t("msgLoginPasswordText4"), 1, "#guestradiuspwd");
                    return false;
                } else if (radiuspwd.length > 64 || radiuspwd.length < 0) {
                    getMsg($.t("msgWifiPasswordText3"), 1, "#guestradiuspwd");
                    return false;
                } else if (!checkSpecialCharacter(radiuspwd)) {
                    getMsg($.t("msgLoginPasswordText8"), 1, "#guestradiuspwd");
                    return false;
                }
            }
        }
        startLoading(3000, $.t("btnSaveName"));
    });

    function getTouchLinkInfo(){
        ajax({
            url: "terminal.json",
            success: function(data){
                var link = (touchList.mac.length ? touchList.mac.split(";") : []);
                var dom = document.createDocumentFragment();
                if (link != null && link.length > 0) {
                    link.forEach(function(v) {
                        if (v.length == 17) {
                            var status = "Offline";
                            if (mesh_ap != 1) {
                                var flag = data.terminals.some(function(m){
                                    if (m.mac.toUpperCase() == v.toUpperCase()) {
                                        status = (m.flag.charCodeAt(1) == 84 ? "Online" : "Offline");
                                        return true;
                                    }
                                });
                            }
                            dom.appendChild($("<tr><td>"+v+"</td>"+(mesh_ap != 1 ? "<td>"+status+"</td>" : "")+
                                            "<td><img class='icon_del' src='../img/delete.png'></td></tr>")[0]);
                        }
                    });
                }
                $("#guestTouchLinkList > tbody").html(dom);
            }
        });
    }

    function getGuestInfo() {
        ajax({
            url: "wifi.json",
            success: function(data) {
                if (data.error == 0) {
                    var guest = data.guest;
                    touchList = data.touchlink_list;
                    $("#enableGuest").prop("checked", (guest.enable == 1)).change();
                    $("#guestSSID").val(guest.ssid);
                    $("#guestMode").val(guest.mode).change();
                    $("#isolation").val(guest.ap_isolation);
                    $("#guestPwd").val(guest.passwd).keyup();
                    $("#guestradiusip").val(guest.radiusip);
                    $("#guestradiusport").val(guest.radiusport);
                    $("#guestradiuspwd").val(guest.radiuspwd);

                    if (guest.ap_isolation == 2) {
                        //mesh ap mode
                        mesh_ap = 1;
                        $("#isolationInfo, #guestTouchLinkList th[data-i18n='lblStatus']").hide();
                    }
                    if (guest.touch_support == 0) {
                        $(".touchLinkHelp").hide();
                        $("#guestMode").find("[value=2]").remove();
                    } else {
                        $("#touchDuration").val(guest.touch_duration_time);
                        $("#touchTimeLimit").val(guest.touch_expiration_time ? 1 : 0).change();
                        $("#touchTime").val((guest.touch_expiration_time/60 == 0) ? 1 : guest.touch_expiration_time/60);
                        $("#guestTouchLinkList > tbody").on("click", "img", function () {
                            var thisTr = $(this).parents("tr");
                            getMsg($.t("msgTouchLinkListText"));
                            thisTr.remove();
                        });
                    }
                } else {
                    locationUrl(data.error);
                }
            }
        });
    }
});
