# Multi-WAN Network Optimization

---

__Ethernet, wireless relay, USB tethering__ three WAN ports to access the Internet at the same time, realizing load balancing, failover and traffic management functions to improve the overall network speed and reliability.


## Status check and interface status detection mode settings

### __Status check__

1 . Open the browser, enter __wavlogin.link__, and enter the password to enter the router management page.

2 . After entering, the second column on the right side of the homepage is the status display of the multi-line load.

<div style="text-align: center;">
    <img class="boxshadow" src="/images/multiwan10.png">
</div>


### __Interface introduction__

1 . Ethernet: Connect the available network cable to the WAN port of the device.

2 . Wireless relay: After logging in to the management page, click __"More Settings > Network > Repeater Mode"__, turn on the relay mode, click __"Start Scan"__, and after scanning, select the WiFi to be relayed and enter its password to complete the relay. 

!!! danger "Note"
	Please pay attention to the difference between the two repeater modes. This repeater mode is different from the repeater mode in in "Mode Selection" !
	
	^^__[How to relay WiFi?](/FAQ/How_to_relay_WiFi/)__^^

3 . Hotspot sharing: Turn on USB network sharing on your phone, use a data cable to connect the travel router and the phone, and the device can access the Internet through the USB shared network.

!!! note "Note"
	You need to select at least two WAN ports from the three connections of wired network port, wireless relay, and USB network sharing to achieve optimization.

	
### __Interface settings__

1 . The default multi-line load mode is __"Failure Recovery"__. If you need to switch to __"Load Balancing"__, you can set it on the __" More Settings > Network > Multi-line Load "__ page. 

2 . You can also set the interface status detection method of multi-WAN on this page. Click the __"Settings"__ button in the column of different interfaces to configure the detection method.

<div style="text-align: center;">
    <img class="boxshadow" src="/images/multiwan04.png">
</div>


3 . The specific parameters of the interface status detection method are as follows. You can configure them as needed.

<div style="text-align: center;">
    <img class="boxshadow" src="/images/multiwan03.png">
</div>

### __Multi-WAN - Fault recovery__

1 . After logging in to the management page, click __"More Settings > Network > Multi-WAN"__ to enter the multi-line load setting page, switch __"Mode"__ to __"Failure Recovery"__.

2 . After selecting and dragging the interface to be replaced to any position, click __"Save"__ to complete the switch. You can adjust the interface priority according to the network environment.

<div style="text-align: center;">
    <img class="boxshadow" src="/images/multiwan02.png">
</div>

### __Multi-WAN - Load balancing__

1 . After logging in to the management page, click __"More Settings > Network > Multi-Line Load"__ to enter the multi-line load setting page, and switch the __"Mode"__ to __"Load Balancing"__.

2 . Click the option box of the corresponding interface to adjust the load ratio. You can adjust the load ratio according to the network environment.
<div style="text-align: center;">
    <img class="boxshadow" src="/images/multiwan01.png">
</div>



---
















