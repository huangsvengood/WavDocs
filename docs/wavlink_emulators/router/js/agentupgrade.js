$(document).ready(function(){
    var ota;
    FwUpgradeInit();

	$("#upgradeConfirm").on("click", function(){
		$("#upgradeModal").modal("hide");
        var file = $("#selectedFile")[0].files;
		if (file.length == 0) {
			getMsg($.t("msgUpgradeFirmwareText2"));
			return false;
		}
		if (file[0].name.indexOf($("#ModelNameVal").val()) == -1 || !file[0].name.endsWith(".bin")) {
			getMsg($.t("msgUpgradeFirmwareText1"));
			return false;
		}
        setProgressBar(100, $.t("msgWaiting"), $.t("msgRefresh"));
	});

	$("#checkOTABtn").on("click", function(){
        if ($(this).text() == $.t("btnCheckNewVersion")) {
            startLoading(4000, $.t("btnCheckingNewVersion"));
            if (ota.version) {
                $("#fwNewVersion").val(ota.version);
                $("#checkOTABtn").text($.t("btnOneClickUpgrade"));
                $("#NewVersionInfo").html(ota.version_info);
                $("#foundNewVersion").show();
            }
        } else {
            setProgressBar(100, $.t("msgWaiting"), $.t("msgRefresh"));
        }
	});

    function FwUpgradeInit() {
        ajax({
            url: "system.json",
            success: function(data){
                if (data.error == 0) {
                    ota = data.agent_ota;
                    $("#fwVersion").val(data.sys.sdkVersion);
                    $("#ModelNameVal").val(data.sys.model);
                }
            }
        });
    }
});