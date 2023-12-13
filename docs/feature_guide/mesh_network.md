<!--<style>
    .text {
        font-size: 21px; 
    }
</style>
-->
---
??? note "Click to see how to enter the Mesh Table Settings interface"
	<img src="/images/weizhi01.png" width="15" height="15">&nbsp;In the upper right corner of the admin page ➡ More Settings ➡ Mesh Network ➡ Mesh Table
	<div style="text-align: center;">
    <img class="boxshadow" src="/images/mesh001.png">
	</div>


Mesh networks are widely used in many application scenarios, such as smart homes, Internet of Things, urban coverage, industrial automation, etc. It provides a __resilient__, __reliable__ and __flexible__ network solution suitable for environments that require a high degree of interconnectivity and self-organization.


Generally speaking, a Mesh router device supports up to __7 (including existing device mesh devices)__. So if you need to add more mesh devices to create a more powerful network in your home, you can simply pair your new mesh devices with your existing network.

<div style="text-align: center;">
	<img class="boxshadow" src="/images/meshtopo.jpg">
</div>
!!! note ""
	__==Application introduction== :__

	In the factory state, __the Mesh routing set has no master or slave__. __Choose any router to power on__, __connect the Wan port to the Ethernet cable__, and the networking configuration method is the same as that of other routers .

	The steps for setting up Mesh routing networking are basically the same. This article takes one of the wavlink mesh packages as an example to introduce the Mesh routing networking setting method in detail. The setting methods for other Mesh routing are the same.

### __Setting method__

1 . __Select any router in the set to power on__, and __connect the Ethernet cable to the wan port__.

<div style="text-align: center;">
	<img class="boxshadow" src="/images/mesh005.png">
</div>

2 . After connecting the line, please confirm that the corresponding interface __(wan port)__ indicator light is __always on or flashing__.
!!! info "Warm reminder"
	The default wireless signal name of the router can be found in the __user manual__. If you use a laptop, mobile phone or other wireless terminal to set up the router, please connect to the signal and follow the next step.3 . After entering the website, the password for the first login page is the default password, which is admin. After entering the default password, press the "__Enter__" key on the keyboard or click "__Login__" with the mouse.		
3 . Open the browser, clear the address bar and enter the router's management address: __http://wavlogin.link__. After logging in, click "__Login Now__" to enter the initial configuration interface.

<div style="text-align: center;">
	<img class="boxshadow" src="/images/meshlogin.png">
</div>
		
4 . After entering the initial configuration interface, the device system will automatically detect the Internet connection method for you. The Internet connection method defaults to DHCP. If you need to change the Internet connection method, please click the information box below.

<div style="text-align: center;">
<img class="boxshadow" src="/images/step9.png">
</div>
<div style="text-align: center;">
<img class="boxshadow" src="/images/internet.png">
</div>
		
??? info "Please click here to switch the Internet connection method"
	After entering the initial configuration page, you need to choose a internet connection method. __[DHCP](/Encyclopedia/dhcp/)__ is selected by default. If you need to connect to the Internet through dial-up, please choose __[PPPOE](/Encyclopedia/pppoe/)__. If you need to configure a static IP, please choose __[Static IP](/Encyclopedia/static_ip/)__. We have three internet connection methods. A link description is attached below, you can click on the link for details.
		
	__PPPOE__
				
	__Username and password provided by the service provider (ISP)__ : The account name and password usually provided to you by the ISP for establishing a PPPoE connection.
	<div style="text-align: center;">
	<img class="boxshadow" src="/images/step91.png">
	</div>
				
	__Static IP__
				
	__IP Address__ : You need to assign a static IP address to your device. Make sure the IP address is unique on your network and is on the correct subnet.
				
	__Subnet Mask__ : Determine the subnet mask you use. A common subnet mask is 255.255.255.0.
				
	__Default gateway__ : Enter the default gateway IP address of your network device (check the user manual).
				
	__DNS server__ : You can use the DNS server provided by your ISP, or choose another public DNS server, such as Google DNS (8.8.8.8) or Cloudflare DNS (1.1.1.1).
	<div style="text-align: center;">
	<img class="boxshadow" src="/images/step92.png">
	</div>
				
				
	- __[Internet VLAN ID](/Encyclopedia/vlan_id/)__ : Some ISPs require users to set a VLAN ID on the router before they can access the Internet. If you find that dialing fails or obtaining an IP from the ISP fails, please check whether you need to set a VLAN ID.
				
	- __[Auto Mesh](/Encyclopedia/mesh/)__ : If this function is turned on, the device will automatically switch to Mesh Router or Mesh node mode depending on your network topology. If it is turned off, the device will remain fixed in Mesh Router mode.
	!!! info "Please click on the link below to learn more"
		__[Differences in Internet access methods.Which Internet method should I choose?](/FAQ/wan_mode/)__
