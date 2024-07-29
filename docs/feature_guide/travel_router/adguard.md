!!! note ""
	__This feature is currently only available to routers.__

AdGuard Home acts as a global DNS blocker to filter unwanted content from the web such as ads, malware, trackers, and more. 

AdGuard Home also provides advanced features such as parental controls, statistics, custom rules, etc., allowing you to better manage network traffic and protect privacy. By running AdGuard Home on your router, you can achieve one-stop ad blocking and privacy protection for your entire web without having to install separate software or browser plug-ins on each device.
## How to set up ADGuard?

1 . Log in to the router management interface.Open your browser, enter __your router's IP address (which can be found on the user manual)__, then enter your administrator  password to log in to the router's management interface.

2 . Configure ADGuard settings.After logging into the router management interface, enter __"More Settings > Advance > ADGuard "__, after enabling ADGuard in the ADGuard settings page, click __"Save > Apply"__ to save the application enablement settings.
<div style="text-align: center;">
	<img class="boxshadow" src="/images/adguard000.png">
</div>
<div style="text-align: center;">
	<img class="boxshadow" src="/images/adguard002.png">
</div>

3 . When using the AdGuard Home web client for the first time, Open your browser ,enter __"http://192.168.20.1:3000"__ to access the web page for settings. 
!!! note ""
	( __"192.168.20.1"__ is the IP address of your router's management interface. This address can be __found in the user manual__. The URL needs to be changed accordingly when logging in to ADGuard Home. )

<div style="text-align: center;">
	<img class="boxshadow" src="/images/adguard003.png">
</div>

4 . Enter the ADGuard Home management interface and click __"Start Configuration"__.

<div style="text-align: center;">
	<img class="boxshadow" src="/images/adguard004.png">
</div>
5 . In the web management interface, select the interface to be monitored and the binding port (the default port is 80), but if your port is already occupied, you need to replace it with an unused port, such as port 82 in the figure below. )

<div style="text-align: center;">
	<img class="boxshadow" src="/images/adguard005.png">
</div>
!!! info
	Please __remember this port number__. The second time you __enter the ADGuard Home management interface__, you need to __use your router management address + the set port number to log in__, such as __http://192.168.20.1:82__.
6 . DNS server, select the port to be monitored and the binding port (the default port is 53), but if your port is already occupied, you need to change it to an unused port, such as port 54 in the figure below. )

<div style="text-align: center;">
	<img class="boxshadow" src="/images/adguard006.png">
</div>

<div style="text-align: center;">
	<img class="boxshadow" src="/images/adguard007.png">
</div>

7 . Set a username and password for ADGuard Home login. (Please remember the username and password you set, it will be used to log in to the ADGuard management interface)
<div style="text-align: center;">
	<img class="boxshadow" src="/images/adguard008.png">
</div>
8 . Click __Next__. After clicking __Open Dashboard__, you need to log in with the user you just set.
<div style="text-align: center;">
	<img class="boxshadow" src="/images/adguard009.png">
</div>

<div style="text-align: center;">
	<img class="boxshadow" src="/images/adguard010.png">
</div>
9 . Enter your username and password to log in to the dashboard. In the dashboard, you can monitor the number of DNS interceptions and some lists in real time.
<div style="text-align: center;">
	<img class="boxshadow" src="/images/adguard011.png">
</div>

10 . If you cannot use the default DNS server, you can add a new DNS in Settings. (You can refer to this DNS list to set up, __[https://dns.iui.im/](https://dns.iui.im/)__)
<div style="text-align: center;">
	<img class="boxshadow" src="/images/adguard014.png">
</div>


11 . To set up a DNS blocklist, go to __"Filter > DNS settings"__ and click __"Add blocklist > Add a custom list"__.
<div style="text-align: center;">
	<img class="boxshadow" src="/images/adguard029.png">
</div>
<div style="text-align: center;">
	<img class="boxshadow" src="/images/adguard030.png">
</div>
<div style="text-align: center;">
	<img class="boxshadow" src="/images/adguard033.png">
</div>
12 . Enter the name and URL of the new block list. ADGuard official website provides some __"DNS Filters"__. If you need to use them, you can enter __[https://github.com/AdguardTeam/AdguardFilters/tree/master](https://github.com/AdguardTeam/AdguardFilters/tree/master).__


13 . After entering the official ADGuard github, there are many countries to choose from, and China is chosen here.
<div style="text-align: center;">
	<img class="boxshadow" src="/images/adguard025.png">
</div>

14 . After selecting __Chinese Filter/sections__, we select __adservers.txt__ among them.
<div style="text-align: center;">
	<img class="boxshadow" src="/images/adguard026.png">
</div>

15 . Click __adservers.txt__ to enter the page for reading this txt file, and click the __Raw__ option on the page.
<div style="text-align: center;">
	<img class="boxshadow" src="/images/adguard027.png">
</div>

16 . Copy the link in the browser address bar and paste it into the URL option of the new block list in ADGuard Home.
<div style="text-align: center;">
	<img class="boxshadow" src="/images/adguard028.png">
</div>
<div style="text-align: center;">
	<img class="boxshadow" src="/images/adguard032.png">
</div>
<div style="text-align: center;">
	<img class="boxshadow" src="/images/adguard034.png">
</div>
17 . After the addition is successful, you can see that the advertisement is blocked.Even if you click in, you can't access it,as shown below.
<div style="text-align: center;">
	<img class="boxshadow" src="/images/adguard022.png">
</div>
<div style="text-align: center;">
	<img class="boxshadow" src="/images/adguard035.png">
</div>

ADGuard also has many other functions, such as __[prohibiting devices from accessing the Internet](/feature_guide/adguard/#disable-devices-from-accessing-the-internet)__, __[prohibiting access to designated websites](/feature_guide/adguard/#block-access-to-specified-websites)__,__[real-time monitoring](/feature_guide/adguard/#real-time-monitoring)__, etc.

## Disable devices from accessing the Internet
Enter __"Settings > DNS Settings"__, __scroll down to access settings__, and set "allowed/disallowed clients".
<div style="text-align: center;">
	<img class="boxshadow" src="/images/adguard024.png">
</div>
<div style="text-align: center;">
	<img class="boxshadow" src="/images/adguard023.png">
</div>
After entering the terminal IP address in the box and clicking Save Configuration, the terminal cannot access Internet web pages.
<div style="text-align: center;">
	<img class="boxshadow" src="/images/adguard015.png">
</div>
<div style="text-align: center;">
	<img class="boxshadow" src="/images/adguard017.png">
</div>
## Block access to specified websites
Enter __"Settings > DNS Settings"__, __scroll down to access settings__, and set __"Disallowed domains"__.
<div style="text-align: center;">
	<img class="boxshadow" src="/images/adguard024.png">
</div>
<div style="text-align: center;">
	<img class="boxshadow" src="/images/adguard023.png">
</div>
Enter baidu.com in the box, and all terminals connected to WiFi will be unable to access baidu.com.
<div style="text-align: center;">
	<img class="boxshadow" src="/images/adguard016.png">
</div>

<div style="text-align: center;">
	<img class="boxshadow" src="/images/adguard018.png">
</div>
## real time monitoring
In the Dashboard interface you can monitor DNS filtering data in real time.
<div style="text-align: center;">
	<img class="boxshadow" src="/images/adguard019.png">
</div>
<div style="text-align: center;">
	<img class="boxshadow" src="/images/adguard020.png">
</div>












