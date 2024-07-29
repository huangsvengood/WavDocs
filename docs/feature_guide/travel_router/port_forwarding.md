!!! note ""
	__This feature is currently only available for routers and some other devices.__


<p class="text">
Port forwarding is a network technology that maps a specific port on the public network to a specified server on the local network, allowing internet users to access services on the server in the local network by accessing that port. 
</p>
<p class="text">
By opening and mapping ports, port forwarding enables accessibility of internal network resources from external networks, providing a convenient and secure way for remote users to connect to and use computers or services in the internal network.
</p>

## Use Cases

__Scenario introduction :__ Access the company's internal file server or internal website at home. This case uses the ftp server as an example. Hereinafter, the company PC is called the remote PC, and the home PC is called the local PC.

<div style="text-align: center;">
    <img class="boxshadow" src="/images/portforwardeg.png">
</div>

1 . Make sure the ftp server on the remote PC is enabled.

<div style="text-align: center;">
    <img class="boxshadow" src="/images/port001.png">
</div>

2 . Select the file you want to __share__ (test_ftp), right-click test_ftp and select __Properties__.

<div style="text-align: center;">
    <img class="boxshadow" src="/images/port002.png">
</div>

3 . Click to enter the sharing tab and click __Share__, as shown below.

<div style="text-align: center;">
    <img class="boxshadow" src="/images/port003.png">
</div>

4 . Select a user for remote login. (This user is used to log in locally to the remote server for __verification__)

<div style="text-align: center;">
    <img class="boxshadow" src="/images/port004.png">
</div>

5 . Click __"Next" > "Done"__.

<div style="text-align: center;">
    <img class="boxshadow" src="/images/port005.png">
</div>

6 . Open the browser and enter __http://wavlogin.link__ to enter the management interface of the remote router.
Enter __"More Settings > NAT Forwarding > Port Forwarding".__
<div style="text-align: center;">
<img class="boxshadow" src="/images/more1111.png">
</div>
<div style="text-align: center;">
<img class="boxshadow" src="/images/portfor2.png">
</div>

7 . Set the port forwarding rules, fill in the IP address of the ftp server __"192.168.20.142"__, set the internal and external ports to 21 (the default port number of the ftp service is 21), and select the TCP protocol (the ftp service works on TCP).


<div style="text-align: center;">
    <img class="boxshadow" src="/images/port007.png">
</div>

8 . Check the __wan port IP__ of the remote router and click __"More Settings > Device Status"__, as shown below.

 
<div style="text-align: center;">
    <img class="boxshadow" src="/images/port009.png">
</div>

9 . Open the file explorer of the local computer, enter __ftp://wan port IP (ftp://172.16.2.5)__ in the address bar, and hit Enter to enter the user verification interface.

<div style="text-align: center;">
    <img class="boxshadow" src="/images/port011.png">
</div>

10 . Enter the correct user name and password and hit Enter to see the shared folder. (The logged-in user in this case is the user ftpuser in the fourth step)

<div style="text-align: center;">
    <img class="boxshadow" src="/images/port010.png">
</div>

<div style="text-align: center;">
    <img class="boxshadow" src="/images/port008.png">
</div>



















## Parameter Description

<div style="text-align: center;">
    <img class="boxshadow" src="/images/port.png">
</div>
<p class="text">
When setting up port forwarding, you need to specify the following parameters :
</p>
!!! info
	- External Port: This is the port number in the external network, used to receive external requests.

	- Internal IP Address: This is the IP address of the device on the internal network that is to receive forwarded requests.

	- Internal Port: This is the port number on the internal device used to receive forwarding requests.

	- Protocol: Specify the protocol to use, usually TCP or UDP.

---
