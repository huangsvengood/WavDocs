$(document).ready(function(){
    var wifiCountry = 0, advSetInfo_5G = [], advSetInfo_2G = [];

    if (opMode == 2 || opMode == 3) {
        isMobile ? $("#channel2g, #channel5g, [data-i18n='lbChannelName']").hide()
        : $("#channel2g, #channel5g").parent().hide().parent().find(".col-xs-3.control-label").hide();
    }

    getWifi();

    $("#enableDualFrequency").on("change", function(){
        var mode = $(this).is(":checked");
        if (mode) {
            $("#wifi2Info, #wifi5Info").hide();
            $("#wifiInfo").show();
        } else {
            $("#wifiInfo").hide();
            $("#wifi2Info, #wifi5Info").show();
        }
    });
    $("[id^=authmode]").on("change", function(){
        var pwdInfo, enterprise;
        if ((isMobile && isMobilePage)) {
            pwdInfo = $(this).next();
            enterprise = $(this).next().next();
        } else {
            pwdInfo = $(this).parents(".form-group").next();
            enterprise = $(this).parents(".form-group").next().next()
        }
        $(this).val() == 0 ? (pwdInfo.hide(), enterprise.hide()) :
        ($(this).val() == 4 ? (enterprise.show(), pwdInfo.hide()): (pwdInfo.show(), enterprise.hide()));
    });
    $("[id^=password]").on("keyup", function(){
        checkPasswdStrength($(this).val(), $(this).parent().siblings(".pwd-strength"), 8);
    });
    $(".depart-line[data-toggle='collapse']").on("click", function(){
        var target = $(this);
        $(this).find(".glyphicon").attr("class", function(i, v){
            return target.hasClass("collapsed") ? v.replace("right", "down") : v.replace("down", "right");
        });
    });
    $("#bandwidth5g").on("change", function(){
        showChannel5G("#channel5g", wifiCountry, $("#channel5g").val(), $("#enableDFS").val(), $("#bandwidth5g").val());
    });
    $("#enableDFS").on("change", function(){
        var checked = $(this).is(":checked");
        var channel5 = $("#channel5g").val();
        checked ? $("#highBandwidth_5g").show() : $("#highBandwidth_5g").hide();
        $("#bandwidth5g").val(checked ? 1 : 0);
        showChannel5G("#channel5g", wifiCountry, channel5, checked ? 1 : 0, $("#bandwidth5g").val());
    });
    $("#setWifi").on("click", function(){
        var ssid2, auth2, pwd2, channel2, bw2, hide2, twt2, ofdma2, radiusip2, radiusport2, radiuspwd2;
        var ssid5, auth5, pwd5, channel5, bw5, hide5, dfs, twt5, ofdma5, radiusip5, radiusport5, radiuspwd5;
        if ($("#enableDualFrequency").val() == 1) {
            ssid2 = $("#ssid").val();

            if (!SsidLenCheck(ssid2, 31)) {
                getMsg($.t("msgWifiSsidText2"), 1, "#ssid");
                return false;
            } else if (!checkStr(ssid2)) {
                getMsg($.t("msgWifiSsidText1"), 1, "#ssid");
                return false;
            }

            auth2 = $("#authmode").val();
            pwd2 = $("#password").val();
            radiusip2 = $("#radiusip").val();
            radiusport2 = $("#radiusport").val();
            radiuspwd2 = $("#radiuspwd").val();

            if (auth2 != 0) {
                if (auth2 != 4) {
                    if (!pwd2.length) {
                        getMsg($.t("msgLoginPasswordText4"), 1, "#password");
                        return false;
                    } else if (pwd2.length > 63 || pwd2.length < 8) {
                        getMsg($.t("msgWifiPasswordText2"), 1, "#password");
                        return false;
                    } else if (!checkSpecialCharacter(pwd2)) {
                        getMsg($.t("msgLoginPasswordText8"), 1, "#password");
                        return false;
                    }
                } else {
                    if (!checkIP($("#radiusip"), 1)) {
                        return false;
                    }
                    if (!checkPort($("#radiusport"))) {
                        return false;
                    }
                    if (!radiuspwd2.length) {
                        getMsg($.t("msgLoginPasswordText4"), 1, "#radiuspwd");
                        return false;
                    } else if (radiuspwd2.length > 64 || radiuspwd2.length < 0) {
                        getMsg($.t("msgWifiPasswordText3"), 1, "#radiuspwd");
                        return false;
                    } else if (!checkSpecialCharacter(radiuspwd2)) {
                        getMsg($.t("msgLoginPasswordText8"), 1, "#radiuspwd");
                        return false;
                    }
                }
            } else {
                pwd2 = "Admin12345";
            }
            ssid5 = ssid2;
            pwd5 = pwd2;
            auth5 = auth2;
            radiusip5 = radiusip2;
            radiusport5 = radiusport2;
            radiuspwd5 = radiuspwd2;
        } else {
            ssid2 = $("#ssid2g").val();
            auth2 = $("#authmode2g").val();
            pwd2 = $("#password2g").val();
            radiusip2 = $("#radiusip2g").val();
            radiusport2 = $("#radiusport2g").val();
            radiuspwd2 = $("#radiuspwd2g").val();
            ssid5 = $("#ssid5g").val();
            auth5 = $("#authmode5g").val();
            pwd5 = $("#password5g").val();
            radiusip5 = $("#radiusip5g").val();
            radiusport5 = $("#radiusport5g").val();
            radiuspwd5 = $("#radiuspwd5g").val();
            // check 2G SSID
            if (!SsidLenCheck(ssid2, 31)) {
                getMsg($.t("msgWifiSsidText2"), 1, "#ssid2g");
                return false;
            } else if (!checkStr(ssid2)) {
                getMsg($.t("msgWifiSsidText1"), 1, "#ssid2g");
                return false;
            }
            // check 5G SSID
            if (!SsidLenCheck(ssid5, 31)) {
                getMsg($.t("msgWifiSsidText2"), 1, "#ssid5g");
                return false;
            } else if (!checkStr(ssid5)) {
                getMsg($.t("msgWifiSsidText1"), 1, "#ssid5g");
                return false;
            }

            if (auth2 != 0) {
                // check 2G password
                if (auth2 != 4) {
                    if (!pwd2.length) {
                        getMsg($.t("msgLoginPasswordText4"), 1, "#password2g");
                        return false;
                    } else if (pwd2.length > 63 || pwd2.length < 8) {
                        getMsg($.t("msgWifiPasswordText2"), 1, "#password2g");
                        return false;
                    } else if (!checkSpecialCharacter(pwd2)) {
                        getMsg($.t("msgLoginPasswordText8"), 1, "#password2g");
                        return false;
                    }
                } else {
                    if (!checkIP($("#radiusip2g"), 1)) {
                        return false;
                    }
                    if (!checkPort($("#radiusport2g"))) {
                        return false;
                    }
                    if (!radiuspwd2.length) {
                        getMsg($.t("msgLoginPasswordText4"), 1, "#radiuspwd2g");
                        return false;
                    } else if (radiuspwd2.length > 64 || radiuspwd2.length < 0) {
                        getMsg($.t("msgWifiPasswordText3"), 1, "#radiuspwd2g");
                        return false;
                    } else if (!checkSpecialCharacter(radiuspwd2)) {
                        getMsg($.t("msgLoginPasswordText8"), 1, "#radiuspwd2g");
                        return false;
                    }
                }
            } else {
                pwd2 = "Admin12345";
            }

            if (auth5 != 0) {
                // check 5G password
                if (auth5 != 4) {
                    if (!pwd5.length) {
                        getMsg($.t("msgLoginPasswordText4"), 1, "#password5g");
                        return false;
                    } else if (pwd5.length > 63 || pwd5.length < 8) {
                        getMsg($.t("msgWifiPasswordText2"), 1, "#password5g");
                        return false;
                    } else if (!checkSpecialCharacter(pwd5)) {
                        getMsg($.t("msgLoginPasswordText8"), 1, "#password5g");
                        return false;
                    }
                } else {
                    if (!checkIP($("#radiusip5g"), 1)) {
                        return false;
                    }
                    if (!checkPort($("#radiusport5g"))) {
                        return false;
                    }
                    if (!radiuspwd5.length) {
                        getMsg($.t("msgLoginPasswordText4"), 1, "#radiuspwd5g");
                        return false;
                    } else if (radiuspwd5.length > 64 || radiuspwd5.length < 0) {
                        getMsg($.t("msgWifiPasswordText3"), 1, "#radiuspwd5g");
                        return false;
                    } else if (!checkSpecialCharacter(radiuspwd5)) {
                        getMsg($.t("msgLoginPasswordText8"), 1, "#radiuspwd5g");
                        return false;
                    }
                }
            } else {
                pwd5 = "Admin12345";
            }

        }
        channel2 = $("#channel2g").val();
        channel5 = $("#channel5g").val();

        bw2 = $("#bandwidth2g").val();
        bw5 = $("#bandwidth5g").val();

        dfs = $("#enableDFS").val();
        hide2 = $("#hidden2g").val();
        hide5 = $("#hidden5g").val();

        twt2 = $("#enableTWT2g").val();
        twt5 = $("#enableTWT5g").val();

        ofdma2 = $("#enableOFDMA2g").val();
        ofdma5 = $("#enableOFDMA5g").val();

        var skiplist;
        if (bw5 == 1) {
            var region_cur = BandWidthList[wifiCountry];
            var HighBandWidthList = HighBandWidth5[region_cur].replace(/ /g, ",");
            skiplist = Region5.split(HighBandWidthList).join("");
            if (skiplist[0] == ",") {
                skiplist = skiplist.substr(1);
            }
            skiplist = skiplist.replace(/,/g, ";")+";";
        } else if (bw5 == 0) {
            var region_cur = CountryRegionList[wifiCountry].split(",");
            if (dfs == "0") {
                skiplist = SkipList5[0][region_cur[1]];
            } else {
                skiplist = SkipList5[1][region_cur[1]];
            }
        }

        if (bw2 != advSetInfo_2G[0] || twt2 != advSetInfo_2G[1] || ofdma2 != advSetInfo_2G[2]
            || bw5 != advSetInfo_5G[0] || dfs != advSetInfo_5G[1] || skiplist != advSetInfo_5G[2]
            || twt5 != advSetInfo_5G[3] || ofdma5 != advSetInfo_5G[4]) {
            setProgressBar(100, $.t("msgWaiting"), $.t("msgRefresh"));
        } else {
            startLoading(2000, $.t("btnSaveName"));
        }
    });

    function getWifi() {
        ajax({
            url: "wifi.json",
            success: function(data){
                if (data.error == 0) {
                    wifiCountry = data.country;
                    var conf2g = data.wifi2, conf5g = data.wifi5;

                    // 2G
                    $("#ssid, #ssid2g").val(conf2g.ssid);
                    $("#authmode, #authmode2g").val(conf2g.security).change();
                    $("#password, #password2g").val(conf2g.security == "0" ? "" : conf2g.passwd).keyup();
                    $("#radiusip, #radiusip2g").val(conf2g.radiusip);
                    $("#radiusport, #radiusport2g").val(conf2g.radiusport);
                    $("#radiuspwd, #radiuspwd2g").val(conf2g.radiuspwd);

                    showChannel2G("#channel2g", conf2g.channel);
                    $("#channel2g").val(conf2g.channel);

                    $("#bandwidth2g").val(conf2g.bandwidth);

                    $("#hidden2g").prop("checked", (conf2g.hidden == 1)).change();
                    $("#enableTWT2g").prop("checked", (conf2g.twt == 1)).change();
                    $("#enableOFDMA2g").prop("checked", (conf2g.ofdma == 1)).change();

                    // 5G
                    $("#ssid5g").val(conf5g.ssid);
                    $("#authmode5g").val(conf5g.security).change();
                    $("#password5g").val(conf5g.security == "0" ? "" : conf5g.passwd).keyup();
                    $("#radiusip5g").val(conf5g.radiusip);
                    $("#radiusport5g").val(conf5g.radiusport);
                    $("#radiuspwd5g").val(conf5g.radiuspwd);

                    showChannel5G("#channel5g", wifiCountry, conf5g.channel, conf5g.dfs, conf5g.bandwidth);
                    $("#channel5g").val(conf5g.channel);

                    $("#bandwidth5g").val(conf5g.bandwidth);

                    $("#enableDFS").prop("checked", (conf5g.dfs == 1)).val(conf5g.dfs);
                    $("#hidden5g").prop("checked", conf5g.hidden == 1).change();
                    $("#enableTWT5g").prop("checked", conf5g.twt == 1).change();
                    $("#enableOFDMA5g").prop("checked", conf5g.ofdma == 1).change();

                    // 判断是否打开双频合一
                    $("#enableDualFrequency").prop("checked", conf2g.ssid == conf5g.ssid && conf2g.security == conf5g.security && conf2g.passwd == conf5g.passwd
                                                    && conf2g.radiusip == conf5g.radiusip && conf2g.radiusport == conf5g.radiusport && conf2g.radiuspwd == conf5g.radiuspwd).change();

                    $("#enableDualFrequency").val() == 1 ? $("#ssid5g").val(conf5g.ssid+"_5G"): "";

                    advSetInfo_2G[0] = conf2g.bandwidth;
                    advSetInfo_2G[1] = conf2g.twt;
                    advSetInfo_2G[2] = conf2g.ofdma;

                    advSetInfo_5G[0] = conf5g.bandwidth;
                    advSetInfo_5G[1] = conf5g.dfs;
                    advSetInfo_5G[2] = conf5g.skip_channel_list;
                    advSetInfo_5G[3] = conf5g.twt;
                    advSetInfo_5G[4] = conf5g.ofdma;
                }
            }
        });
    }
});
