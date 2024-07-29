# UBOOT Upgrade the firmware
---

If your device cannot upgrade or update the firmware normally, you can use this method to update the firmware.

### __Tools__
An available Ethernet cable, firmware you need to upgrade or replace, computer, wavlink router.

### __Detailed steps__

1 . Power off the device and connect the network cable to __the WAN port__ of the router and the network port of the computer.

2 . Open the __control panel__ of the computer, enter the home page of the Control panel and click __"View network status and tasks > Change adapter settings"__.
<div style="text-align: center;">
	<img class="boxshadow" src="/images/recovery01.png">
</div>
<div style="text-align: center;">
	<img class="boxshadow" src="/images/recovery02.png">
</div>

3 . Right-click the TAB of __"Ethernet"__, and click __"Properties"__ in the menu bar to open the Properties TAB.
<div style="text-align: center;">
	<img class="boxshadow" src="/images/recovery05.png">
</div>
<div style="text-align: center;">
	<img class="boxshadow" src="/images/recovery03.png">
</div>

4 . In the TAB, click __"Properties"__ and double-click __"IPV4"__ to go to the interface for modifying IPV4 properties. 

<div style="text-align: center;">
	<img class="boxshadow" src="/images/recovery06.png">
</div>
<div style="text-align: center;">
	<img class="boxshadow" src="/images/recovery07.png">
</div>

5 . Change __"Obtain an IP address automatically"__ to __"Use the following IP address"__, enter __192.168.10.100"__ and __255.255.255.0__ in the IP address and subnet mask fields, and click __"OK"__.
<div style="text-align: center;">
	<img class="boxshadow" src="/images/recovery08.png">
</div>



!!! tip "Tip"
	Click __"Obtain IP Address automatically"__ and then click __"OK"__ to cancel the static IP address.The manual IP address here is to set the static IP.

6 . Press the __RESET__ button of the device, then power on the router, hold down the 6s Reset button and release the button. Then the device automatically enters the Uboot mode.

7 . Open the browser on the PC, enter __192.168.10.1__ in the address box, and press enter. The uboot recovery page is displayed.

<div style="text-align: center;">
	<img class="boxshadow" src="/images/l01.png">
</div>

8 . click __"Choose File"__, select to upload the firmware you want to restore/upgrade, click __"OK"__ after selecting, that is, the page displays the firmware you selected, click __"Upload"__.

<div style="text-align: center;">
	<img class="boxshadow" src="/images/l02.png">
</div>

<div style="text-align: center;">
	<img class="boxshadow" src="/images/l03.png">
</div>

<div style="text-align: center;">
	<img class="boxshadow" src="/images/l04.png">
</div>

<div style="text-align: center;">
	<img class="boxshadow" src="/images/l05.png">
</div>

9 . After uploading, please confirm whether the actual firmware information is the same as that displayed on the page. After confirming, click __"Proceed"__ to start the firmware upgrade.

<div style="text-align: center;">
	<img class="boxshadow" src="/images/l06.png">
</div>

10 . After the firmware upgrade is complete, __change the network cable connecting to the WAN port of the router to connect to the LAN port__, __revoke the static IP address__ set by the computer, and __use DHCP__ to automatically obtain it.

<div style="text-align: center;">
	<img class="boxshadow" src="/images/l07.png">
</div>
<div style="text-align: center;">
	<img class="boxshadow" src="/images/l08.png">
</div>


11 . Open the browser, enter __wavlogin.link__ to login to the device management page, and complete the wizard as prompted.

<div style="text-align: center;">
	<img class="boxshadow" src="/images/l10.png">
</div>


12 . After the initial configuration is complete, enter your password to log in to the management page. You can see that the firmware version is updated.

<div style="text-align: center;">
	<img class="boxshadow" src="/images/l101.png">
</div>

---
















