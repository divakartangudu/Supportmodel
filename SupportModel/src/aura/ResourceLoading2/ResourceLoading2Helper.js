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
 
 getmodel: function(component, event) {
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
   console.log('State '+ response.getState());    
   var state = response.getState(); 
   if (state === "SUCCESS") {
    component.set('v.YearsList', response.getReturnValue());
   }
  });
  $A.enqueueAction(action);  
   }, 
    
    loadyearsummary: function(component, event, yearsel) {
       
    console.log('onLoad years call '+ yearsel);  
    var recordId = component.get("v.recordId");  
    
  //call apex class method  
  var action = component.get('c.yearsummary');      
    action.setParams({   
        "yearsel": yearsel, recordId : recordId                          
        
    });
  action.setCallback(this, function(response) {
   //store state of response
   var state = response.getState();
   if (state === "SUCCESS") {
    component.set('v.year_summary', response.getReturnValue());  
   }
  });
  $A.enqueueAction(action);  
   },  
   
   
   exportLoading: function(component, event) {
    console.log('exportLoading call ');  
    var recordId = component.get("v.recordId");  
    
  //call apex class method  
  var action = component.get('c.export_loading');      
    action.setParams({   
        recordId : recordId                          
        
    });
  action.setCallback(this, function(response) {  
   //store state of response
   console.log('State '+ response.getState());    
   var state = response.getState(); 
   if (state === "SUCCESS") {
    component.set('v.ResourceListExport', response.getReturnValue());  
    console.log('response for export '+response.getReturnValue());  
   }  
  });
  $A.enqueueAction(action);    
   }, 
    
    
    exportLoadingyears: function(component, event) {
    console.log('exportLoading call ');  
    var recordId = component.get("v.recordId");  
    
  //call apex class method  
  var action = component.get('c.export_loading_years');        
    action.setParams({   
        recordId : recordId                          
        
    });
  action.setCallback(this, function(response) {  
   //store state of response
   console.log('State '+ response.getState());    
   var state = response.getState(); 
   if (state === "SUCCESS") {
    component.set('v.YearsListExport', response.getReturnValue());  
    console.log('response for export '+response.getReturnValue());  
   }  
  });
  $A.enqueueAction(action);    
   }, 
    
   
   convertArrayOfObjectsToCSV : function(component,objectRecords1,mth_lst,model_name,YrData){
        // declare variables
        var csvStringResult, counter, keys, keysyear, columnDivider, lineDivider,res_role,res_name;
       var m1total,m2total,m3total,m4total,m5total,m6total,m7total,m8total,m9total,m10total,m11total,m12total;
       m1total=0;m2total=0;m3total=0;m4total=0;m5total=0;m6total=0;m7total=0;m8total=0;m9total=0;m10total=0;m11total=0;m12total=0;
       var objectRecords = typeof objectRecords1 != 'object' ? JSON.parse(objectRecords1) : objectRecords1;
       
       console.log('result after parse '+objectRecords);  
        // check if "objectRecords" parameter is null, then return from function
        if (objectRecords == null || !objectRecords.length) {
            return null;  
         }
                 if (YrData == null || !YrData.length) {
            return null;
         } 
        // store ,[comma] in columnDivider variabel for sparate CSV values and 
        // for start next line use '\n' [new line] in lineDivider varaible  
        columnDivider = ',';
        lineDivider =  '\n';
 
        // in the keys valirable store fields API Names as a key 
        // this labels use in CSV file header  
        keys = ['Role__c','Id','Name'];  
		
		keysyear = ['ResourceLoadingId__c','Year__c','Jan__c','Feb__c','Mar__c','Apr__c','May__c','Jun__c','Jul__c','Aug__c','Sept__c','Oct__c','Nov__c','Dec__c' ];  
                 
        csvStringResult = '';  
 //       csvStringResult += keys.join(columnDivider);  
//        csvStringResult += ['url','Resource Role','Year','Object Id','Jan','Feb','March','April','May','June','July','Aug','Sep','Oct','Nov','Dec'];  
  csvStringResult += ['Model Name','Resource Name','Resource Role','Resource Id','Year'+','+mth_lst];
        csvStringResult += lineDivider;     
   console.log('year list size '+ YrData.length);
        for(var i=0; i < YrData.length; i++){   
            counter = 0; 
            console.log('obj res id '+ objectRecords[0][keys[1]]); 
            console.log('obj res role '+ objectRecords[0][keys[0]]); 
            console.log('year res id '+ YrData[0][keysyear[0]]);     
			 
			 for(var k=0; k < objectRecords.length; k++){
                 if(objectRecords[k][keys[1]]==YrData[i][keysyear[0]]) {
                 
				res_role=objectRecords[k][keys[0]];   
                     res_name=objectRecords[k][keys[2]];  
                 }
			 }
			console.log('res_role '+ res_role); 
             csvStringResult+='"'+ model_name+'"';    
            csvStringResult += columnDivider; 
            csvStringResult+='"'+ res_name+'"';  
            csvStringResult += columnDivider;  
            csvStringResult+='"'+ res_role+'"';  
            csvStringResult += columnDivider; 
             for(var sTempkey in keysyear) {
    //             console.log('sTempkey '+sTempkey);  
                  var skey = keysyear[sTempkey] ;  
 
              // add , [comma] after every String value,. [except first]
                  if(counter > 0){ 
                      csvStringResult += columnDivider; 
                   }     
               
                            if(YrData[i][skey] != undefined){
                        csvStringResult += '"'+ YrData[i][skey]+'"';
                        }else{
                        csvStringResult += '"'+ 0 +'"';  
                        }                         
                 
       //        csvStringResult += '"'+ YrData[i][skey]+'"';   
       //        console.log('field value retrieved 1230 '+YrData[i][skey]);       
               counter++;  
 
            } // inner for loop close 
             csvStringResult += lineDivider;
            
            var m1t=YrData[i][keysyear[2]];
          if(isNaN(m1t))m1t=0;
            console.log('m1t '+m1t);
            m1total+=m1t;  
            console.log('m1total '+m1total);
            
          var m2t=YrData[i][keysyear[3]];
          if(isNaN(m2t))m2t=0;
            m2total+=m2t;  
            
          var m3t=YrData[i][keysyear[4]];
          if(isNaN(m3t))m3t=0;
            m3total+=m3t;  
            
          var m4t=YrData[i][keysyear[5]];
          if(isNaN(m4t))m4t=0;
            m4total+=m4t;  
            
         var m5t=YrData[i][keysyear[6]];
          if(isNaN(m5t))m5t=0;
            m5total+=m5t;  
            
          var m6t=YrData[i][keysyear[7]];
          if(isNaN(m6t))m6t=0;
            m6total+=m6t;  
            
          var m7t=YrData[i][keysyear[8]];
          if(isNaN(m7t))m7t=0;
            m7total+=m7t;  
            
         var m8t=YrData[i][keysyear[9]];
          if(isNaN(m8t))m8t=0;
            m8total+=m8t;  
            
          var m9t=YrData[i][keysyear[10]];
          if(isNaN(m9t))m9t=0;
            m9total+=m9t;  
            
          var m10t=YrData[i][keysyear[11]];
          if(isNaN(m10t))m10t=0;
            m10total+=m10t;  
            
          var m11t=YrData[i][keysyear[12]];
          if(isNaN(m11t))m11t=0;
            m11total+=m11t;  
            
          var m12t=YrData[i][keysyear[13]];
          if(isNaN(m12t))m12t=0;
            m12total+=m12t;  
            
          }// outer main for loop close 
  //     csvStringResult += lineDivider;
       csvStringResult+='"'+ model_name+'"';    
            csvStringResult += columnDivider; 
       csvStringResult+='"'+ 'Total FTE'+'"';    
            csvStringResult += columnDivider;   
       csvStringResult+='"'+ ''+'"';    
            csvStringResult += columnDivider;
             csvStringResult+='"'+ ''+'"';    
            csvStringResult += columnDivider;
          csvStringResult+='"'+ ''+'"';    
            csvStringResult += columnDivider; 
          csvStringResult+='"'+ m1total+'"';                
            csvStringResult += columnDivider;
                csvStringResult+='"'+ m2total+'"';    
            csvStringResult += columnDivider;
                csvStringResult+='"'+ m3total+'"';    
            csvStringResult += columnDivider;
                csvStringResult+='"'+ m4total+'"';    
            csvStringResult += columnDivider;
                csvStringResult+='"'+ m5total+'"';    
            csvStringResult += columnDivider;
                csvStringResult+='"'+ m6total+'"';    
            csvStringResult += columnDivider;
                csvStringResult+='"'+ m7total+'"';    
            csvStringResult += columnDivider;
                csvStringResult+='"'+ m8total+'"';    
            csvStringResult += columnDivider;
                csvStringResult+='"'+ m9total+'"';    
            csvStringResult += columnDivider;
                csvStringResult+='"'+ m10total+'"';    
            csvStringResult += columnDivider;
                csvStringResult+='"'+ m11total+'"';    
            csvStringResult += columnDivider;
                csvStringResult+='"'+ m12total+'"';    
            csvStringResult += columnDivider;

       
       // return the CSV formate String 
        return csvStringResult;          
    },  
})