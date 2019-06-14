function LivePing() {$.get("/Thingworx/ThingTemplates/GenericThing")};
setInterval(LivePing,20000);
