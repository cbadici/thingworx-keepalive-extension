# thingworx-keepalive-extension

This extension should be used only in development. Please do not use it in production. It will generate Composer sessions not to expire, potentially leading to resource exhaustion. It was tested in ThingWorx 8.4.3 with the basic authentication (no SSO testing was done). 
The request time is hardcoded to 20 seconds, /Thingworx/ThingTemplates/GenericThing (guaranteed to exist by default).

Installation:

-modify the webapps\Thingworx\Composer\index.html file by adding the following line
  <script type="text/javascript" src="../Common/extensions/LivePing/ui/LivePing/LivePing.js" charset="UTF-8"></script>
  after the first script line, at line 10. This will trigger the periodic requests as soon as you open the composer.
  
-modify the Tomcat server.xml and comment the AccessLogValve. This node is placed at the end of the file. This valve logs every request in the access_log files from the log folder. If this is valve is not disabled, then the access log will fill faster than usual. In order not to fill the disk space faster, I recommend to comment the node. Not logging any requests at the Tomcat level can be considered insecure depending on your IT Security team, so please validate this with them before doing this modification.


This Extension is provided as-is and without warranty or support. It is not part of the PTC product suite. Users are free to use, fork and modify them at their own risk. Community contributions are welcomed and can be accepted based on their content.
