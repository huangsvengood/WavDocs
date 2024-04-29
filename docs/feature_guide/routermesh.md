# How to establish a mesh network?
---
## Introduction
__Mesh Router Mode__  :  Converts a network from a network provider's wired network to a Wi-Fi signal for wireless and wired networking. This mode also supports Mesh networking, which can be set up to pair subroutes to form a networking.

!!! danger ""
	__The following are the steps to configure the main route. The sub-route only needs to be in reset state.[Click to jump to view the initialization settings of the device.](/FAQ/586X3-A-First_time_setup/)__

---
## Steps
Advanced > Mesh Network
!!! note ""
	<div style="text-align: center;">
	<img class="boxshadow" src="/images/wireless007.png">
	</div>
	<div style="text-align: center;">
	<img class="boxshadow" src="/images/routermesh.png">
	</div>

There are two ways to perform mesh pairing. It is recommended that you use the first method for pairing.
!!! note ""
	=== "Mesh button for pairing (highly recommended)"

		1 . __Power on other Mesh routers__, and other routers must be in __reset state__ (press the reset button for more than six seconds to reset).

		2 . When not connected to the Internet and not paired, the indicator light flashes blue quickly.Press and hold the __"Reset/Pair"__ button of the main router for __2s__. After pressing, the indicator light of the Mesh route __flashes blue slowly__.

		3 . Within 2 minutes, press and hold the __"Reset/Pair"__ button of the sub-router for __two seconds__, and after waiting __40-120 seconds__, they will complete pairing independently. (When the device indicator light is __solid blue__, it means pairing is successful.)

		<div style="text-align: center;">
		<img class="boxshadow" src="/images/routermeshpt.png">
		</div>

	=== "Add WEB interface to realize pairing"
		1 . Enter __" Advanced > Mesh Network "__.	
		<div style="text-align: center;">
			<span id="meshr">
			<img class="boxshadow" src="/images/outdoor027.png">
			</span>
		</div>
			
		2 . Click on “__Add__” and then follow the prompts on the screen.


		<div style="text-align: center;">
			<img class="boxshadow" src="/images/indoor028.png">
		</div>

		3 . After ensuring that other Mesh nodes are placed correctly and the __master node network is connected__, click "__Next__" on this page. If the Mesh node is already in use, please __reset__ it.

		<div style="text-align: center;">
			<img class="boxshadow" src="/images/indoor029.png">
		</div>

		4 . Make sure that the Mesh node has been powered on. After powering on, __press and hold the Pair/Reset button of the mesh device for 2 seconds__.

		<div style="text-align: center;">
			<img class="boxshadow" src="/images/indoor030.png">
		</div>

		5 . Click "__Start scanning__" and wait for the scanning results.

		<div style="text-align: center;">
			<img class="boxshadow" src="/images/indoor031.png">
		</div>


		<p class="text">
		6 . If the scan is successful, device information will appear. Select the scanned device to add it.
		</p>
		<div style="text-align: center;">
			<img class="boxshadow" src="/images/indoor033.png">
		</div>

		??? warning "Scan node failed"
			If no available node routes are scanned, check the following points:
			
			- Check whether the Mesh node __presses the pairing button__. After pressing the pairing button, the indicator light of the Mesh node will flash blue slowly.
			
			- Check whether the Mesh node has been used. If it has been used, please __reset__ it.
			
			- If none of the above problems appear, please click __Rescan__.
			- After checking, add the device again.
			
			<div style="text-align: center;">
			<img class="boxshadow" src="/images/indoor032.png">
			</div>


		7 . Click Refresh after prompting that the addition is successful and wait for about __two minutes__.

		<div style="text-align: center;">
			<img class="boxshadow" src="/images/indoor034.png">
		</div>

		8 . After refreshing, you can view the information of the new device on the add page.If you need to view __the Mesh Topology__, you can click __"Mesh Topology"__ in the upper right corner. If you want to __delete the Extender__, you can also click the __delete option__. As shown below.

		<div style="text-align: center;">
			<img class="boxshadow" src="/images/indoor035.png">
		</div>
		!!! tip
			A Mesh router device supports up to __7 (including existing device mesh devices)__.


