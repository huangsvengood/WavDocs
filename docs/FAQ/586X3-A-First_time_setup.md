#WAVLINK Router-First time setup
The first setup of most wavlink routers is very similar. We provide you with tutorials for different systems. You can choose the method that suits you according to the different devices.
!!! example ""
	=== "Android"
		Tools needed : mobile phone, router.
		
		__New devices or reset devices need to log in to the administrator interface for initialization settings.__
			
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
		
		__There are two ways to log in to the wavlink router management interface :__
		!!! note ""			
			=== "Log in using the domain name"
				Log in using the domain name __http://wavlogin.link__. (It is recommended that you use a domain name to log in. If you fail to log in using a domain name, please try to log in using an IP address.)
							
				<div style="text-align: center;">
				<img class="boxshadow" src="/images/586x3aphone01.png">
				</div>	
			=== "Log in using your IP address"
				Log in using your IP address __http://192.168.20.1__.
				<div style="text-align: center;">
				<img class="boxshadow" src="/images/phone04.png">
				</div>
					
				!!! question "About IP address(192.168.20.1)"
					Different devices have different IP addresses. For specific IP addresses, please refer to the specific device manual.

		
		5 . After entering the website, the password for the first login page is the default password, which is admin. After entering the default password, press the "__Enter__" key on the keyboard or click "__Login__" with the mouse.

		<div style="text-align: center;">
		<img class="boxshadow" src="/images/586x3aphone02.png">
		</div>	
	
		6 . After successfully logging in, you will enter the system password setting page, where you can set your device management password to increase device security.(it is recommended that you use a strong password : The password contains __uppercase and lowercase letters, numbers, and special symbols such as " @, ?, * "__, etc.) 

		<div style="text-align: center;">
		<img class="boxshadow" src="/images/586x3aphone03.png">
		</div>	
		!!! tip
			__Device management password__ : Used to log in to the device management interface. Please remember your password. If you forget the password, you can press and hold the device __"Reset"__ button for __6s__ to restore the factory settings.Please note that doing this will clear all settings you have previously made.
		
		7 . Click __"Next"__ to enter the WiFi settings page. You can customize your WiFi name __(SSID)__, encryption method and password.(it is recommended that you use a strong password : The password contains __uppercase and lowercase letters, numbers, and special symbols such as " @, ?, * "__, etc.)
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/586x3aphone04.png">
		</div>
		
		8 . After setting the WiFi configuration, click __"Next"__ and the device system will automatically detect the wan type for you. After the detection is completed, you can configure the mode of your device and switch the wan type.
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/586x3aapp07.png">
		</div>	
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/586x3aapp10.png">
		</div>		
	
		- __Internet VLAN ID__ : Some ISPs require users to set a VLAN ID on the router before they can access the Internet. If you find that dialing fails or obtaining an IP from the ISP fails, please check whether you need to set a VLAN ID.
			
		- __Auto Mesh__ : If this function is turned on, the device will automatically switch to Mesh Router or Mesh node mode depending on your network topology. If it is turned off, the device will remain fixed in Mesh Router mode.
		??? info "About mode selection and wan type?"
			Please pay attention to distinguish mode selection and wan type. Mode selection is the mode of the device, and wan type is the Internet connection method. The default Internet connection method is DHCP, and the default mode of the device is Router mode.

			??? note "Mode Selection"
				__Mode Selection__ : The default mode of the device is Router mode. The device supports two modes: __Router mode and AP mode__. You can click the option box to switch the device mode at will.

				<div style="text-align: center;">
				<img class="boxshadow" src="/images/586x3aapp13.png">
				</div>			
				
				<div style="text-align: center;">
				<img class="boxshadow" src="/images/586x3aapp14.png">
				</div>
			??? note "WAN Type"
				__WAN Type__ : The default wan type is DHCP. If you need to connect to the Internet via dial-up, choose PPPOE. If you need to use a fixed IP, choose Static IP.
				
				__PPPOE__

				① __Username and password provided by the service provider (ISP)__ : The account name and password usually provided to you by the ISP for establishing a PPPoE connection.

				<div style="text-align: center;">
				<img class="boxshadow" src="/images/586x3aapp15.png">
				</div>
				
				② If you forget your password, you can click __"Get PPPoE From Old router"__ and follow the prompts to complete the setup.
				<div style="text-align: center;">
				<img class="boxshadow" src="/images/586x3aapp17.png">
				</div>
				<div style="text-align: center;">
				<img class="boxshadow" src="/images/586x3aapp18.png">
				</div>					
				
				__Static IP__

				__IP Address__ : You need to assign a static IP address to your device. Make sure the IP address is unique on your network and is on the correct subnet.
				
				__Subnet Mask__ : Determine the subnet mask you use. A common subnet mask is 255.255.255.0.
				
				__Default gateway__ : Enter the default gateway IP address of your network device (check the user manual).
				
				__DNS server__ : You can use the DNS server provided by your ISP, or choose another public DNS server, such as Google DNS (8.8.8.8) or Cloudflare DNS (1.1.1.1).

				
				<div style="text-align: center;">
				<img class="boxshadow" src="/images/586x3aapp16.png">
				</div>
				
			
		9 . After setting, click __"Save"__ and wait for the device configuration to be completed. After the Refresh button appears, click " __Refresh__ " to complete the initial setting of the device.
		
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/586x3aapp11.png">
		</div>	
			
		10 . After the initialization settings are completed, enter the device management password you set to log in to the system management interface to start exploring your wavlink device.
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/586x3aphone05.png">
		</div>	
		
		!!! tip "Forgot password solution"
			Please press and hold the reset button on the router for __more than 6 seconds__. After the router reset, you can log in with the default password.

	=== "iOS"
		Tools needed : mobile phone, router.
		
		__New devices or reset devices need to log in to the administrator interface for initialization settings.__
			
		
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
		
		__There are two ways to log in to the wavlink router management interface :__
		!!! note ""			
			=== "Log in using the domain name"
				Log in using the domain name __http://wavlogin.link__. (It is recommended that you use a domain name to log in. If you fail to log in using a domain name, please try to log in using an IP address.)
							
				<div style="text-align: center;">
				<img class="boxshadow" src="/images/586x3aphone01.png">
				</div>	
			=== "Log in using your IP address"
				Log in using your IP address __http://192.168.20.1__.
				<div style="text-align: center;">
				<img class="boxshadow" src="/images/phone04.png">
				</div>
					
				!!! question "About IP address(192.168.20.1)"
					Different devices have different IP addresses. For specific IP addresses, please refer to the specific device manual.

		
		5 . After entering the website, the password for the first login page is the default password, which is admin. After entering the default password, press the "__Enter__" key on the keyboard or click "__Login__" with the mouse.

		<div style="text-align: center;">
		<img class="boxshadow" src="/images/586x3aphone02.png">
		</div>	
	
		6 . After successfully logging in, you will enter the system password setting page, where you can set your device management password to increase device security.(it is recommended that you use a strong password : The password contains __uppercase and lowercase letters, numbers, and special symbols such as " @, ?, * "__, etc.) 

		<div style="text-align: center;">
		<img class="boxshadow" src="/images/586x3aphone03.png">
		</div>	
		!!! tip
			__Device management password__ : Used to log in to the device management interface. Please remember your password. If you forget the password, you can press and hold the device __"Reset"__ button for __6s__ to restore the factory settings.Please note that doing this will clear all settings you have previously made.
		
		7 . Click __"Next"__ to enter the WiFi settings page. You can customize your WiFi name __(SSID)__, encryption method and password.(it is recommended that you use a strong password : The password contains __uppercase and lowercase letters, numbers, and special symbols such as " @, ?, * "__, etc.)
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/586x3aphone04.png">
		</div>
		
		8 . After setting the WiFi configuration, click __"Next"__ and the device system will automatically detect the wan type for you. After the detection is completed, you can configure the mode of your device and switch the wan type.
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/586x3aapp07.png">
		</div>	
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/586x3aapp10.png">
		</div>		
	
		- __Internet VLAN ID__ : Some ISPs require users to set a VLAN ID on the router before they can access the Internet. If you find that dialing fails or obtaining an IP from the ISP fails, please check whether you need to set a VLAN ID.
			
		- __Auto Mesh__ : If this function is turned on, the device will automatically switch to Mesh Router or Mesh node mode depending on your network topology. If it is turned off, the device will remain fixed in Mesh Router mode.
		??? info "About mode selection and wan type?"
			Please pay attention to distinguish mode selection and wan type. Mode selection is the mode of the device, and wan type is the Internet connection method. The default Internet connection method is DHCP, and the default mode of the device is Router mode.

			??? note "Mode Selection"
				__Mode Selection__ : The default mode of the device is Router mode. The device supports two modes: __Router mode and AP mode__. You can click the option box to switch the device mode at will.

				<div style="text-align: center;">
				<img class="boxshadow" src="/images/586x3aapp13.png">
				</div>			
				
				<div style="text-align: center;">
				<img class="boxshadow" src="/images/586x3aapp14.png">
				</div>
			??? note "WAN Type"
				__WAN Type__ : The default wan type is DHCP. If you need to connect to the Internet via dial-up, choose PPPOE. If you need to use a fixed IP, choose Static IP.
				
				__PPPOE__

				① __Username and password provided by the service provider (ISP)__ : The account name and password usually provided to you by the ISP for establishing a PPPoE connection.

				<div style="text-align: center;">
				<img class="boxshadow" src="/images/586x3aapp15.png">
				</div>
				
				② If you forget your password, you can click __"Get PPPoE From Old router"__ and follow the prompts to complete the setup.
				<div style="text-align: center;">
				<img class="boxshadow" src="/images/586x3aapp17.png">
				</div>
				<div style="text-align: center;">
				<img class="boxshadow" src="/images/586x3aapp18.png">
				</div>					
				
				__Static IP__

				__IP Address__ : You need to assign a static IP address to your device. Make sure the IP address is unique on your network and is on the correct subnet.
				
				__Subnet Mask__ : Determine the subnet mask you use. A common subnet mask is 255.255.255.0.
				
				__Default gateway__ : Enter the default gateway IP address of your network device (check the user manual).
				
				__DNS server__ : You can use the DNS server provided by your ISP, or choose another public DNS server, such as Google DNS (8.8.8.8) or Cloudflare DNS (1.1.1.1).

				
				<div style="text-align: center;">
				<img class="boxshadow" src="/images/586x3aapp16.png">
				</div>
				
			
		9 . After setting, click __"Save"__ and wait for the device configuration to be completed. After the Refresh button appears, click " __Refresh__ " to complete the initial setting of the device.
		
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/586x3aapp11.png">
		</div>	
			
		10 . After the initialization settings are completed, enter the device management password you set to log in to the system management interface to start exploring your wavlink device.
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/586x3aphone05.png">
		</div>	
		
		!!! tip "Forgot password solution"
			Please press and hold the reset button on the router for __more than 6 seconds__. After the router reset, you can log in with the default password.

	=== "WavRouter APP"
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/phone.png">
		</div>	
		New devices or reset devices need to log in to the administrator interface for initialization settings.		

		Tools required : __wavlink router__,__phone__,__WavRouter APP__(Scan the QR code on the __user manual__ to download.)
		
		1 . Scan the QR code on the user manual and __download the WavRouter APP__.
		
		2 . After the download is completed, click to __open the WavRouter APP__.
		
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/app001.png">
		</div>	
		
		3 . Click this icon &nbsp;<img class="boxshadow" src="/images/app111.png"> &nbsp;in the upper left corner to open the extension bar, and click __"Login/Registration"__ to enter the login interface.
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/app112.png">
		</div>	
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/app002.png">
		</div>	
		
		4 . Click "__Register__" to register a user. There are two ways to register a user. You can choose one of the following to register.
		!!! note ""
			=== "Mobile"
				!!! tip ""
					Tips : If you have an account, you can click to log in directly.
				
				1 . Fill in __your mobile phone number__, click __Get Verification Code__.
				
				2 . Fill in the __verification code__ received on your mobile phone in the Verification Code line and __set a login password.__ (it is recommended to use a password with __numbers, uppercase and lowercase letters, and special characters__).

				
				<div style="text-align: center;">
				<img class="boxshadow" src="/images/app004.png">
				</div>	

			=== "E-mail"
				!!! tip ""
					Tips : If you have an account, you can click to log in directly.
	
				1 . Fill in __your email__, click __Get Verification Code__, 
				
				2 . Fill in the __verification code__ received in your email in the Verification Code line and __set a login password__ (it is recommended to use a password with __numbers, uppercase and lowercase letters, and special characters__). 
				
				<div style="text-align: center;">
				<img class="boxshadow" src="/images/app005.png">
				</div>	
				
		5 . After the registration is completed, __log in as the user you just registered__ and click this icon <img class="boxshadow" src="/images/app113.png"> to __return to the main interface__ (as shown below).
		
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/app026.png">
		</div>
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/app025.png">
		</div>
		
		6 .  Click "__Connect__" and it will automatically jump to the WiFi connection interface. You only need to __correctly select your device WiFi__ and __connect__. Like the example below.__(The WiFi name can be found in the user manual.)__
		
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/586x3aapp03.png">
		</div>	
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/586x3awifi.png">
		</div>	
		
		7 . After the connection is successful,click the return button on your phone to __return to the main page__, and click __"Local Connected"__ to enter the initial configuration.(Like the example below.)
		
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/586x3aapp02.png">
		</div>	
		
		8 . Enter the initial password admin and click "__Login__" to enter the first-time setup page.
		
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/586x3aapp04.png">
		</div>	
		
		9 . After successfully logging in, you will enter the system password setting page, where you can set your device management password to increase device security.(it is recommended that you use a strong password : The password contains __uppercase and lowercase letters, numbers, and special symbols such as " @, ?, * "__, etc.) 

		<div style="text-align: center;">
		<img class="boxshadow" src="/images/586x3aapp05.png">
		</div>	
		!!! tip
			__Device management password__ : Used to log in to the device management interface. Please remember your password. If you forget the password, you can press and hold the device __"Reset"__ button for __6s__ to restore the factory settings.Please note that doing this will clear all settings you have previously made.
		
		10 . Click __"Next"__ to enter the WiFi settings page. You can customize your WiFi name __(SSID)__, encryption method and password.(it is recommended that you use a strong password : The password contains __uppercase and lowercase letters, numbers, and special symbols such as " @, ?, * "__, etc.)
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/586x3aapp06.png">
		</div>
		
		11 . After setting the WiFi configuration, click __"Next"__ and the device system will automatically detect the wan type for you. After the detection is completed, you can configure the mode of your device and switch the wan type.
		
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/586x3aapp07.png">
		</div>	
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/586x3aapp10.png">
		</div>		



		
		- __Internet VLAN ID__ : Some ISPs require users to set a VLAN ID on the router before they can access the Internet. If you find that dialing fails or obtaining an IP from the ISP fails, please check whether you need to set a VLAN ID.
			
		- __Auto Mesh__ : If this function is turned on, the device will automatically switch to Mesh Router or Mesh node mode depending on your network topology. If it is turned off, the device will remain fixed in Mesh Router mode.
		??? info "About mode selection and wan type?"
			Please pay attention to distinguish mode selection and wan type. Mode selection is the mode of the device, and wan type is the Internet connection method. The default Internet connection method is DHCP, and the default mode of the device is Router mode.

			??? note "Mode Selection"
				__Mode Selection__ : The default mode of the device is Router mode. The device supports two modes: __Router mode and AP mode__. You can click the option box to switch the device mode at will.

				<div style="text-align: center;">
				<img class="boxshadow" src="/images/586x3aapp13.png">
				</div>			
				
				<div style="text-align: center;">
				<img class="boxshadow" src="/images/586x3aapp14.png">
				</div>
			??? note "WAN Type"
				__WAN Type__ : The default wan type is DHCP. If you need to connect to the Internet via dial-up, choose PPPOE. If you need to use a fixed IP, choose Static IP.
				
				__PPPOE__

				① __Username and password provided by the service provider (ISP)__ : The account name and password usually provided to you by the ISP for establishing a PPPoE connection.

				<div style="text-align: center;">
				<img class="boxshadow" src="/images/586x3aapp15.png">
				</div>
				
				② If you forget your password, you can click __"Get PPPoE From Old router"__ and follow the prompts to complete the setup.
				<div style="text-align: center;">
				<img class="boxshadow" src="/images/586x3aapp17.png">
				</div>
				<div style="text-align: center;">
				<img class="boxshadow" src="/images/586x3aapp18.png">
				</div>					
				
				__Static IP__

				__IP Address__ : You need to assign a static IP address to your device. Make sure the IP address is unique on your network and is on the correct subnet.
				
				__Subnet Mask__ : Determine the subnet mask you use. A common subnet mask is 255.255.255.0.
				
				__Default gateway__ : Enter the default gateway IP address of your network device (check the user manual).
				
				__DNS server__ : You can use the DNS server provided by your ISP, or choose another public DNS server, such as Google DNS (8.8.8.8) or Cloudflare DNS (1.1.1.1).

				
				<div style="text-align: center;">
				<img class="boxshadow" src="/images/586x3aapp16.png">
				</div>
				
			
		12 . After setting, click __"Save"__ and wait for the device configuration to be completed. After the Refresh button appears, click " __Refresh__ " to complete the initial setting of the device.
		
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/586x3aapp11.png">
		</div>			
		
		13 . After refreshing, the APP will jump to the interface shown below. You only need to __click the icon &nbsp;<img class="boxshadow" src="/images/app555.png">__ in the upper left corner to return to the main interface to __bind the device__.	
		
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/586x3aapp19.png">
		</div>	
		
		14 . In order to manage your wavlink device more conveniently, you need __bind your device according to the instructions in the picture__. The next time you log in, the APP will __automatically identify the device__ and __bind__ it, so there is no need to bind it manually.
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/586x3aapp20.png">
		</div>	
		
		15 . After entering the correct password, the device binding is completed. __This password is the device management password__.
		Below are some functions of the APP. If you are interested in learning more, you can click to view them.
		
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/586x3aapp21.png">
		</div>	
		
		16 . After binding, you will see the following interface and __"Network is normal"__ is displayed.If you want to enter the PC UI more conveniently, you can click the browser icon on the lower right to directly enter the PC UI.
		
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/586x3aapp22.png">
		</div>	

	=== "Windows"
		1 . Tools required : Desktop/laptop, two Ethernet cables, router, Ethernet converter
		
		2 . Connection methods : __wireless connection__ and __wired connection__.Whether it is a wired connection or a wireless connection, you need to __power on the device and connect the Ethernet cable to the wan port of the router.__ As shown below.
		!!! note ""
			=== "Wireless connection"
				<div style="text-align: center;">
					<img class="boxshadow" src="/images/wireless.png">
				</div>
				① Turn on the computer, click this icon  <img class="boxshadow" src="/images/win01.png">  (this status of the icon indicates that the computer is not connected to the network), and a wireless connection pop-up window will appear,enable the WiFi function ,find your default WiFi name and click to connect to WiFi.

				<div style="text-align: center;">
					<img class="boxshadow" src="/images/win03.png">
				</div>	
				!!! question "Default WiFi name"
					The default WiFi name can be found in the user manual or the product bottom label.
						
					__[SSID](/Encyclopedia/vlan_id/)__(Click to learn about SSID) : WAVLINK-XXXX_XXXX
						
					"XXXX" in SSID is for illustrative purposes only, please refer to the last 4 digits of the MAC address of the label on the bottomof the product.
		
			=== "Wired connection"
			
				①  To use wired access to the Internet, connect an Ethernet cable between the router's wan port and the Ethernet port on your computer. If your computer doesn't have an Ethernet port, try using a USB to Ethernet adapter.
					
				②  Connect one end of the first network cable to the network port of the computer, the other end to the LAN port of the router, and the second ISP network cable to the wan port of the computer.The device will automatically identify the network.
					
				<div style="text-align: center;">
					<img class="boxshadow" src="/images/wired.png">
				</div>
					
				③  After successful connection, this icon " <img class="boxshadow" src="/images/compute01.png"> " will be displayed on the computer taskbar.

		3 . __New devices or reset devices need to log in to the administrator interface for initialization settings.__
			
		4 . __There are two ways to log in to the wavlink router management interface :__
			
		!!! note ""
			=== "Log in using the domain name "
				Log in using the domain name __http://wavlogin.link__. (It is recommended that you use a domain name to log in. If you fail to log in using a domain name, please try to log in using an IP address.)
				
				<div style="text-align: center;">
				<img class="boxshadow" src="/images/586x3acp01.png">
				</div>	
				
				5 . After entering the website, the password for the first login page is the default password, which is admin. After entering the default password, press the "__Enter__" key on the keyboard or click "__Login__" with the mouse.

				<div style="text-align: center;">
				<img class="boxshadow" src="/images/586x3alogin01.png">
				</div>	
			=== "Log in using your IP address "
				Log in using your IP address __http://192.168.20.1__.(If you want to log in using your IP address, please refer to the steps below.)
				<div style="text-align: center;">
				<img class="boxshadow" src="/images/compute02.png">
				</div>	
				5 . After entering the website, the password for the first login page is the default password, which is admin. After entering the default password, press the "__Enter__" key on the keyboard or click "__Login__" with the mouse.

				<div style="text-align: center;">
				<img class="boxshadow" src="/images/586x3alogin01.png">
				</div>	
				!!! question "About IP address(192.168.20.1)"
					Different devices have different IP addresses. For specific IP addresses, please refer to __the specific device manual or the actual acquisition of the device__.For the actual method of obtaining an IP address, refer to the following steps.
				??? danger "Click here to learn how to obtain the IP address of your router."	
					=== "Wireless connection"	
						1 . Click win &nbsp;<img class="boxshadow" src="/images/win05.png">&nbsp; , the navigation bar will pop up,click settings &nbsp;<img class="boxshadow" src="/images/win06.png">&nbsp; in the navigation bar to enter the computer settings page, and click WiFi on the settings page.

						<div style="text-align: center;">
							<img class="boxshadow" src="/images/win07.png">
						</div>	
							
						2 . Click __Show available networks__ to pop up the following interface, find the device's default WiFi name and click __Connect__.__(The default WiFi name can be found in the user manual or the product bottom label.)__
							
						<div style="text-align: center;">
							<img class="boxshadow" src="/images/win04.png">
						</div>	
							
						3 . This icon  &nbsp;<img class="boxshadow" src="/images/win01.png">&nbsp;  will be converted to this icon  <img class="boxshadow" src="/images/win02.png">   after the connection is successful.Enter the WiFi settings page, click on the Connected WiFi column to enter the WiFi detailed information interface.
							
						<div style="text-align: center;">
							<img class="boxshadow" src="/images/win08.png">
						</div>
							
						4 . Find the __IPv4 DNS Server__ connected to WiFi, copy the IP address, and paste the IP address in the address bar of the browser to enter the router management interface.
							
						<div style="text-align: center;">
							<img class="boxshadow" src="/images/win09.png">
						</div>
					=== "Wired connection"
						1 . Move the mouse to " <img class="boxshadow" src="/images/compute01.png"> " on the computer taskbar and right-click.
							
						<div style="text-align: center;">
							<img class="boxshadow" src="/images/win11.png">
						</div>
							
						2 . Select __Go to Settings__, click __Ethernet__, and view the IPv4 DNS Servers.
							
						<div style="text-align: center;">
							<img class="boxshadow" src="/images/win10.png">
						</div>
							
						3 . Press and hold the left button of the mouse to select the __IP address__, then right-click and select __Copy__.
							
						<div style="text-align: center;">
							<img class="boxshadow" src="/images/win09.png">
						</div>
							
						4 . Double-click the browser icon, open the browser (Microsoft edge, Google, etc.), and paste the IP address you just copied in the address bar, or manually enter __http://192.168.x.x__ .
							
						<div style="text-align: center;">
							<img class="boxshadow" src="/images/compute02.png">
						</div>
			
		6 . After successfully logging in, you will enter the system password setting page, where you can set your device management password to increase device security.(it is recommended that you use a strong password : The password contains __uppercase and lowercase letters, numbers, and special symbols such as " @, ?, * "__, etc.) 

		<div style="text-align: center;">
		<img class="boxshadow" src="/images/586x3acp03.png">
		</div>	
		!!! tip
			__Device management password__ : Used to log in to the device management interface. Please remember your password. If you forget the password, you can press and hold the device __"Reset"__ button for __6s__ to restore the factory settings.Please note that doing this will clear all settings you have previously made.
		
		7 . Click __"Next"__ to enter the WiFi settings page. You can customize your WiFi name __(SSID)__, encryption method and password.(it is recommended that you use a strong password : The password contains __uppercase and lowercase letters, numbers, and special symbols such as " @, ?, * "__, etc.)
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/586x3acp05.png">
		</div>
		
		8 . After setting the WiFi configuration, click __"Next"__ and the device system will automatically detect the wan type for you. After the detection is completed, you can configure the mode of your device and switch the wan type.
		
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/586x3acp04.png">
		</div>
		
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/586x3acp06.png">
		</div>	
			
		- __Internet VLAN ID__ : Some ISPs require users to set a VLAN ID on the router before they can access the Internet. If you find that dialing fails or obtaining an IP from the ISP fails, please check whether you need to set a VLAN ID.
				
		- __Auto Mesh__ : If this function is turned on, the device will automatically switch to Mesh Router or Mesh node mode depending on your network topology. If it is turned off, the device will remain fixed in Mesh Router mode.
		??? info "About mode selection and wan type?"
			Please pay attention to distinguish mode selection and wan type. Mode selection is the mode of the device, and wan type is the Internet connection method. The default Internet connection method is DHCP, and the default mode of the device is Router mode.

			??? note "Mode Selection"
				__Mode Selection__ : The default mode of the device is Router mode. The device supports two modes: __Router mode and AP mode__. You can click the option box to switch the device mode at will.		
					
				<div style="text-align: center;">
				<img class="boxshadow" src="/images/586x3acp08.png">
				</div>
				<div style="text-align: center;">
				<img class="boxshadow" src="/images/586x3acp07.png">
				</div>					
				
			??? note "WAN Type"
				__WAN Type__ : The default wan type is DHCP. If you need to connect to the Internet via dial-up, choose PPPOE. If you need to use a fixed IP, choose Static IP.
					
				__PPPOE__

				① __Username and password provided by the service provider (ISP)__ : The account name and password usually provided to you by the ISP for establishing a PPPoE connection.

				<div style="text-align: center;">
				<img class="boxshadow" src="/images/586x3acp10.png">
				</div>
					
				② If you forget your password, you can click __"Get PPPoE From Old router"__ and follow the prompts to complete the setup.
				<div style="text-align: center;">
				<img class="boxshadow" src="/images/586x3acp11.png">
				</div>
				<div style="text-align: center;">
				<img class="boxshadow" src="/images/586x3acp13.png">
				</div>					
					
				__Static IP__

				__IP Address__ : You need to assign a static IP address to your device. Make sure the IP address is unique on your network and is on the correct subnet.
					
				__Subnet Mask__ : Determine the subnet mask you use. A common subnet mask is 255.255.255.0.
					
				__Default gateway__ : Enter the default gateway IP address of your network device (check the user manual).
					
				__DNS server__ : You can use the DNS server provided by your ISP, or choose another public DNS server, such as Google DNS (8.8.8.8) or Cloudflare DNS (1.1.1.1).

					
				<div style="text-align: center;">
				<img class="boxshadow" src="/images/586x3acp14.png">
				</div>
					
				
		9 . After setting, click __"Save"__ and wait for the device configuration to be completed. After the Refresh button appears, click " __Refresh__ " to complete the initial setting of the device.
			
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/586x3acp16.png">
		</div>			
			
		10 . After the initialization settings are completed, enter the device management password you set to log in to the system management interface to start exploring your wavlink device.
			
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/586x3acp17.png">
		</div>	
		!!! tip "Forgot password solution"
			Please press and hold the reset button on the router for __more than 6 seconds__. After the router reset, you can log in with the default password.
	=== "MacOS"
		1 . Tools required: Wavlink router, Apple computer, network cable, Ethernet converter, Ethernet cable.
		
		2 . Connection methods: __wireless connection__ and __wired connection__.Whether it is a wired connection or a wireless connection, you need to __power on the device and connect the Ethernet cable to the wan port of the router.__ As shown below.
		!!! note ""
			=== "Wireless connection"
				<div style="text-align: center;">
					<img class="boxshadow" src="/images/wireless.png">
				</div>
				①  Turn on the computer,click &nbsp; <img class="boxshadow" src="/images/mac11.png"> &nbsp;  ➡ &nbsp;  <img class="boxshadow" src="/images/mac33.png">&nbsp;, enter the WiFi settings page to enable the WiFi function.

				<div style="text-align: center;">
				<img class="boxshadow" src="/images/mac02.png">
				</div>
				
				Or click the icon &nbsp; <img class="boxshadow" src="/images/mac00.png"> &nbsp;on the system bar to enable the WiFi function.
				
				<div style="text-align: center;">
				<img class="boxshadow" src="/images/mac01.png">
				</div>
				②  Find your default WiFi name and click to connect to WiFi.
				
				!!! question "Default WiFi name"
					The default WiFi name can be found in the user manual or the product bottom label.
						
					__[SSID](/Encyclopedia/vlan_id/)__(Click to learn about SSID) : WAVLINK-XXXX_XXXX
						
					"XXXX" in SSID is for illustrative purposes only, please refer to the last 4 digits of the MAC address of the label on the bottomof the product.

			=== "Wired connection"		
				<div style="text-align: center;">
					<img class="boxshadow" src="/images/wired.png">
				</div>
				① To use wired access to the Internet, connect an Ethernet cable between the router's wan port and the Ethernet port on your Mac. If your computer doesn't have an Ethernet port, try using a USB to Ethernet adapter.

				② After the connection is successful, the device will automatically identify the network. 
				
				
			
		3 . __New devices or reset devices need to log in to the administrator interface for initialization settings.__
			
		4 . __There are two ways to log in to the wavlink router management interface :__
			
		!!! note ""
			=== "Log in using the domain name"
				Log in using the domain name __http://wavlogin.link__. (It is recommended that you use a domain name to log in. If you fail to log in using a domain name, please try to log in using an IP address.)
				
				
				<div style="text-align: center;">
				<img class="boxshadow" src="/images/586x3acp01.png">
				</div>	
			=== "Log in using your IP address "
				Log in using your IP address __http://192.168.20.1__.(If you want to log in using your IP address, please refer to the steps below.)
				<div style="text-align: center;">
				<img class="boxshadow" src="/images/compute02.png">
				</div>
					
				!!! question "About IP address(192.168.20.1)"
					Different devices have different IP addresses. For specific IP addresses, please refer to the specific device manual or the actual acquisition of the device.For the actual method of obtaining an IP address, refer to the following steps.
				??? danger "Click here to learn how to obtain the IP address of your router."						
					=== "Wireless"
						① After the connection is successful, "connected" is displayed. Click "__Details__" to the right of the WiFi name to view the __Router IP__.
							
						<div style="text-align: center;">
						<img class="boxshadow" src="/images/mac07.png">
						</div>
						<div style="text-align: center;">
							<img class="boxshadow" src="/images/mac06.png">
						</div>
					=== "Wired"
						① Click the setting icon <img class="boxshadow" src="/images/mac11.png"> to enter the network under the setting page. 
						
						② After entering the network,click this column . <img class="boxshadow" src="/images/mac22.png">
						<div style="text-align: center;">
						<img class="boxshadow" src="/images/mac015.png">
						</div>
						
						③ Click __Details__ to view the IP information. For subsequent setting steps, refer to __[wireless connection](/FAQ/first_time_setup/#mac-wireless-connection)__.
						
						<div style="text-align: center;">
						<img class="boxshadow" src="/images/mac016.png">
						</div>

		5 . After entering the website, the password for the first login page is the default password, which is admin. After entering the default password, press the "__Enter__" key on the keyboard or click "__Login__" with the mouse.

		<div style="text-align: center;">
		<img class="boxshadow" src="/images/586x3alogin01.png">
		</div>	
	
		6 . After successfully logging in, you will enter the system password setting page, where you can set your device management password to increase device security.(it is recommended that you use a strong password : The password contains __uppercase and lowercase letters, numbers, and special symbols such as " @, ?, * "__, etc.) 

		<div style="text-align: center;">
		<img class="boxshadow" src="/images/586x3acp03.png">
		</div>	
		!!! tip
			__Device management password__ : Used to log in to the device management interface. Please remember your password. If you forget the password, you can press and hold the device __"Reset"__ button for __6s__ to restore the factory settings.Please note that doing this will clear all settings you have previously made.
		
		7 . Click __"Next"__ to enter the WiFi settings page. You can customize your WiFi name __(SSID)__, encryption method and password.(it is recommended that you use a strong password : The password contains __uppercase and lowercase letters, numbers, and special symbols such as " @, ?, * "__, etc.)
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/586x3acp05.png">
		</div>
		
		8 . After setting the WiFi configuration, click __"Next"__ and the device system will automatically detect the wan type for you. After the detection is completed, you can configure the mode of your device and switch the wan type.
		
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/586x3acp04.png">
		</div>
		
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/586x3acp06.png">
		</div>	
			
		- __Internet VLAN ID__ : Some ISPs require users to set a VLAN ID on the router before they can access the Internet. If you find that dialing fails or obtaining an IP from the ISP fails, please check whether you need to set a VLAN ID.
				
		- __Auto Mesh__ : If this function is turned on, the device will automatically switch to Mesh Router or Mesh node mode depending on your network topology. If it is turned off, the device will remain fixed in Mesh Router mode.
		??? info "About mode selection and wan type?"
			Please pay attention to distinguish mode selection and wan type. Mode selection is the mode of the device, and wan type is the Internet connection method. The default Internet connection method is DHCP, and the default mode of the device is Router mode.

			??? note "Mode Selection"
				__Mode Selection__ : The default mode of the device is Router mode. The device supports two modes: __Router mode and AP mode__. You can click the option box to switch the device mode at will.		
					
				<div style="text-align: center;">
				<img class="boxshadow" src="/images/586x3acp08.png">
				</div>
				<div style="text-align: center;">
				<img class="boxshadow" src="/images/586x3acp07.png">
				</div>					
				
			??? note "WAN Type"
				__WAN Type__ : The default wan type is DHCP. If you need to connect to the Internet via dial-up, choose PPPOE. If you need to use a fixed IP, choose Static IP.
					
				__PPPOE__

				① __Username and password provided by the service provider (ISP)__ : The account name and password usually provided to you by the ISP for establishing a PPPoE connection.

				<div style="text-align: center;">
				<img class="boxshadow" src="/images/586x3acp10.png">
				</div>
					
				② If you forget your password, you can click __"Get PPPoE From Old router"__ and follow the prompts to complete the setup.
				<div style="text-align: center;">
				<img class="boxshadow" src="/images/586x3acp11.png">
				</div>
				<div style="text-align: center;">
				<img class="boxshadow" src="/images/586x3acp13.png">
				</div>					
					
				__Static IP__

				__IP Address__ : You need to assign a static IP address to your device. Make sure the IP address is unique on your network and is on the correct subnet.
					
				__Subnet Mask__ : Determine the subnet mask you use. A common subnet mask is 255.255.255.0.
					
				__Default gateway__ : Enter the default gateway IP address of your network device (check the user manual).
					
				__DNS server__ : You can use the DNS server provided by your ISP, or choose another public DNS server, such as Google DNS (8.8.8.8) or Cloudflare DNS (1.1.1.1).

					
				<div style="text-align: center;">
				<img class="boxshadow" src="/images/586x3acp14.png">
				</div>
					
				
		9 . After setting, click __"Save"__ and wait for the device configuration to be completed. After the Refresh button appears, click " __Refresh__ " to complete the initial setting of the device.
			
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/586x3acp16.png">
		</div>			
			
		10 . After the initialization settings are completed, enter the device management password you set to log in to the system management interface to start exploring your wavlink device.
			
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/586x3acp17.png">
		</div>	
		!!! tip "Forgot password solution"
			Please press and hold the reset button on the router for __more than 6 seconds__. After the router reset, you can log in with the default password.
	*** 
Setup complete! Still have questions? Visit our __[Community Forum](/community)__.