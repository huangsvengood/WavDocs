<!--<style>
    .text {
        font-size: 21px; 
    }
</style>
-->
---
??? note "Click to see how to enter the Wireguard Client interface"
	<img src="/images/weizhi01.png" width="15" height="15">&nbsp;In the upper right corner of the admin page ➡ VPN  ➡ Wireguard Client
	<div style="text-align: center;">
		<img class="boxshadow" src="/images/wireguard001.png">
	</div>


__[WireGuard]()__ is a concise, efficient, and secure VPN protocol with advanced encryption algorithms, low latency, high throughput, simple and easy-to-use configuration, and cross platform support.

## __Wireguard Client__
<p class="text">
Import and configure the VPN connection in the WireGuard client. You can configure this in two ways:
</p>
<p class="text">
1 . <b>File Upload</b> : Select the "<b>File Upload</b>" option and follow the prompts to select the WireGuard configuration file you want to upload.
</p>
<div style="text-align: center;">
    <img class="boxshadow" src="/images/wireguard01.png">
</div>
<p class="text">
2 . <b>Manual Input</b> : Select the "<b>Manual Input</b>" option and manually enter the contents of the WireGuard configuration file into the corresponding text box.
</p>
<div style="text-align: center;">
    <img class="boxshadow" src="/images/wireguard02.png">
</div>
### __Parameter Description__
- <b>Interface</b> : Indicates the network interface name of WireGuard VPN.
- <b>Address</b> : Indicates the IP address and subnet mask used by WireGuard VPN.
- <b>Private Key</b> : Represents the private key of WireGuard VPN, used to encrypt and decrypt communication data.
- <b>MTU (optional)</b> : Indicates the maximum transmission unit size of WireGuard VPN.
- <b>Listening port (optional)</b> : Indicates the port number that the WireGuard VPN server listens to.
- <b>DNS (optional)</b> : Indicates the DNS server address used by WireGuard VPN.
- <b>Peer</b> : Indicates the peer configuration information of WireGuard VPN.
- <b>Endpoint IP</b> : Indicates the IP address of the peer.
- <b>Endpoint Port</b> : Indicates the port number of the peer.
- <b>Allowips</b> : Indicates the IP address and subnet mask range allowed for peer access.>- <b>Public Key</b> : Represents the peer’s public key.
- <b>Preshared Key (optional)</b> : Represents a preshared key used for authentication and encrypting communication data.
- <b>Persistent Keepalive (optional)</b> : Indicates the persistence Keepalive interval, used to keep the connection active.

!!! note ""
	__[Click to view actual use cases of WireGuard Client]()__.
---