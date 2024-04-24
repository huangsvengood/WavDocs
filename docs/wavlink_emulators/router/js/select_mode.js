$(document).ready(function(){
    var CountryCode = "", ScanTime = 0, oldPPPOE;
    var ApSelectedInfo = {},  WifiInfo = {};
    getDeviceMode();
    getWanVlanInfo();

    $("[id^=authmode]").on("change", function(){
        if ($(this).attr("id") == "authmoderepcon") {
            $(this).val() == 0 ? $("#repconnectpwd").hide() : $("#repconnectpwd").show();
        } else {
            if ((isMobile && isMobilePage)) {
                $(this).val() == 0 ? $(this).next().hide().next().hide() : $(this).next().show().next().show();
            } else {
                var target = $(this).parents(".form-group").next();
                $(this).val() == 0 ? target.hide() : target.show();
            }
        }
    });

    $("[id^=password]").on("keyup", function(){
        checkPasswdStrength($(this).val(), $(this).parent().siblings(".pwd-strength"), 8);
    });

    $("#deviceMode").on("change", function(){
        var mode = $(this).val()*1;
        if (mode == 1) {
            $("#apSetting").hide();
            $("#routerSetting").show();
            (opMode != 2 && opMode != 3) ? $("#WizWanStatus").show() : $("#WizWanStatus").hide();
            $("#setBtn").attr("data-i18n", "btnSaveName").text($.t("btnSaveName"));
        } else if (mode == 2) {
            $("#routerSetting").hide();
            $("#apSetting").show();
            (opMode != 2 && opMode != 3) ? $("#WizWanStatus").show() : $("#WizWanStatus").hide();
            $("#setBtn").attr("data-i18n", "btnSaveName").text($.t("btnSaveName"));
        } else if (mode == 5) {
            $("#apSetting, #routerSetting, #WizWanStatus").hide();
            $("#setBtn").attr("data-i18n", "btnNextName").text($.t("btnNextName"));
        }
    });

    $("#wanMode").on("change", function(){
        var mode = $(this).val()*1;
        if (mode == 1) {
            $("#pppoeInfo, #staticInfo").hide();
        } else if (mode == 2) {
            $("#staticInfo").hide();
            $("#pppoeInfo").show();
        } else if (mode == 3) {
            $("#pppoeInfo").hide();
            $("#staticInfo").show();
        }
    });

    $("#showOtNPPPOE").on("click", "a", function(e){
        e.preventDefault();
        $("#item1, #otnpppoe_close").show();
        $("#item2, #item3, #item4").hide();
        $("#OtNPPPOE").modal("show");
    });

    $("#item1Button, #item3Button1").on("click", function(){
        $("#otnpppoe_close, #item1, #item3, #item4").hide();
        $("#item2").show();
        setTimeout(function(old){
            if (old.pppoe_userlen > 0) {
                $("#pppoeUser").val(old.pppoe_user);
                $("#pppoePwd").val(old.pppoe_passwd);
                $("#item1, #item2, #item3").hide();
                $("#item4, #otnpppoe_close").show();
            } else {
                $("#item1, #item2, #item4").hide();
                $("#item3, #otnpppoe_close").show();
            }
        }, 15000, oldPPPOE);
    });

    $("#item3Button2, #item4Button").on("click", function(){
        $("#otnpppoe_close").show();
        $("#item1, #item2, #item3, #item4").hide();
        $("#OtNPPPOE").modal("hide");
    });

    $("#enableVlan").on("change", function(){
        $(this).is(":checked") ? $("#vlanIdInfo").show() : $("#vlanIdInfo").hide();
    });

    $("#repautoradio").on({
        "click": function(){
            $("#repautoradio").prop("checked", true);
            $("#repmanualradio").prop("checked", false);
        },
        "change": function(){
            if ($(this).is(":checked")) {
                $("#repconnectinfo, #repconnectmanualinfo, #scanwifitips").hide();
                $("#replist, #repscandynamic, #repRScan, #repRScanButton").show();
                $("#RepScanList").html("");
                $("#repmanualradio, #repRScanButton, #repNextButton").prop("disabled", true);
                $("#repscantime").text($.t("lblScanning")+" "+(ScanTime)+"s");
                setTimeout(getwifilist, ScanTime*1000);
            }
        }
    });

    $("#repmanualradio").on({
        "click": function(){
            $("#repmanualradio").prop("checked", true);
            $("#repautoradio").prop("checked", false);
        },
        "change": function(){
            for(let key in ApSelectedInfo){
                ApSelectedInfo[key] = "";
            }
            $("#replisttitle, #replist, #repRScan, #repRScanButton").hide();
            $("#repconnectinfo, #repconnectmanualinfo").show();
            $("#authmoderepcon, #authmode2g, #authmode5g, #repconnectchmode").change();
        }
    });

    $("#repconnectchmode").on("change", function(){
        $(this).val() == 0 ? $("#repmanualchinfo").hide() : ($("#repmanualchinfo").show(), $("#repmanualch").focus());
    });

    $("#repRScanButton").on("click", function(){
        $("#replist, #repscandynamic").show();
        $("#replisttitle, #scanwifitips").hide();
        $("#RepScanList").html("");
        $("#repmanualradio, #repRScanButton, #repNextButton").prop("disabled", true);
        $("#repscantime").text($.t("lblScanning")+" "+(ScanTime)+"s");

        setTimeout(getwifilist, ScanTime*1000);
    });

    $("#repNextButton").on("click", function(){
        if ($(this).attr("data-i18n") == "btnNextName"){
            if ($("#repautoradio").is(":checked")) {
                if (ApSelectedInfo.channel == undefined || ApSelectedInfo.channel == "") {
                    getMsg($.t("msgSelectRepWifi"), 1, "#repprompt");
                    return false;
                }
            }

            $("#replisttitle, #replist, #repRScan, #repRScanButton").hide();
            $("#repconnectinfo").show();

            if ($("#repautoradio").is(":checked")) {
                $("#repradio").hide();
                $("#repinfo").show();
                $("#repconnectssid").val(ApSelectedInfo.ssid).attr("disabled", true);

                $("#ssid2g").val(ApSelectedInfo.ssid+"_EXT2.4G");
                $("#ssid5g").val(ApSelectedInfo.ssid+"_EXT5G");
                $("#authmode2g, #authmode5g").change();

                ApSelectedInfo.mode == "OPEN" ? $("#repconnectpwd").hide() : $("#repconnectpwd").show();
            } else if ($("#repmanualradio").is(":checked")) {
                ApSelectedInfo.ssid = $("#repconnectssid").val();
                if (SsidLenCheck(ApSelectedInfo.ssid, 31) != true) {
                    getMsg($.t("msgWifiSsidText2"), 1, "#repconnectssid");
                    return false;
                }

                ApSelectedInfo.frequency = $("#repconnectfrequency").val();

                if($("#repconnectchmode").val() == 1) {
                    ApSelectedInfo.channel = $("#repmanualch").val();
                    if (ApSelectedInfo.frequency == 0) {
                        if (Number(ApSelectedInfo.channel) < 1 || Number(ApSelectedInfo.channel) > 13) {
                            getMsg($.t("msgInput2GWifiChannel"), 1, "#repmanualch");
                            return false;
                        }
                    } else {
                        if (Number(ApSelectedInfo.channel) < 36 || Number(ApSelectedInfo.channel) > 165) {
                            getMsg($.t("msgInput5GWifiChannel"), 1, "#repmanualch");
                            return false;
                        }
                    }
                } else {
                    ApSelectedInfo.channel = 0;
                }

                if ($("#authmoderepcon").val() == 0) {
                    ApSelectedInfo.mode = "OPEN";
                    ApSelectedInfo.security = "NONE";
                } else {
                    if ($("#authmoderepcon").val() == 1) {
                        ApSelectedInfo.mode = "WPAPSK";
                        ApSelectedInfo.security = "TKIP";
                    } else if ($("#authmoderepcon").val() == 2) {
                        ApSelectedInfo.mode = "WPA2PSK";
                        ApSelectedInfo.security = "AES";
                    }

                    ApSelectedInfo.pwd = $("#passwordrepcon").val();
                    if (!ApSelectedInfo.pwd.length) {
                        getMsg($.t("msgLoginPasswordText4"), 1, "#passwordrepcon");
                        return false;
                    } else if (ApSelectedInfo.pwd.length > 63 || ApSelectedInfo.pwd.length < 8) {
                        getMsg($.t("msgWifiPasswordText2"), 1, "#passwordrepcon");
                        return false;
                    } else if (!checkSpecialCharacter(ApSelectedInfo.pwd)) {
                        getMsg($.t("msgLoginPasswordText8"), 1, "#passwordrepcon");
                        return false;
                    }
                }

                ApSelectedInfo.bssid = "00:00:00:00:00:00";
                ApSelectedInfo.signal = 0;

                $("#repradio, #repconnectinfo").hide();
                $("#repinfo").show();
            }
            $("#repNext").attr("class", "col-xs-4 col-xs-offset-4");
            $(this).attr("data-i18n", "btnSaveName").text($.t("btnSaveName"));
        } else if($(this).attr("data-i18n") == "btnSaveName"){
            if ($("#repautoradio").is(":checked")) {
                if (SsidLenCheck(ApSelectedInfo.ssid, 31) != true) {
                    getMsg($.t("msgWifiSsidText2"), 1, "#repconnectssid");
                    return false;
                }

                if (ApSelectedInfo.mode != "OPEN") {
                    ApSelectedInfo.pwd = $("#passwordrepcon").val();
                    if (!ApSelectedInfo.pwd.length) {
                        getMsg($.t("msgLoginPasswordText4"), 1, "#passwordrepcon");
                        return false;
                    } else if (ApSelectedInfo.pwd.length > 63 || ApSelectedInfo.pwd.length < 8) {
                        getMsg($.t("msgWifiPasswordText2"), 1, "#passwordrepcon");
                        return false;
                    } else if (!checkSpecialCharacter(ApSelectedInfo.pwd)) {
                        getMsg($.t("msgLoginPasswordText8"), 1, "#passwordrepcon");
                        return false;
                    }
                }
            }
            ApSelectedInfo.repmode = $("#repconnectmode").val();
            if (ApSelectedInfo.frequency == 0) {
                WifiInfo.channel2g = ApSelectedInfo.channel;
                WifiInfo.channel5g = 0;
            } else {
                WifiInfo.channel2g = 0;
                WifiInfo.channel5g = ApSelectedInfo.channel;
            }

            var region_cur = BandWidthList[CountryCode];
            var HighBandWidthList = HighBandWidth5[region_cur].replace(/ /g, ",");
            WifiInfo.skiplist = Region5.split(HighBandWidthList).join('');
            if(WifiInfo.skiplist[0] == ',') {
                WifiInfo.skiplist = WifiInfo.skiplist.substr(1);
            }
            WifiInfo.skiplist = WifiInfo.skiplist.replace(/,/g, ";") + ";";

            WifiInfo.ssid2g = $("#ssid2g").val();
            if (SsidLenCheck(WifiInfo.ssid2g, 31) != true) {
                getMsg($.t("msgWifiSsidText2"), 1, "#ssid2g");
                return false;
            }

            WifiInfo.auth2g = $("#authmode2g").val();
            if (WifiInfo.auth2g != 0) {
                WifiInfo.pwd2g = $("#password2g").val();
                if (!WifiInfo.pwd2g.length) {
                    getMsg($.t("msgLoginPasswordText4"), 1, "#password2g");
                    return false;
                } else if (WifiInfo.pwd2g.length > 63 || WifiInfo.pwd2g.length < 8) {
                    getMsg($.t("msgWifiPasswordText2"), 1, "#password2g");
                    return false;
                } else if (!checkSpecialCharacter(WifiInfo.pwd2g)) {
                    getMsg($.t("msgLoginPasswordText8"), 1, "#password2g");
                    return false;
                }
            }

            WifiInfo.ssid5g = $("#ssid5g").val();
            if (SsidLenCheck(WifiInfo.ssid5g, 31) != true) {
                getMsg($.t("msgWifiSsidText2"), 1, "#ssid5g");
                return false;
            }

            WifiInfo.auth5g = $("#authmode5g").val();
            if (WifiInfo.auth5g != 0) {
                WifiInfo.pwd5g = $("#password5g").val();
                if (!WifiInfo.pwd5g.length) {
                    getMsg($.t("msgLoginPasswordText4"), 1, "#password5g");
                    return false;
                } else if (WifiInfo.pwd5g.length > 63 || WifiInfo.pwd5g.length < 8) {
                    getMsg($.t("msgWifiPasswordText2"), 1, "#password5g");
                    return false;
                } else if (!checkSpecialCharacter(WifiInfo.pwd5g)) {
                    getMsg($.t("msgLoginPasswordText8"), 1, "#password5g");
                    return false;
                }
            }
            $("#modesetvalue").val(1).attr({"apselectedinfo": JSON.stringify(ApSelectedInfo), "wifiinfo": JSON.stringify(WifiInfo)});
            $("#selectmodeMsg").text($.t("msgRepeaterModeTips"));
            $("#selectmodeModal").modal("show");
        }
    });

    $(".table").on("click", ".selectThisTr", function(){
        ApSelectedInfo.channel = $(this).attr("channel");
        ApSelectedInfo.ssid = $(this).attr("ssid");
        ApSelectedInfo.bssid = $(this).attr("bssid");
        ApSelectedInfo.mode = $(this).attr("mode");
        ApSelectedInfo.security = $(this).attr("security");
        ApSelectedInfo.signal = $(this).attr("signal");
        ApSelectedInfo.frequency = $(this).attr("frequency");
        $(this).parents(".table").find(".selectThisTd").prop("checked", false);
        $(this).find(".selectThisTd").prop("checked", true);
    });

    $("#setBtn").on("click", function(){
        var deviceMode = $("#deviceMode").val()*1;
        var opt = {};
        if($("#wanMode").val()*1==0) {
            getMsg($.t("msgWanModeError"), 1, "#wanMode");
            return false;
        }
        if (deviceMode == -1) {
            getMsg($.t("lblModeSeclectionText"), 1, "#deviceMode");
            return false;
        } else if (deviceMode == 1) {
            var wanMode = $("#wanMode").val()*1;
            opt.wanMode = wanMode;
            if (wanMode == 2) {
                var username = $("#pppoeUser").val();
                var password = $("#pppoePwd").val();
                var server = $("#pppoeServer").val();
                if (!username.length) {
                    getMsg($.t("msgIpNone"), 1, "#pppoeUser");
                    return false;
                } else if (!checkSpecialCharacter(username)) {
                    getMsg($.t("msgLoginPasswordText8"), 1, "#pppoeUser");
                    return false;
                } else if (!SsidLenCheck(username, 64)) {
                    getMsg($.t("msgInputLengthError"), 1, "#pppoeUser");
                    return false;
                }
                if (!password.length) {
                    getMsg($.t("msgIpNone"), 1, "#pppoePwd");
                    return false;
                } else if (!checkSpecialCharacter(password)) {
                    getMsg($.t("msgLoginPasswordText8"), 1, "#pppoePwd");
                    return false;
                } else if (!SsidLenCheck(password, 64)) {
                    getMsg($.t("msgInputLengthError"), 1, "#pppoePwd");
                    return false;
                }
                opt.user = encodeURIComponent(username);
                opt.pwd = encodeURIComponent(password);
                opt.server = encodeURIComponent(server);
            } else if (wanMode == 3) {
                var ip = $("#wanIP").val();
                var mask = $("#wanMask").val();
                var gw = $("#wanGateway").val();
                var dns1 = $("#wanDNS1").val();
                var dns2 = $("#wanDNS2").val();

                if (!checkIP($("#wanIP"), 1) || !checkIP($("#wanMask"), 0)
                    || !checkIP($("#wanGateway"), 3) || !checkIP($("#wanDNS1"), 2) || !checkIP($("#wanDNS2"), 2)
                    || !check_network_segment($("#wanIP"), $("#wanGateway"), $("#wanMask"), 1)) {
                    return false;
                }
                if (dns1 == "0.0.0.0" || dns2 == "0.0.0.0" ) {
                    getMsg($.t("msgDNSError2"));
                    return false;
                }
                if (ip.split(".")[3]*1 == 0 || ip.split(".")[3]*1 == 255) {
                    getMsg($.t("msgIpError5"), 1, $("#wanIP"));
                    return false;
                }
                opt.ip = ip;
                opt.mask = mask;
                opt.gw = gw;
                opt.dns1 = dns1;
                opt.dns2 = dns2;
            }
            var enableVlan = $("#enableVlan").val()*1;
            opt.enableVlan = enableVlan;
            if (enableVlan) {
                var vlanID = $("#vlanID").val();
                if ((!vlanID.length ||(!checkStrnum(vlanID) || vlanID*1 < -1 || vlanID == 1 || vlanID*1 > 4094)) && enableVlan) {
                    getMsg($.t("lblWrongIntnetID"), 1, "#vlanID");
                    return false;
                }
                opt.vlanID = vlanID*1;
            }
            opt.enableWcloud = $("#enableCloudApp").val()*1 ? "on" : "off";
            opt.enableMeshAdapt = $("#enableMeshAutoAdapt").val()*1;

            setProgressBar(100, $.t("msgWaiting"), $.t("msgRefresh"));
        } else if (deviceMode == 2) {
            $("#modesetvalue").val(0).attr("apdhcp", $("#enableApDHCP").val()*1);
            $("#selectmodeModal").modal("show");
        } else if (deviceMode == 5) {
            $("#setBtn, #modeSelect, #deviceMode").hide();
            $("#RepSetting").show();
            $("#repautoradio").prop("checked", true).change();
        }
    });

    $("#selectmodeCancel").on("click", function(){
        $("#selectmodeModal").modal("hide");
    });

    $("#selectmodeConfirm").on("click", function(){
        $("#selectmodeModal").modal("hide");
        setProgressBar(100, $.t("msgWaiting"), $.t("msgRefresh"));
    });

    function getDeviceMode() {
        ajax({
            url: "system.json",
            success: function(data) {
                var sys = data.sys, wcloud = data.wcloud;
                if (sys.WizAp == 0) {
                    $("#deviceMode").find("option[value=4]").remove();
                }

                if (sys.WizMeshBridge == 0) {
                    $("#deviceMode").find("option[value=2]").remove();
                }

                $("#deviceMode").find("option[value=0]").remove();

                if (sys.WizEasymeshAgent == 0) {
                    $("#deviceMode").find("option[value=3]").remove();
                }

                sys.Wizrep == 0 ? $("#deviceMode").find("option[value=5]").remove(): $("#Repeaterhelp").show();

                if (sys.Switch_PPPOE == 1) {
                    $("#showOtNPPPOE").show();
                }

                if (sys.brand == "STANDARD") {
                    $("#APNotemsg").text($.t("lblWizAPNoteStandardmsg"));
                    $("#RepBridgemsg").text($.t("msgRepeaterBridgeStandard"));
                }

                CountryCode = data.country;
                if (CountryCode == "CN" || CountryCode == "US") {
                    ScanTime = 48;
                } else if (CountryCode == "EU") {
                    ScanTime = 55;
                } else {
                    ScanTime = 60;
                }
            }
        });
    }

    function getWanVlanInfo() {
        ajax({
            url: "network.json",
            success: function(data) {
                if (data.error == 0) {
                    var wan_conf = data.wan, vlan_conf = data.vlan, wcloud = data.wcloud;
                    oldPPPOE = wan_conf.oldPPPOE;
                    $("#wanMode").val((wan_conf.mode > 3 || wan_conf.mode == undefined) ? 1 : wan_conf.mode).change();
                    $("#enableApDHCP").prop("checked", (wan_conf.apsmartdhcp == 1)).change();

                    if (wan_conf.mode == 2) {
                        $("#pppoeUser").val(wan_conf.user);
                        $("#pppoePwd").val(wan_conf.passwd);
                        $("#pppoeServer, #serverVal").val(wan_conf.server);
                        $("#sec_wan_mode").val(wan_conf.second_wan_type);
                    } else if (wan_conf.mode == 3) {
                        $("#wanIP").val(wan_conf.ip);
                        $("#wanMask").val(wan_conf.mask);
                        $("#wanGateway").val(wan_conf.gateway);
                        $("#wanDNS1").val(wan_conf.DNS0);
                        $("#wanDNS2").val(wan_conf.DNS1);
                    }

                    $("#deviceMode").val((wan_conf.device_mode == 5 || wan_conf.device_mode == 6) ? 5 : wan_conf.device_mode).change();
                    $("#wanStatus").text($.t(!wan_conf.link ? "lblOffline" : "lblOnline"));

                    $("#enableVlan").prop("checked", (vlan_conf.internetVLANID != -1)).change();
                    $("#vlanID").val(vlan_conf.internetVLANID != -1 ? vlan_conf.internetVLANID : 0);

                    if (wcloud.enable) {
                        $("#enableCloudApp").prop("checked", (wcloud.app == 1)).change();
                        $("#wcloudSetting").show();
                    } else {
                        $("#wcloudSetting").hide();
                    }

                    $("#enableMeshAutoAdapt").prop("checked", (data.mesh.SwapMeshMode == 1)).change();
                }
            }
        })
    }

    function getwifilist() {
        ajax({
            url: "ap.json",
            success: function(data) {
                $("#repmanualradio, #repRScanButton, #repNextButton").prop("disabled", false);
                if (data.error == 0) {
                    $("#repscandynamic").hide();
                    $("#replisttitle, #RepScanList").show();
                    var aplist = data.aplist, aplist_5g = data.aplist_5g;
                    var apeListDom = document.createDocumentFragment();

                    aplist_5g.forEach(function(v, i){
                        apeListDom.appendChild($('<tr class="selectThisTr" channel="'+v.channel+'"ssid="'+htmlEscape(v.ssid)+'"bssid="'+v.bssid+'"mode="'+v.mode+'"security="'+v.security+'"signal="'+v.signal+'" frequency=1> \
                                            <td><img src="'+ChooseFirstSignalPng(v.mode, v.signal, "5G")+'"></td> \
                                            <td>'+htmlEscape(v.ssid)+'</td> \
                                            <td><img src="'+ChooseSecondSignalPng(v.signal)+'"></td> \
                                            <td><input type=radio class="selectThisTd"></td> \
                                            </tr>')[0]);
                    });

                    aplist.forEach(function(v, i){
                        apeListDom.appendChild($('<tr class="selectThisTr" channel="'+v.channel+'"ssid="'+htmlEscape(v.ssid)+'"bssid="'+v.bssid+'"mode="'+v.mode+'"security="'+v.security+'"signal="'+v.signal+'" frequency=0> \
                                            <td><img src="'+ChooseFirstSignalPng(v.mode, v.signal, "2G")+'"></td> \
                                            <td>'+htmlEscape(v.ssid)+'</td> \
                                            <td><img src="'+ChooseSecondSignalPng(v.signal)+'"></td> \
                                            <td><input type=radio class="selectThisTd"></td> \
                                            </tr>')[0]);
                    });

                    if ((aplist_5g == null || aplist_5g == undefined) && (aplist == null || aplist == undefined)){
                        $("#repscandynamic, #replisttitle, #RepScanList").hide();
                        $("#repNextButton").prop("disabled", true);
                        $("#scanwifitips").show();
                    } else {
                        $("#RepScanList").html(apeListDom);
                    }
                } else {
                    $("#repscandynamic, #replisttitle, #RepScanList").hide();
                    $("#repNextButton").prop("disabled", true);
                    $("#scanwifitips").show();
                    locationUrl(data.error);
                }
            }
        });
    }
});
