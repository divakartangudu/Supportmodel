({
	
    loadResourceList: function(component, event, helper) {
  // call the helper function to fetch resource records from apex class       
  helper.onLoad(component, event);  
            
        
 },  

    validateDateInput: function(component, event, helper) {
    
//helper.validateEmailInput(component,event);
var ct_date=component.get("v.contr_st_date");
    var std = component.find("St_Date");
	var st_date = std.get("v.value");  
        console.log('st_date '+st_date+'  ct_date '+ct_date);
        var result = this.validateStDate(st_date,ct_date);
        std.set("v.errors", result == null ? null : [{message:result}]);
            
        
 },  
    
    validateStDate : function (st_date,ct_date){
	
	if(st_date > ct_date)
	    return 'Resource Start Date can not be after Contract Start Date';
	else
	    return null;
    },
    
    
    
    clickCreateResource : function(component, event, helper) {
//Check valid resource starts        
	var validResource = true;
		console.log('enter cl ctroller');
        // Role must not be blank
        var RoleField = component.find("Role");
        var RoleName = RoleField.get("v.value");
        if (RoleName=='--None--'){
            validResource = false;
            RoleField.set("v.errors", [{message:"Please enter a value for Resource Role."}]);
        }
        else {
            RoleField.set("v.errors", null);    
        }
        
        var LocField = component.find("Location");  
        var LocName = LocField.get("v.value");
        if (LocName=='--None--'){
            validResource = false;
            LocField.set("v.errors", [{message:"Please enter a value for Resource Location."}]);
        }  
        else {
            LocField.set("v.errors", null);  
        }
        
        var RateField = component.find("Rate");
        var RateName = RateField.get("v.value");
        if ($A.util.isEmpty(RateName)){
            validResource = false;
            RateField.set("v.errors", [{message:"Rate can't be blank."}]);
        }
        else {
            RateField.set("v.errors", null);  
        }
        
        var GCMField = component.find("GCM_Level");
        var GCMName = GCMField.get("v.value");
        if ($A.util.isEmpty(GCMName)){
            validResource = false;
            GCMField.set("v.errors", [{message:"GCM Level can't be blank."}]);
        }
        else {
            GCMField.set("v.errors", null);  
        }
       
        var StDateField = component.find("St_Date");
        var StDateName = StDateField.get("v.value");
        if ($A.util.isEmpty(StDateName)){
            validResource = false;
            StDateField.set("v.errors", [{message:"Start Date can't be blank."}]);
        }
        else {
            StDateField.set("v.errors", null);  
        }  
        
        var EndDateField = component.find("End_Date");
        var EndDateName = EndDateField.get("v.value");
        if ($A.util.isEmpty(EndDateName)){
            validResource = false;
            EndDateField.set("v.errors", [{message:"End Date can't be blank."}]);    
         }
        else {
            EndDateField.set("v.errors", null);    
        }  
        
       
        var LoadField = component.find("Load");
        var LoadName = LoadField.get("v.value");  
        if (LoadName=='--None--'){
            validResource = false;
            LoadField.set("v.errors", [{message:"Please select a value for Loading Percentage."}]); 
         }
        else {
            LoadField.set("v.errors", null);          
        }
  /*      
        var StField = component.find("St_Date");    
        var StName = StField.get("v.value");
        var EndField = component.find("End_Date");
        var EndName = EndField.get("v.value");    
        console.log('StName '+StName+'  EndName '+EndName);       
           if(StName > EndName){  
          validResource = false;
            StField.set("v.errors", [{message:"Start Date can't be after End Date."}]);   
        }
        else {
            StField.set("v.errors", null);                  
        } */
 
//Check valid resource ends              
         if(validResource){
             var newResource = component.get("v.newResource");
             var recordId = component.get("v.recordId");
             
             
            var action = component.get("c.saveRes");
        newResource.sobjectType = 'ResourceLoading__c';
    action.setParams({ 
        "res": newResource, recordId : recordId    
    });
            
             console.log('state here');   
    action.setCallback(this, function(a) {
           var state = a.getState();
        console.log('state '+state);
                    if (state === "SUCCESS") {
                 var name = a.getReturnValue();
     
                console.log('enter toast');
                var toastEvent = $A.get("e.force:showToast");
    		toastEvent.setParams({
       	 "title": "Success!",
       	 "message": "The Resource record has been added successfully."  
    	});  
    	toastEvent.fire();
              
          //      component.set("v.showSuccess", true);
          //      var message="Resource record created successfully";  
			//	component.set("v.status", message);  
                
         //      alert("Resource record created successfully");
 		   //          $A.get('e.force:refreshView').fire();  
 		//   component.set("v.truthy","true");
 		    helper.onLoad(component, event);
            }
			else if (state === "ERROR") {  
                console.log("Error Message n", a.getError()[0].message);    
            var errors = a.getError();
            if (errors) {
                if (errors[0] && errors[0].message) {
                    console.log("Error message: " + errors[0].message);    
     var std = component.find("St_Date");   
	var st_date = std.get("v.value");  
      console.log('st_date '+st_date);
      std.set("v.errors", [{message:errors[0].message}]);                 
                    
                }}
			}  

});
        

    $A.enqueueAction(action)  
        
         }
    },
 
// For select all Checkboxes 
 selectAll: function(component, event, helper) {
  //get the header checkbox value  
  var selectedHeaderCheck = event.getSource().get("v.value");
  // get all checkbox on table with "boxPack" aura id (all iterate value have same Id)
  // return the List of all checkboxs element 
  var getAllId = component.find("boxPack");
      // check if select all (header checkbox) is true then true all checkboxes on table in a for loop  
  // and set the all selected checkbox length in selectedCount attribute.
  // if value is false then make all checkboxes false in else part with play for loop 
  // and select count as 0 
  if (getAllId != null)  
  {
  //console.log('resource rec count '+getAllId.length);  
  if (selectedHeaderCheck == true) {
   for (var i = 0; i < getAllId.length; i++) {
    component.find("boxPack")[i].set("v.value", true);
    component.set("v.selectedCount", getAllId.length);  
   }
  } else {      
   for (var i = 0; i < getAllId.length; i++) {
    component.find("boxPack")[i].set("v.value", false);
    component.set("v.selectedCount", 0);
   }
  }
  }  
     
 },  
    
    // For count the selected checkboxes. 
 checkboxSelect: function(component, event, helper) {  
  // get the selected checkbox value  
  var selectedRec = event.getSource().get("v.value");
     console.log('selectedRec '+selectedRec);
       var cc = component.find("boxPack");
     console.log('cc '+cc);    
     console.log('cc length '+cc.length);   //dd the value is showing as undefined when one record is selected, same is happenning when select all is called and there is only one record     
  
     // get the selectedCount attrbute value(default is 0) for add/less numbers. 
  var getSelectedNumber = component.get("v.selectedCount");
  // check, if selected checkbox value is true then increment getSelectedNumber with 1 
  // else Decrement the getSelectedNumber with 1     
  if (selectedRec == true) {
   getSelectedNumber++;
  } else {
   getSelectedNumber--;
  }
  // set the actual value on selectedCount attribute to show on header part. 
  component.set("v.selectedCount", getSelectedNumber);  
 
   
 },
    
  //For Delete selected records 
 deleteSelected: function(component, event, helper) {
  // create var for store record id's for selected checkboxes  
  var delId = [];
  // get all checkboxes 
  var getAllId = component.find("boxPack");
  // play a for loop and check every checkbox values 
  // if value is checked(true) then add those Id (store in Text attribute on checkbox) in delId var.
  console.log('getAllId.length '+getAllId.length);
  for (var i = 0; i < getAllId.length; i++) {
      console.log('i '+i+'  value for rec '+getAllId[i].get("v.value"))
   if (getAllId[i].get("v.value") == true) {  
    delId.push(getAllId[i].get("v.text"));
       
   }  
  }
  // call the helper function and pass all selected record id's. 
  if(delId!=null)   
  helper.deleteSelectedHelper(component, event, delId); 
  //   component.set("v.selectedCount", 0);           
 },  
    
   openModel: function(component, event, helper) {
      // for Display Model,set the "isOpen" attribute to "true"
  //    var modal1 = component.find("themodal");
 //      $A.util.addClass(modal1,'modalc');  
     
      
       var recordId = component.get("v.recordId");
  console.log('onLoad call open modal');
  //call apex class method
  var action = component.get('c.GetModel');    
    action.setParams({ 
        recordId : recordId        
    });
  action.setCallback(this, function(response) {  
   //store state of response
   var state = response.getState();
   if (state === "SUCCESS") {
    //set response value in ListOfContact attribute on component.     
    var mod=response.getReturnValue();  
      component.set("v.model", mod);       
      console.log('SDt from model '+component.get("v.model.Contract_Start_Date__c"));          
      var start_date=new Date(component.get("v.model.Contract_Start_Date__c"));
       var start_month=start_date.getMonth()+1;           
      console.log('St month from model '+start_month);     
    //To display months header based on start date   
       if (start_month==1){  
           console.log('inside 1 month');  
          var monthslist=["January","February","March","April","May","June","July","August", "September", "October", "November","December"];                               
       } 
       else if(start_month==2){
       var monthslist=["February","March","April","May","June","July","August", "September", "October", "November","December","January"];                            
       }
         else if(start_month==3){
		var monthslist=["March","April","May","June","July","August", "September", "October", "November","December","January", "February"];                        
       }
         else if(start_month==4){
         var monthslist=["April","May","June","July","August", "September", "October", "November","December","January", "February", "March"];             
       }
         else if(start_month==5){
          var monthslist=["May","June","July","August", "September", "October", "November","December","January", "February", "March", "April"];          
       }
         else if(start_month==6){
          var monthslist=["June","July","August", "September", "October", "November","December","January", "February", "March", "April","May"];         
       }
         else if(start_month==7){
         var monthslist=["July","August", "September", "October", "November","December","January", "February", "March", "April","May","June"];       
       }
         else if(start_month==8){
          var monthslist=["August", "September", "October", "November","December","January", "February", "March", "April","May","June","July"];     
       }
         else if(start_month==9){
         var monthslist=["September", "October", "November","December","January", "February", "March", "April","May","June","July","August"];      
       }
         else if(start_month==10){
                    var monthslist=["October", "November","December","January", "February", "March", "April","May","June","July","August","September"]; 
       }
         else if(start_month==11){
               var monthslist=["November","December","January", "February", "March", "April","May","June","July","August","September","October"]; 
       }
       else if(start_month==12){
              var monthslist=["December","January", "February", "March", "April","May","June","July","August","September","October","November"]; 
       }
       component.set("v.months", monthslist);     
      }      
  });  
        
  $A.enqueueAction(action);

       var yearsel=component.find("Yearslist").get("v.value");    
    console.log('year_sel ctrlr'+ yearsel);  
       helper.onLoadYears(component, event,yearsel); 
       component.find("Yearslist").set("v.value", "--None--");   
       component.set("v.isOpen", true);
   },
 
   closeModel: function(component, event, helper) {
      // for Hide/Close Model,set the "isOpen" attribute to "Fasle"        
      component.set("v.isOpen", false);
   },
 
   likenClose: function(component, event, helper) {
      // Display alert message on the click on the "Like and Close" button from Model Footer 
      // and set set the "isOpen" attribute to "False for close the model Box.
      alert('thanks for like Us :)');
      component.set("v.isOpen", false);
   },
   
    
    
})