<!--<style>
    .text {
        font-size: 21px; 
    }
</style>
-->
# WAN Settings

---
Through network settings, you can modify the network access method according to your actual needs and flexibly adapt to changes in the network environment.


1 . Open the browser, enter __wavlogin.link__, and enter the password to enter the router management page.

2 . Click __"More Settings > Network > Network Settings"__ or directly click the network settings icon "<img class="boxshadow" src="/images/moresettings.png">" on the navigation bar in the upper right corner to enter the network settings page.

3 . The device supports six Internet access methods, including DHCP, broadband dial-up, static IP, PPPoE Dual Access, PPTP Dual Access, and L2TP Dual Access. 

4 . The default Internet access method is DHCP, which means automatically obtaining IP (no additional settings are required, just connect the available Ethernet cable to the WAN port). You can set it according to your actual needs and network environment.

## __WAN Type__

### __DHCP__
<p class="text">
DHCP is a protocol that automatically assigns IP addresses. It can automatically assign IP addresses, subnet masks, default gateways and other information to computers.
Used in small networks such as homes or offices, it can easily manage and assign IP addresses, reducing the trouble of manual configuration.
</p>
<div style="text-align: center;">
    <img class="boxshadow" src="/images/wan01.png">
</div>
### __PPPOE__
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

__Scenario 1__: The parameters of IP address, subnet mask, gateway, and DNS server are provided by your operator. Fill in the parameters and click Save to complete the basic settings.

__Scenario 2__: Customize the IP address. Make sure to select an address within your LAN range that will not conflict with other devices. Fill in the IP address box, and after setting the correct subnet mask, gateway, and DNS server address, click Save to complete the settings.

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

### __L2TP Dual Access__
<p class="text">
L2TP dual access is a network access method that uses two L2TP VPN connections. It allows users to access the Internet through two VPN connections, improving bandwidth and network reliability.
</p>

<div style="text-align: center;">
    <img class="boxshadow" src="/images/wan06.png">
</div>

## __Advanced__

Below are some high-level parameter descriptions.

<div style="text-align: center;">
    <img class="boxshadow" src="/images/wanadvanced.png">
</div>

__Custom MTU__ : Ethernet MTU (Maximum Transmission Unit), if your network provider requires you to adjust the MTU size, turn this option on, otherwise it is recommended that you turn it off for the best network experience.

__MAC Clone__ : If your network operator only allows one device to access the Internet, you can enable and bind the MAC address so that other devices connected to the router can also connect to the Internet.

__Custom DNS__ : If your network provider provides a fixed DNS address, you can enable this function and enter it. Otherwise, you do not need to enable it, as the router will automatically obtain it.

__Internet VLAN ID__ : The Internet ID is used to identify the characteristics of network data. For specific settings, please consult your network operator's customer service personnel or operation and maintenance personnel.

---