5 . After selecting the Internet access method, enter the basic configuration (time zone, country, WiFi name, etc.) interface, select your country and time zone, and customize your WiFi name, password, and device management password (it is recommended that you use a strong password : The password contains uppercase and lowercase letters, numbers, and special symbols such as " @, ?, * ", etc.). 
<div style="text-align: center;">
<img class="boxshadow" src="/images/time.png">
</div>
		
Please remember the password you set. After the configuration is completed and the interface is refreshed, you will use your customized password to log in to the management interface again.
??? tip "Device management password"
	__Device management password__ : You can set it the same as the wireless password, or you can turn off the button to set the device management password and wireless password separately.
	<div style="text-align: center;">
	<img class="boxshadow" src="/images/step10.png">
	</div>
6 . After setting, click Save and wait for the device configuration to be completed. After the Refresh button appears, click __Refresh__ to complete the initial setting of the device.
		
<div style="text-align: center;">
<img class="boxshadow" src="/images/refresh.png">
</div>
??? info "App Download"
	Scan the QR code with your mobile phone to download the Wav router app and manage your device conveniently.
7 . After clicking Refresh, you need to re-enter the login password. This login password is the password you customized. After entering the password, click Login to log in. After successful login, you can see the following page.
				
<div style="text-align: center;">
<img alt="wan type" class="boxshadow" src="/images/device.png">
</div>
	
