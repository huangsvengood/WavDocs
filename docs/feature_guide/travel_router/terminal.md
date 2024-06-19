# Terminal management
---
## __View terminal list__ 

1 . Open the browser, enter __wavlogin.link__, and enter the password to enter the router management page.

2 . Click __"Terminal Management"__ to view online terminals and offline terminals.

<div style="text-align: center;">
<img class="boxshadow" src="/images/terminal000.png">
</div>


3 . On the terminal page, you can view the terminal connection list, manage your terminal devices, __block Internet__ and __monitor real-time traffic__.

<div style="text-align: center;">
    <img class="boxshadow" src="/images/terminal111.png">
</div>

!!! question "Why the flow monitoring is inaccurate?"
	The __Hardware NAT__ Settings's default open status leads to theabsence of monitored data. lf you wanna keep the flowmonitoring accurate, you have to turn off the Hardware NATSettings function manually, which inevitably will increase the CPUusage.
	??? question "Click to see where to turn off HardWare NAT"
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/terminal010.png">
		</div>
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/terminalnat.png">
		</div>
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/terminal012.png">
		</div>


## __Block Internet__
!!! abstract ""
	Select the terminal that needs to be prohibited from accessing the Internet, and click the prohibition button, and a prompt box will pop up saying __"Setting successful"__.
	<div style="text-align: center;">
		<img class="boxshadow" src="/images/terminalblock.png">
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