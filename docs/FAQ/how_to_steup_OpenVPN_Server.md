## __What is OpenVPN?__
OpenVPN is a virtual private network (__[VPN]()__) system that implements technology to create secure point-to-point or site-to-site connections in routed or bridged configurations and remote access facilities. It implements client and server applications.

__OpenVPN Server__ refers to the computer or device running the __OpenVPN service__. The role of an OpenVPN server is to allow client devices to connect to their own private network over the Internet or other networks and establish a secure communication link.

## __How does OpenVPN work?__

## __Set up OpenVPN Server on wavlink router__

1 . Enter the IP address of the device management interface in the browser address bar, __log in__ to the management interface, click __More Settings__, and enter __OpenVPN Server__.
	<div style="text-align: center;">
		<img class="boxshadow" src="/images/openvpn001.png">
	</div>
	
2 . To configure OpenVPN Server, you can choose to __automatically generate__ or __configure it manually__. You can refer to the following two methods to complete the configuration of your own OpenVPN Server. If you are new to this, it is recommended that you use automatic generation.
!!! note ""
	=== "Automatically Generate"	
		Click to start OpenVPN Server, and the device will __automatically generate__ OpenVPN Server configuration information.It is recommended that you enable __login user and password__ to improve security.
			<div style="text-align: center;">
				<img class="boxshadow" src="/images/openvpnserver00.png">
			</div>
		!!! info 
			The network segments of OpenVPN Server and OpenVPN Client cannot be the same. If the client and server use the same IP network segment, network conflicts may occur and data cannot be transmitted correctly.

	=== "Manual Configuration"
		If you do not want to use the system configuration, you can click the parameter corresponding box to __customize__ the settings.It is recommended that you enable __login user and password__ to improve security.
		<div style="text-align: center;">
			<img class="boxshadow" src="/images/openvpnserver01.png">
		</div>
		
		The parameters in the figure can be set according to your needs, but you need to pay attention to the usable range of the parameters. We have listed the meaning and applicable range of each parameter for you.

		
		!!! abstract ""
			<b>TUN</b> means using a virtual tunnel interface. This means that OpenVPN will create a virtual network interface (e.g. tun0) and transmit the encrypted data stream through this interface.
			
			<b>TAP</b> means using a virtual Ethernet adapter. This means that OpenVPN will create a virtual network interface (e.g. tap0) and transmit the encrypted data stream through this interface. Unlike the tun interface, the tap interface can transmit Ethernet frames rather than just IP packets.
			
			<div style="text-align: center;">
				<img class="boxshadow" src="/images/openvpn03.png">
			</div>
			
			TAP devices work exactly the same as TUN devices, with the following __differences__ :

			- The __TUN__ device __cannot bridge__ with the physical network card, but it can be connected to the physical network card through Layer 3 switching.
			
			- __TAP__ devices __can bridge__ with physical network cards and support MAC layer broadcast.(If you need to use bridging, select TAP.)
		!!! abstract ""
			OpenVPN can run on two different transport layer protocols: __TCP__ and __UDP__. The choice of which protocol to use often depends on your __specific network needs__ and __environment__.
			
			<div style="text-align: center;">
			<img class="boxshadow" src="/images/openvpn04.png">
			</div>
			
			__UDP protocol is suitable for the following situations__:

			__Speed and efficiency__ : UDP is a connectionless protocol that does not require a connection to be established at the beginning of communication like TCP, so it is generally faster and more efficient than TCP when transferring data.

			__Real-time requirements__ : For applications that require fast data transmission and can tolerate a certain degree of packet loss, such as online games, voice calls, etc., UDP can better meet the needs.

			__Lower requirements for data integrity__ : UDP does not provide a packet retransmission and acknowledgment mechanism, so UDP can be chosen when there are lower requirements for data packet integrity.

			!!! abstract ""
			__TCP protocol is suitable for the following situations__ :

			__High reliability requirements__ : Compared with UDP, TCP provides a reliable data transmission mechanism, including retransmission and confirmation of data packets, so it is suitable for scenarios with high data integrity requirements.

			__Firewall penetration__ : In some network environments, UDP may be restricted by firewalls, and __TCP__ communications are more likely to penetrate firewalls in these network environments.

			__High data transmission stability requirements__ : For scenarios such as file transfer that require high data transmission stability, you can choose to use TCP.
			!!! abstract ""
			__Generally speaking__, __UDP__ can usually be selected when data needs to be __transmitted quickly__, __real-time requirements__ are high, or data integrity requirements are not so strict;__TCP__ can be selected when __data integrity requirements__ are high, reliable __data transmission__ is required, or __firewall penetration__ is required.		
		!!! abstract ""
			The IP address uses a __private network address__. We have listed the following private network addresses for you. You can choose according to your needs.
			
			<div style="text-align: center;">
			<img class="boxshadow" src="/images/openvpnserver02.png">
			</div>
			
			The private network address is:

			 - Class A address: __10.0.0.0～10.255.255.255__
			 - Class B address: __172.16.0.0 ~ 172.31.255.255__
			 - Class C address: __192.168.0.0～192.168.255.255__
			!!! info 
				The network segments of OpenVPN Server and OpenVPN Client cannot be the same. If the client and server use the same IP network segment, network conflicts may occur and data cannot be transmitted correctly.

		
		!!! abstract ""
			__255.255.255.0__ means that the OpenVPN server will use a 24-bit subnet mask. This means that the OpenVPN server will assign the VPN client an IP address of the form 192.168.20.x, where x ranges from __1 to 254__.

			<div style="text-align: center;">
			<img class="boxshadow" src="/images/openvpnserver03.png">
			</div>
			
			Depending on your __network environment and needs__, the subnet mask settings may vary. Make sure you take into account factors such as network size, performance needs and security when making any changes.
		
		!!! abstract ""
			The default port used by OpenVPN is __1194/UDP__. Of course, you can also customize the port range in the OpenVPN configuration. If __port forwarding__ is required __through a firewall or router__, or the default port needs to be modified for security reasons, you can select other ports for configuration. Generally speaking, you can choose any port that is __not occupied by other services__ as the port range for OpenVPN, but please make sure that the corresponding firewall and router are set accordingly during configuration.
			
			<div style="text-align: center;">
			<img class="boxshadow" src="/images/openvpnserver04.png">
			</div>
		
			The available range of port numbers is from __0 to 65535__. However, some of these port numbers have been standardized as default ports used by specific protocols or services, so it is not recommended to select these ports in this range. Here are some common port number ranges:

			__Well-known Ports__: From __0 to 1023__, these port numbers are usually used for standardized services and protocols, such as HTTP (port number 80), HTTPS (port number 443), FTP (port number 21), etc.

			__Registered Ports__: From __1024 to 49151__, these port numbers are used by applications and services developed by third parties but are not officially standardized.

			__Dynamic and/or Private Ports__: From __49152 to 65535__, these port numbers are for temporary allocation or internal use and are generally not assigned to a specific service or protocol.

			When selecting a port range, it is recommended to __avoid__ using ports that are __already occupied by commonly used protocols or services to prevent conflicts and confusion__. You can choose to configure it within a registered port or a dynamic/private port range to ensure there is no conflict with other services, and make appropriate network configuration and security settings as needed.
		
		!!! abstract ""
			Each encryption method has its own characteristics and applicable scenarios. You can choose the appropriate encryption method according to your specific needs. 
			
			For example, if you are __pursuing higher performance__, you can consider using the __AES encryption algorithm in GCM mode__; if you need to __balance performance and security__, you can consider __the CHACHA20-POLY1305 algorithm__.

			- __AES-256-GCM__: This is the AES symmetric encryption algorithm using a 256-bit key length, combined with GCM mode for encryption. GCM mode provides authentication and encryption and has better performance than CBC mode.

			- __AES-128-GCM__: Similar to above, but uses the AES symmetric encryption algorithm with a 128-bit key length.

			- __AES-128-CBC__: This is the AES symmetric encryption algorithm using a 128-bit key length, combined with CBC mode for encryption. CBC mode is a common block encryption mode, but it is slightly inferior in performance compared to GCM mode.

			- __CHACHA20-POLY1305__: This is a combination of ChaCha20 encryption algorithm and Poly1305 message authentication code for high performance and security.
			<div style="text-align: center;">
				<img class="boxshadow" src="/images/openvpn05.png">
			</div>
			
		!!! abstract ""		
			__SHA-256__ and __SHA-51__2 are both hash algorithms in the __SHA-2__ (Secure Hash Algorithm 2) family. The main difference between them is the output length and computational complexity :

			- __Output length__: __SHA-256__ produces a hash value of __256 bits (32 bytes)__, while __SHA-512__ produces a hash value of __512 bits (64 bytes)__. Therefore, SHA-512 provides a longer hash value and is theoretically more collision resistant.

			- __Computational complexity__: Since the hash value generated by __SHA-512__ is __longer__, calculating the SHA-512 hash value requires more computing resources and time compared to SHA-256. This means that __SHA-512__ may be calculated slightly __slower__ than SHA-256.

			- __Security__: Although both SHA-256 and SHA-512 are widely used and no effective attack method has been found yet, the longer output length of __SHA-512__ means __higher security__. Longer hash values increase the difficulty of collisions, making it more difficult to find two different inputs that produce the same hash value through an attack.
			
			<div style="text-align: center;">
			<img class="boxshadow" src="/images/openvpn06.png">
			</div>
			
			Choose the appropriate hash algorithm according to different security needs and performance requirements. Normally, for __most applications__, __SHA-256__ is sufficient to meet security requirements, its output length is short, and its calculation speed is relatively fast. Under __specific security needs__, or when there is a higher requirement for higher collision resistance, you can __choose SHA-512__.
		!!! abstract ""
			__Username and Password Login__,indicates that authentication with a username and password is required to allow the client to connect to the VPN server.
			<div style="text-align: center;">
				<img class="boxshadow" src="/images/openvpn07.png">
			</div>
			__Allow access to LAN__ 
			Indicates that the VPN client is allowed to access local LAN resources.
		
