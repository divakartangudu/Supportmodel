({
	loadModel : function(component) {
		
	 var recordId = component.get("v.recordId");
   var action = component.get("c.getModel");
	
    action.setParams({
        recordId : recordId
        
    });
        
	console.log('model'+'  '+recordId);
    action.setCallback(this, function(a) {
        if (a.getState() === "SUCCESS") {
            component.set("v.model", a.getReturnValue());
        } else if (a.getState() === "ERROR") {
            $A.log("Errors", a.getError());
        }
        
    });

    $A.enqueueAction(action);

    },
    
    setoutput:function(component){
        var recordId = component.get("v.recordId");
        var editrecordEvent = $A.get("e.force:editRecord");
        editRecord:setParama({
              recordId : recordId
        });
        editRecordEvent.fire();
    }
    
    
})