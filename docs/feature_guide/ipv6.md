<style>
    .text {
        font-size: 21px; 
    }
</style>
---
<img src="/images/weizhi01.png" width="19" height="19">&nbsp;In the upper right corner of the admin page ➡ More Settings ➡ Network ➡ IPV6 Settings

<p class="text">
IPv6 is a next-generation internet protocol with larger address space, improved functionality, and enhanced security. It's introduction is aimed at addressing the growing number of interconnected devices and providing better network performance and security
</p>
## __IPv6 WAN Settings__
<p class="text">
The method of obtaining IPv6 can vary depending on the network environment and provider support. Here is a brief description and differences between the different acquisition methods.
</p>

<div style="text-align: center;">
    <img alt="guest wifi" class="boxshadow" src="/images/ipv6_01.png">
</div>

### __Automatic Detection__
<p class="text">
This method is the most common and simple way to obtain an IPv6 address by automatically detecting the network environment. When you connect to an IPv6-enabled network, your device automatically obtains an IPv6 address. This method generally works on home or public networks and requires no special configuration.
</p>

### __IPv4+IPv6 PPPOE__
<p class="text">
PPPOE (Point-to-Point Protocol Over Ethernet) is a protocol used to establish network connections. IPv4+IPv6 PPPOE is a method of obtaining both IPv4 and IPv6 addresses through a PPPOE connection. It can be used in networks that support PPPOE, such as network connections provided by some broadband access service providers (ISPs). This method may require you to configure the PPPOE username and password in the network settings.
</p>
<div style="text-align: center;">
    <img alt="guest wifi" class="boxshadow" src="/images/ipv6_03.png">
</div>

### __Static IPv6 Address__
<p class="text">
A static IPv6 address is a fixed IPv6 address that you configure manually. When using this method, you need to manually enter network configuration information such as IPv6 address, subnet prefix length, default gateway, and DNS server. This method is usually suitable for specific purposes that require a fixed public IPv6 address, such as servers or network devices.
</p>
<div style="text-align: center;">
    <img class="boxshadow" src="/images/ipv6-04.png">
</div>

><p class="text">
The difference between these methods is how the IPv6 address is obtained and the complexity of the configuration. Automatic detection is the simplest way and works in most cases. IPv4+IPv6 PPPOE requires the PPPOE username and password in the network settings. Static IPv6 addresses require manual configuration of detailed network information.
</p>
><p class="text">
Which method to use depends on your network environment and your service provider's support. If you are unsure, it is recommended to contact your network service provider or administrator for accurate configuration information and recommendations.
</p>

## __IPv6 LAN Settings__
<p class="text">
IPv6 LAN addresses can be obtained through Automatic Allocation and SLAAC (Stateless Address Autoconfiguration). The uses and differences between these two methods are as follows :
</p>
### __Automatic Allocation__
<p class="text">
In automatic allocation mode, IPv6 LAN addresses are automatically allocated by network devices or routers to devices connected to the network. This method usually uses the DHCPv6 (Dynamic Host Configuration Protocol for IPv6) protocol for address allocation. After the device is connected to the network, it will automatically send a DHCPv6 request to the router, and the router will assign an available IPv6 address to the device.
</p>
<div style="text-align: center;">
    <img class="boxshadow" src="/images/ipv6_02.png">
</div>

<p class="text">
To use automatic allocation, you need to ensure that there is a router or device in the network that supports DHCPv6 and that the DHCPv6 server has been configured correctly. The device automatically obtains an IPv6 address when connected to the network, no manual configuration is required.
</p>

### __SLAAC__
<p class="text">
SLAAC(Stateless Address Autoconfiguration) is a stateless address automatic configuration method that automatically assigns IPv6 addresses to devices by taking advantage of IPv6 features. In SLAAC, the device receives a network prefix (Prefix) from the router in the network, and then automatically constructs its own IPv6 address based on the prefix.
</p>
<div style="text-align: center;">
    <img class="boxshadow" src="/images/ipv6_05.png">
</div>
<p class="text">
To use SLAAC, you need to ensure that the routers in the network have been configured with IPv6 prefixes and broadcast the prefixes to devices connected to the network. The device automatically generates an IPv6 address based on the prefix, without using DHCPv6 or other configuration.
</p>

>The difference:

>- Automatic Allocation relies on the DHCPv6 protocol and the configured DHCPv6 server for address allocation, while SLAAC implements automatic address configuration through router broadcast network prefixes.

>- Automatic Allocation requires DHCPv6 configuration and management, while SLAAC does not require additional configuration.

>- Automatic Allocation can provide more flexibility, such as other network information such as DNS server and gateway addresses can be allocated through a DHCPv6 server. SLAAC only provides address configuration, and other network information may need to be obtained through other methods.


<p class="text">
Which method to use depends on your network environment and needs. If unsure, it is recommended to contact your network administrator or service provider for accurate configuration information and recommendations.
</p>

---