3 . Click __Save__ and wait for the application to be updated.
<div style="text-align: center;">
<img class="boxshadow" src="/images/openvpnserver05.png">
</div>
4 . After the application is successful, the __Export Configuration File__ and __Export Log File__ will appear on the settings page.
<div style="text-align: center;">
<img class="boxshadow" src="/images/openvpnserver06.png">
</div>
5 . Click __Export Configuration File__ to automatically generate and download the OpenVPN Server configuration file (the file suffix is __*.ovpn*__). Please remember the location of the configuration file, which is required when the OpenVPN Client connects to the OpenVPN Server.
<div style="text-align: center;">
<img class="boxshadow" src="/images/openvpnserver07.png">
</div>
<div style="text-align: center;">
<img class="boxshadow" src="/images/openvpnserver08.png">
</div>
6 . If the client connection fails, you can click __Export Log File__ to download the log and view the reason for the failure.
<div style="text-align: center;">
<img class="boxshadow" src="/images/openvpnserver09.png">
</div>
7 . After downloading, you can click the download icon to view it.
<div style="text-align: center;">
<img class="boxshadow" src="/images/openvpnserver10.png">
</div>














## __Application scenarios__
__Remote Access__ : OpenVPN can be used as a __remote access__ solution, allowing users to securely access internal company resources over untrusted networks. Employees can connect to the corporate network through OpenVPN and access files, applications, and internal systems without having to connect directly to the company's LAN.

__Site-to-site connections__ : OpenVPN can be used to establish secure site-to-site connections, enabling secure communication between networks in different locations. This is useful for businesses that span multiple offices or branch offices, allowing for __secure data transfer__ and __resource sharing__.

__Enhanced WiFi security__ : Public WiFi hotspots often present security risks, and using OpenVPN can __enhance the security__ of your connection. By connecting to an OpenVPN server, users can establish an encrypted connection over an untrusted network, protecting their data from hackers or eavesdroppers.

__Encrypted data transfer__ : OpenVPN can be used as a solution for __encrypted data transfer__. If you need to transmit sensitive data over an unsecured network, using OpenVPN can ensure the confidentiality and integrity of your data, preventing it from being stolen or tampered with.

__Surf the Internet Anonymously__ : By connecting to an OpenVPN server, you can __hide your real IP address__ and surf the Internet through the server’s IP address. This can help protect your privacy and prevent your online activities from being tracked.

These are just some common usage scenarios, and OpenVPN's flexibility allows it to adapt to a variety of security needs and network configurations. Whether for individual users or businesses, OpenVPN can provide secure remote access and data transfer solutions.

---
