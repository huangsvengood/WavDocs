<style>
    .text {
        font-size: 21px; 
    }
</style>
---
<img src="/images/weizhi01.png" width="19" height="19">&nbsp;In the upper right corner of the admin page ➡ VPN  ➡ Wireguard Client/Server
<p class="text">
WireGuard is a concise, efficient, and secure VPN protocol with advanced encryption algorithms, low latency, high throughput, simple and easy-to-use configuration, and cross platform support.
</p>
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
>- <b>Interface</b> : Indicates the network interface name of WireGuard VPN.
>- <b>Address</b> : Indicates the IP address and subnet mask used by WireGuard VPN.
>- <b>Private Key</b> : Represents the private key of WireGuard VPN, used to encrypt and decrypt communication data.
>- <b>MTU (optional)</b> : Indicates the maximum transmission unit size of WireGuard VPN.
>- <b>Listening port (optional)</b> : Indicates the port number that the WireGuard VPN server listens to.
>- <b>DNS (optional)</b> : Indicates the DNS server address used by WireGuard VPN.
>- <b>Peer</b> : Indicates the peer configuration information of WireGuard VPN.
>- <b>Endpoint IP</b> : Indicates the IP address of the peer.
>- <b>Endpoint Port</b> : Indicates the port number of the peer.
>- <b>Allowips</b> : Indicates the IP address and subnet mask range allowed for peer access.
>- <b>Public Key</b> : Represents the peer’s public key.
>- <b>Preshared Key (optional)</b> : Represents a preshared key used for authentication and encrypting communication data.
>- <b>Persistent Keepalive (optional)</b> : Indicates the persistence Keepalive interval, used to keep the connection active.
## __Wireguard Server__
<p class="text">
The <b>IP address</b> and <b>Local Port</b> need to be set when configuring the WireGuard server to provide effective VPN connections to clients. Please make sure to enter the correct IP address and port number when configuring the WireGuard server so that clients can successfully connect to the server and communicate VPN.
</p>
<div style="text-align: center;">
    <img class="boxshadow" src="/images/wireguard03.png">
</div>
---