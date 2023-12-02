<!--<style>
    .text {
        font-size: 21px; 
    }
</style>
-->
---
??? note "Click to see how to enter the OpenVPN Client interface"
	<img src="/images/weizhi01.png" width="15" height="15">&nbsp;In the upper right corner of the admin page ➡ More Settings ➡ VPN ➡ OpenVPN Client
	<div style="text-align: center;">
		<img class="boxshadow" src="/images/openvpn00.png">
	</div>

A Virtual Private Network (__[VPN]()__) uses encryption technology to transform a public network such as the internet into a private network to provide higher security and privacy protection. 

<p class="text">
Through VPN, users can access remote networks or resources on the internet while hiding their real IP address and physical location. VPN can also be used to bypass geographic restrictions and access content that is not accessible in specific countries or regions. Businesses often use VPN to protect their sensitive data and secure the network connection of their employees at remote locations.
</p>
## __Set up [OpenVPN]()__
<p class="text">
Use the tools provided by OpenVPN to generate certificates and keys on the router. These certificates and keys will be used for authentication and encrypted communications.
</p>
## __OpenVPN Client__
<p class="text">
Configure the OpenVPN client on the device you want to connect to the router. This includes specifying the server address, the location of the certificate and key, and other connection parameters.
</p>

<div style="text-align: center;">
    <img class="boxshadow" src="/images/openvpn01.png">
</div>
## __Parameter Description__

__Login with username and password__ : This refers to logging into the VPN using username and password for authentication. Users need to enter the correct username and password to successfully connect to the VPN server.

__Status__ : This refers to information showing the current OpenVPN connection status. In this example, the status is displayed as "Disconnected", indicating that there is currently no connection established with the OpenVPN server.

__Ovpn file upload__ : This refers to uploading the OpenVPN configuration file (usually saved in .ovpn file format). The configuration file contains all the settings and parameters required to connect to a specific OpenVPN server, such as server address, port, encryption method, etc. By uploading the configuration file, the client can obtain the correct connection configuration to establish a secure connection with the server.
!!! note ""
	__[Click to see actual use cases for OpenVPN Client]()__.
---

