
# Mode selection
--- 

The travel router supports free switching among __router mode, AP mode and repeater mode__. The __default mode__ of the device is __router mode__. To switch the mode, you need to log in to the device management interface and click __"More Settings > Network > Mode Selection"__ to switch the device usage mode.

<div style="text-align: center;">
    <img class="boxshadow" src="/images/modeselesction01.png">
</div>

## __Router Mode__

Convert the wired network of the network provider into a Wi-Fi signal to realize the functions of wireless Internet access and wired Internet access.

The router mode does not require additional settings. The device is in router mode after initialization. If you need to set the Internet VLAN ID, you can set it on this page.

<div style="text-align: center;">
    <img class="boxshadow" src="/images/modeselesction02.png">
</div>

???+ abstract "WAN Type"
	__DHCP__ : If your network service provider provides you with the automatic allocation function, please choose this Internet access method.

	<div style="text-align: center;">
		<img class="boxshadow" src="/images/mode03.png">
	</div>
	
	__PPPOE__ : If your network service provider provides you with a set of user names (accounts) and passwords, please choose this Internet access method.

	<div style="text-align: center;">
		<img class="boxshadow" src="/images/modepppoe.png">
	</div>
	
	__Static IP__ : If your network service provider provides you with a specific set of IP parameters, including IP address, subnet mask, gateway, DNS1, DNS2. Please choose this Internet access method.
	
	<div style="text-align: center;">
		<img class="boxshadow" src="/images/modestaticip.png">
	</div>
	
	!!! note
		If you do not know how to select an Internet access mode, you only need to connect the upper-layer network cable to the WAN port. Then the device automatically checks the Internet access mode on this page.
	
	__Internet VLAN ID__ : The Internet ID is used to identify the characteristics of network data. For specific settings, please consult your network operator's customer service personnel or operation and maintenance personnel.

	__Cloud App__ : By enabling this feature, you can remotely control the device from the cloud through the app.

	__Auto Mesh__ : Mesh router in the case of networking can achieve automatic switching of primary and secondary routes according to the Internet access. If you need to set this router as the primary routing mode to achieve secondary routing and other environments, please turn off the Auto Mesh Switching.

	__Auto DHCP Service__ : Turn on this feature, the router will automatically configure IP service when no higher-level device is connected. If you do not need to configure IP automatically, you can turn off this feature.








## __AP Mode__
<p class="text">
When extending an existing network in AP mode, please make sure that the WAN port of this device is connected to the network via a cable. Please note that some functions may not be available in this mode, please refer to the on-screen display for details.
</p>
<div style="text-align: center;">
    <img class="boxshadow" src="/images/modeselesction03.png">
</div>
!!! note 
	If you need to set up the device after successfully connecting to the superior in this mode, you need to connect to the Wi-Fi of the device and enter the setting page through __http://wavlogin.link/__.

## __Repeater Mode__

To use the relay mode, you need to unplug the network cable of the WAN port. After unplugging the network cable, click __"Next"__ and wait for scanning for WiFi that can be relayed.

<div style="text-align: center;">
    <img class="boxshadow" src="/images/modeselection04.png">
</div>

!!! danger ""
	For detailed steps on WiFi relay, please click "__[How to relay WiFi](/FAQ/How_to_relay_WiFi/).__"
__Bridge__ :  This mode can relay any wireless network signal, but does not have DHCP service function. IP is managed by the upper device. Select the wireless signal you want to relay and enter the password of the relay signal. Note that if you need to set up this device after successful relay in this mode, you need to pass through __http://wavlogin.link/__ Enter the settings page.

__WISP__ :  Wireless local area network operators can relay any wireless network signal. This mode has DHCP service function and is in different network segments with superior devices, which can manage device IP allocation. It is recommended that you select this relay mode, select the wireless signal you want to relay, and enter the password of the relay signal.

???+ abstract "Note"
	If you need to disconnect the relay mode, switch to other Internet access methods; if you need to connect to other wifi, click __"More Settings > Network > Mode Selection"__, select the relay mode and click __"Next"__ to relay other wifi. Historical relay wifi can be viewed in the list of connected wireless networks.




---