---
hide:
  - navigation
  - toc
---
<style>
        .banner {
            padding: 40px 5% 40px;
            background-size: 100% auto;
            background-repeat: no-repeat;
            background-position:center;
        }
        .search_infoCenter h1{
            font-size: 40px;
            font-weight: 700;
            text-align: center;
            color: #1D428A;
        }
        .search_infoCenter p{
            font-size: 16px;
            font-weight: 400;
            text-align: center;
            color: #1D428A;
            margin-top:10px;
        }
       
        .main>div>div{
            max-width:1440px;
            margin:0 auto;
            padding:50px 0;
        }
        .main>div>div.productMenu{
            padding-bottom: 0;
        }
        .main>div>div>h3{
            text-align: center;
            margin-bottom:30px;
        }
        .main>div>div>h3.main_title{
            margin-bottom:50px;
        }
        .main h3 em.underline{
            display: block;
            width: 80px;
            border-bottom: 2px solid #1D428A;
            margin: 5px auto;
        }
		
		@media screen and (max-width: 1536px){
    .main>div{
        padding:0 24px;
    }
    ul.bookList li.hasImage .image{
        background-size:auto 100%;
    }
	ul.productList{
    display: flex;
    grid-row-gap: 20px;
    flex-wrap: nowrap;
    justify-content: space-between;

	}
	ul.productList li{
		width:180px;
		height:180px;
		border-radius: 2px;
		border: 1px solid rgba(238, 238, 238, 1);
	}

	ul.productList li>a{
		color:#1D428A ;
		text-align: center;
		font-size:16px;
		height:100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: center;
		padding: 20px 10px;
	}
	ul.productList li:hover{
		box-shadow: 0px 0px 8px 0px rgba(54,54,54,0.15);
		transition: all 0.3s;
	}
	ul.productList li:hover a{
		color: #1D428A;
		transition: all 0.3s;
	}
	ul.productList li em{
		display: block;
		width:64px;
		height:64px;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		-webkit-font-smoothing: antialiased;
		-webkit-text-stroke-width: 0.2px;
		-moz-osx-font-smoothing: grayscale;
	}
	ul.productList li span{
		display: inline-block;
		width:100%;
	}

		
    </style>
<div id="mainContainer">
	<div class="bannerContainer">
		<div class="banner">
			<div class="search_infoCenter">
				<h1>Featrue Guide</h1>
				<p>Here is the Feature Guide of wavlink, where you can view all the features of the wavlink device.</p>
				<p>Their functional interfaces are not completely consistent, so we provide classified viewing.</p>
			</div>
		</div>
	</div>
</div>
<div class="main">
	<div>
		<div class="productMenu en">
			<h3>
			Router
			<em class="underline"></em>
			</h3>
		</div>
	</div>
</div>


  <style>
    .grid-container {
	  display: grid;
	  grid-template-columns: repeat(auto-fill, minmax(min(100%, 555px), 1fr));
	  grid-gap: 20px;
	}
    .box {
      width: 100%;
      height: 200px;
      margin: 5px;
	  text-align: left;
	  padding: 14px;
	  font-size: 28px;
	  color: #1D428A;
	  font-weight: bold;
	  border: 1px solid #1D428A;
	  border-radius: 10px;
	  padding-top: 0px;
    }
  </style>
<style>
p {
  margin-top: 0px;
  margin-bottom: 5px;
  font-size: 16px;
}
p:hover {
  text-decoration: underline;
}
h3 {
  padding-top: 5px;
  padding-bottom: 1px;
}
h4 {
  padding-top: 0px;
  padding-bottom: 0px;
}
h2 {
  margin-top: 10px;
  margin-bottom: 10px;
}
.container {
  display: flex;
}

.paragraph {
  width: 50%;
  float: left;
}

</style>
<div class="grid-container">
  <div class="box">
  <h4>Wireless</h4>
  <p><a href="/feature_guide/wireless/">Wireless Settings</a></p>
  <p><a href="/feature_guide/guest_network/">Guest WiFi</a></p>
  </div>
  <div class="box">
  <h4>Parental Control</h4>
  <p><a href="/feature_guide/parental_wifi/">WiFi Scheduling</a></p>
  <p><a href="/feature_guide/parental_ctrl/">Web Block</a></p>
  </div>
</div>
<div class="grid-container">
  <div class="box">
  <h4>VPN</h4>
  <div class="container">
  <p class="paragraph"><a href="/feature_guide/openVPN/">openVPN Client</a></p>
  <p class="paragraph"><a href="/feature_guide/openVPN_server/">openVPN Server</a></p>
  </div>
  <div class="container">
  <p class="paragraph"><a href="/feature_guide/wireguard/">WireGuard Client</a></p>
  <p class="paragraph"><a href="/feature_guide/wireguard_server/">WireGuard Server</a></p>
  </div>
  <div class="container">
  <p class="paragraph"><a href="/feature_guide/openVPN/">VPN Client</a></p>
  <p class="paragraph"><a href="/feature_guide/zerotier/">ZeroTier</a></p>
  </div>
  </div>
  <div class="box">
  <h4>Network</h4>
  <div class="container">
  <p class="paragraph"><a href="/feature_guide/pattern_selection/">Mode selection</a></p>
  </div>
  <div class="container">
  <p class="paragraph"><a href="/feature_guide/wan/">WAN</a></p>
  <p class="paragraph"><a href="/feature_guide/lan/">LAN</a></p>
  </div>
  <div class="container">
  <p class="paragraph"><a href="/feature_guide/ipv6/">IPV6</a></p>
  <p class="paragraph"><a href="/feature_guide/static_ip/">Static IP</a></p>
  </div>
  </div>
</div>
<div class="grid-container">
  <div class="box">
  <h4>Terminal</h4>
  <p><a href="/feature_guide/terminal/">Terminal Management</a></p>
  </div>
  <div class="box">
  <h4>Mesh</h4>
  <p><a href="/feature_guide/mesh_network/">Mesh Network</a></p>
  <p><a href="/feature_guide/mesh_topo/">Mesh Topology</a></p>
  </div>
</div>
<div class="grid-container">
  <div class="box">
  <h4>USB Management</h4>
  <p><a href="/feature_guide/usbdlna/">USB DLNA</a></p>
  <p><a href="/feature_guide/usbprint/">USB Print</a></p>
  </div>
  <div class="box">
  <h4>More</h4>
  <div class="container">
  <p class="paragraph">Time Zone</a></p>
  <p class="paragraph">Led Control</a></p>
  </div>
  <div class="container">
  <p class="paragraph">Change admin password</a></p>
  <p class="paragraph">Backup and Restore</a></p>
  </div>
  <div class="container">
  <p class="paragraph">Firmware Update</a></p>
  <p class="paragraph">Timing Reboot</a></p>
  </div>
  </div>
</div>

<div class="ad-grid-container">
  <div class="ad-box">
  <h4>Advanced</h4>
  <div class="container">
  <p class="paragraph"><a href="/feature_guide/secure/">Security Settings</a></p>
  <p class="paragraph"><a href="/feature_guide/remote_ctrl/">Remote Control</a></p>
  <p class="paragraph">Dynamic DNS</a></p>
  <p class="paragraph"><a href="/feature_guide/dynamic_dns/">Network Diagnostics</a></p>
  <p class="paragraph"><a href="/feature_guide/remote_wakeup/">Remote Wakeup</a></p>
  </div>
  <div class="container">
  <p class="paragraph">Cloud App Settings</a></p>
  <p class="paragraph">UPnP</p>
  <p class="paragraph">Port Forwarding</a></p>
  <p class="paragraph">Hardware NAT Settings</a></p>
  <p class="paragraph">ALG</a></p>
  </div>
  <div class="container">
  <p class="paragraph">DMZ Management</a></p>
  <p class="paragraph">IPTV/VLAN</a></p>
  <p class="paragraph">Custom DNS Server</a></p>
  <p class="paragraph">SQM QOS</a></p>
  <p class="paragraph">AD Guard</a></p>
  </div>
  </div>
</div>


  <style>
    .ad-grid-container {
	  display: grid;
	  grid-template-columns: repeat(auto-fill, minmax(min(100%, 1200px), 1fr));
	  grid-gap: 20px;
	}
    .ad-box {
      width: 100%;
      height: 200px;
      margin: 5px;
	  text-align: left;
	  padding: 14px;
	  font-size: 28px;
	  color: #1D428A;
	  font-weight: bold;
	  border: 1px solid #1D428A;
	  border-radius: 10px;
	  padding-top: 0px;
    }

  </style>


<style>
.shadow-box-wavlink {
  width: fit-content;
  height: fit-content;
  background-color: #fff;
  box-shadow:  0 0 10px rgba(0, 0, 0, 0.5);
  padding: 20px;
  margin: 0 auto; 
  margin-bottom: 20px;
}






<style> 
	.container {
	  display: flex;
	  flex-wrap: wrap;
	  margin: -10px;
	}

	.card {
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 10px;
		border: 10px #1D428A;
		border-radius: 5px;
		margin: 10px;
		width: calc(50% - 20px);
	#	box-shadow: 4px 4px 4px #888888;
	    margin-bottom: 0px;

	}

    .card img {
		width: 200px;
		height: auto;
		margin-right: 10px;
	}

	.card .text {
		margin-left: 50px; /* 调整文字在卡片内的水平位置 */
		margin-right: 50px;
		margin-top: 10px; /* 调整文字距离顶部的距离 */
		margin-bottom: 50px;
	}
</style>
<!--
<div class="container">
	<div class="card">
		<img src="/images/logo001.png" alt="Your Image 1">
		<div class="text">
			<h2><b>Router</b></h2>
			<p><a href="/feature_guide/wireless/"><b>Wireless Settings</b></a></p>
			<p><a href="/feature_guide/guest_network/"><b>Guest WiFi</b></a></p>
		</div>
	</div>
	<div class="card">
		<div class="text">
			<h2><b>Repeater/AP</b></h2>
			<p><a href="/feature_guide/repeaterap_wireless/"><b>Wireless Settings</b></a></p>
		</div>
	</div>
</div>





<div class="container">
	<div class="card">
		<img src="/images/logo004.png" alt="Your Image 1">
		<div class="text">
			<h2><b>Router</b></h2>
			<p><a href="/feature_guide/pattern_selection/"><b>Mode selection</b></a></p>
			<p><a href="/feature_guide/wan/"><b>WAN</b></a></p>
			<p><a href="/feature_guide/lan/"><b>LAN</b></a></p>
			<p><a href="/feature_guide/ipv6/)"><b>IPV6</b></a></p>
			<p><a href="/feature_guide/static_ip/"><b>Static IP</b></a></p>
		</div>
	</div>
	<div class="card">
		<div class="text">
		<h2><b>Repeater/AP</b></h2>
			<p><a href="/FAQ/outdoor_ap_first_time_setup/#section4"><b>Mode selection(Outdoor AP)</b></a></p>
			<p><a href="/FAQ/indoor_ap_first_time_setup/#section4"><b>Mode selection(Indoor Repeater)</b></a></p>
			<p><a href="/feature_guide/repeaterap_wan/"><b>WAN</b></a></p>
			<p><a href="/feature_guide/repeaterap_staticip/"><b>LAN</b></a></p>
			<p><a href="/feature_guide/repeaterap_staticip/"><b>Static IP</b></a></p>
		</div>
	</div>
</div>


<div class="container">
	<div class="card">
		<img src="/images/logo008.png">
		<div class="text">
			<h2><b>Router</b></h2>
			<p><a href="/feature_guide/parental_wifi/"><b>WiFi Scheduling</b></a></p>
			<p><a href="/feature_guide/parental_ctrl/"><b>Web Block</b></a></p>
		</div>
	</div>
</div>


<div class="container">
	<div class="card">
		<img src="/images/logo009.png" alt="Your Image 1">
		<div class="text">
			<h2><b>Router</b></h2>
			<p><a href="/feature_guide/terminal/"><b>Terminal Management</b></a></p>
		</div>
	</div>
	<div class="card">
		<div class="text">
			<h2><b>Repeater</b></h2>
			<p><a href="/feature_guide/repeaterap_terminal/"><b>Terminal Management</b></a></p>
		</div>
	</div>
</div>


<div class="container">
	<div class="card">
		<img src="/images/logo003.png">
		<div class="text">
			<h2><b>Router</b></h2>
			<p><a href="/feature_guide/mesh_network/"><b>Mesh Network</b></a></p>
			<p><a href="/feature_guide/mesh_topo/"><b>Mesh Topology</b></a></p>
		</div>
	</div>
	<div class="card">
		<div class="text">
			<h2><b>Repeater</b></h2>
			<p><a href="/FAQ/outdoor_ap_first_time_setup/#section4"><b>Mesh Network</b></a></p>
			<p><a href="/feature_guide/repeaterap_mesh/"><b>Mesh Topology</b></a></p>

		</div>
	</div>
</div>

<div class="container">
	<div class="card">
		<img src="/images/logo002.png" alt="Your Image 1">
		<div class="text">
			<h2><b>Router</b></h2>
			<p><a href="/feature_guide/openVPN/"><b>openVPN Client</b></a></p>
			<p><a href="/feature_guide/openVPN_server/"><b>openVPN Server</b></a></p>
			<p><a href="/feature_guide/wireguard/"><b>WireGuard Client</b></a></p>
			<p><a href="/feature_guide/wireguard_server/"><b>WireGuard Server</b></a></p>
			<p><a href="/feature_guide/openVPN/"><b>VPN Client</b></a></p>
			<p><a href="/feature_guide/zerotier/"><b>ZeroTier</b></a></p>
		</div>
	</div>
	<div class="card">

		<div class="text">

		</div>
	</div>
</div>




<div class="container">
	<div class="card">
		<img src="/images/logo005.png">
		<div class="text">
			<h2><b>Router</b></h2>
			<p><a href="/feature_guide/usbdlna/"><b>USB DLNA</b></a></p>
			<p><a href="/feature_guide/usbprint/"><b>USB Print</b></a></p>
		</div>
	</div>
	<div class="card">
		<div class="text">
		</div>
	</div>
</div>





<div class="container">
	<div class="card">
		<img src="/images/logo007.png" alt="Your Image 1">
		<div class="text">
			<h2><b>Router</b></h2>
			<p><a href="/feature_guide/secure/"><b>Security Settings</b></a></p>
			<p><a href="/feature_guide/remote_ctrl/"><b>Remote Control</b></a></p>
			<p><a href="/feature_guide/dynamic_dns/"><b>Dynamic DNS</b></a></p>
			<p><a href="/feature_guide/cloud_app/"><b>Cloud App Settings</b></a></p>
			<p><a href="/feature_guide/upnp/"><b>UPnP</b></a></p>
			<p><a href="/feature_guide/port_forwarding/"><b>Port Forwarding</b></a></p>
			<p><a href="/feature_guide/DMZ_Management/"><b>DMZ Management</b></a></p>
			<p><a href="/feature_guide/IPTV_VLAN/"><b>IPTV/VLAN</b></a></p>
			<p><a href="/feature_guide/Hardware/"><b>Hardware NAT Settings</b></a></p>
			<p><a href="/feature_guide/network_diango/"><b>Network Diagnostics</b></a></p>
			<p><a href="/feature_guide/remote_wakeup/"><b>Remote Wakeup</b></a></p>
			<p><a href="/feature_guide/alg/"><b>ALG</b></a></p>
			<p><a href="/feature_guide/cutm_dns-server/"><b>Custom DNS Server</b></a></p>
			<p><a href="/feature_guide/sqm/"><b>SQM QOS</b></a></p>
			<p><a href="/feature_guide/adguard/"><b>AD Guard</b></a></p>
		</div>
	</div>
	<div class="card">
		<div class="text">
			<h2><b>Repeater/AP</b></h2>
			<p><a href="/feature_guide/secure/"><b>Security Settings</b></a></p>
			<p><a href="/feature_guide/remote_ctrl/"><b>Remote Control</b></a></p>
			<p><a href="/feature_guide/port_forwarding/"><b>Port Forwarding</b></a></p>
			<p><a href="/feature_guide/network_diango/"><b>Network Diagnostics</b></a></p>
			<p><a href="/feature_guide/signal_adjustment/"><b>Learn about signal adjustment</b></a></p>
		</div>
	</div>
</div>

<!--
	- __Router__
		- __[Security Settings](/feature_guide/secure/)__ 
		- __[Remote Control](/feature_guide/remote_ctrl/)__ 
		- __[Dynamic DNS](/feature_guide/dynamic_dns/)__ 
		- __[Cloud App Settings](/feature_guide/cloud_app/)__ 
		- __[UPnP](/feature_guide/upnp/)__ 
		- __[Port Forwarding](/feature_guide/port_forwarding/)__ 
		- __[DMZ Management](/feature_guide/DMZ_Management/)__ 
		- __[IPTV/VLAN](/feature_guide/IPTV_VLAN/)__ 
		- __[Hardware NAT Settings](/feature_guide/Hardware/)__ 
		- __[Network Diagnostics](/feature_guide/network_diango/)__ 
		- __[Remote Wakeup](/feature_guide/remote_wakeup/)__ 
		- __[ALG](/feature_guide/alg/)__ 
		- __[Custom DNS Server](/feature_guide/cutm_dns-server/)__ 
		- __[SQM QOS](/feature_guide/sqm/)__ 
		- __[USB Management](/feature_guide/usb/)__ 
		- __[AD Guard](/feature_guide/adguard/)__
	- __Repeater/AP__
		- __[Security Settings](/feature_guide/secure/)__ 
		- __[Remote Control](/feature_guide/remote_ctrl/)__ 
		- __[Port Forwarding](/feature_guide/port_forwarding/)__ 
		- __[Network Diagnostics](/feature_guide/network_diango/)__ 
		- __[Learn about signal adjustment](/feature_guide/signal_adjustment/)__
## More

-->
<!--
<div class="container">
	<div class="card">
		<img src="/images/logo006.png" alt="Your Image 1">
		<div class="text">
			<h2><b>Router</b></h2>
			<p><a href="/feature_guide/time/"><b>Time Zone</b></a></p>
			<p><a href="/feature_guide/led_ctrl/"><b>Led Control</b></a></p>
			<p><a href="/feature_guide/password_admin/"><b>Change admin password</b></a></p>
			<p><a href="/feature_guide/backup/"><b>Backup and Restore</b></a></p>
			<p><a href="/feature_guide/firmware/"><b>Firmware Update</b></a></p>
			<p><a href="/feature_guide/timing_reboot/"><b>Timing Reboot</b></a></p>
			<p><a href="/feature_guide/router_reboot/"><b>Router Reboot</b></a></p>
		</div>
	</div>
	<div class="card">
		
		<div class="text">
			<h2><b>Rpeater/AP</b></h2>
			<p><a href="/feature_guide/time/"><b>Time Zone</b></a></p>
			<p><a href="/feature_guide/led_ctrl/"><b>Led Control</b></a></p>
			<p><a href="/feature_guide/password_admin/"><b>Change admin password</b></a></p>
			<p><a href="/feature_guide/backup/"><b>Backup and Restore</b></a></p>
			<p><a href="/feature_guide/firmware/"><b>Firmware Update</b></a></p>
			<p><a href="/feature_guide/timing_reboot/"><b>Timing Reboot</b></a></p>
			<p><a href="/feature_guide/router_reboot/"><b>Router Reboot</b></a></p>
		</div>
	</div>
</div>

-->
<!--
		- __[Time Zone](/feature_guide/time/)__ 
		- __[Led Control](/feature_guide/led_ctrl/)__
		- __[Change admin password](/feature_guide/password_admin/)__ 
		- __[Backup and Restore](/feature_guide/backup/)__ 
		- __[Firmware Update](/feature_guide/firmware/)__ 
		- __[Timing Reboot](/feature_guide/timing_reboot/)__ 
		- __[Router Reboot](/feature_guide/router_reboot/)__ 
	- __Repeater/AP__		
		- __[Time Zone](/feature_guide/repeaterap_timezone/)__ 
		- __[Led Control](/feature_guide/repeaterap_led/)__
		- __[Change admin password](/feature_guide/repeaterap_admin/)__ 
		- __[Backup and Restore](/feature_guide/repeaterap_backup/)__
		- __[Firmware Update](/feature_guide/repeaterap_firmware/)__
		- __[Timing Reboot](/feature_guide/repeaterap_timing/)__
		- __[Router Reboot](/feature_guide/repeaterap_reboot_logout/)__ 
-->


<style>
.rectangle {
  width: 100%;
  height: 500px;
  background-color: #1D428A;
  text-align: center; /* 将文本居中对齐 */
  line-height: 1904px; /* 设置行高与长方形的高度相同 */
  color: #FFF; /* 设置文本颜色为白色 */
  font-size: 24px; /* 设置字体大小 */
}

</style>




-->





---