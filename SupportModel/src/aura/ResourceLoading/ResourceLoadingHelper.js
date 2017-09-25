({
    
//To display resource records in table on load    
  onLoad: function(component, event) {
    var recordId = component.get("v.recordId");
  console.log('onLoad call');
  
  //call apex class method
  var action = component.get('c.fetchResource');
    action.setParams({ 
        recordId : recordId  
        
    });
  action.setCallback(this, function(response) {
   //store state of response
   var state = response.getState();
   if (state === "SUCCESS") {
   component.set('v.ResourcesList', response.getReturnValue());
    // set deafult count and select all checkbox value to false on load   
    component.set("v.selectedCount", 0);
    component.find("box3").set("v.value", false);  
   }
  });  
      component.find("Rate").set("v.value", null);   
    component.find("GCM_Level").set("v.value", null); 
    component.find("End_Date").set("v.value", null); 
    component.find("St_Date").set("v.value", null);  
    component.find("Role").set("v.value", "--None--");
    component.find("Location").set("v.value", "--None--");  
    component.find("Load").set("v.value", "--None--");  
    $A.enqueueAction(action);
 },
 //To delete Resource Records   
deleteSelectedHelper: function(component, event, deleteRecordsIds) {
  //call apex class method
   console.log('deleteRecordsIds '+deleteRecordsIds);
  var action = component.get('c.deleteRecords');
  // pass the all selected record's Id's to apex method 
  action.setParams({
   "lstRecordId": deleteRecordsIds
  });
  action.setCallback(this, function(response) {
   //store state of response
   var state = response.getState();
   if (state === "SUCCESS") {
    console.log(state);
    if (response.getReturnValue() != '') {
     // if getting any error while delete the records , then display a alert msg/
     alert('The following error has occurred. while Delete record-->' + response.getReturnValue());
    } else {
     console.log('check it--> delete successful');
    }
    // call the onLoad function for refresh the List view      
    this.onLoad(component, event);  
   }
  });
  $A.enqueueAction(action);
 },   
    
//To display resource records in table on load    
onLoadYears: function(component, event, yearsel) {
    console.log('onLoad years call '+ yearsel);  
    var recordId = component.get("v.recordId");  
    
  //call apex class method  
  var action = component.get('c.fetchYears');      
    action.setParams({   
        "yearsel": yearsel, recordId : recordId                          
        
    });
  action.setCallback(this, function(response) {
   //store state of response
   var state = response.getState();
   if (state === "SUCCESS") {
    //set response value in ListOfContact attribute on component.
    component.set('v.YearsList', response.getReturnValue());
    // set deafult count and select all checkbox value to false on load   
 //   component.set("v.selectedCount", 0);
 //   component.find("box3").set("v.value", false);  
   }
  });
  $A.enqueueAction(action);  
   },    
})