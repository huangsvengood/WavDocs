
The first setup of most wavlink routers is very similar. We provide you with tutorials for different systems. You can choose the method that suits you according to the different devices.
!!! tip 
	Nouns in bold and bright colors are clickable links. Click to jump to the detailed explanation page of the noun.For example,"__[Internet VLAN ID](/Encyclopedia/vlan_id/)__".
!!! example "First Time Setup"

	=== "{==Windows==}"
		Tools required : Desktop/laptop, two Ethernet cables, router, Ethernet converter
		
		Connection methods: __[wireless connection](/FAQ/first_time_setup/#windows-wireless-connection)__ and __[wired connection](/FAQ/first_time_setup/#windows-wired-connection)__
		
		__New devices or reset devices need to log in to the administrator interface for initialization settings.__
			
		__There are two ways to log in to the wavlink router management interface :__
			
		
		??? note "Log in using the domain name __*^^http://wavlogin.link^^*__."
			- Log in using the domain name __*^^http://wavlogin.link^^*__. (It is recommended that you use a domain name to log in. If you fail to log in using a domain name, please try to log in using an IP address,refer to the steps below for details;if you have successfully logged in using a domain name, *^^<b>[please click here to jump](#section1)</b>^^*.)
			
			
			<div style="text-align: center;">
			<img class="boxshadow" src="/images/login00.png">
			</div>	
		??? note "Log in using your IP address __*^^http://192.168.20.1^^*__."
			- Log in using your IP address __*^^http://192.168.20.1^^*__.(If you want to log in using your IP address, please refer to the steps below.)
			<div style="text-align: center;">
			<img class="boxshadow" src="/images/compute02.png">
			</div>	
			!!! question "About IP address(192.168.20.1)"
				Different devices have different IP addresses. For specific IP addresses, please refer to the specific device manual or the actual acquisition of the device.For the actual method of obtaining an IP address, refer to the following steps.
		
		## __Windows wireless connection__
		1 . Click this icon  <img class="boxshadow" src="/images/win01.png">  (this status of the icon indicates that the computer is not connected to the network), and a wireless connection pop-up window will appear,enable the WiFi function ,find your default WiFi name and click to connect to WiFi.

		<div style="text-align: center;">
		<img class="boxshadow" src="/images/win03.png">
		</div>	
		!!! question "Default WiFi name"
			The default WiFi name can be found in the user manual.
			
			__[SSID](/Encyclopedia/vlan_id/)__(Click to learn about SSID) : WAVLINK-XXXX_XXXX
			
			"XXXX" in SSID is for illustrative purposes only, please refer to the last 4 digits of the MAC address of the label on the bottomof the product.
		
		2 . Click win &nbsp;<img class="boxshadow" src="/images/win05.png">&nbsp; , the navigation bar will pop up,click settings &nbsp;<img class="boxshadow" src="/images/win06.png">&nbsp; in the navigation bar to enter the computer settings page, and click WiFi on the settings page.

		<div style="text-align: center;">
		<img class="boxshadow" src="/images/win07.png">
		</div>	
		
		3 . Click __Show available networks__ to pop up the following interface, find the device's default WiFi name and click __Connect__.
		
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/win04.png">
		</div>	
		
		4 . This icon  &nbsp;<img class="boxshadow" src="/images/win01.png">&nbsp;  will be converted to this icon  <img class="boxshadow" src="/images/win02.png">   after the connection is successful.Enter the WiFi settings page, click on the Connected WiFi column to enter the WiFi detailed information interface.
		
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/win08.png">
		</div>
		
		5 . Find the __IPv4 DNS Server__ connected to WiFi, copy the IP address, and paste the IP address in the address bar of the browser to enter the router management interface.For subsequent steps, please refer to __[Windows wired connection](/FAQ/first_time_setup/#windows-wired-connection)__ and click the link to jump.
		
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/win09.png">
		</div>
		## __Windows wired connection__
		
		1 . To use wired access to the Internet, connect an Ethernet cable between the router's wan port and the Ethernet port on your computer. If your computer doesn't have an Ethernet port, try using a USB to Ethernet adapter.
		
		2 . Connect one end of the first network cable to the network port of the computer, the other end to the LAN port of the router, and the second ISP network cable to the wan port of the computer.The device will automatically identify the network.
		
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/536ax601.png">
		</div>
		
		3 . After successful connection, this icon " <img class="boxshadow" src="/images/compute01.png"> " will be displayed on the computer taskbar.
		
		4 . After accessing, check the user manual to find the login address of the wifi management interface, or move the mouse to " <img class="boxshadow" src="/images/compute01.png"> " on the computer taskbar and right-click.
		
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/win11.png">
		</div>
		
		5 . Select __Go to Settings__, click __Ethernet__, and view the IPv4 DNS Servers.
		
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/win10.png">
		</div>
		
		6 . Press and hold the left button of the mouse to select the __IP address__, then right-click and select __Copy__.
		
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/win09.png">
		</div>
		
		7 . Double-click the browser icon, open the browser (Microsoft edge, Google, etc.), and paste the IP address you just copied in the address bar, or manually enter __http://192.168.x.x__ (refer to step 5 for the IP address).
		
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/compute02.png">
		</div>
		
		## <a name="section1"></a>
		8 . After entering the website, the password for the first login page is the default password, which is admin. After entering the default password, press the "__Enter__" key on the keyboard or click "__Login__" with the mouse.
		
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/welcom_page.png">
		</div>
		
		9 . After entering the initial configuration interface, the device system will automatically detect the Internet connection method for you. The Internet connection method defaults to __[DHCP](/Encyclopedia/dhcp/)__. If you need to change the Internet connection method, please click the information box below.

		<div style="text-align: center;">
		<img class="boxshadow" src="/images/step9.png">
		</div>
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/internet.png">
		</div>
		
		- __[Internet VLAN ID](/Encyclopedia/vlan_id/)__ : Some ISPs require users to set a VLAN ID on the router before they can access the Internet. If you find that dialing fails or obtaining an IP from the ISP fails, please check whether you need to set a VLAN ID.
			
		- __[Auto Mesh](/Encyclopedia/mesh/)__ : If this function is turned on, the device will automatically switch to Mesh Router or Mesh node mode depending on your network topology. If it is turned off, the device will remain fixed in Mesh Router mode.
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
		10 . After selecting the Internet access method, enter the basic configuration (time zone, country, WiFi name, etc.) interface, select your country and time zone, and customize your WiFi name, password, and device management password (it is recommended that you use a strong password : The password contains uppercase and lowercase letters, numbers, and special symbols such as " @, ?, * ", etc.). 
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/time.png">
		</div>
		
		Please remember the password you set. After the configuration is completed and the interface is refreshed, you will use your customized password to log in to the management interface again.
		!!! tip
			__Device management password__ : You can set it the same as the wireless password, or you can turn off the button to set the device management password and wireless password separately.
			<div style="text-align: center;">
			<img class="boxshadow" src="/images/step10.png">
			</div>
		11 . After setting, click Save and wait for the device configuration to be completed. After the Refresh button appears, click __Refresh__ to complete the initial setting of the device.
		
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/refresh.png">
		</div>
		!!! info "App Download"
			Scan the QR code with your mobile phone to download the Wav router app and manage your device conveniently.
		12 . After clicking Refresh, you need to re-enter the login password. This login password is the password you customized. After entering the password, click Login to log in. After successful login, you can see the following page.
		
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/second.png">
		</div>
		
		This page is the device management interface. You can configure all functions of the router on this page. If you need to know more, please click for __[more feature](/feature_guide/)__ details.
		
		<div style="text-align: center;">
		<img alt="wan type" class="boxshadow" src="/images/device.png">
		</div>
		!!! tip "Forgot password solution"
			Please press and hold the reset button on the router for 8 seconds. After the router reset, you can log in with the default password.
	=== "{==MacOS==}"
		Tools required: Wavlink router, Apple computer, network cable, Ethernet converter, Ethernet cable.
		
		Connection methods: __[wireless connection](/FAQ/first_time_setup/#mac-wired-connection)__ and __[wired connection](/FAQ/first_time_setup/#mac-wireless-connection)__
		
		__New devices or reset devices need to log in to the administrator interface for initialization settings.__
			
		__There are two ways to log in to the wavlink router management interface :__
			
		
		??? note "Log in using the domain name __*^^http://wavlogin.link^^*__."
			- Log in using the domain name __*^^http://wavlogin.link^^*__. (It is recommended that you use a domain name to log in. If you fail to log in using a domain name, please try to log in using an IP address,refer to the steps below for details;if you have successfully logged in using a domain name, *^^<b>[please click here to jump](#section2)</b>^^*.)
			
			
			<div style="text-align: center;">
			<img class="boxshadow" src="/images/login00.png">
			</div>	
		??? note "Log in using your IP address __*^^http://192.168.20.1^^*__."
			- Log in using your IP address __*^^http://192.168.20.1^^*__.(If you want to log in using your IP address, please refer to the steps below.)
			<div style="text-align: center;">
			<img class="boxshadow" src="/images/compute02.png">
			</div>
				
			!!! question "About IP address(192.168.20.1)"
				Different devices have different IP addresses. For specific IP addresses, please refer to the specific device manual or the actual acquisition of the device.For the actual method of obtaining an IP address, refer to the following steps.
		
		## __Mac wired connection__
		
		1 . To use wired access to the Internet, connect an Ethernet cable between the router's wan port and the Ethernet port on your Mac. If your computer doesn't have an Ethernet port, try using a USB to Ethernet adapter.

		2 . After the connection is successful, the device will automatically identify the network. Click the setting icon <img class="boxshadow" src="/images/mac11.png"> to enter the network under the setting page. 
		
		After entering the network,click this column . <img class="boxshadow" src="/images/mac22.png">
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/mac015.png">
		</div>
		
		Click __Details__ to view the IP information. For subsequent setting steps, refer to __[wireless connection](/FAQ/first_time_setup/#mac-wireless-connection)__.
		
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/mac016.png">
		</div>
		## __Mac wireless connection__
		1 . Click &nbsp; <img class="boxshadow" src="/images/mac11.png"> &nbsp;  ➡ &nbsp;  <img class="boxshadow" src="/images/mac33.png">&nbsp;, enter the WiFi settings page to enable the WiFi function.
		
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/mac02.png">
		</div>
		
		Or click the icon &nbsp; <img class="boxshadow" src="/images/mac00.png"> &nbsp;on the system bar to enable the WiFi function.
		
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/mac01.png">
		</div>
		
		2 . Enter the WiFi settings page, scroll down to find the device WiFi name, and click "__connection__" to connect to WiFi.
		
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/mac03.png">
		</div>
		
		3 . After the connection is successful, "connected" is displayed. Click "__Details__" to the right of the WiFi name to view the "__Router__" address.
		
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/mac07.png">
		</div>
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/mac06.png">
		</div>
		## <a name="section2"></a>
		4 . Copy the address, open the browser, enter __http://192.168.20.1__ in the address bar and press Enter on the keyboard to enter the router management page.

		<div style="text-align: center;">
		<img class="boxshadow" src="/images/mac05.png">
		</div>
		
		5 .  After entering the initial configuration interface, the device system will automatically detect the Internet connection method for you. The Internet connection method defaults to __[DHCP](/Encyclopedia/dhcp/)__. If you need to change the Internet connection method, please click the information box below.

		<div style="text-align: center;">
		<img class="boxshadow" src="/images/step9.png">
		</div>
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/mac08.png">
		</div>
		
		- __[Internet VLAN ID](/Encyclopedia/vlan_id/)__ : Some ISPs require users to set a VLAN ID on the router before they can access the Internet. If you find that dialing fails or obtaining an IP from the ISP fails, please check whether you need to set a VLAN ID.
			
		- __[Auto Mesh](/Encyclopedia/mesh/)__ : If this function is turned on, the device will automatically switch to Mesh Router or Mesh node mode depending on your network topology. If it is turned off, the device will remain fixed in Mesh Router mode.
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

		6 . After configuring the Internet, select your time zone and country, and customize your WiFi name and password. For device management passwords, you can refer to the instructions below.(it is recommended that you use a strong password : The password contains uppercase and lowercase letters, numbers, and special symbols such as " @, ?, * ", etc.)
		
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/mac09.png">
		</div>
		!!! tip
			__Device management password__ : You can set it the same as the wireless password, or you can turn off the button to set the device management password and wireless password separately.
			<div style="text-align: center;">
			<img class="boxshadow" src="/images/mac010.png">
			</div>
		
		7 . After setting all parameters, click __Save__. The device will start updating. After updating to 100%, click __refresh__.
		
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/mac012.png">
		</div>
		!!! info "App Download"
			Scan the QR code with your mobile phone to download the Wav router app and manage your device conveniently.
		8 . After the refresh is successful, log in to the device management interface again, enter your customized password and click __Login__ to log in.
		
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/mac013.png">
		</div>
		
		9 . After successful login, you will see the following interface. This interface is the administrator's homepage. You can manage and learn about your device on this interface. For more function details, please click __[More](/feature_guide/)__.
		
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/mac014.png">
		</div>
		!!! tip "Forgot password solution"
			Please press and hold the reset button on the router for 8 seconds. After the router reset, you can log in with the default password.
	=== "{==Android==}"
		Tools needed : mobile phone, router.
		
		__New devices or reset devices need to log in to the administrator interface for initialization settings.__
			
		__There are two ways to log in to the wavlink router management interface :__
					
		??? note "Log in using the domain name __*^^http://wavlogin.link^^*__."
			- Log in using the domain name __*^^http://wavlogin.link^^*__. (It is recommended that you use a domain name to log in. If you fail to log in using a domain name, please try to log in using an IP address,refer to the steps below for details;if you have successfully logged in using a domain name, *^^<b>[please click here to jump](#section3)</b>^^*.)
						
			<div style="text-align: center;">
			<img class="boxshadow" src="/images/phone000.png">
			</div>	
		??? note "Log in using your IP address __*^^http://192.168.20.1^^*__."
			- Log in using your IP address __*^^http://192.168.20.1^^*__.(If you want to log in using your IP address, please refer to the steps below.)
			<div style="text-align: center;">
			<img class="boxshadow" src="/images/phone04.png">
			</div>
				
			!!! question "About IP address(192.168.20.1)"
				Different devices have different IP addresses. For specific IP addresses, please refer to the specific device manual.

		1 . Connect the ISP network cable to the wan port of the router. After successful connection, the device will automatically identify the network.
		
		2 . Open the phone and enter the system settings, click WiFi to enter the WiFi settings page and click to turn on WiFi.
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/phone01.png">
		</div>
		
		3 . Find the WiFi shown on the router on the WiFi interface (the WiFi name is recorded in the user manual, you can check the user manual to find out), and click Connect.
		
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/phone02.png">
		</div>
		!!! tip
			There is no password when connecting to WiFi for the first time.
		4 . The picture after successful connection is as shown below.
		
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/phone03.png">
		</div>
		
		5 . Open the mobile browser and enter the IP address (can be found in the user manual, usually 192.168.x.x), as shown below, click " __Enter__ " to enter the router management interface.
		
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/phone04.png">
		</div>
		## <a name="section3"></a>
		6 . Enter the default password admin and click "__Login__ __Now__ " to enter the first-time setup page.
		
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/phone05.png">
		</div>
		
		7 .  After entering the initial configuration interface, the device system will automatically detect the Internet connection method for you. The Internet connection method defaults to __[DHCP](/Encyclopedia/dhcp/)__. If you need to change the Internet connection method, please click the information box below.

		<div style="text-align: center;">
		<img class="boxshadow" src="/images/phone003.png">
		</div>
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/phone06.png">
		</div>
		
		- __[Internet VLAN ID](/Encyclopedia/vlan_id/)__ : Some ISPs require users to set a VLAN ID on the router before they can access the Internet. If you find that dialing fails or obtaining an IP from the ISP fails, please check whether you need to set a VLAN ID.
			
		- __[Auto Mesh](/Encyclopedia/mesh/)__ : If this function is turned on, the device will automatically switch to Mesh Router or Mesh node mode depending on your network topology. If it is turned off, the device will remain fixed in Mesh Router mode.
		??? info "Please click here to switch the Internet connection method"
			After entering the initial configuration page, you need to choose a internet connection method. __[DHCP](/Encyclopedia/dhcp/)__ is selected by default. If you need to connect to the Internet through dial-up, please choose __[PPPOE](/Encyclopedia/pppoe/)__. If you need to configure a static IP, please choose __[Static IP](/Encyclopedia/static_ip/)__. We have three internet connection methods. A link description is attached below, you can click on the link for details.
		
			__PPPOE__
			
			__Username and password provided by the service provider (ISP)__ : The account name and password usually provided to you by the ISP for establishing a PPPoE connection.
			<div style="text-align: center;">
			<img class="boxshadow" src="/images/phone002.png">
			</div>
			
			__Static IP__
			
			__IP Address__ : You need to assign a static IP address to your device. Make sure the IP address is unique on your network and is on the correct subnet.
			
			__Subnet Mask__ : Determine the subnet mask you use. A common subnet mask is 255.255.255.0.
			
			__Default gateway__ : Enter the default gateway IP address of your network device (check the user manual).
			
			__DNS server__ : You can use the DNS server provided by your ISP, or choose another public DNS server, such as Google DNS (8.8.8.8) or Cloudflare DNS (1.1.1.1).
			<div style="text-align: center;">
			<img class="boxshadow" src="/images/phone001.png">
			</div>
			
			
			- __[Internet VLAN ID](/Encyclopedia/vlan_id/)__ : Some ISPs require users to set a VLAN ID on the router before they can access the Internet. If you find that dialing fails or obtaining an IP from the ISP fails, please check whether you need to set a VLAN ID.
			
			- __[Auto Mesh](/Encyclopedia/mesh/)__ : If this function is turned on, the device will automatically switch to Mesh Router or Mesh node mode depending on your network topology. If it is turned off, the device will remain fixed in Mesh Router mode.
			!!! info "Please click on the link below to learn more"
				__[Differences in Internet access methods.Which Internet method should I choose?](/FAQ/wan_mode/)__
		
		8 . After selecting the Internet access method, enter the basic configuration (time zone, country, WiFi name, etc.) interface, select the time zone and region that suits your location, and customize your WiFi name and password (it is recommended that you use a strong password : The password contains uppercase and lowercase letters, numbers, and special symbols such as " @, ?, * ", etc.). 
		
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/phone07.png">
		</div>
		!!! tip
			__Device management password__ : You can set it the same as the wireless password, or you can turn off the button to set the device management password and wireless password separately.
			<div style="text-align: center;">
			<img class="boxshadow" src="/images/phone004.png">
			</div>
		
		
		9 . After setting, click Save and wait for the device configuration to be completed. After the Refresh button appears, click " __Refresh__ " to complete the initial setting of the device.
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/phone08.png">
		</div>
		!!! info "App Download"
			Scan the QR code with your mobile phone to download the Wav router app and manage your device conveniently.
		10 . After clicking Refresh in the previous step, you need to re-enter the login password. This login password is the password you customized. After entering the password, click Login to log in. After successful login, you can see the following page.
		
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/phone09.png">
		</div>
		
		11 . This page is the device management interface. You can configure all functions of the router on this page. You can also click __[PC UI]__ to switch to the computer version. If you need more information, click  __[more feature](/feature_guide/)__ to learn more.
		
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/phone010.png">
		</div>
		
		After the switch is successful, as shown in the figure below.
		
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/phone011.png">
		</div>	
		!!! tip "Forgot password solution"
			Please press and hold the reset button on the router for 8 seconds. After the router reset, you can log in with the default password.
	=== "{==iOS==}"
		Tools needed : mobile phone, router.
		
		__New devices or reset devices need to log in to the administrator interface for initialization settings.__
			
		__There are two ways to log in to the wavlink router management interface :__
					
		??? note "Log in using the domain name __*^^http://wavlogin.link^^*__."
			- Log in using the domain name __*^^http://wavlogin.link^^*__. (It is recommended that you use a domain name to log in. If you fail to log in using a domain name, please try to log in using an IP address,refer to the steps below for details;if you have successfully logged in using a domain name, *^^<b>[please click here to jump](#section4)</b>^^*.)
						
			<div style="text-align: center;">
			<img class="boxshadow" src="/images/phone000.png">
			</div>	
		??? note "Log in using your IP address __*^^http://192.168.20.1^^*__."
			- Log in using your IP address __*^^http://192.168.20.1^^*__.(If you want to log in using your IP address, please refer to the steps below.)
			<div style="text-align: center;">
			<img class="boxshadow" src="/images/phone04.png">
			</div>
				
			!!! question "About IP address(192.168.20.1)"
				Different devices have different IP addresses. For specific IP addresses, please refer to the specific device manual.

		
		1 . Connect the ISP network cable to the wan port of the router. After successful connection, the device will automatically identify the network.
		
		2 . Open the phone and enter the system settings, click WiFi to enter the WiFi settings page and click to turn on WiFi.
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/IOS01.png">
		</div>
		
		3 . Find the WiFi shown on the router on the WiFi interface (the WiFi name is recorded in the user manual, you can check the user manual to find out), and click Connect.
		
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/IOS02.png">
		</div>
		!!! tip
			There is no password when connecting to WiFi for the first time.
		4 . The picture after successful connection is as shown below.
		
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/IOS03.png">
		</div>
		5 . Open the mobile browser and enter the IP address (can be found in the user manual, usually 192.168.x.x), as shown below, click " __Enter__ " to enter the router management interface.
		
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/phone04.png">
		</div>
		## <a name="section4"></a>
		6 . Enter the default password admin and click "__Login__ __Now__ " to enter the first-time setup page.
		
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/phone05.png">
		</div>
		
		7 .  After entering the initial configuration interface, the device system will automatically detect the Internet connection method for you. The Internet connection method defaults to __[DHCP](/Encyclopedia/dhcp/)__. If you need to change the Internet connection method, please click the information box below.

		<div style="text-align: center;">
		<img class="boxshadow" src="/images/phone003.png">
		</div>
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/phone06.png">
		</div>
		
		- __[Internet VLAN ID](/Encyclopedia/vlan_id/)__ : Some ISPs require users to set a VLAN ID on the router before they can access the Internet. If you find that dialing fails or obtaining an IP from the ISP fails, please check whether you need to set a VLAN ID.
			
		- __[Auto Mesh](/Encyclopedia/mesh/)__ : If this function is turned on, the device will automatically switch to Mesh Router or Mesh node mode depending on your network topology. If it is turned off, the device will remain fixed in Mesh Router mode.
		??? info "Please click here to switch the Internet connection method"
			After entering the initial configuration page, you need to choose a internet connection method. __[DHCP](/Encyclopedia/dhcp/)__ is selected by default. If you need to connect to the Internet through dial-up, please choose __[PPPOE](/Encyclopedia/pppoe/)__. If you need to configure a static IP, please choose __[Static IP](/Encyclopedia/static_ip/)__. We have three internet connection methods. A link description is attached below, you can click on the link for details.
		
			__PPPOE__
			
			__Username and password provided by the service provider (ISP)__ : The account name and password usually provided to you by the ISP for establishing a PPPoE connection.
			<div style="text-align: center;">
			<img class="boxshadow" src="/images/phone002.png">
			</div>
			
			__Static IP__
			
			__IP Address__ : You need to assign a static IP address to your device. Make sure the IP address is unique on your network and is on the correct subnet.
			
			__Subnet Mask__ : Determine the subnet mask you use. A common subnet mask is 255.255.255.0.
			
			__Default gateway__ : Enter the default gateway IP address of your network device (check the user manual).
			
			__DNS server__ : You can use the DNS server provided by your ISP, or choose another public DNS server, such as Google DNS (8.8.8.8) or Cloudflare DNS (1.1.1.1).
			<div style="text-align: center;">
			<img class="boxshadow" src="/images/phone001.png">
			</div>
			
			
			- __[Internet VLAN ID](/Encyclopedia/vlan_id/)__ : Some ISPs require users to set a VLAN ID on the router before they can access the Internet. If you find that dialing fails or obtaining an IP from the ISP fails, please check whether you need to set a VLAN ID.
			
			- __[Auto Mesh](/Encyclopedia/mesh/)__ : If this function is turned on, the device will automatically switch to Mesh Router or Mesh node mode depending on your network topology. If it is turned off, the device will remain fixed in Mesh Router mode.
			!!! info "Please click on the link below to learn more"
				__[Differences in Internet access methods.Which Internet method should I choose?](/FAQ/wan_mode/)__
		
		
		8 . After selecting the Internet access method, enter the basic configuration (time zone, country, WiFi name, etc.) interface, select the time zone and region that suits your location, and customize your WiFi name and password (it is recommended that you use a strong password : The password contains uppercase and lowercase letters, numbers, and special symbols such as " @, ?, * ", etc.). 
		
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/phone07.png">
		</div>
		!!! tip
			__Device management password__ : You can set it the same as the wireless password, or you can turn off the button to set the device management password and wireless password separately.
			<div style="text-align: center;">
			<img class="boxshadow" src="/images/phone004.png">
			</div>

		9 . After setting, click Save and wait for the device configuration to be completed. After the Refresh button appears, click " __Refresh__ " to complete the initial setting of the device.
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/phone08.png">
		</div>
		!!! info "App Download"
			Scan the QR code with your mobile phone to download the Wav router app and manage your device conveniently.
		11 . After clicking Refresh in the previous step, you need to re-enter the login password. This login password is the password you customized. After entering the password, click Login to log in. After successful login, you can see the following page.
		
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/phone09.png">
		</div>
		
		12 . This page is the device management interface. You can configure all functions of the router on this page. You can also click __[PC UI]__ to switch to the computer version. If you need more information, click  __[more feature](/feature_guide/)__ to learn more.
		
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/phone010.png">
		</div>
		
		After the switch is successful, as shown in the figure below.
		
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/phone011.png">
		</div>	
		!!! tip "Forgot password solution"
			Please press and hold the reset button on the router for 8 seconds. After the router reset, you can log in with the default password.
*** 
Setup complete! Still have questions? Visit our __[Community Forum](/community)__.