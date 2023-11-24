<style>
    .text {
        font-size: 21px; 
    }
</style>
---
<img src="/images/weizhi01.png" width="19" height="19">&nbsp;In the upper right corner of the admin page ➡ Advanced Settings  ➡ Custom DNS Server
<p class="text">
Custom DNS server that encrypts your DNS traffic, improves security and privacy, and prevents DNS leakage and DNS hijacking.
</p>
<p class="text">
To customize the DNS server you need to set up the DNS Protocol and Server Provider.
</p>
<div style="text-align: center;">
    <img class="boxshadow" src="/images/custom01.png">
</div>
- <p class="text">
<b>DNS Protocol</b> : This refers to the communication protocol used for DNS queries and responses.
</p>


>- __DNS over HTTPS__ (DNS is based on Hypertext Transfer Security Protocol) : DNS over HTTPS uses the HTTPS protocol to encrypt DNS communications. It encapsulates DNS queries and responses in HTTPS requests and responses, providing higher privacy and security, preventing man-in-the-middle attacks and eavesdropping.

>- __DNS over TLS__ (DNS based on Transport Layer Security Protocol) : DNS over TLS uses the TLS protocol for encrypted transmission of DNS queries and responses. This provides greater privacy and security, preventing DNS queries from being eavesdropped or tampered with.

<p class="text">
Manually specify the DNS server to be used for domain name resolution. You can choose to use a public DNS server such as OpenDNS, or use a specific third-party DNS server.
</p>
<div style="text-align: center;">
    <img class="boxshadow" src="/images/custom02.png">
</div>
- <p class="text">
<b>Server Provider</b> : This refers to the service provider that provides the DNS server.
</p>

---