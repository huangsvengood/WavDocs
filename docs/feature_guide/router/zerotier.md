!!! note ""
	__This feature is currently only available to routers.__
ZeroTier provides a simple, secure, and efficient way for users to create virtual networks between devices in different geographical locations. 

It connects dispersed devices together through the use of encryption and tunneling technology, making them communicate as if they were in the same local area network.

It is suitable for various scenarios, such as remote office, IoT device management, cross regional connectivity, etc.

__*Note*__  *: ^^The zerotier on the router is the client, which is also the node. To implement the zerotier function, you need to register an account on the zerotier official website to apply for network services^^.*

## Usage examples
The following provides you with three usage cases about Zerotier. Please note that the cases in this article are for reference only.

<div style="text-align: center;">
	<img class="boxshadow" src="/images/zerotiertopo.png">
</div>

!!! info ""
		
	- Usage case 1 : Use zerotier to realize remote server connection between different LANs.

	- Usage case 2 : Zerotier+wavlink supports USB products to build remote access to samba.
	
	- Usage case 3 : Use Zerotier to realize remote desktop connections between different LANs.

!!! note ""

	=== "Usage case 1"

		This case aims to __use zerotier for intranet penetration and remote server connection in different areas__. The simulation scenario of this case is that __a local PC in a remote office remotely accesses the server on the remote PC__(this case uses FTP server as an example).
		!!! note ""
			Environmental requirements:
			
			1. Both the local PC and the remote PC are __connected to the Internet__.
			
			2. __Enable the FTP service__ on both the local PC and the remote PC.
			
			3. wavlink router. (The wavlink router comes with a Zerotier service and is easy to use.)

		#### __Zerotier configuration__

		1 . Open __the remote PC__ browser and enter __^^https://www.zerotier.com/^^__ and hit Enter.
			<div style="text-align: center;">
			<img class="boxshadow" src="/images/zerotier001.png">
			</div>	
		2 . Click __"Download"__ to enter the download version selection page and select the __windows version__ to download.
			
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/zerotier002.png">
		</div>
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/zerotier003.png">
		</div>	
		3 . After downloading, click the download icon and double-click __ZeroTier One.msi__ to install.
			
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/zerotier004.png">
		</div>	
		4 . Complete the installation according to the picture prompts.

		<div style="text-align: center;">
		<img class="boxshadow" src="/images/zerotier005.png">
		</div>	
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/zerotier006.png">
		</div>
		5 . After the installation is completed, the main interface of the program will not appear, only a small icon will appear in the notification area hidden in the lower right corner.

		<div style="text-align: center;">
		<img class="boxshadow" src="/images/zerotier013.png">
		</div>

		6 . Go to __^^https://my.zerotier.com/^^__ to __register and log in to your account__. After logging in, click __Create a Network__ to create a network. ZeroTier will randomly assign a Network ID. 

		<div style="text-align: center;">
		<img class="boxshadow" src="/images/zerotier008.png">
		</div>
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/zerotier009.png">
		</div>
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/zerotier010.png">
		</div>

		7 . Click the small ZeroTier One icon on the remote PC, and then click Join Network.The following dialog box will pop up. Enter the Network ID number assigned by ZeroTier in the previous step in the input box.

		<div style="text-align: center;">
		<img class="boxshadow" src="/images/zerotier013.png">
		</div>
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/zerotier012.png">
		</div>
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/zerotier014.png">
		</div>
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/zerotier015.png">
		</div>

		#### __Local router settings__
		8 . Enter the router LAN IP(Can be found in the user manual) or URL __^^http://wavlogin.link^^__ in the browser to log in to the router management interface.
		<div style="text-align: center;">
			<img class="boxshadow" src="/images/mesh002.png">
		</div>
		<div style="text-align: center;">
			<img class="boxshadow" src="/images/compute02.png">
		</div>

		9 . Go to "__More Settings > VPN > Zerotier__", enable the Zerotier function, and enter the Network ID number assigned by ZeroTier in the previous step in the Network ID box. Then click Save. Waiting for configuration application.

		<div style="text-align: center;">
			<img class="boxshadow" src="/images/zero00.png">
		</div>
		<div style="text-align: center;">
			<img class="boxshadow" src="/images/zerotier025.png">
		</div>

		10 . After the configuration takes effect, wait for a while and the Zerotier Connection Status will change to "__Connected__" to indicate a successful connection.

		11 . __Return to Zerotier's network interface__, click on the created network to enter the network configuration interface.

		<div style="text-align: center;">
			<img class="boxshadow" src="/images/zerotier010.png">
		</div>
		<div style="text-align: center;">
			<img class="boxshadow" src="/images/zerotier026.png">
		</div>

		12 . Scroll down on the network configuration interface to Members. You can see that Members already have two members. These two members are the remote PC and the local router.

		<div style="text-align: center;">
			<img class="boxshadow" src="/images/zerotier016.png">
		</div>

		13 . Click to select two members to form a virtual LAN.Wait a few seconds and Zerotier will assign __Managed IPs__ to them respectively. Remember the Managed IPs of the router, you will need it in the next step.

		<div style="text-align: center;">
			<img class="boxshadow" src="/images/zerotier017.png">
		</div>

		14 . On the network configuration interface, scroll up to Advancd and add a network segment according to the example below.__Please fill in the information based on the actual router network segment.__

		<div style="text-align: center;">
			<img class="boxshadow" src="/images/zerotier027.png">
		</div>
		!!! note "How to identify which are the managed IPs of the local router?"
			You can identify different devices based on their Mac addresses.

		15 . After the addition is successful, you can see the network segment just set in the Managed Router.

		<div style="text-align: center;">
			<img class="boxshadow" src="/images/zerotier028.png">
		</div>

		16 . Open the file manager of the local PC, enter the FTP server address in the address bar, such as __^^ftp://172.23.210.133^^__, and press the Enter key.

		<div style="text-align: center;">
			<img class="boxshadow" src="/images/zerotier031.png">
		</div>
		<div style="text-align: center;">
			<img class="boxshadow" src="/images/zerotier029.png">
		</div>

		It shows that the connection is successful and you can see the ftp shared folder.

		<div style="text-align: center;">
			<img class="boxshadow" src="/images/zerotier030.png">
		</div>

		!!! info "About ftp://172.23.210.133"
			__ftp://172.23.210.133__, 172.23.210.133 is the IP address of the FTP server. It should be noted here that the bound IP of the FTP server on the remote PC needs to be changed to the Managed IPs assigned by the Zerotier network.
			
			Modify the ftp server binding IP :
			
			1. Open IIS Manager.
			
			2. Click FTP server.
			
			3. Click Bindings and modify it.
			
			<div style="text-align: center;">
				<img class="boxshadow" src="/images/zerotier032.png">
			</div>
			<div style="text-align: center;">
				<img class="boxshadow" src="/images/zerotier0333.png">
			</div>
	=== "Usage case 2"
		This case aims to use Zerotier+wavlink to support USB products to build remote access to Samba.	
		!!! info ""
			__The application scenarios of this case include:__
			
			①Access and edit work files or study materials stored on shared devices when you are out or away from home.
			
			② Back up important files to a shared storage device at home when you are out, or restore files from the storage device to other devices.
			
			*(Other scenes are waiting for you to explore.)*
		!!! note ""
			Environmental requirements:
			
			1. A router that supports USB (this case uses wavlink’s WS-WN551X3 router).
			
			2. The local PC, remote PC, and USB router are all connected to the Internet.
			
			3. USB storage device.
			
		__(If your remote PC and local router have successfully joined the Zerotier network__, you can __[click to jump directly to the remote desktop operation section.](#section2))__
	
		#### __Zerotier configuration__

		1 . Open __the remote PC__ browser and enter __^^https://www.zerotier.com/^^__ and hit Enter.
			<div style="text-align: center;">
			<img class="boxshadow" src="/images/zerotier001.png">
			</div>	
		2 . Click __"Download"__ to enter the download version selection page and select the __windows version__ to download.
			
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/zerotier002.png">
		</div>
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/zerotier003.png">
		</div>	
		3 . After downloading, click the download icon and double-click __ZeroTier One.msi__ to install.
			
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/zerotier004.png">
		</div>	
		4 . Complete the installation according to the picture prompts.

		<div style="text-align: center;">
		<img class="boxshadow" src="/images/zerotier005.png">
		</div>	
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/zerotier006.png">
		</div>
		5 . After the installation is completed, the main interface of the program will not appear, only a small icon will appear in the notification area hidden in the lower right corner.

		<div style="text-align: center;">
		<img class="boxshadow" src="/images/zerotier013.png">
		</div>

		6 . Go to __^^https://my.zerotier.com/^^__ to __register and log in to your account__. After logging in, click __Create a Network__ to create a network. ZeroTier will randomly assign a Network ID. 

		<div style="text-align: center;">
		<img class="boxshadow" src="/images/zerotier008.png">
		</div>
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/zerotier009.png">
		</div>
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/zerotier010.png">
		</div>

		7 . Click the small ZeroTier One icon on the remote PC, and then click Join Network.The following dialog box will pop up. Enter the Network ID number assigned by ZeroTier in the previous step in the input box.

		<div style="text-align: center;">
		<img class="boxshadow" src="/images/zerotier013.png">
		</div>
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/zerotier012.png">
		</div>
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/zerotier014.png">
		</div>
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/zerotier015.png">
		</div>

		#### __Local router settings__
		8 . Enter the router LAN IP(Can be found in the user manual) or URL __^^http://wavlogin.link^^__ in the browser to log in to the router management interface.
		<div style="text-align: center;">
			<img class="boxshadow" src="/images/mesh002.png">
		</div>
		<div style="text-align: center;">
			<img class="boxshadow" src="/images/compute02.png">
		</div>

		9 . Go to "__More Settings > VPN > Zerotier__", enable the Zerotier function, and enter the Network ID number assigned by ZeroTier in the previous step in the Network ID box. Then click Save. Waiting for configuration application.

		<div style="text-align: center;">
			<img class="boxshadow" src="/images/zero00.png">
		</div>
		<div style="text-align: center;">
			<img class="boxshadow" src="/images/usb000.png">
		</div>

		10 . After the configuration takes effect, wait for a while and the Zerotier Connection Status will change to "__Connected__" to indicate a successful connection.
		## <a name="section2"></a>
		11 . __Connect the USB storage device to the USB port of the router__. Enter Storage Management and check whether the USB access is successful. If successful, the USB status will be as shown in the figure below.
		
		<div style="text-align: center;">
			<img class="boxshadow" src="/images/usb002.png">
		</div>
		
		12 . After setting the USB user password, click __Save__.
		<div style="text-align: center;">
			<img class="boxshadow" src="/images/usb001.png">
		</div>


		13 . __Return to Zerotier's network interface__, click on the created network to enter the network configuration interface.

		<div style="text-align: center;">
			<img class="boxshadow" src="/images/zerotier010.png">
		</div>
		<div style="text-align: center;">
			<img class="boxshadow" src="/images/zerotier026.png">
		</div>

		14 . Scroll down on the network configuration interface to Members. You can see that Members already have two members. These two members are the remote PC and the local router.

		<div style="text-align: center;">
			<img class="boxshadow" src="/images/zerotier016.png">
		</div>

		15 . Click to select two members to form a virtual LAN.Wait a few seconds and Zerotier will assign __Managed IPs__ to them respectively. Remember the Managed IPs of the router, you will need it in the next step.

		<div style="text-align: center;">
			<img class="boxshadow" src="/images/zerotier017.png">
		</div>

		16 . On the network configuration interface, scroll up to Advancd and add a network segment according to the example below.__Please fill in the information based on the actual router network segment.__

		<div style="text-align: center;">
			<img class="boxshadow" src="/images/zerotier027.png">
		</div>
		!!! note "How to identify which are the managed IPs of the local router?"
			You can identify different devices based on their Mac addresses.

		17 . After the addition is successful, you can see the network segment just set in the Managed Router.

		<div style="text-align: center;">
			<img class="boxshadow" src="/images/zerotier028.png">
		</div>

		18 . Type "__win+R__" on the remote PC keyboard, enter __\\\192.168.20.1__ in the "__RUN__" window and hit Enter. The shared folder will appear after successful access. (192.168.20.1 is the IP address of the router storage management)
		<div style="text-align: center;">
			<img class="boxshadow" src="/images/usb003.png">
		</div>
		<div style="text-align: center;">
			<img class="boxshadow" src="/images/usb004.png">
		</div>
		
		19 . On the USB router side, you can connect to the router WiFi through a laptop or mobile device such as a mobile phone or iPad to enter the router storage and create files. At this time, USB router + USB storage device = shared file system
		<div style="text-align: center;">
			<img class="boxshadow" src="/images/usb005.png">
		</div>
		<div style="text-align: center;">
			<img class="boxshadow" src="/images/usb006.png">
		</div>

	=== "Usage case 3"
		This case aims to __use Zerotier to realize remote desktop connections between different LANs__.The simulation scenario in this case is working from home, and __a personal PC is remotely connected to a remote company PC__.	
		!!! note ""			
			Environmental requirements:
			
			1. Both the local PC and the remote PC are __connected to the Internet__.
			
			2. __Start the remote desktop service on the remote PC__.
			
			3. wavlink router. (The wavlink router comes with Zerotier service and is easy to use.)
		__(If your remote PC and local router have successfully joined the Zerotier network__, you can __[click to jump directly to the remote desktop operation section.](#section1))__
		
		__Zerotier configuration__

		1 . Open __the remote PC__ browser and enter __^^https://www.zerotier.com/^^__ and hit Enter.
			<div style="text-align: center;">
			<img class="boxshadow" src="/images/zerotier001.png">
			</div>	
		2 . Click __"Download"__ to enter the download version selection page and select the __windows version__ to download.
			
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/zerotier002.png">
		</div>
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/zerotier003.png">
		</div>	
		3 . After downloading, click the download icon and double-click __ZeroTier One.msi__ to install.
			
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/zerotier004.png">
		</div>	
		4 . Complete the installation according to the picture prompts.

		<div style="text-align: center;">
		<img class="boxshadow" src="/images/zerotier005.png">
		</div>	
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/zerotier006.png">
		</div>
		5 . After the installation is completed, the main interface of the program will not appear, only a small icon will appear in the notification area hidden in the lower right corner.

		<div style="text-align: center;">
		<img class="boxshadow" src="/images/zerotier013.png">
		</div>

		6 . Go to __^^https://my.zerotier.com/^^__ to __register and log in to your account__. After logging in, click __Create a Network__ to create a network. ZeroTier will randomly assign a Network ID. 

		<div style="text-align: center;">
		<img class="boxshadow" src="/images/zerotier008.png">
		</div>
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/zerotier009.png">
		</div>
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/zerotier010.png">
		</div>

		7 . Click the small ZeroTier One icon on the remote PC, and then click Join Network.The following dialog box will pop up. Enter the Network ID number assigned by ZeroTier in the previous step in the input box.

		<div style="text-align: center;">
		<img class="boxshadow" src="/images/zerotier013.png">
		</div>
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/zerotier012.png">
		</div>
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/zerotier014.png">
		</div>
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/zerotier015.png">
		</div>

		__Local router settings__
		
		8 . Enter the router LAN IP(Can be found in the user manual) or URL __^^http://wavlogin.link^^__ in the browser to log in to the router management interface.
		<div style="text-align: center;">
			<img class="boxshadow" src="/images/mesh002.png">
		</div>
		<div style="text-align: center;">
			<img class="boxshadow" src="/images/compute02.png">
		</div>

		9 . Go to "__More Settings > VPN > Zerotier__", enable the Zerotier function, and enter the Network ID number assigned by ZeroTier in the previous step in the Network ID box. Then click Save. Waiting for configuration application.

		<div style="text-align: center;">
			<img class="boxshadow" src="/images/zero00.png">
		</div>
		<div style="text-align: center;">
			<img class="boxshadow" src="/images/zerotier025.png">
		</div>

		10 . After the configuration takes effect, wait for a while and the Zerotier Connection Status will change to "__Connected__" to indicate a successful connection.

		11 . __Return to Zerotier's network interface__, click on the created network to enter the network configuration interface.

		<div style="text-align: center;">
			<img class="boxshadow" src="/images/zerotier010.png">
		</div>
		<div style="text-align: center;">
			<img class="boxshadow" src="/images/zerotier026.png">
		</div>

		12 . Scroll down on the network configuration interface to Members. You can see that Members already have two members. These two members are the remote PC and the local router.

		<div style="text-align: center;">
			<img class="boxshadow" src="/images/zerotier016.png">
		</div>

		13 . Click to select two members to form a virtual LAN.Wait a few seconds and Zerotier will assign __Managed IPs__ to them respectively. Remember the Managed IPs of the router, you will need it in the next step.

		<div style="text-align: center;">
			<img class="boxshadow" src="/images/zerotier017.png">
		</div>

		14 . On the network configuration interface, scroll up to Advancd and add a network segment according to the example below.__Please fill in the information based on the actual router network segment.__

		<div style="text-align: center;">
			<img class="boxshadow" src="/images/zerotier027.png">
		</div>
		!!! note "How to identify which are the managed IPs of the local router?"
			You can identify different devices based on their Mac addresses.

		15 . After the addition is successful, you can see the network segment just set in the Managed Router.

		<div style="text-align: center;">
			<img class="boxshadow" src="/images/zerotier028.png">
		</div>
		## <a name="section1"></a>
		16 . Type "win+R" on the keyboard, enter mstsc in the pop-up window and hit Enter.
		
		<div style="text-align: center;">
			<img class="boxshadow" src="/images/zerotier034.png">
		</div>
		
		17 . Enter the IP address of the remote PC you want to control, enter and press Enter.
		
		<div style="text-align: center;">
			<img class="boxshadow" src="/images/zerotier035.png">
		</div>
		<div style="text-align: center;">
			<img class="boxshadow" src="/images/zerotier036.png">
		</div>
		
		18 . After the connection is established, you need to verify the username and password of the remote PC. Enter the correct username and password to connect successfully.
		<div style="text-align: center;">
			<img class="boxshadow" src="/images/zerotier037.png">
		</div>
		<div style="text-align: center;">
			<img class="boxshadow" src="/images/zerotier038.png">
		</div>
		
		19 . After the connection is successful, the remote connection window appears and you can start your remote office.
		<div style="text-align: center;">
			<img class="boxshadow" src="/images/zerotier039.png">
		</div>



---