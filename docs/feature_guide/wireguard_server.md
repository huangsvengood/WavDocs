## __what is wireguard?__
WireGuard is an open source virtual private network (VPN) protocol designed to provide high performance, low latency, and easy-to-use secure connections. It is designed to be a modern and fast VPN solution with a small code base that is easy to audit and deploy.

Compared with traditional VPN protocols, WireGuard has lower resource consumption, provides faster connection speeds and better performance. 


## __Configure wireguard Server__


1 . Connect the computer to the router network through wired or wireless connections, __open the browser__ and enter the router __LAN IP__ or router URL __http://wavlogin.link__ to enter the router login page.
	<div style="text-align: center;">
		<img class="boxshadow" src="/images/mesh002.png">
	</div>
	<div style="text-align: center;">
		<img class="boxshadow" src="/images/compute02.png">
	</div>
2 . Enter the password to manage the router and click __"Login"__ to enter the router management page.
If you forget the account password you set, you need to restore the router to its factory default state and then reset the password.
<div style="text-align: center;">
	<img class="boxshadow" src="/images/welcom_page.png">
</div>

3 . Click __[More Settings] > [VPN] > [WireGuard Server]__ to enter the configuration page. 
<div style="text-align: center;">
	<img class="boxshadow" src="/images/wireguard002.png">
</div>
4 . Enable the WireGuard Server function and set the IP address and port number.
<div style="text-align: center;">
	<img class="boxshadow" src="/images/wireguard003.png">
</div>
!!! question "IP Address?"
	WireGuard servers are typically located within an internal network and are used to connect different devices or subnets. In this case, you can use a private network address,

	If you need remote access or provide external services, in this case, you can use the public IP address to configure the WireGuard server.
!!! question "Local Port?"
	51820 is the default port number of the WireGuard VPN protocol and is used for data transmission and communication. When you configure WireGuard, you can use this port number or configure a different port number as needed.
5 . Click __"Save"__ and wait for the function to be applied. The waiting time is about __one minute__. Click __"Refresh"__ after applying.
<div style="text-align: center;">
	<img class="boxshadow" src="/images/wireguard004.png">
</div>
6 . __Re-enter the password__ to __log in__ to the management interface, click Login, and enter the router management page. Click __"More Settings" > "VPN" > "WireGuard Server"__ to enter the configuration page.

7 . Click __"Add"__ to add a user, Set the user name, click __"Apply"__, and wait for the configuration application.

<div style="text-align: center;">
	<img class="boxshadow" src="/images/wireguard005.png">
</div>

8 . After the application is successful, click the download icon <img class="boxshadow" src="/images/wireguard009.png"> to download the generated user configuration file. The file suffix is __.conf__.

<div style="text-align: center;">
	<img class="boxshadow" src="/images/wireguard007.png">
</div>

9 . After downloading, you can see the downloaded file in the download icon <img class="boxshadow" src="/images/wireguard010.png"> of the browser.
<div style="text-align: center;">
	<img class="boxshadow" src="/images/wireguard008.png">
</div>
When the browser does not display the download icon, click the "<img class="boxshadow" src="/images/wireguard012.png">" icon. Select "__Download__" and the browser will display the file you have downloaded.Most browsers support this operation.
<div style="text-align: center;">
	<img class="boxshadow" src="/images/wireguard011.png">
</div>
<div style="text-align: center;">
	<img class="boxshadow" src="/images/wireguard013.png">
</div>
If a client has successfully connected, you can view it in the connection list.
<div style="text-align: center;">
	<img class="boxshadow" src="/images/wireguard024.png">
</div>

## __How to connect wireguard?__
Take __Windows 11__ as an example:

1 . Open the browser, enter __https://www.wireguard.com/__, and click Enter to enter the wireguard official website.

<div style="text-align: center;">
	<img class="boxshadow" src="/images/wireguard014.png">
</div>

2 . Click "__Installation__" and select the __Windows version__ to download.

<div style="text-align: center;">
	<img class="boxshadow" src="/images/wireguard015.png">
</div>
<div style="text-align: center;">
	<img class="boxshadow" src="/images/wireguard016.png">
</div>

3 . After downloading, double-click the "__wireguard-installer.exe__" installation program, wait for the installation program to load, and follow the prompts to complete the installation.
<div style="text-align: center;">
	<img class="boxshadow" src="/images/wireguard017.png">
</div>
<div style="text-align: center;">
	<img class="boxshadow" src="/images/wireguard018.png">
</div>

4 . After the installation is successful, the program will start immediately. Click "__Add Tunnel__" to pop up the file transfer box. You need to select __the configuration file generated by wireguard server__. Please ensure that the file is available.
<div style="text-align: center;">
	<img class="boxshadow" src="/images/wireguard019.png">
</div>
!!! info
	The configuration file is a file with the suffix __.conf__  .
<div style="text-align: center;">
	<img class="boxshadow" src="/images/wireguard020.png">
</div>

5 . After the addition is successful, the wireguard interface will display tunnel information. Click __Activate__ to connect to the tunnel, and the tunnel status will change from __[Activate➡Activating➡Active]__.
<div style="text-align: center;">
	<img class="boxshadow" src="/images/wireguard021.png">
</div>

<div style="text-align: center;">⬇</div>

<div style="text-align: center;">
	<img class="boxshadow" src="/images/wireguard022.png">
</div>
6 . If you want to disconnect, click __Deactivate__.
<div style="text-align: center;">
	<img class="boxshadow" src="/images/wireguard023.png">
</div>






















---