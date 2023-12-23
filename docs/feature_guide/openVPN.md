!!! note ""
	__This feature is currently only available to routers.__
---

## __What is OpenVPN?__
OpenVPN is a virtual private network (__[VPN]()__) system that implements technology to create secure point-to-point or site-to-site connections in routed or bridged configurations and remote access facilities. It implements client and server applications.

__OpenVPN Client__ refers to a computer or device running OpenVPN client software. OpenVPN clients can connect to OpenVPN servers to establish secure communication links.

!!! tip
	Our version of OpenVPN is OpenVPN 2.5.3.
## __Set up OpenVPN Client on wavlink router__

1 . Enter the IP address of the device management interface in the browser address bar, log in to the management interface, click More Settings, and enter the OpenVPN Client interface.
	
<div style="text-align: center;">
	<img class="boxshadow" src="/images/openvpn00.png">
</div>
	
2 . Click to __start OpenVPN Client__.
<div style="text-align: center;">
	<img class="boxshadow" src="/images/openvpnclient01.png">
</div>
3 . If the OpenVPN Server has set a login user and password, the OpenVPN Client must also configure a __login user and password__. Make sure to fill in the OpenVPN Server login user and password correctly, otherwise the connection will be affected.
<div style="text-align: center;">
	<img class="boxshadow" src="/images/openvpnclient02.png">
</div>
4 . Click File to select the correct OpenVPN Server configuration file. After selecting, click __File Upload__, then click __Save__ and wait for the application to be updated.
<div style="text-align: center;">
	<img class="boxshadow" src="/images/openvpnclient03.png">
</div>
<div style="text-align: center;">
	<img class="boxshadow" src="/images/openvpnclient04.png">
</div>
!!! info
	OpenVPN Server’s configuration file suffix is [&nbsp;&nbsp;__.ovpn__&nbsp;&nbsp;]
5 . After successful application, OpenVPN will automatically identify the connection Sever, and the status will change from Disconnected to connecting, and then to connected.
<div style="text-align: center;">
	<img class="boxshadow" src="/images/openvpnclient05.png">
</div>
<div style="text-align: center;">⬇</div>
<div style="text-align: center;">
	<img class="boxshadow" src="/images/openvpnclient06.png">
</div>
<div style="text-align: center;">⬇</div>
<div style="text-align: center;">
	<img class="boxshadow" src="/images/openvpnclient07.png">
</div>
6 . After the connection is successful, the OpenVPN Client can communicate with the terminal device connected to the OpenVPN Server.Client data can be seen in the Connection List of OpenVPN Server.
<div style="text-align: center;">
	<img class="boxshadow" src="/images/openvpnclient08.png">
</div>
!!! tip
	Different versions of openvpn may support different configurations. If you find a connection exception, you can __export the log__ and check the cause of the failure. If it is a problem with the Application scenarios configuration file, you can try to __modify the parameters of the configuration file__.









## __Application scenarios__
__Remote Access__ : OpenVPN can be used as a __remote access__ solution, allowing users to securely access internal company resources over untrusted networks. Employees can connect to the corporate network through OpenVPN and access files, applications, and internal systems without having to connect directly to the company's LAN.

__Site-to-site connections__ : OpenVPN can be used to establish secure site-to-site connections, enabling secure communication between networks in different locations. This is useful for businesses that span multiple offices or branch offices, allowing for __secure data transfer__ and __resource sharing__.

__Enhanced WiFi security__ : Public WiFi hotspots often present security risks, and using OpenVPN can __enhance the security__ of your connection. By connecting to an OpenVPN server, users can establish an encrypted connection over an untrusted network, protecting their data from hackers or eavesdroppers.

__Encrypted data transfer__ : OpenVPN can be used as a solution for __encrypted data transfer__. If you need to transmit sensitive data over an unsecured network, using OpenVPN can ensure the confidentiality and integrity of your data, preventing it from being stolen or tampered with.

__Surf the Internet Anonymously__ : By connecting to an OpenVPN server, you can __hide your real IP address__ and surf the Internet through the server’s IP address. This can help protect your privacy and prevent your online activities from being tracked.

These are just some common usage scenarios, and OpenVPN's flexibility allows it to adapt to a variety of security needs and network configurations. Whether for individual users or businesses, OpenVPN can provide secure remote access and data transfer solutions.



---
