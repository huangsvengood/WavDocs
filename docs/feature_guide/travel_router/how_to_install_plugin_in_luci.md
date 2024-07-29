# How to install plugins in luci?
---
### __Example: Install the frp.__

1 . Open the browser, enter __wavlogin.link__, and press Enter. Enter the password to login to the device management page.


2 . Go to __"More Settings > Developer Options > LUCI"__ and click the button to enable LUCI function. Click __"192.168.20.1/cgi-bin/luci"__ to access the LUCI login page.

<div style="text-align: center;">
	<img class="boxshadow" src="/images/more.png">
</div>

<div style="text-align: center;">
	<img class="boxshadow" src="/images/dev.png">
</div>

<div style="text-align: center;">
	<img class="boxshadow" src="/images/luci001.png">
</div>
3 . Enter the password, click __"Login"__, after login, click __"System > Software"__, click __"update list"__ to wait for the update.
<div style="text-align: center;">
	<img class="boxshadow" src="/images/luci002.png">
</div>
!!! danger "Note"
	The password is your device administration password.
<div style="text-align: center;">
	<img class="boxshadow" src="/images/luci003.png">
</div>
<div style="text-align: center;">
	<img class="boxshadow" src="/images/luci004.png">
</div>
<div style="text-align: center;">
	<img class="boxshadow" src="/images/luci005.png">
</div>

4 .  after the update, enter __"luci-app-frp"__ in the filter search box, and click __"Install"__ in the list of available.
<div style="text-align: center;">
	<img class="boxshadow" src="/images/luci006.png">
</div>
!!! danger "Note"
	Search and install __luci-app-*__ packages if you want to configure services using LuCI.
5 . Click __"Install"__ and wait for the plug-in to be installed. After the installation, the page prompts that the plug-in is being configured. Click __"Dismiss"__ and wait for a while.

!!! note ""
	=== "Frp Client"
		<div style="text-align: center;">
			<img class="boxshadow" src="/images/luci007.png">
		</div>
		<div style="text-align: center;">
			<img class="boxshadow" src="/images/luci008.png">
		</div>
	=== "Frp Server"
		<div style="text-align: center;">
			<img class="boxshadow" src="/images/luci009.png">
		</div>
		<div style="text-align: center;">
			<img class="boxshadow" src="/images/luci010.png">
		</div>
6 . After the automatic configuration of the system is complete, a new option __"Services"__ will be added in the navigation bar, which is the server and client of the newly installed frp.
<div style="text-align: center;">
	<img class="boxshadow" src="/images/luci011.png">
</div>

<div style="text-align: center;">
	<img class="boxshadow" src="/images/luci012.png">
</div>

---



