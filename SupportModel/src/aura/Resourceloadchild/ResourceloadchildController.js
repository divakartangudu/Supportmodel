({
    AddNewRow : function(component, event, helper){
       // fire the AddNewRowEvt Lightning Event 
        component.getEvent("ResourceLoadingevt").fire();     
    },
    
    removeRow : function(component, event, helper){
     // fire the DeleteRowEvt Lightning Event and pass the deleted Row Index to Event parameter/attribute
       component.getEvent("ResourceDeletionevt").setParams({"indexVar" : component.get("v.rowIndex") }).fire();
    }, 
  
})