How to enable HTTPS on live server ( Visual Studio Code)
Sagar Shrestha
Sagar Shrestha
Follow
May 31, 2020 · 1 min read


Live Server is one of my favorite Visual Code extensions which is used to launch a development local server with a live reload feature for static & dynamic pages. Yes, it supports dynamic pages like PHP.

By default, it runs on HTTP.
In order to enable the HTTPS protocol, first, you will need a self-signed SSL Certificate. If you don’t know how to create a self-signed SSL Certificate goto here and follow the steps.
[Note: If you are using Visual Code in windows, download OpenSSL, and continue the process.]
After you have the private key and certificate:
Go to your visual code project.
Create .vscode folder inside the project. ( Don’t forget the . (period) ).
Inside that folder create settings.json file.
Paste the following code:
{
"liveServer.settings.https": {
"enable": true, //set it true to enable the feature.
"cert": "D:\\https\\primary.crt", //full path of the certificate
"key": "D:\\https\\private.key", //full path of the private key
"passphrase": "12345"
}
}
Start the Live Server and access your project using HTTPS
Find this project on Github.

cert:\LocalMachine\My

Get-PfxCertificate -FilePath C:\Temp\cert.pfx | Export-Certificate -FilePath OutputCert.crt -Type CERT

https://www.deanhume.com/testing-service-workers-locally-with-self-signed-certificates/
https://medium.com/@saleemmalikraja/testing-service-workers-in-you-local-with-self-signed-certificate-angular-4f447c33d6fc
https://stackoverflow.com/questions/34160509/options-for-testing-service-workers-via-http