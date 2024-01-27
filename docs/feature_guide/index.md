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
				<h1>Feature Guide</h1>
				<p class="no-hover">Here is the Feature Guide of wavlink, where you can view all the features of the wavlink device.</p>
				<p class="no-hover">Their functional interfaces are not completely consistent, so we provide classified viewing.</p>
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
p.no-hover:hover {
  text-decoration: none;
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
  <p class="paragraph"><a href="/feature_guide/openVPN/">OpenVPN Client</a></p>
  <p class="paragraph"><a href="/feature_guide/openVPN_server/">OpenVPN Server</a></p>
  </div>
  <div class="container">
  <p class="paragraph"><a href="/feature_guide/wireguard/">WireGuard Client</a></p>
  <p class="paragraph"><a href="/feature_guide/wireguard_server/">WireGuard Server</a></p>
  </div>
  <div class="container">
  <p class="paragraph"><a href="/feature_guide/vpnclient/">VPN Client</a></p>
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
  <p class="paragraph"><a href="/feature_guide/time/">Time Zone</a></p>
  <p class="paragraph"><a href="/feature_guide/led_ctrl/">Led Control</a></p>
  </div>
  <div class="container">
  <p class="paragraph"><a href="/feature_guide/password_admin/">Change admin password</a></p>
  <p class="paragraph"><a href="/feature_guide/backup/">Backup and Restore</a></p>
  </div>
  <div class="container">
  <p class="paragraph"><a href="/feature_guide/firmware/">Firmware Update</a></p>
  <p class="paragraph"><a href="/feature_guide/router_reboot/">Timing Reboot</a></p>
  </div>
  </div>
</div>

<div class="ad-grid-container">
  <div class="ad-box">
  <h4>Advanced</h4>
  <div class="container">
  <p class="paragraph"><a href="/feature_guide/secure/">Security Settings</a></p>
  <p class="paragraph"><a href="/feature_guide/remote_ctrl/">Remote Control</a></p>
  <p class="paragraph"><a href="/feature_guide/dynamic_dns/">Dynamic DNS</a></p>
  <p class="paragraph"><a href="/feature_guide/network_diango/">Network Diagnostics</a></p>
  <p class="paragraph"><a href="/feature_guide/remote_wakeup/">Remote Wakeup</a></p>
  </div>
  <div class="container">
  <p class="paragraph"><a href="/feature_guide/cloud_app/">Cloud App Settings</a></p>
  <p class="paragraph"><a href="/feature_guide/upnp/">UPnP</p>
  <p class="paragraph"><a href="/feature_guide/port_forwarding/">Port Forwarding</a></p>
  <p class="paragraph"><a href="/feature_guide/Hardware/">Hardware NAT Settings</a></p>
  <p class="paragraph"><a href="/feature_guide/alg/">ALG</a></p>
  </div>
  <div class="container">
  <p class="paragraph"><a href="/feature_guide/DMZ_Management/">DMZ Management</a></p>
  <p class="paragraph"><a href="/feature_guide/IPTV_VLAN/">IPTV/VLAN</a></p>
  <p class="paragraph"><a href="/feature_guide/cutm_dns-server/">Custom DNS Server</a></p>
  <p class="paragraph"><a href="/feature_guide/sqm/">SQM QOS</a></p>
  <p class="paragraph"><a href="/feature_guide/adguard/">AD Guard</a></p>
  </div>
  </div>
</div>




<div class="main">
	<div>
		<div class="productMenu en">
			<h3>
			Reapeter
			<em class="underline"></em>
			</h3>
		</div>
	</div>
</div>





<div class="grid-container">
  <div class="box">
  <h4>Wireless</h4>
  <p><a href="/feature_guide/repeaterap_wireless/">Wireless Settings</a></p>
  </div>
  <div class="box">
  <h4>Network</h4>
  <div class="container">
  <p class="paragraph"><a href="/FAQ/indoor_repeater_first_time_setup/#section3">Mode selection</a></p>
  <p class="paragraph"><a href="/feature_guide/repeaterap_wan/">WAN</a></p>
  </div>
  <div class="container">
  <p class="paragraph"><a href="/feature_guide/repeaterap_lan/">LAN</a></p>
  <p class="paragraph"><a href="/feature_guide/repeaterap_staticip/">Static IP</a></p>
  </div>
  </div>
</div>
<div class="grid-container">
  <div class="box">
  <h4>Terminal</h4>
  <p><a href="/feature_guide/repeaterap_terminal/">Terminal Management</a></p>
  </div>
  <div class="box">
  <h4>Mesh</h4>
  <div class="container">
  <p class="paragraph"><a href="/FAQ/indoor_repeater_first_time_setup/#section3">Mesh Network</a></p>
  <p class="paragraph"><a href="/feature_guide/repeaterap_mesh/">Mesh Topology</a></p>
  </div>
  </div>
</div>
<div class="ad-grid-container">
  <div class="ad-box">
  <h4>More</h4>
  <div class="container">
  <p class="paragraph"><a href="/feature_guide/repeaterap_security/">Security Settings</a></p>
  <p class="paragraph"><a href="/feature_guide/repeaterap_remotecontrol/">Remote Control</a></p>
  <p class="paragraph"><a href="/feature_guide/repeaterap_networkdiagnostics/">Network Diagnostics</a></p>
  <p class="paragraph"><a href="/feature_guide/repeaterap_timezone/">Time Zone</a></p>
  </div>
  <div class="container">
  <p class="paragraph"><a href="/feature_guide/cloud_app/">Led Control</a></p>
  <p class="paragraph"><a href="/feature_guide/upnp/">Change admin password</p>
  <p class="paragraph"><a href="/feature_guide/port_forwarding/">Backup and Restore</a></p>
  <p class="paragraph"><a href="/feature_guide/Hardware/">Firmware Update</a></p>
  </div>
  <div class="container">
  <p class="paragraph"><a href="/feature_guide/alg/">Timing Reboot</a></p>
  <p class="paragraph"><a href="/feature_guide/DMZ_Management/">Router Reboot</a></p>
  <p class="paragraph"><a href="/feature_guide/signal_adjustment/">Singal Adjustment</a></p>
  <p class="paragraph"></a></p>
  </div>
  </div>
</div>




<div class="main">
	<div>
		<div class="productMenu en">
			<h3>
			AP
			<em class="underline"></em>
			</h3>
		</div>
	</div>
</div>


<div class="grid-container">
  <div class="box">
  <h4>Wireless</h4>
  <p><a href="/feature_guide/repeaterap_wireless/">Wireless</a></p>
  </div>
  <div class="box">
  <h4>Network</h4>
  <div class="container">
  <p class="paragraph"><a href="/feature_guide/time/">WAN</a></p>
  <p class="paragraph"><a href="/feature_guide/led_ctrl/">LAN</a></p>
  </div>
  <div class="container">
  <p class="paragraph"><a href="/feature_guide/password_admin/">Static IP</a></p>
  <p class="paragraph"><a href="/feature_guide/backup/">Backup and Restore</a></p>
  </div>
  <div class="container">
  <p class="paragraph"><a href="/feature_guide/firmware/">Firmware Update</a></p>
  <p class="paragraph"><a href="/feature_guide/router_reboot/">Timing Reboot</a></p>
  </div>
  </div>
</div>
<div class="grid-container">
  <div class="box">
  <h4>Terminal</h4>
  <p><a href="/feature_guide/repeaterap_terminal/">Terminal Management</a></p>
  </div>
  <div class="box">
  <h4>Mesh</h4>
  <div class="container">
  <p class="paragraph"><a href="/FAQ/outdoor_ap_first_time_setup/#section3">Mesh Network</a></p>
  <p class="paragraph"><a href="/feature_guide/repeaterap_mesh/">Mesh Topology</a></p>
  </div>
  </div>
</div>
<div class="ad-grid-container">
  <div class="ad-box">
  <h4>More</h4>
  <div class="container">
  <p class="paragraph"><a href="/feature_guide/repeaterap_security/">Security</a></p>
  <p class="paragraph"><a href="/feature_guide/repeaterap_remotecontrol/">Remote Control</a></p>
  <p class="paragraph"><a href="/feature_guide/repeaterap_networkdiagnostics/">Network Diagnostics</a></p>
  <p class="paragraph"><a href="/feature_guide/repeaterap_timezone/">Time Zone</a></p>
  </div>
  <div class="container">
  <p class="paragraph"><a href="/feature_guide/cloud_app/">Led Control</a></p>
  <p class="paragraph"><a href="/feature_guide/upnp/">Change admin password</p>
  <p class="paragraph"><a href="/feature_guide/port_forwarding/">Backup and Restore</a></p>
  <p class="paragraph"><a href="/feature_guide/Hardware/">Firmware Update</a></p>
  </div>
  <div class="container">
  <p class="paragraph"><a href="/feature_guide/alg/">Timing Reboot</a></p>
  <p class="paragraph"><a href="/feature_guide/DMZ_Management/">Router Reboot</a></p>
  <p class="paragraph"><a href="/feature_guide/signal_adjustment/">Singal Adjustment</a></p>
  <p class="paragraph"></a></p>
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












---