<!--<style>
    .text {
        font-size: 21px; 
    }
</style>
-->
---
Different products have different entry methods, please check according to your product type.
!!! note ""
	=== "Router"
		Home > Terminal 
		<div style="text-align: center;">
			<img class="boxshadow" src="/images/terminal00.png">
		</div>
	=== "Indoor Repeater"
		Home > Terminal
		<div style="text-align: center;">
			<img class="boxshadow" src="/images/terminal.png">
		</div>
		<div style="text-align: center;">
			<img class="boxshadow" src="/images/terminal013.png">
		</div>			
	=== "Outdoor AP"
		Home > Terminal
		<div style="text-align: center;">
			<img class="boxshadow" src="/images/terminal.png">
		</div>
		<div style="text-align: center;">
			<img class="boxshadow" src="/images/terminal013.png">
		</div>	
!!! warning 
	Indoor Repeater and Outdoor AP only support viewing terminals but do not support terminal management.

## __View terminal list__ 
On the terminal page, you can view the terminal connection list, manage your terminal devices, set __speed limits__, __block Internet__ and __monitor real-time traffic__.

<div style="text-align: center;">
    <img class="boxshadow" src="/images/terminal006.png">
</div>
## __Monitor terminal real-time traffic__
!!! abstract ""
	Before downloading
	
	<div style="text-align: center;">
    <img class="boxshadow" src="/images/terminal007.png">
	</div>
	
	Downloading
	<div style="text-align: center;">
    <img class="boxshadow" src="/images/terminal008.png">
	</div>
	
	After downloading
	<div style="text-align: center;">
    <img class="boxshadow" src="/images/terminal009.png">
	</div>
!!! question "Why the flow monitoring is inaccurate?"
	The __Hardware NAT__ Settings's default open status leads to theabsence of monitored data. lf you wanna keep the flowmonitoring accurate, you have to turn off the Hardware NATSettings function manually, which inevitably will increase the CPUusage.
	??? question "Click to see where to turn off HardWare NAT"
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/terminal010.png">
		</div>
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/terminal011.png">
		</div>
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/terminal012.png">
		</div>
## __Speed limit__	
!!! abstract ""
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
		The actual download speed may vary due to network conditions, mobile phone hardware and other factors, so the speed of 207KB/s we saw is slightly higher than the set 200KB/s.
	

## __Block Internet__
!!! abstract ""
	<div style="text-align: center;">
		<img class="boxshadow" src="/images/terminal003.png">
	</div>
	
	After enabling this function, the WiFi on the mobile phone becomes no Internet connection.
	
	<div style="text-align: center;">
		<img class="boxshadow" src="/images/terminal004.png">
	</div>
!!! tip
	1MB/s=1024KB/s;the range of speed limit is 0KB/S~65535KB/S, when it is 0, it means that the speed is not limited. 
	
	When the speed limit is set, the hardware NAT will be automatically turned off; when the speed limit is cancelled, the hardware NAT will be automatically turned on to improve the performance of the device. When you need to count traffic information, please turn off hardware NAT.	
## __Other__	
After the connection is successful, you can see the online and offline terminal device information on the terminal page. On the online terminal interface, you can see the connection type and click " <img src = "/images/qianbi.png"> " to change your device name.

<div style="text-align: center;">
    <img class="boxshadow" src="/images/terminal01.png">
</div>

---