# 4G Status Page Introduction
---

__Advanced > 4G Status__
!!! note ""
	Log in to the device management page and go to Advanced > 4G Status to view relevant information.
	<div style="text-align: center;">
	<img class="boxshadow" src="/images/wireless007.png">
	</div>
	<div style="text-align: center;">
	<img class="boxshadow" src="/images/LTE4G.png">
	</div>

## __Module Status__

- __4G Module Version__ : The version number used by the device’s 4G module.

- __4G Module Status__ : Whether the 4G module of the device is loaded normally.

<div style="text-align: center;">
	<img class="boxshadow" src="/images/LTE4GSTATUS.png">
</div>

## __SIM Card Information__
- __PIN__ : Personal identification number, a password used for authentication, usually set by the user to protect the SIM card from unauthorized use.

- __Band__ : The frequency band in the LTE network, that is, the frequency range used by the LTE network. Different countries and regions may have different LTE frequency bands, so the UE needs to support the corresponding frequency band to access the local LTE network.

- __IMSI__ : International Mobile Subscriber Identity, a globally unique identifier used to distinguish different mobile users.

- __IMEI__ : International Mobile Equipment Identity, a globally unique identifier used to distinguish different mobile devices.

- __ICCID__ : Integrated Circuit Card Identifier, which is the unique identifier of a SIM card and is usually printed on the SIM card.

<div style="text-align: center;">
	<img class="boxshadow" src="/images/LTE4GSIM.png">
</div>


## __Network Status__
- __4G DNS Status__ : The status of the Domain Name System (DNS) in the LTE network. If DNS is unavailable or has problems, it may prevent some websites or services from being accessible.
- __4G DNS__ : Domain name server used by LTE networks. If a DNS server is unavailable or configured incorrectly, it may result in the inability to access certain services on the Internet.
- __Network Standard__ : The standard of the LTE network, which is the technical specification of the LTE network.
- __Ue Status__ : The status of the user equipment.
	
	○ __Cell__: A basic unit in the cellular network, which is the geographical area covered by the base station (Base Station).

	○ __SEARCH__ : UE is searching the network, but no suitable 2G/3G14G cell has been found yet.

	○ __LIMSRV__ : The UE is camped in the cell, but has not yet registered on the network.

	○ __NOCONN__ : The UE is camped in the cell and registered on the network, and is in idle mode.

	○ __CONNECT__ : The UE is camped in the cell and registered on the network, and is on a call.

- __Upload Bandwidth__ : The maximum upload bandwidth allocated by the current operator in the current band.
- __Download Bandwidth__ : The maximum download bandwidth allocated by the current operator in the current band.

<div style="text-align: center;">
	<img class="boxshadow" src="/images/LTE4GNETWORK.png">
</div>

## __RF Information__
- __RF Information__ : Radio frequency information, including RF related parameters in the LTE network, such as cell frequency, bandwidth, power and other information.
- __RSSI (Received Signal Strength Indication) __: Indicates the received signal strength. The lower the RSSI value, the better the signal strength. Usually measured in dBm (decibel milliwatts).
- __RSRP (Reference Signal Received Power) __: Indicates the received reference signal power, also expressed in dBm. RSRP is one of the important indicators used to measure signal strength in LTE networks. It measures the power of the reference signal sent by the base station and is usually used to evaluate network coverage.
- __RSRQ (Reference Signal Received Quality) __: Indicates the received reference signal quality, also expressed in dB. The higher the RSRQ value, the better the signal quality.
- __SINR (Signal-to-Interference plus Noise Ratio)__ : Indicates the ratio of signal to interference plus noise. It is an indicator of signal quality, also expressed in dB. The higher the SINR value, the better the signal quality.

<div style="text-align: center;">
	<img class="boxshadow" src="/images/LTE4GRF.png">
</div>

!!! note "Instructions on 4G network signal strength"
	
	- Extremely strong : RSRP > -85dBm ; SINR > 25
	- Strong : RSRP = -85~95dBm ; SINR : 16-25
	- General : RSRP = -95-105dBm ; SINR : 11-15
	- Weak : RSRP = -105-115dBm ; SINR : 3-10
	- Extremely weak : RSRP < -115dBm ; SINR < 3


---



