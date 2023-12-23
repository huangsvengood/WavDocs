<!--<style>
    .text {
        font-size: 21px; 
    }
</style>
-->
# WAN Settings

---
 More Settings  > Network > WAN Setting
	<div style="text-align: center;">
    <img class="boxshadow" src="/images/wan08.png">
	</div>
## __WAN Type__

### __DHCP__
<p class="text">
DHCP is a protocol that automatically assigns IP addresses. It can automatically assign IP addresses, subnet masks, default gateways and other information to computers.
Used in small networks such as homes or offices, it can easily manage and assign IP addresses, reducing the trouble of manual configuration.
</p>
<div style="text-align: center;">
    <img class="boxshadow" src="/images/wan01.png">
</div>
### __PPPOE(Point-to-Point Protocol)__
<p class="text">
PPPoE is an authentication protocol used to establish secure connections on WANs, including functions such as verifying user identity and allocating IP addresses.
Used for broadband access methods such as ADSL and optical fiber, which can provide secure network connection methods.
</p>
<div style="text-align: center;">
    <img class="boxshadow" src="/images/wan02.png">
</div>
### __Static IP__
<p class="text">
Static IP refers to assigning a fixed IP address to the computer, as opposed to dynamic IP.
 Used for network connections, servers, remote access, etc. that require long-term stability to ensure the stability of the network connection.
</p>

<div style="text-align: center;">
    <img class="boxshadow" src="/images/wan03.png">
</div>
### __PPPOE Dual Access__
<p class="text">
 PPPoE dual access uses two PPPoE broadband lines at the same time to achieve balanced distribution of network traffic through load balancing technology.
 Used to improve network bandwidth and stability, suitable for occasions requiring large-traffic data transmission.
</p>
<div style="text-align: center;">
    <img class="boxshadow" src="/images/wan04.png">
</div>

### __PPTP Dual Access__
<p class="text">
PPTP Dual Access is a network connection method that uses two PPTP VPN connections to achieve dual network access. By using PPTP Dual Access, users can establish two PPTP VPN connections to access the Internet at the same time to improve bandwidth and network reliability.
</p>
<div style="text-align: center;">
    <img class="boxshadow" src="/images/wan05.png">
</div>

### __L2TP Dual Access(Layer 2 Tunneling Protocol dual access)__
<p class="text">
L2TP dual access is a network access method that uses two L2TP VPN connections. It allows users to access the Internet through two VPN connections, improving bandwidth and network reliability.
</p>

<div style="text-align: center;">
    <img class="boxshadow" src="/images/wan06.png">
</div>

## __Advanced__

### __Internet access method__
<p class="text">Please select the Internet connection provided by your network service provider. DHCP is an automatic network type configured by your internet service provider. For Static IP, please provide accurate IP address, subnet mask, gateway, and DNS1 & DNS2 manually. The other types require input of a username and password provided by your Internet Service Provider.
</p>
### __Custom MTU__
<p class="text">
Ethernet MTU (Maximum Transmission Unit), if your network provider requires you to adjust the MTU size, turn this option on, otherwise it is recommended that you turn it off for the best network experience.
</p>
### __MAC Clone__
<p class="text">
If your network operator only allows one device to access the Internet, you can enable and bind the MAC address so that other devices connected to the router can also connect to the Internet.
</p>
### __Custom DNS__
<p class="text">
If your network provider provides a fixed DNS address, you can enable this function and enter it. Otherwise, you do not need to enable it, as the router will automatically obtain it.
</p>
### __Internet VLAN ID__
<p class="text">
The Internet ID is used to identify the characteristics of network data. For specific settings, please consult your network operator's customer service personnel or operation and maintenance personnel.
</p>
---