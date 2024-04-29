
---
Advanced > Network Setting
<div style="text-align: center;">
	<img class="boxshadow" src="/images/wireless007.png">
</div>
<div style="text-align: center;">
	<img class="boxshadow" src="/images/repeaterwan006.png">
</div>
Please note that indoor repeater and outdoor AP products only have wan type selection in __Mesh Router Mode and AP Mode__. 

Among them, the wan type of __Mesh Router Mode includes DHCP, PPPOE, and Static IP__, and the wan type of __AP Mode only has DHCP and Static IP__.
!!! danger ""
	=== "Mesh Router Mode"
		<div style="text-align: center;">
			<img class="boxshadow" src="/images/repeaterwan001.png">
		</div>
	=== "AP Mode"
		<div style="text-align: center;">
			<img class="boxshadow" src="/images/repeaterwan007.png">
		</div>
## __WAN Type__

### DHCP
!!! note ""
	DHCP is a protocol that automatically assigns IP addresses. It can automatically assign IP addresses, subnet masks, default gateways and other information to computers.
	Used in small networks such as homes or offices, it can easily manage and assign IP addresses, reducing the trouble of manual configuration.

<div style="text-align: center;">
    <img class="boxshadow" src="/images/repeaterwan003.png">
</div>
### PPPOE(Point-to-Point Protocol)
!!! note ""
	PPPoE is an authentication protocol used to establish secure connections on WANs, including functions such as verifying user identity and allocating IP addresses.
	Used for broadband access methods such as ADSL and optical fiber, which can provide secure network connection methods.

<div style="text-align: center;">
    <img class="boxshadow" src="/images/repeaterwan005.png">
</div>
### Static IP
!!! note ""
	Static IP refers to assigning a fixed IP address to the computer, as opposed to dynamic IP.
	 Used for network connections, servers, remote access, etc. that require long-term stability to ensure the stability of the network connection.


<div style="text-align: center;">
    <img class="boxshadow" src="/images/repeaterwan002.png">
</div>



## __Advanced__



### Custom MTU
!!! note ""
	Ethernet MTU (Maximum Transmission Unit), if your network provider requires you to adjust the MTU size, turn this option on, otherwise it is recommended that you turn it off for the best network experience.

### MAC Clone
!!! note ""
	If your network operator only allows one device to access the Internet, you can enable and bind the MAC address so that other devices connected to the router can also connect to the Internet.

### Custom DNS
!!! note ""
	If your network provider provides a fixed DNS address, you can enable this function and enter it. Otherwise, you do not need to enable it, as the router will automatically obtain it.




