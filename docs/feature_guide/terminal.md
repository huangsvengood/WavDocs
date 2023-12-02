<!--<style>
    .text {
        font-size: 21px; 
    }
</style>
-->
---
??? note "Click to see how to enter the Terminal Settings interface"
	<img src="/images/weizhi01.png" width="15" height="15">&nbsp;In the upper right corner of the admin page ➡ Terminal 
	<div style="text-align: center;">
		<img class="boxshadow" src="/images/terminal00.png">
	</div>


<p class="text">
WiFi terminal equipment refers to devices connected to WiFi networks, that is, mobile devices, computers, smartphones, etc. that use wireless signals to connect to WiFi routers.Terminal device management is based on the condition of being connected to the router WiFi, so the terminal device can only be managed after it is connected to WiFi.
</p>
## __Connect to wifi__


<p class="text">
When the terminal device is connected to WiFi, the following setting steps are required :
</p>

<p class="text">
1 . Turn on your device's WiFi: On your mobile device or laptop, turn on your device's WiFi so that the device searches for available WiFi networks.
</p>
<p class="text">
2 . Search for available WiFi networks: Searching for available WiFi networks on your device will usually display all surrounding WiFi network names (SSIDs).
</p>
<p class="text">
3 . Select and connect to a WiFi network : Select the WiFi network to connect to from the search results, enter the password (if required) and connect to the network. Once the connection is successful, the device can access the Internet through that WiFi network.
</p>
!!! tip
	
	When choosing to connect to WiFi, you need to pay attention to the following points :
	
	- Network security : To protect network security, you should choose a trusted WiFi network and avoid transmitting sensitive information on unsecured public WiFi networks.
	
	
	- Network speed : WiFi speed and stability are affected by many factors, such as signal strength, router settings, etc. You can improve network speed and stability by placing your router, adjusting its settings, and more.
	
	- Network Management : To better manage your device's WiFi network, you can use the router's management tools to configure router settings, restrict access, and more. Additionally, parental controls can be used to limit your children’s online activities.
	
	For specific connection examples, please click [How to Connect to WiFi?](/FAQ/How_to_Connect_to_WiFi)


## __Online Terminal__ 

<p class="text">
After the connection is successful, you can see the online and offline terminal device information on the terminal page. On the online terminal interface, you can see the connection type and click " <img src = "/images/qianbi.png"> " to change your device name.
</p>
<div style="text-align: center;">
    <img class="boxshadow" src="/images/terminal01.png">
</div>
<p class="text">
You can also set the device's network speed or prohibit connected devices from accessing the Internet.
</p>
<div style="text-align: center;">
    <img class="boxshadow" src="/images/terminal03.png">
</div>
!!! abstract "Example"
	__Speed limit__
	
	normal :
	<div style="text-align: center;">
    <img class="boxshadow" src="/images/terminal001.png">
	</div>
	
	After setting the speed limit :
	
	<div style="text-align: center;">
		<img class="boxshadow" src="/images/terminal002.png">
	</div>
	<div style="text-align: center;">
	<img class="boxshadow" src="/images/terminal005.png">
	</div>
	!!! question "207KB/s?"
		The actual download speed may vary due to network conditions, mobile phone hardware and other factors, so the speed of 207kb/s we saw is slightly higher than the set 200kb/s.
	

	__Block Internet__
	
	<div style="text-align: center;">
		<img class="boxshadow" src="/images/terminal003.png">
	</div>
	
	After enabling this function, the WiFi on the mobile phone becomes no Internet connection.
	
	<div style="text-align: center;">
		<img class="boxshadow" src="/images/terminal004.png">
	</div>
!!! tip
	1MB/s=1024KB/s;the range of speed limit is 0KB/S~65535KB/S, when it is 0, it means that the speed is not limited. When the speed limit is set, the hardware NAT will be automatically turned off; when the speed limit is cancelled, the hardware NAT will be automatically turned on to improve the performance of the device. When you need to count traffic information, please turn off hardware NAT.


## __Offline Terminal__
<p class="text">
The offline terminal interface displays terminal device information, including device name, mac address, speed limit and removal of the device.
</p>
<div style="text-align: center;">
    <img class="boxshadow" src="/images/terminal02.png">
</div>
!!! note ""
	If you want to know more about offline terminal equipment please click __[What is the use of offline terminal management?](/FAQ/What_is_the_use_of_offline_terminal_management)__