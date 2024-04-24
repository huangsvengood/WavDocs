$(document).ready(function(){
    var old_vlanEnable = 0;

    getVlanInfo();

    $("#enableIptv").on("change", function(){
        $(this).is(":checked") ? $(this).parents(".form-group").next().show()
        : $(this).parents(".form-group").next().hide();
    });
    $("#iptvMode").on("change", function(){
        if ($(this).val() == 0) {
            $("#vlanInfo").hide();
            $("#igmpInfo").show();
        } else {
            $("#igmpInfo").hide();
            $("#vlanInfo").show();
        }
    });
    $("#setVlan").on("click", function(){
        var enable = $("#enableIptv").val()*1;
        if (enable == 0 && old_vlanEnable == 0) {
            getMsg($.t("lblWrongVlanEnable"));
            return false;
        }
        var igmpProxyStatus = -1, vlanid1 = 0, vlanid1Port = 0, vlanid2 = 0, vlanid2Port = 0;

        if (enable == 1) {
            var iptvMode = $("#iptvMode").val();
            if (iptvMode == 0) {
                igmpProxyStatus = $("#igmpProxy").val();
            } else {
                vlanid1 = $("#VLANID1").val();
                vlanid1Port = $("#VLAN1PORT").val();
                vlanid2 = $("#VLANID2").val();
                vlanid2Port = $("#VLAN2PORT").val();

                if (vlanid1Port == null || vlanid2Port == null) {
                    getMsg($.t("lblWrongPort"));
                    return false;
                }

                if (vlanid1 == "" || !checkStrnum(vlanid1) || vlanid1 < 0 || vlanid1 == 1 || vlanid1 == 2 || vlanid1 > 4094) {
                    getMsg($.t("lblWrongVlanID"), 2, $("#VLANID1"));
                    return false;
                }

                if (vlanid2 == "" || !checkStrnum(vlanid2) || vlanid2 < 0 || vlanid2 == 1 || vlanid2 == 2 || vlanid2 > 4094) {
                    getMsg($.t("lblWrongVlanID"), 2, $("#VLANID2"));
                    return false;
                }

                if (vlanid1 == 0 && vlanid2 == 0) {
                    getMsg($.t("lblIptvAtleast"));
                    return false;
                }
            }
        }
        setProgressBar(550, $.t("msgWaiting"), $.t("msgRefresh"));
    });

    function getVlanInfo() {
        ajax({
            url: "network.json",
            success: function(data) {
                if (data.error == 0) {
                    var vlan = data.vlan;
                    old_vlanEnable = vlan.enable;
                    $("#enableIptv").prop("checked", old_vlanEnable == 1).change();
                    $("#igmpProxy").val(old_vlanEnable == 0 ? 1 : vlan.igmpproxy_status);

                    var lanPortList = document.createDocumentFragment();
                    var port = (vlan.switchType == 2 ? [3,2,1,0] : (vlan.switchType == 1 ? [3,2] : [0]));
                    if (vlan.switchType == 0) {
                        lanPortList.appendChild($("<option value=0 selected>LAN</option>")[0]);
                    } else {
                        port.forEach(function(v) {
                            lanPortList.appendChild($("<option value=" + v + " selected>LAN" + (4-v) + "</option>")[0]);
                        });
                    }
                    $("#VLAN1PORT, #VLAN2PORT").html(lanPortList);

                    $("#VLANID1").val(vlan.VLAN1ID);
                    $("#VLAN1PORT").val(vlan.VLAN1PORT);
                    $("#VLANID2").val(vlan.VLAN2ID);
                    $("#VLAN2PORT").val(vlan.VLAN2PORT);

                    $("#iptvMode").val((vlan.VLAN1ID == 0 && vlan.VLAN2ID == 0) ? 0 : 1).change();
                } else {
                    locationUrl(data.error);
                }
            }
        });
    }
});
