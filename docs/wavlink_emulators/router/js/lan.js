$(document).ready(function(){
    getLanDHCP();

    $("#enableDHCP").on("change", function(){
        $(".form-control").prop("disabled", !$(this).is(":checked"));
    });

    $("#lanIP, #lanMask").on("blur", function(){
        var ip = $("#lanIP").val();
        var mask = $("#lanMask").val();
        var netAddr = getNetAddr(ip, mask);
        var hostNum = getHostNum(mask);
        netAddr = ipToNumber(netAddr);
        var minIP = netAddr + 2;
        var maxIP = netAddr + hostNum - 2;
        minIP = numberToIP(minIP);
        maxIP = numberToIP(maxIP);
        $("#lanStartIP").val(minIP);
        $("#lanEndIP").val(maxIP);
    });

    $("#setLan").on("click", function(){
        var enable = $("#enableDHCP").val();
        var ip = $("#lanIP").val();
        var mask = $("#lanMask").val();
        var start = $("#lanStartIP").val();
        var end = $("#lanEndIP").val();
        var leaseTime = $("#lanLeaseTime").val();
        if (!(1<=ip.split(".")[0]*1 && ip.split(".")[0]*1<=223)) {
            getMsg($.t("msgIpError4"), 2, "#lanIP");
            return false;
        } else if (ip.split(".")[3]*1 == 0 || ip.split(".")[3]*1 == 255) {
            getMsg($.t("msgIpError5"), 1, "#lanIP");
            return false;
        }
        if (ip == start) {
            getMsg($.t("msgStartIpError3"), 1, "#lanIP");
            return false;
        }
        if (ip == end) {
            getMsg($.t("msgEndIpError3"), 1, "#lanIP");
            return false;
        }
        if (checkIP2($("#lanIP"), 1) && checkIP2($("#lanMask"), 0)
            && checkIP2($("#lanStartIP"), 2) && checkIP2($("#lanEndIP"), 3)) {
            if (checkIPInRange(ip, mask, start, $("#lanStartIP")) && checkIPInRange(ip, mask, end, $("#lanEndIP"))) {
                if (start.split(".")[3]*1 > end.split(".")[3]*1) {
                    getMsg($.t("msgStartIpError1"));
                    return false;
                }
                setProgressBar(500, $.t("msgWaiting"), $.t("msgRefresh"));
            }
        }
    });

    function getLanDHCP() {
        ajax({
            url: "network.json",
            success: function(data) {
                if (data.error == 0) {
                    var lan = data.lan;
                    $("#enableDHCP").prop("checked", (lan.enable == 1)).change();
                    $("#lanIP").val(lan.ip);
                    $("#lanMask").val(lan.mask);
                    $("#lanStartIP").val(lan.start);
                    $("#lanEndIP").val(lan.end);
                    $("#lanLeaseTime").val(lan.leaseTime);
                } else {
                    locationUrl(data.error);
                }
            }
        });
    }
});
