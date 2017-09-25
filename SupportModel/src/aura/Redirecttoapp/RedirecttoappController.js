({
	navigateToMyComponent : function(component, event, helper) {
       var recordId = component.get("v.recordId");
       console.log('recordId' +recordId);
       /*var evt = $A.get("e.ResourceLoadingevent");
       evt.setParams({ "recId" : recordId });
       evt.fire();
       window.location.assign("https://supportmodel-dev-ed.lightning.force.com/one/one.app#/n/ResourceListApp")
     */
    var evt = $A.get("e.force:navigateToComponent");
    evt.setParams({
        componentDef : "c:ResourceLoading2",  
        componentAttributes: {
            recordId : recordId
        }
    });
    evt.fire();
}
}


    
})