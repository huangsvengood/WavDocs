$(document).ready(function(){
    var sys_info, network_info, wifi_info;
    getInitStatus();

    $("#wan_mode").on("change", function(){
        var wanType = $(this).val();
        $("#manualDNS").show();
        switch (wanType) {
            case "1":
                $("#staticInfo, #accountInfo, #dualWaninfo").hide();
                $("#dhcpTips").show();
                break;
            case "2":
                $("#staticInfo, #serverName, #dualWaninfo, #dhcpTips").hide();
                $("#accountInfo").show();
                break;
            case "3":
                $("#staticInfo").show();
                $("#manualDNS, #adFirstDns, #adSecDNS, #accountInfo, #dualWaninfo, #dhcpTips").hide();
                break;
            case "4":
                $("#staticInfo, #serverName, #dhcpTips").hide();
                $("#accountInfo, #dualWaninfo").show();
                changeSecWanMode();
                break;
            case "5":
            case "6":
                $("#staticInfo, #dhcpTips").hide();
                $("#accountInfo, #serverName, #dualWaninfo").show();
                changeSecWanMode();
                break;
            case "7":
                detectWanType();
                break;
        }
    });

    $("#enableVlan").on("change", function(){
        $(this).is(":checked") ? $("#vlanIdInfo").show() : $("#vlanIdInfo").hide();
    });

    $("#vlanID").on("input", function() {
        var value = $(this).val();
        var newValue = value.replace(/[^0-9]/g, '');
        $(this).val(newValue);
	});

    $("#menuConfig").on("click", function(){
		$("#step0, #nextButton").show();
		$("#ScanFailure").hide();
	});

	$("#restartScan").on("click", function(){
        detectWizardWanType(network_info.wan);
	});

    $("#deviceMode").on("change", function(){
        var mode = $(this).val();
        if (mode == 0 || mode == 1) {
            $("#nextButton").text($.t("btnSaveName"));
            $("#wizApdhcp").hide();
            $("#wizNetwork").show();
            detectWizardWanType(network_info.wan);
        } else if (mode == 2) {
            $("#wizNetwork").hide();
            $("#wizApdhcp").show();
        } else {
            $("#wizApdhcp, #wizNetwork").hide();
            if (mode == 3) {
                $("#nextButton").text($.t("btnStartPair"));
            } else if (mode == 5) {
                $("#nextButton").text($.t("btnStartConnect"));
            } else {
                $("#nextButton").text($.t("btnSaveName"));
            }
        }
    });

    $("#enableDual").on("change", function(){
        var ssid = "", needSetSysPwd = $("#enableSetSysPwd").is(":checked");
        if ($(this).is(":checked")) {
            ssid = $("#ssid2g").val();
            $("#wifi2, #wifi5").hide();
            $("#wifi25, #setSysPwd").show();
            !needSetSysPwd ? $("#sysPwdBox").show() : $("#sysPwdBox").hide();
            $("#enableSetSysPwd").prop("checked", true).change();
            if (ssid != "") {
                $("#ssidDual").val(ssid);
            }
        } else {
            ssid = $("#ssidDual").val();
            $("#wifi2, #wifi5, #sysPwdBox").show();
            $("#wifi25, #setSysPwd").hide();
            $("#enableSetSysPwd").prop("checked", false).change();
            // if (needSetSysPwd) {
            //     $("#sysPwdBox").hide();
            // }
            if (ssid != "") {
                $("#ssid2g").val(ssid);
                $("#ssid5g").val(ssid+"_5G");
            }
        }
	});

    $("[id^=password]").on("input", function(){
        checkPasswdStrength($(this).val(), $(this).parent().siblings(".pwd-strength"), 8);
    });

    $("#systemPassword").on("input", function(){
        checkPasswdStrength($(this).val(), $(this).parent().siblings(".pwd-strength"), 6);
    });

    $(".wzeyes").on("click", function(){
        var flag = ($(this).attr("src").indexOf("_Invisible") != -1);
        $(this).attr("src", function(i, v){
            return flag ? v.replace("_Invisible", "_visible") : v.replace("_visible", "_Invisible")
        }).prev().attr("type", flag ? "text" : "password");
	});

    $("[id^=eyes]").on("click", function(){
        var is2g = ($(this).attr("id") == "eyes2g");
        var flag = ($(this).attr("src").indexOf("_Invisible") != -1);

        $(this).attr("src", function(i, v){
            return flag ? v.replace("_Invisible", "_visible") : v.replace("_visible", "_Invisible")
        }).prev().text(!flag ? "********"
                       : (is2g ? ($($("#enableDual").val() == 1 ? "#passwordDual" : "#password2g").val())
                       : $("#password5g").val()));
	});

	$("#enableSetSysPwd").on("change", function(){
        if ($(this).is(":checked")) {
            $("#sysPwdBox").hide();
            $("#passwordDual").attr({"data-i18n": "[placeholder]lblWifiPasswordSameLogin",
                                     "placeholder": $.t("lblWifiPasswordSameLogin"), "maxlength": 30});
        } else {
            $("#sysPwdBox").show();
            $("#passwordDual").attr({"data-i18n": "[placeholder]msgWifiPasswordText2",
                                     "placeholder": $.t("msgWifiPasswordText2"), "maxlength": 63});
        }
	});

    $("#OtNPPPOE_id").on("click", "a", function(e){
        e.preventDefault();
        $("#item1, #otnpppoe_close").show();
        $("#item2, #item3, #item4").hide();
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
        }, 15000, network_info.wan.oldPPPOE);
    });

    $("#item3Button2, #item4Button").on("click", function(){
        $("#otnpppoe_close").show();
        $("#item1, #item2, #item3, #item4").hide();
        $("#OtNPPPOE").modal("hide");
    });

    $("#prevButton").on("click", function(){
        var step = $("#WizStep").val()*1 - 1;
        $("#WizStep").val(0);
        $("#step1, #prevBox").hide();
        $("#step0").show();
        $("#nextButton").text($.t("btnNextName"));
    });

    $("#nextButton").on("click", function(){
        var step = $("#WizStep").val()*1;
        var nextStep = step + 1;
        var pwd = $("#systemPassword").val();
        var country = $("#wifiCountry").val();
        var deviceMode = $("#deviceMode").val();

        if (step == 0) {
            if (deviceMode == -1) {
                getMsg($.t("lblModeSeclectionText"), 1, "#deviceMode");
                return false;
            }
            var wanMode = $("#wan_mode").val();
            if (deviceMode == 1 || deviceMode == 0) {
                if (wanMode == 2) {
                    var username = $("#pppoeUser").val();
                    var password = $("#pppoePwd").val();
                    if (username.length == 0) {
                        getMsg($.t("msgIpNone"), 1, "#pppoeUser");
                        return false;
                    } else if (!checkSpecialCharacter(username)) {
                        getMsg($.t("msgLoginPasswordText8"), 1, "#pppoeUser");
                        return false;
                    } else if (!SsidLenCheck(username, 64)) {
                        getMsg($.t("msgInputLengthError"), 1, "#pppoeUser");
                        return false;
                    }
                    if (password.length == 0) {
                        getMsg($.t("msgIpNone"), 1, "#pppoePwd");
                        return false;
                    } else if (!checkSpecialCharacter(password)) {
                        getMsg($.t("msgLoginPasswordText8"), 1, "#pppoePwd");
                        return false;
                    } else if (!SsidLenCheck(password, 64)) {
                        getMsg($.t("msgInputLengthError"), 1, "#pppoePwd");
                        return false;
                    }
                } else if (wanMode == 3) {
                    var ip = $("#wanIP").val().split(".")[3]*1;
                    if (!checkIP($("#wanIP"), 1) || !checkIP($("#wanMask"), 0) || !checkIP($("#wanGw"), 3)
                        || !checkIP($("#wanDNS1"), 2) || !checkIP($("#wanDNS2"), 2)
                        || !check_network_segment($("#wanIP"), $("#wanGw"), $("#wanMask"), 1)) {
                        return false;
                    }
                    if ($("#wanDNS1").val() == "0.0.0.0" || $("#wanDNS2").val() == "0.0.0.0" ) {
                        getMsg($.t("msgDNSError2"));
                        return false;
                    }
                    if (ip == 0 || ip == 255) {
                        getMsg($.t("msgIpError5"), 1, $("#wanIP"));
                        return false;
                    }
                }
                var intvlanEnable = $("#enableVlan").val();
                var internetId = $("#vlanID").val();
                if (intvlanEnable == 1 && (internetId == "" || (!checkStrnum(internetId) || internetId < -1 || internetId == 1 || internetId > 4094))) {
                    getMsg($.t("lblWrongIntnetID"), 1, "#vlanID");
                    return false;
                }
            } else if (deviceMode == 2) {
                return true;
            }
            $("#step0").hide();
            $("#step1, #timezoneInfo, #sysPwdInfo, #prevBox").show();
            $(this).text($.t("lblSave"));
            if ($("#ssidDual").val() == "") {
                $("#wanStatus").text(network_info.wan.link == 0 ? $.t("lblOffline") : $.t("lblOnline"));

                var timezone = sys_info.time.tz;
                if (sys_info.time.enable == 1) {
                    timezone = UTC2DST(timezone, 0);
                }
                $("#timeZone").val(timezone);

                var fixRegion = wifi_info.fixRegion;
                if (fixRegion == 1) {
                    $("#wifiCountry").val("CN");
                    $("#timeZone").val("UTC-08:00");
                } else if (fixRegion == 0) {
                    $("#timeZone").val("UTC+00:00");
                    $("#countryTimezoneInfo").show();
                }

                $("#ssidDual").val(wifi_info.wifi2.ssid);
                $("#enableDual").prop("checked", true).change();
            }
        } else if (step == 1) {
            var setSysPwd = $("#enableSetSysPwd").val();
            var enableDual = $("#enableDual").val();
            var pwd2g, ssid2g, pwd5g, ssid5g;

            if (enableDual == 1) {
                pwd2g = $("#passwordDual").val();
                ssid2g = $("#ssidDual").val();
                if (!checkStr(ssid2g)) {
                    getMsg($.t("msgWifiSsidText1"), 1, "#ssidDual");
                    return false;
                } else if (!SsidLenCheck(ssid2g, 31)) {
                    getMsg($.t("msgWifiSsidText2"), 1, "#ssidDual");
                    return false;
                }

                if (pwd2g == "") {
                    getMsg($.t("msgLoginPasswordText4"), 1, "#passwordDual");
                    return false;
                } else if (!checkSpecialCharacter(pwd2g)) {
                    getMsg($.t("msgLoginPasswordText8"), 1, "#passwordDual");
                    return false;
                }

                if (setSysPwd == 1) {
                    if (pwd2g.length > 30 || pwd2g.length < 8) {
                        getMsg($.t("msgWifiPasswordText4"), 1, "#passwordDual");
                        return false;
                    }
                } else {
                    if (pwd2g.length > 63 || pwd2g.length < 8) {
                        getMsg($.t("msgWifiPasswordText2"), 1, "#passwordDual");
                        return false;
                    }
                }

                $("#wifiname25").show();
                $("#wifiname2, #5Ginformation").hide();
                $("#showSSID").text(ssid2g);
            } else {
                pwd2g = $("#password2g").val();
                ssid2g = $("#ssid2g").val();
                pwd5g = $("#password5g").val();
                ssid5g = $("#ssid5g").val();
                //2gwifi
                if (!checkStr(ssid2g)) {
                    getMsg($.t("msgWifiSsidText1"), 1, "#ssid2g");
                    return false;
                } else if (!SsidLenCheck(ssid2g, 31)) {
                    getMsg($.t("msgWifiSsidText2"), 1, "#ssid2g");
                    return false;
                }

                if (pwd2g == "") {
                    getMsg($.t("msgLoginPasswordText4"), 1, "#password2g");
                    return false;
                } else if (pwd2g.length > 63 || pwd2g.length < 8) {
                    getMsg($.t("msgWifiPasswordText2"), 1, "#password2g");
                    return false;
                } else if (!checkSpecialCharacter(pwd2g)) {
                    getMsg($.t("msgLoginPasswordText8"), 1, "#password2g");
                    return false;
                }
                //5gwifi
                if (!checkStr(ssid5g)) {
                    getMsg($.t("msgWifiSsidText1"), 1, "#ssid5g");
                    return false;
                } else if (!SsidLenCheck(ssid5g, 31)) {
                    getMsg($.t("msgWifiSsidText2"), 1, "#ssid5g");
                    return false;
                }

                if (pwd5g == "") {
                    getMsg($.t("msgLoginPasswordText4"), 1, "#password5g");
                    return false;
                } else if (pwd5g.length > 63 || pwd5g.length < 8) {
                    getMsg($.t("msgWifiPasswordText2"), 1, "#password5g");
                    return false;
                } else if (!checkSpecialCharacter(pwd5g)) {
                    getMsg($.t("msgLoginPasswordText8"), 1, "#password5g");
                    return false;
                }
                $("#showSSID").text(ssid2g);
                $("#showSSID5g").text(ssid5g);
                $("#wifiname25").hide();
                $("#wifiname2, #5Ginformation").show();
            }

            //system pwd
            if (setSysPwd == 0) {
                if (pwd == "") {
                    getMsg($.t("msgLoginPasswordText4"), 1, "#systemPassword");
                    return false;
                } else if (pwd.length > 30 || pwd.length < 6) {
                    getMsg($.t("msgLoginPasswordText7"), 1, "#systemPassword");
                    return false;
                } else if (!checkSpecialCharacter(pwd)) {
                    getMsg($.t("msgLoginPasswordText8"), 1, "#systemPassword");
                    return false;
                }
            }
            //wificountrycheck
            if (country == 0) {
                getMsg($.t("msgCountryWarningText1"), 1, "#wifiCountry");
                return false;
            }
            $("#step1, #prevBox, #nextButton").hide();
            $("#setLoading, #closeBarBtn").show();
            window.sessionStorage.setItem("token", setSysPwd == 0 ? pwd : pwd2g);
            setProgressBar(50, $.t("msgWaiting"), $.t("msgRefresh"));
        }
        $("#WizStep").val(nextStep);
    });

    function getInitStatus() {
        $.when(ajax({url: "system.json"}), ajax({url: "network.json"}), ajax({url: "wifi.json"})).done(function(r0, r1, r2) {
            if (r0[0].error == 0 && r1[0].error == 0 && r2[0].error == 0) {
                sys_info = r0[0], network_info = r1[0], wifi_info = r2[0];
                var sys = sys_info.sys, wan_conf = network_info.wan;
                var init = window.sessionStorage.getItem("init") || 0;
                if (sys.country != "CN") {
                    $("#w_wav").attr("href", $("#w_wav").attr("href").replace("zh_cn", "en_us"));
                }
                if (sys.init_status == 0 && init == 0) {
                    var vlan_conf = network_info.vlan;
                    $("#wan_mode").val(wan_conf.mode).change();
                    $("#pppoeUser").val(wan_conf.user);
                    $("#pppoePwd").val(wan_conf.passwd);
                    $("#pppoeServer").val(wan_conf.server);
                    $("#sec_wan_mode").val(wan_conf.second_wan_type);
                    $("#enableApDHCP").prop("checked", wan_conf.apsmartdhcp == 1).change();
                    //static ip
                    if (wan_conf.mode == 3) {
                        $("#wanIP").val(wan_conf.ip);
                        $("#wanMask").val(wan_conf.mask);
                        $("#wanGw").val(wan_conf.gw);
                        $("#wanDNS1").val(wan_conf.dns1);
                        $("#wanDNS2").val(wan_conf.dns2);
                    }

                    detectWizardWanType(wan_conf);

                    $("#enableVlan").prop("checked", (vlan_conf.enable != 0)).change();
                    $("#vlanID").val(vlan_conf.enable ? vlan_conf.internetVLANID : "");

                    $("#enableMeshAutoAdapt").prop("checked", network_info.mesh.SwapMeshMode == 1).change();

                    if (sys.WizAp == 0) {
                        $("#deviceMode").find("option[value=4]").remove();
                    }
                    if (sys.WizMeshBridge == 0) {
                        $("#deviceMode").find("option[value=2]").remove();
                    }
                    if (sys.MeshMode == 1) {
                        $("#deviceMode").find("option[value=0]").remove();
                    } else {
                        $("#deviceMode").find("option[value=1]").remove();
                    }
                    if (sys.WizEasymeshAgent == 0) {
                        $("#deviceMode").find("option[value=3]").remove();
                    }
                    if (sys.Wizrep == 0) {
                        $("#deviceMode").find("option[value=5]").remove();
                    }
                    if (sys.Switch_PPPOE == 1) {
                        $("#OtNPPPOE_id").show();
                    }
                    if(sys.brand == "WAVLINK"){
                        $("#appqrcode").show();
                    }
                    $("#deviceMode").val(sys.prefer_mode);

                    $("#WizStep").val(0);
                    $("#step1").hide();
                    $("#step0").show();

                    $("#enableSetSysPwd, #enableDual").prop("checked", true).change();
                } else {
                    $("#wanStatus").text(wan_conf.link == 0 ? $.t("lblOffline") : $.t("lblOnline"));

                    var timezone = sys_info.time.tz;
                    if (sys_info.time.enable == 1) {
                        timezone = UTC2DST(timezone, 0);
                    }
                    $("#timeZone").val(timezone);

                    var fixRegion = wifi_info.fixRegion;
                    if (fixRegion == 1) {
                        $("#wifiCountry").val("CN");
                        $("#timeZone").val("UTC-08:00");
                    } else if (fixRegion == 0) {
                        $("#timeZone").val("UTC+00:00");
                        $("#countryTimezoneInfo").show();
                    }

                    $("#ssidDual").val(wifi_info.wifi2.ssid);
                    $("#enableDual").prop("checked", true).change();

                    $("#WizStep").val(1);
                    $("#step0, #prevBox").hide();
                    $("#step1, #wizMode, #wizWanState").show();
                    $("#nextButton").text($.t("btnSaveName"));
                }
            }
        });
    }

    function detectWizardWanType(wan) {
        $("#loadingModal").modal("show");
        setTimeout(function(wan){
            $("#loadingModal").modal("hide");
            if (wan.link == 0) {
                $("#wan_mode").val(1);
                $("#staticInfo, #accountInfo, #step0, #nextButton").hide();
                $("#ScanFailure").show();
            } else {
                $("#wan_mode").val(wan.mode);
                $("#ScanFailure").hide();
                $("#step0, #nextButton").show();

                if (wan.mode == 1) {
                    $("#staticInfo, #accountInfo").hide();
                } else if (wan.mode == 2) {
                    $("#staticInfo, #serverName").hide();
                    $("#accountInfo").show();
                } else {
                    $("#staticInfo").show();
                    $("#accountInfo").hide();
                }
            }
        }, 4000, wan);
    }
});
