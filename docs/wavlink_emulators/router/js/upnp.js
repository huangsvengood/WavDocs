$(document).ready(function(){
    getUpnpRule();

    $("#setUpnp").on("click", function(){
        startLoading(2000, $.t("btnSaveName"));
    });
    $("#reloadUpnpList").on("click", function(){
        startLoading(2000, $.t("msgWaiting"));
        getUpnpRule();
    });
    $(".depart-line[data-toggle='collapse']").on("click", function(){
        var target = $(this);
        $(this).find(".glyphicon").attr("class", function(i, v){
            return target.hasClass("collapsed") ? v.replace("right", "down") : v.replace("down", "right");
        });
    });

    function getUpnpRule() {
        ajax({
            url: "network.json",
            success: function(data) {
                if (data.error == 0) {
                    var upnp = data.upnp;
                    $("#enableUpnp").prop("checked", upnp.enable == 1).change();
                    $("#upnpListNum").text(upnp.number);
                    var dom = document.createDocumentFragment();

                    upnp.route.forEach(function(v){
                        dom.appendChild($("<tr><td>"+v.desc+"</td><td>"+v.proto+"</td><td>"+v.external_port+"</td>\
                                           <td>"+v.internal_port+"</td><td>"+v.internal_ip+"</td></tr>")[0]);
                    });

                    $("#upnpList").html(dom);
                } else {
                    locationUrl(data.error);
                }
            }
        });
    }
});
