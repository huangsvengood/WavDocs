---

Connecting external USB storage devices (such as USB flash drives or external hard drives) to the router provides Network Attached Storage (NAS) functionality. In this way, all devices within the local area network (such as computers, smartphones, tablets, etc.) can access and share files in these storage devices.

1 . Open the browser, enter __wavlogin.link__, and enter the password to enter the router management page.

2 . Click __"More Settings > USB > Storage Server"__, click the button and then click __"Save"__ to successfully enable it.

<div style="text-align: center;">
	<img class="boxshadow" src="/images/more.png">
</div>
<div style="text-align: center;">
	<img class="boxshadow" src="/images/usb123.png">
</div>

3 . Take the USB flash drive as an example: connect the USB flash drive to the USB port of the router, wait for the device to be recognized, and set the login username and password after successful recognition.

<div style="text-align: center;">
	<img class="boxshadow" src="/images/storageserver01.png">
</div>

4 . Open the computer's file explorer, enter __"\\\192.168.20.1"__ in the search bar and press Enter, and the connection to device sda1 will be displayed below.

<div style="text-align: center;">
	<img class="boxshadow" src="/images/storageserve02.png">
</div>
<div style="text-align: center;">
	<img class="boxshadow" src="/images/storageserve03.png">
</div>
???+ "Description of file access methods"
	__Windows PC__: Enter IP in the address bar of the File Explorer and press Enter,for example: \\\192.168.20.1
	
	__MAC PC__: Enter the connection server, and enter IP,for example: \\\192.168.20.1
	
	Only EXFAT, FAT32 and NTFS file formats are supported!
5 . Double-click __"sda1"__ to pop up the login box, enter the username and password just set to log in.

<div style="text-align: center;">
	<img class="boxshadow" src="/images/storageserver05.png">
</div>

6 . After successful login, you can see the files in the USB flash drive.

<div style="text-align: center;">
	<img class="boxshadow" src="/images/storageserve04.png">
</div>


---

