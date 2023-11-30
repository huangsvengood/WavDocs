<!--<style>
    .text {
        font-size: 21px; 
    }
</style>
-->
# Guest WiFi
---
??? note "Click to see how to enter the Guest WiFi interface" 
	<img src="/images/weizhi01.png" width="15" height="15">&nbsp;In the upper right corner of the admin page ➡ More Settings ➡Wireless Management ➡ Guest WiFi
	<div style="text-align: center;">
    <img class="boxshadow" src="/images/guest01.png">
	</div>
## __Guest WiFi Settings__
<p class="text">
The guest WiFi provides an independent and secure network environment for online access by visitors, customers, or temporary devices, and is isolated from the main network. Through the guest WiFi, network administrators can provide convenient access while protecting the security and resources of the main network.
</p>
<div style="text-align: center;">
    <img alt="guest wifi" class="boxshadow" src="/images/guest06.png">
</div>
After setting up, you can use the terminal device to connect to WiFi, such as connecting your mobile phone to Guest WiFi.
<div style="text-align: center;">
    <img alt="guest wifi" class="boxshadow" src="/images/guest04.png">
</div>
<div style="text-align: center;">
    <img alt="guest wifi" class="boxshadow" src="/images/guest05.png">
</div>

## __Guest Wi-Fi Mode__
<p class="text">
Guest wifi can still set different encryption methods according to needs. There are three methods to choose from: encryption, no encryption, and WPA/WPA2.
</p>
<div style="text-align: center;">
    <img alt="guest wifi" class="boxshadow" src="/images/guest_01.png">
</div>
<p class="text">
If you selected WPA/WAP2 you will need to set the RADIUS Server IP, RADIUS Port, and RADIUS Password.
</p>
<div style="text-align: center;">
    <img alt="guest wifi" class="boxshadow" src="/images/guest_02.png">
</div>
## __[RADIUS](/Encyclopedia/radius/) (Remote Authentication Dial-in User Service)__
<p class="text">
RADIUS is a protocol for network access control and authentication, commonly used in enterprise-level networks.
</p>
!!! info ""
	Setting the RADIUS Server IP, RADIUS Port, and RADIUS Password requires ensuring the cooperation and consistency between the network device and the RADIUS server to ensure the normal operation of network access control and user authentication.

## __Device Isolation__

<p class="text">
Device Isolation is a network security feature that can isolate different devices connected to the same LAN from each other to enhance network security and privacy protection. 
</p>
<div style="text-align: center;">
    <img alt="guest wifi" class="boxshadow" src="/images/guest03.png">
</div>
<p class="text">
The main functions of this feature include the following :
</p>
!!! info ""
	- __*Isolate communication between devices: *__ Device isolation can prevent devices within the LAN from communicating directly with each other, ensuring that data traffic between devices is effectively isolated and restricted. This helps prevent malware or attackers in your network from spreading from one infected device to others.

	- __*Enhanced online privacy: *__ With device isolation, users can better protect the privacy of their devices and data. For example, in a public wireless network environment, device isolation can prevent nearby users from directly accessing each other's devices, thereby reducing the risk of information leakage and snooping.

	- __*Prevent unauthorized access: *__ Device isolation limits access between devices and prevents unauthorized devices from accessing or interfering with other devices on the network. This helps improve the overall security of the network and reduces the risk of potential intrusions.

<p class="text">
Overall, device isolation is an important network security feature that can effectively reduce security risks in the network and provide additional privacy protection. When building a safe and reliable LAN environment, it is highly recommended to consider enabling device isolation.
</p>
___