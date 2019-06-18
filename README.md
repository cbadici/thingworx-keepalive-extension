# thingworx-keepalive-extension

This extension should be used only in development. Please do not use it in production. It will generate Composer sessions not to expire, potentially leading to resource exhaustion. It was tested in ThingWorx 8.4.3 with the basic authentication (no SSO testing was done). 
The request time is hardcoded to 20 seconds, /Thingworx/ThingTemplates/GenericThing (guaranteed to exist by default).

Installation:

-modify the webapps\Thingworx\Composer\index.html file by adding the following line
  <script type="text/javascript" src="../Common/extensions/LivePing/ui/LivePing/LivePing.js" charset="UTF-8"></script>
  after the first script line, at line 10. This will trigger the periodic requests as soon as you open the composer.
  
-modify the Tomcat server.xml and comment the AccessLogValve. This node is placed at the end of the file. This valve logs every request in the access_log files from the log folder. If this is valve is not disabled, then the access log will fill faster than usual. In order not to fill the disk space faster, I recommend to comment the node.

Feel free to fork & do a pull request for any enhancement.

