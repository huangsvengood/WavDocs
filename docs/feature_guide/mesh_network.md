<!--<style>
    .text {
        font-size: 21px; 
    }
</style>
-->
---
??? note "Click to see how to enter the Mesh Table Settings interface"
	<img src="/images/weizhi01.png" width="15" height="15">&nbsp;In the upper right corner of the admin page ➡ More Settings ➡ Mesh Network ➡ Mesh Table
	<div style="text-align: center;">
    <img class="boxshadow" src="/images/mesh001.png">
	</div>


Mesh networks are widely used in many application scenarios, such as smart homes, Internet of Things, urban coverage, industrial automation, etc. It provides a __resilient__, __reliable__ and __flexible__ network solution suitable for environments that require a high degree of interconnectivity and self-organization.


Generally speaking, a Mesh router device supports up to __7 (including existing device mesh devices)__. So if you need to add more mesh devices to create a more powerful network in your home, you can simply pair your new mesh devices with your existing network.

!!! note ""
	=== "Mesh button for pairing (highly recommended)"
		Power on all Mesh routers, connect the __master router__ to the Internet __(Connect the network cable to the wan port [⑥ in the picture])__, wait for the indicators of other routes to __flash red for 2 seconds__, then press the [__Pair__] button of the master router, and within __2 minutes__, press the [__Pair__] button of the Mesh route that needs to be added. ] button to complete the pairing (when the Mesh indicator light turns solid __blue__, it means the pairing is successful).
		<div style="text-align: center;">
			<img class="boxshadow" src="/images/mesh004.png">
		</div>		
	
	=== "Add WEB interface to realize pairing"
		### __Add Mesh Extender__
		1 . Open the browser, enter __^^http://192.168.x.x^^__ (find it in the user manual) or __^^http://wavlogin.link^^__ in the address bar of the browser, then press the Enter key on the keyboard to enter the device management interface.
		<div style="text-align: center;">
			<img class="boxshadow" src="/images/compute02.png">
		</div>
		<div style="text-align: center;">
			<img class="boxshadow" src="/images/mesh002.png">
		</div>
		
		2 . Enter your device management password to log in to the device management page. (This password is the password set during initial configuration. If the device independent password setting is not turned on, the device management password is the same as the WiFi password.)
		
		<div style="text-align: center;">
			<img class="boxshadow" src="/images/mesh003.png">
		</div>
		
		3 . Click "__More Settings__" ➡ "__Mesh Network__" ➡ "__Mesh Table__"
		<div style="text-align: center;">
		<img class="boxshadow" src="/images/mesh001.png">
		</div>
		
		!!! tip 
			- Before adding a device,please confirm that the main router has successfully __connected to the Internet__.

			- Place the Mesh Node to be added near the main router. If the Mesh Node has been used, please __reset__ it.

			- __Power on__ the Mesh node, and after it has started up, __press the pair button__.

		4 . Click on “__Add__” and then follow the prompts on the screen.


		<div style="text-align: center;">
			<img class="boxshadow" src="/images/mesh01.png">
		</div>

		5 .After ensuring that other Mesh nodes are placed correctly and the __master node network is connected__, click "__Next__" on this page. If the Mesh node is already in use, please __reset__ it.

		<div style="text-align: center;">
			<img class="boxshadow" src="/images/mesh02.png">
		</div>

		6 . Make sure that the Mesh node has been powered on. After powering on, press and hold the Pair button of the mesh device for __2 seconds__.

		<div style="text-align: center;">
			<img class="boxshadow" src="/images/mesh03.png">
		</div>

		7 . Click "__Start scanning__" and wait for the scanning results.

		<div style="text-align: center;">
			<img class="boxshadow" src="/images/mesh04.png">
		</div>


		<p class="text">
		8 . If the scan is successful, device information will appear. Select the scanned device to add it.
		</p>
		<div style="text-align: center;">
			<img class="boxshadow" src="/images/mesh07.png">
		</div>

		??? warning "Scan node failed"
			If no available node routes are scanned, check the following points:
			
			- Check whether the Mesh node __presses the pairing button__. After pressing the pairing button, the indicator light of the Mesh node will flash blue slowly.
			
			- Check whether the Mesh node has been used. If it has been used, please __reset__ it.
			
			- If none of the above problems appear, please click __Rescan__.
			- After checking, add the device again.
			
			<div style="text-align: center;">
			<img class="boxshadow" src="/images/mesh06.png">
			</div>


		9 . Click Refresh after prompting that the addition is successful and wait for about __two minutes__.

		<div style="text-align: center;">
			<img class="boxshadow" src="/images/mesh08.png">
		</div>

		10 . After refreshing, you can view the information of the new device on the add page.You can __modify the device name__ on this page so that you can better identify it.

		<div style="text-align: center;">
			<img class="boxshadow" src="/images/mesh09.png">
		</div>
		!!! tip
			A Mesh router device supports up to __7 (including existing device mesh devices)__.
## __Advanced__
### __Roaming__
<p class="text">
Wireless roaming technology allows your devices to seamlessly switch between two mesh routers. When you move away from one router and closer to another, it will automatically disconnect the current connection and connect to the closer router for a smoother network user experience. No manual intervention is required during the switch and it will not affect the network connection.
</p>

!!! note ""
	__[What is roaming, and in what scenarios will roaming be used?]()__
### __Roaming Threshold__
<p class="text">
The wireless roaming trigger threshold should only be set by experienced professionals. If you lack professional experience in setting the roaming trigger threshold, it is recommended that you keep the default settings to avoid negative impacts on the network user experience.
</p>
<div style="text-align: center;">
    <img alt="guest wifi" class="boxshadow" src="/images/mesh05.png">
</div>
### __Topology Optimization__
<p class="text">
When your paired devices are greater than or equal to 3 devices, after all devices are paired, optimization can be turned on. 
</p>
<p class="text">
This function can automatically adjust the optimal path according to the signal strength between the devices, so as to ensure that all sub-routes and corresponding upper-level devices have the best signal connection status for optimal network coverage.
</p>
### __Threshold of Topology Optimization__
<p class="text">
You can adjust the signal threshold triggered by topology optimization to obtain the best mesh network coverage. If you do not have professional experience in setting this, we recommend that you set it according to the default value.
</p>
---
