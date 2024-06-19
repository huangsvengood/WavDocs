# How to relay WiFi ?

---

Please note the difference between the two repeater modes. This repeater mode in the multi-wan is different from the repeater mode in the mode selection! The Repeater Mode in the mode selection is the usage mode of the router, and the Repeater Mode in Multi-WAN belongs to one of the threads of multi-line load.

!!! example ""
	=== "Repeater Mode in Multi-WAN"
		1 . After logging in to the management page, click __"More Settings > Network > Repeater Mode"__, turn on the repeater mode, click __"Start scanning"__.
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/multiwan05.png">
		</div>

	=== "Repeater Mode in Mode Selection"
		1 . After logging in to the management page, click __"More Settings > Network > Mode Selection"__, the mode selection is switched to repeater mode, click __"Save"__.
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/wifirepeater01.png">
		</div>
		!!! warning "Note"
			Please unplug the LAN cable from the WAN port.
			
		After saving successfully, select a connection type and click __"Next"__.
		<div style="text-align: center;">
			<img class="boxshadow" src="/images/wifirepeater02.png">
		</div>
		???+ abstract "About Connection Type"
			=== "Bridge"
				This mode can relay any wireless network signal, but does not have DHCP service function. IP is managed by the upper device. Select the wireless signal you want to relay and enter the password of the relay signal. Note that if you need to set up this device after successful relay in this mode, you need to pass through http://wavlogin.link/ Enter the settings page.

			=== "WISP"
				Wireless local area network operators can relay any wireless network signal. This mode has DHCP service function and is in different network segments with superior devices, which can manage device IP allocation. It is recommended that you select this relay mode, select the wireless signal you want to relay, and enter the password of the relay signal.

2 . Wait for the device to scan for available WiFi, and the scanning process is expected to take __33 seconds__.
<div style="text-align: center;">
    <img class="boxshadow" src="/images/multiwan06.png">
</div>

3 . After scanning, click the WiFi you want to repeat, and the page will jump to the password input interface.
<div style="text-align: center;">
    <img class="boxshadow" src="/images/multiwan07.png">
</div>

4 . Enter the correct password for the WiFi, click __"Save"__ and wait for the settings to be updated. After the update, click __"Refresh"__ to complete the relay.
<div style="text-align: center;">
    <img class="boxshadow" src="/images/multiwan08.png">
</div>

<div style="text-align: center;">
    <img class="boxshadow" src="/images/multiwan09.png">
</div>

!!! warning "Note"
	If you enter an incorrect password, the WiFi relay will fail.

5 . After the relay is completed, the relay information can be viewed on the homepage.

<div style="text-align: center;">
    <img class="boxshadow" src="/images/wifirepeater05.png">
</div>





---









