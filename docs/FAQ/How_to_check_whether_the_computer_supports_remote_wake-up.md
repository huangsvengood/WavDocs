---
!!! note ""
	Only computers with similar options such as  __Remote Wake Up or Wake on LAN__ under the power management menu of the computer __BIOS__ support remote booting. Without this option, remote booting is not supported. (If Remote Wake Up does not support remote boot after being turned on, please consult your computer hardware provider.)

## __Determine whether the host supports remote boot?__
1 . Open Computer Settings and click to enter __Update & Security__.

<div style="text-align: center;">
    <img class="boxshadow" src="/images/lanwake04.png">
</div>

2 . Click __Recovery__ on the navigation bar, enter the Recovery page, find __Advanced startup__, and click __Restart now__.

<div style="text-align: center;">
    <img class="boxshadow" src="/images/lanwake05.png">
</div>

3 . Wait for the computer to restart. After restarting, the computer will enter the following interface. Click to select __Troubleshoot__.
 
<div style="text-align: center;">
    <img class="boxshadow" src="/images/lanwake01.png">
</div>

4 . Click to select __Advanced options__ to enter the advanced options.

<div style="text-align: center;">
    <img class="boxshadow" src="/images/lanwake02.png">
</div>

5 . Click to select __UEFI Firmware Settings__ to enter the BIOS.

<div style="text-align: center;">
    <img class="boxshadow" src="/images/lanwake03.png">
</div>

6 . Wait for the system to enter the BIOS. After entering the BIOS, click __BIOS Setup__ or type __F10__ on the keyboard.

<div style="text-align: center;">
    <img class="boxshadow" src="/images/lanwake001.png">
</div>

7 . Select __Advanced__ to enter the advanced options, and click __Power Management Options__ on the advanced selection page. As shown below.

<div style="text-align: center;">
    <img class="boxshadow" src="/images/lanwake002.png">
</div>

8 . Check whether __Remote Wake Up or Wake on LAN__ and other similar options appear on this page. If there is no such option, remote wake-up is not supported. (The picture below shows that remote wake-up is not supported)

<div style="text-align: center;">
    <img class="boxshadow" src="/images/lanwake003.png">
</div>
??? info "Click to view similar remote wake-up options"
	Usually look for the following options under "__Power Management__" :

	__"Boot on LAN";__

	__"Wake on LAN";__

	__"PME Event WakeUp";__

	__"Resume by MAC LAN";__

	__"Wake-Up by PCI card";__

	__"Wake Up On PCI PME";__

	__"Power On by PCI Card";__

	__"WakeUp by PME of PCI";__

	__"Power On By PCI Devices";__

	__"WakeUp by Onborad LAN";__

	__"Resume By PCI or PCI-E Ddevice".__

## __View network card settings__
1 . Click the search icon on the computer taskbar, enter __Control Panel__ in the search bar, and click to enter the control panel.

<div style="text-align: center;">
    <img class="boxshadow" src="/images/lanwake11.png">
</div>

2 . Find __Network and Sharing Center__ in the control panel.

<div style="text-align: center;">
    <img class="boxshadow" src="/images/lanwake10.png">
</div>

3 . After entering the Network and Sharing Center, find Change adapter Settings and enter the change adapter page.

<div style="text-align: center;">
    <img class="boxshadow" src="/images/lanwake06.png">
</div>

4 . Click on the adapter used by the computer, __right-click__ on the selected adapter and select __Properties__.

<div style="text-align: center;">
    <img class="boxshadow" src="/images/lanwake.png">
</div>

<div style="text-align: center;">
    <img class="boxshadow" src="/images/lanwake07.png">
</div>

5 . After entering the properties, click __Configure__ to enter the configuration interface.

<div style="text-align: center;">
    <img class="boxshadow" src="/images/lanwake08.png">
</div>

6 . Find __Power Management__, enter the Power Management tab, and click to check the second option if you need to use remote wake-up, as shown below.

<div style="text-align: center;">
    <img class="boxshadow" src="/images/lanwake09.png">
</div>

To learn about setting remote wakeup parameters, please click __[Remote Wakeup](/feature_guide/remote_wakeup/)__.

---