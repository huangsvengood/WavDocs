<style>
    .text {
        font-size: 21px; 
    }
</style>
---
- In the upper right corner of the admin page ➡ Advanced Settings  ➡ DMZ Management
<p class="text">
Enable DMZ (Demilitarized Zone) management, and enter an IP address to connect to the device. You can specify that the connected device can be accessed through an external network. 
</p>
<p class="text">
Note that the device will open all ports, which will make related communication smoother. When using this function, please temporarily close the security software and firewall on the host, so use this function with caution.
</p>
<div style="text-align: center;">
    <img class="boxshadow" src="/images/dmz.png">
</div>
## __DMZ Host__
<p class="text">
DMZ Host refers to a specific device located in the DMZ area. This device is in the middle of the network security architecture and has direct connections with the internal network and the public network. 
</p>
<p class="text">
Setting up a DMZ Host exposes the device to the public network, making it directly accessible from the public network while keeping the internal network secure.
</p>
## __DMZ Host IP__
<p class="text">
DMZ Host IP (DMZ Host IP) refers to the IP address assigned to hosts in the DMZ area. By setting DMZ Host IP, you can specify a specific IP address to identify devices in the DMZ zone. This IP address should be one accessible to the public network so that external users can directly access the device.
</p>
<p class="text">
Please note that there are certain security risks in setting up a DMZ Host. 
</p>
<p class="text">
Because the DMZ Host is directly exposed to the public network, if the device is not properly protected and configured, it may be vulnerable to attacks from the public network. 
</p>
<p class="text">
Therefore, when setting up a DMZ Host, you need to take additional security measures to ensure the security of the device, such as updating and maintaining the device's firewall rules, using strong passwords, conducting regular security audits, etc.
</p>

> In order to set up the DMZ Host IP, you need to refer to the specific configuration method and interface of the network device or firewall you are using. Usually in the device's management interface or settings page, you will find the corresponding option to specify the DMZ Host IP. Please refer to the device's user manual or consult your network administrator for accurate configuration instructions.

---