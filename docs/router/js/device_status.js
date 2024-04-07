$(document).ready(function(){
    getSystemInfo();
    getWanLanInfo();
    getWifiInfo();

    function getSystemInfo() {
        ajax({
            url: "system.json",
            success: function(data){
                if (data.error == 0) {
                    $("#upTime").text(formatSeconds(data.time.ontime));
                    switch (opMode)
                    {
                        case 0:
                        default:
                            $("#deviceMode").text($.t("lblRouterMode"));
                            break;
                        case 1:
                            $("#deviceMode").text($.t("lblAPMode"));
                            break;
                        case 2:
                            $("#wanInfo, #lanInfo").hide();
                            $("#deviceMode").text($.t("lblRep") + "(" + $.t("lblBridgerMode") + ")");
                            break;
                        case 3:
                            $("#deviceMode").text($.t("lblRep") + "(" + $.t("lblWISPMode") + ")");
                            break;
                    }
                    if (data.sys.MeshBridgeMode == 1) {
                        $("#wanInfo, #lanInfo").hide();
                    }
                    $("#version").html(data.sys.sdkVersion);
                } else {
                    locationUrl(data.error);
                }
            }
        });
    }

    function getWanLanInfo() {
        ajax({
            url: "network.json",
            success: function(data){
                if (data.error == 0) {
                    var wan = data.wan, lan = data.lan;
                    $("#wanStatus").text(wan.link ? $.t("lblOnline") : $.t("lblOffline"));
                    $("#wanIP").text(wan.ip);
                    $("#wanGateway").text(wan.gateway);
                    $("#wanMac").text(wan.mac.toUpperCase());
                    switch (wan.mode)
                    {
                        case 1:
                        default:
                            $("#wanType").text($.t("lblDHCP"));
                            break;
                        case 2:
                            $("#wanType").text($.t("lblPPPOE"));
                            break;
                        case 3:
                            $("#wanType").text($.t("lblStaticIp"));
                            break;
                        case 4:
                            $("#wanType").text("PPPOE Dual Access");
                            break;
                        case 5:
                            $("#wanType").text("PPTP Dual Access");
                            break;
                        case 6:
                            $("#wanType").text("L2TP Dual Access");
                            break;
                    }

                    $("#lanIP").text(lan.ip);
                    $("#lanMac").text(lan.mac.toUpperCase());

                    if (opMode == 2 || opMode == 3) {
                        var rep = data.rep;
                        $("#repconnectssid").text(rep.ssid);
                        $("#repconnectstatus").text(rep.connect == 1 ? $.t("lblOnline") + "(" + rep.signal + ")" : $.t("lblOffline"));
                        $("#repconnectinfo").show();
                    }
                } else {
                    locationUrl(data.error);
                }
            }
        });
    }

    function getWifiInfo() {
        ajax({
            url: "wifi.json",
            success: function(data){
                if (data.error == 0) {
                    var wifi2 = data.wifi2, wifi5 = data.wifi5;
                    $("#ssid2").text(wifi2.ssid);
                    $("#mode2").text(wifi2.mode);
                    $("#channel2").text(!wifi2.channel ? $.t("lblChannelAuto") + " (" + wifi2.auto_channel + ")"
                                        : wifi2.channel);
                    $("#mac2").text(wifi2.mac);
                    $("#ssid5").text(wifi5.ssid);
                    $("#mode5").text(wifi5.mode);
                    $("#channel5").text(!wifi5.channel ? $.t("lblChannelAuto") + " (" + wifi5.auto_channel + ")"
                                        : wifi5.channel);
                    $("#mac5").text(wifi5.mac);
                } else {
                    locationUrl(data.error);
                }
            }
        });
    }
});