8 . Mesh pairing. There are two ways to perform mesh pairing. It is recommended that you use the first method for pairing.
!!! note ""
	=== "Mesh button for pairing (highly recommended)"
		
		1 . __Power on other Mesh routers__, and other routers must be in __reset state__ (press the reset button for more than six seconds to reset).
		
		2 . Press the "__Pair__" button __(2s)__ of the initially configured mesh route. After pressing, the indicator light of the Mesh route flashes blue slowly.
		
		3 . Within 2 minutes, press the "__Pair__" button of the Mesh route you want to add and wait __40-120 seconds__ to complete the pairing (when the Mesh indicator light turns solid blue, it means the pairing is successful).	
		
		<div style="text-align: center;">
		<img alt="wan type" class="boxshadow" src="/images/mesh006.png">
		</div>
		
	=== "Add WEB interface to realize pairing"
		1 . Open the browser, enter __^^http://192.168.x.x^^__ (find it in the user manual) or __^^http://wavlogin.link^^__ in the address bar of the browser, then press the Enter key on the keyboard to enter the device management interface.
		<div style="text-align: center;">
			<img class="boxshadow" src="/images/compute02.png">
		</div>
		<div style="text-align: center;">
			<img class="boxshadow" src="/images/mesh002.png">
		</div>
		
		2 . Enter your device management password to log in to the device management page. (This password is the password set during initial configuration. If the device independent password setting is not turned on, the device management password is the same as the WiFi password.)
		
		<div style="text-align: center;">
			<img class="boxshadow" src="/images/mesh003.png">
		</div>
		
		3 . Click "__More Settings__" ➡ "__Mesh Network__" ➡ "__Mesh Table__"
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/mesh001.png">
		</div>
		
		!!! tip 
			- Before adding a device,please confirm that the main router has successfully __connected to the Internet__.

			- Place the Mesh Node to be added near the main router. If the Mesh Node has been used, please __reset__ it.(Press and hold for __more than 6 seconds__ to __reset__ the mesh device)

			- __Power on__ the Mesh node, and after it has started up, __press the pair button__.

		4 . Click on “__Add__” and then follow the prompts on the screen.


		<div style="text-align: center;">
			<img class="boxshadow" src="/images/mesh01.png">
		</div>

		5 . After ensuring that other Mesh nodes are placed correctly and the __master node network is connected__, click "__Next__" on this page. If the Mesh node is already in use, please __reset__ it.

		<div style="text-align: center;">
			<img class="boxshadow" src="/images/mesh02.png">
		</div>

		6 . Make sure that the Mesh node has been powered on. After powering on, press and hold the Pair button of the mesh device for __2 seconds__.

		<div style="text-align: center;">
			<img class="boxshadow" src="/images/mesh03.png">
		</div>

		7 . Click "__Start scanning__" and wait for the scanning results.

		<div style="text-align: center;">
			<img class="boxshadow" src="/images/mesh04.png">
		</div>


		<p class="text">
		8 . If the scan is successful, device information will appear. Select the scanned device to add it.
		</p>
		<div style="text-align: center;">
			<img class="boxshadow" src="/images/mesh07.png">
		</div>

		??? warning "Scan node failed"
			If no available node routes are scanned, check the following points:
			
			- Check whether the Mesh node __presses the pairing button__. After pressing the pairing button, the indicator light of the Mesh node will flash blue slowly.
			
			- Check whether the Mesh node has been used. If it has been used, please __reset__ it.
			
			- If none of the above problems appear, please click __Rescan__.
			- After checking, add the device again.
			
			<div style="text-align: center;">
			<img class="boxshadow" src="/images/mesh06.png">
			</div>


		9 . Click Refresh after prompting that the addition is successful and wait for about __two minutes__.

		<div style="text-align: center;">
			<img class="boxshadow" src="/images/mesh08.png">
		</div>

		10 . After refreshing, you can view the information of the new device on the add page.You can __modify the device name__ on this page so that you can better identify it.

		<div style="text-align: center;">
			<img class="boxshadow" src="/images/mesh09.png">
		</div>
		!!! tip
			A Mesh router device supports up to __7 (including existing device mesh devices)__.
## __Advanced__
### __Roaming__
<p class="text">
Wireless roaming technology allows your devices to seamlessly switch between two mesh routers. When you move away from one router and closer to another, it will automatically disconnect the current connection and connect to the closer router for a smoother network user experience. No manual intervention is required during the switch and it will not affect the network connection.
</p>

!!! note ""
	__[What is roaming, and in what scenarios will roaming be used?]()__
### __Roaming Threshold__
<p class="text">
The wireless roaming trigger threshold should only be set by experienced professionals. If you lack professional experience in setting the roaming trigger threshold, it is recommended that you keep the default settings to avoid negative impacts on the network user experience.
</p>
<div style="text-align: center;">
    <img alt="guest wifi" class="boxshadow" src="/images/mesh05.png">
</div>
### __Topology Optimization__
<p class="text">
When your paired devices are greater than or equal to 3 devices, after all devices are paired, optimization can be turned on. 
</p>
<p class="text">
This function can automatically adjust the optimal path according to the signal strength between the devices, so as to ensure that all sub-routes and corresponding upper-level devices have the best signal connection status for optimal network coverage.
</p>
### __Threshold of Topology Optimization__
<p class="text">
You can adjust the signal threshold triggered by topology optimization to obtain the best mesh network coverage. If you do not have professional experience in setting this, we recommend that you set it according to the default value.
</p>
---
