---

Dynamic Domain Name Server (DDNS) is a function that maps a dynamic IP address to a fixed domain name resolution service. When DDNS is enabled, the router will bind its dynamic WAN IP to a fixed domain name, so that the router can be accessed using the domain name.

1 . Open the browser, enter __wavlogin.link__, and enter the password to enter the router management page.

2 . Click __"More Settings > Network > Dynamic DNS"__, after filling in the parameters, click __"Save"__ to complete the setting.

<div style="text-align: center;">
    <img class="boxshadow" src="/images/dns.png">
</div>

- __Service Provider__ : Dynamic DNS service provider, filled in here is oray.com/NO-IP.

- __Username__ : The username of the oray.com/NO-IP account, used to verify identity and permissions.

- __Password__ : The password of the oray.com/NO-IP account, used to verify identity and permissions.

- __Host Name__ : If you want to bind your router to a dynamic DNS address, you can set a hostname here, such as "myrouter.oray.net". When your router's IP address changes, the dynamic DNS service will automatically update the IP address of that hostname so that you can always access your router through that hostname.

<p class="text">
Please note that different dynamic DNS service providers may have different parameter settings, and the specific parameter names and meanings may be different. It is recommended to carefully review relevant documents and instructions before configuration to ensure that relevant parameters are filled in correctly.
</p>

---