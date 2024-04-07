$(document).ready(function(){
    var deviceMode = 0, apDHCP = 0;

    getWanVlanInfo();

    $("#wanMode").on("change", function(){
        var mode = $(this).val()*1;
        $("#manualDNSInfo").show();
        if (mode == 1) {
            $("#pppoeInfo, #staticInfo, #dualWanInfo").hide();
            $("#wanline, #wanadsetting").show();
        } else if (mode == 2) {
            $("#staticInfo, #dualWanInfo, #pppoeInfoSer, #pppoeServer, .pppoeInfoSer").hide();
            $("#pppoeInfo, #wanline, #wanadsetting").show();
        } else if (mode == 3) {
            $("#pppoeInfo, #dualWanInfo, #manualDNSInfo").hide();
            $("#staticInfo, #wanline, #wanadsetting").show();
        } else if (mode == 4 || mode == 5 || mode == 6) {
            $("#staticInfo, #pppoeInfoSer, #pppoeServer, .pppoeInfoSer").hide();
            $("#pppoeInfo, #dualWanInfo, #wanline, #wanadsetting").show();
            if (mode == 5 || mode == 6) {
                $("#pppoeInfoSer, #pppoeServer, .pppoeInfoSer").show();
            }
        } else if (mode == 11) {
            $("#pppoeInfo, #staticInfo, #dualWanInfo, #wanline, #wanadsetting").hide();
        }
    });
    $("#sec_wan_mode").on("change", function(){
        $(this).val() == 1 ? $("#secWanStaticInfo").hide() : $("#secWanStaticInfo").show();
    });
    $("input.switch-checkbox").on("change", function(){
        var target = $(this).parents(".form-group").next();
        $(this).is(":checked") ? target.show() : target.hide();
    });
    $("#macCloneMode").on("change", function(){
        var mode = $(this).val(), parent = (isMobile && isMobilePage) ? $(this) : $(this).parent();
        if (mode == 1) {
            // 自定义MAC，显示输入框
            parent.next().show();
            if (!(isMobile && isMobilePage)) {
                parent.attr("class", "col-xs-4");
            }
        } else {
            // 不显示输入框
            parent.next().hide();
            if (!(isMobile && isMobilePage)) {
                parent.attr("class", "col-xs-offset-3 col-xs-5");
            }
        }
    });
    $("#setWan").on("click", function(){
        var opt = {};

        var wanMode = $("#wanMode").val()*1;
        var dns1 = "", dns2 = "";
        opt.wanMode = wanMode;

        if (wanMode == 2 || wanMode == 4 || wanMode == 5 || wanMode == 6) {
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


            if (wanMode != 2) {
                var secWanMode = $("#sec_wan_mode").val();
                var secWanIP = $("#secWanIP").val();
                var secWanMask = $("#secWanMask").val();
                if (secWanMode == 3) {
                    if (!checkIP($("#secWanIP"), 1) || !checkIP($("#secWanMask"), 0)) {
                        return false;
                    }
                }
                if (wanMode == 5 || wanMode == 6) {
                    if (!checkNetworkServer(server)) {
                        return false;
                    }
                }
                opt.sec_wan = secWanMode;
                opt.sec_wan_ip = secWanIP;
                opt.sec_wan_mask = secWanMask;
            }
        } else if (wanMode == 3) {
            var ip = $("#wanIP").val();
            var mask = $("#wanMask").val();
            var gw = $("#wanGateway").val();
            dns1 = $("#wanDNS1").val();
            dns2 = $("#wanDNS2").val();

            if (!checkIP($("#wanIP"), 1) || !checkIP($("#wanMask"), 0)
                || !checkIP($("#wanGateway"), 3) || !checkIP($("#wanDNS1"), 2) || !checkIP($("#wanDNS2"), 2)
                || !check_network_segment($("#wanIP"), $("#wanGateway"), $("#wanMask"), 1)) {
                return false;
            }
            if (dns1 == "0.0.0.0" || dns2 == "0.0.0.0") {
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
        }

        if (wanMode != 11) {
            var enableMtu = $("#enableMtu").val()*1;
            opt.enableMtu = enableMtu;
            if (enableMtu) {
                var mtu = $("#mtu").val();
                if (!checkStrnum(mtu)||mtu*1 > 1500 || mtu*1 < 576){
                    getMsg($.t("msgMtuErr"), 1, "#mtu");
                    return false;
                }
                opt.mtu = mtu;
            }

            var enableMacClone = $("#enableMacClone").val()*1;
            opt.enableMacClone = enableMacClone;
            if (enableMacClone) {
                var cloneMode = $("#macCloneMode").val();
                var mac = cloneMode == 1 ? $("#mac").val() : cloneMode;
                if (!checkMACStr(mac)) {
                    return false;
                }
                opt.mac = mac;
            }

            var enableDNS = $("#enableDNS").val()*1;
            opt.enableDNS = enableDNS;
            if (enableDNS && wanMode != 3) {
                dns1 = $("#manualDNS1").val();
                dns2 = $("#manualDNS2").val();
                if (dns1 == "0.0.0.0" || dns2 == "0.0.0.0") {
                    getMsg($.t("msgDNSError2"));
                    return false;
                }
                if (!checkIP($("#manualDNS1"), 2) || !checkIP($("#manualDNS2"), 2)) {
                    return false;
                }
            }
            opt.dns1 = dns1;
            opt.dns2 = dns2;

            var enableVlan = $("#enableVlan").val() * 1;
            opt.enableVlan = enableVlan;
            if (enableVlan) {
                var vlanID = $("#vlanID").val();
                if ((!vlanID.length ||(!checkStrnum(vlanID) || vlanID*1 < -1 || vlanID == 1 || vlanID*1 > 4094)) && enableVlan) {
                    getMsg($.t("lblWrongIntnetID"), 1, "#vlanID");
                    return false;
                }
                opt.vlanID = vlanID*1;
            }
        } else {
            opt.enableMtu = 0;
            opt.enableDNS = 0;
            opt.enableMacClone = 0;
            opt.enableVlan = 0;
            opt.dns1 = "";
            opt.dns2 = "";
        }
        setProgressBar(100, $.t("msgWaiting"), $.t("msgRefresh"));
    });

    function getWanVlanInfo() {
        $.when(ajax({url: "terminal.json"}), ajax({url: "network.json"}), ajax({url: "system.json"})).done(function(r0, r1, r2) {
            if (r0[0].error == 0 && r1[0].error == 0 && r2[0].error == 0) {
                var terminals = r0[0].terminals, wan_conf = r1[0].wan, vlan_conf = r1[0].vlan, model = r2[0].ModelName, UsbEnSupport = r2[0].UsbEnSupport;

                if (terminals != null && terminals.length > 0) {
                    var dom = document.createDocumentFragment();
                    terminals.forEach(function(v){
                        if (v.flag.charAt(1) == "T") {
                            var mac = v.mac.toUpperCase();
                            dom.appendChild($("<option value='"+mac+"'>"+mac+"</option>")[0]);
                        }
                    });
                    $("#macCloneMode").append(dom);
                }

                deviceMode = wan_conf.device_mode;
                apDHCP = wan_conf.apsmartdhcp;
                $("#wanMode").val(wan_conf.mode);
                $("#sec_wan_mode").val(wan_conf.second_wan_type);
                $("#wanMode, #sec_wan_type").change();

                if (wan_conf.mode == 2 || wan_conf.mode == 4 || wan_conf.mode == 5 || wan_conf.mode == 6) {
                    // pppoe
                    $("#pppoeUser").val(wan_conf.user);
                    $("#pppoePwd").val(wan_conf.passwd);
                    $("#pppoeServer").val(wan_conf.server);
                    if (wan_conf.mode != 2) {
                        $("#sec_wan_mode").change();
                    }
                } else if (wan_conf.mode == 3) {
                    // static ip
                    $("#wanIP").val(wan_conf.ip);
                    $("#wanMask").val(wan_conf.mask);
                    $("#wanGateway").val(wan_conf.gw);
                    $("#wanDNS1").val(wan_conf.dns1 || "0.0.0.0");
                    $("#wanDNS2").val(wan_conf.dns2 || "0.0.0.0");
                }
                if (wan_conf.second_wan_type != 1) {
                    $("#secWanIP").val(wan_conf.second_wan_ip);
                    $("#secWanMask").val(wan_conf.second_wan_mask);
                }

                // mtu
                $("#enableMtu").prop("checked", (wan_conf.mtu_manual == 1)).change();
                $("#mtu").val(wan_conf.mtu);

                // mac clone
                $("#enableMacClone").prop("checked", (wan_conf.mac_clone == 1)).change();
                var macStr = wan_conf.mac.toUpperCase();
                if ($("#macCloneMode").find("[value='"+macStr+"']").length) {
                    $("#macCloneMode").val(macStr);
                } else {
                    $("#macCloneMode").val(1);
                    $("#mac").val(macStr);
                }
                $("#macCloneMode").change();

                // dns
                $("#enableDNS").prop("checked", (wan_conf.dns_manual == 1)).change();
                if (wan_conf.dns_manual) {
                    $("#manualDNS1").val(wan_conf.dns1 || "0.0.0.0");
                    $("#manualDNS2").val(wan_conf.dns2 || "0.0.0.0");
                }

                // vlan
                $("#enableVlan").prop("checked", (vlan_conf.internetVLANID != -1)).change();
                $("#vlanID").val(vlan_conf.internetVLANID != -1 ? vlan_conf.internetVLANID : 0);

                if (model == "WN586X3A" || model == "WN587X3A") {
                    $("#wanMode").find("[value=5], [value=6]").remove();
                }

                if (UsbEnSupport != 1) {
                    $("#wanMode").find("option[value=11]").remove();
                }
            }
        });
    }
});
