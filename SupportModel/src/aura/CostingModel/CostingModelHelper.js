({
	loadModel : function(component) {
		
	 var recordId = component.get("v.recordId");
     var action = component.get("c.getModel");
        
	console.log('testing on 14th aug 2017 1519');  
    action.setParams({
        recordId : recordId
        
    });
        
	console.log('model'+'  '+recordId);
    action.setCallback(this, function(a) {
        if (a.getState() === "SUCCESS") {
            
            component.set("v.model", a.getReturnValue());
            console.log('testing111');
            var Year_1_2=component.get("v.Year_1_2");
            var Year_2_3=component.get("v.Year_2_3");
            var Year_3_4=component.get("v.Year_3_4");
            
            var inccnt=component.get("v.Inccnt");
          //  var inccnt=component.find("Inccnt").get("v.value");
    		  
            
            console.log('inc count' +inccnt);
            console.log('Year_2_3' +Year_1_2);
            console.log('Year_2_3' +Year_2_3);
            
              
    //        var hideit=component.find("changeIt");
   //         $A.util.toggleClass(hideit, "toggle");
     
            
       //setting values for Incident Count(Model A First Row)
       	     var year1inc = parseInt(inccnt) * 12;
             var year2inc = (parseInt(inccnt) * (100-Year_1_2) * 12)/100;
             var year3inc = (parseInt(inccnt) * (100-Year_1_2-Year_2_3) * 12)/100;
             var year4inc = (parseInt(inccnt) * (100-Year_1_2-Year_2_3-Year_3_4) * 12)/100;
      //     var year4inc = parseInt(inccnt) * .5 * 12;
            component.set("v.year1inc",year1inc);
            component.set("v.year2inc",year2inc);
            component.set("v.year3inc",year3inc);
            component.set("v.year4inc",year4inc);
   
       //setting values for SR Count(Model A Second Row)
			var SRcnt=component.get("v.SRcnt"); 
             console.log('SRcnt' +SRcnt);
            var year1SR = parseInt(SRcnt) * 12;
            var year2SR = (parseInt(SRcnt) * (100-Year_1_2) * 12)/100;
            var year3SR = (parseInt(SRcnt) * (100-Year_1_2-Year_2_3) * 12)/100;
            var year4SR = (parseInt(SRcnt) * (100-Year_1_2-Year_2_3-Year_3_4) * 12)/100;
            component.set("v.year1SR",year1SR);
            component.set("v.year2SR",year2SR);
            component.set("v.year3SR",year3SR);  
            component.set("v.year4SR",year4SR);
           
            var Prob_Tick=component.get("v.Prob_Tick");
             console.log('Prob_Tick' +Prob_Tick);
             component.set("v.year1PT",(Prob_Tick*parseInt(component.get("v.year1inc"))/100)); 
             component.set("v.year2PT",(Prob_Tick*parseInt(component.get("v.year2inc"))/100)); 
             component.set("v.year3PT",(Prob_Tick*parseInt(component.get("v.year3inc"))/100)); 
             component.set("v.year4PT",(Prob_Tick*parseInt(component.get("v.year4inc"))/100)); 
             component.set("v.year5PT",(Prob_Tick*parseInt(component.get("v.year4inc"))/100)); 
            
            var Avg_Inc=component.get("v.Avg_Inc"); 
             component.set("v.year1IncEff",(Avg_Inc*parseInt(component.get("v.year1inc")))); 
             component.set("v.year2IncEff",(Avg_Inc*parseInt(component.get("v.year2inc")))); 
             component.set("v.year3IncEff",(Avg_Inc*parseInt(component.get("v.year3inc")))); 
             component.set("v.year4IncEff",(Avg_Inc*parseInt(component.get("v.year4inc")))); 
             component.set("v.year5IncEff",(Avg_Inc*parseInt(component.get("v.year4inc")))); 
            
             var Avg_SR=component.get("v.Avg_SR");
             component.set("v.year1SREff",(Avg_SR*parseInt(component.get("v.year1SR")))); 
             component.set("v.year2SREff",(Avg_SR*parseInt(component.get("v.year2SR")))); 
             component.set("v.year3SREff",(Avg_SR*parseInt(component.get("v.year3SR")))); 
             component.set("v.year4SREff",(Avg_SR*parseInt(component.get("v.year4SR")))); 
             component.set("v.year5SREff",(Avg_SR*parseInt(component.get("v.year4SR"))));  
            
            var Avg_PTR=component.get("v.Avg_PTR");
             component.set("v.year1PTEff",(Avg_PTR*parseInt(component.get("v.year1PT")))); 
             component.set("v.year2PTEff",(Avg_PTR*parseInt(component.get("v.year2PT")))); 
             component.set("v.year3PTEff",(Avg_PTR*parseInt(component.get("v.year3PT")))); 
             component.set("v.year4PTEff",(Avg_PTR*parseInt(component.get("v.year4PT")))); 
             component.set("v.year5PTEff",(Avg_PTR*parseInt(component.get("v.year5PT")))); 
            
             var Avg_PCA=component.get("v.Avg_PCA");
             component.set("v.year1PCAEff",(Avg_PCA*parseInt(component.get("v.year1inc")))); 
             component.set("v.year2PCAEff",(Avg_PCA*parseInt(component.get("v.year2inc")))); 
             component.set("v.year3PCAEff",(Avg_PCA*parseInt(component.get("v.year3inc")))); 
             component.set("v.year4PCAEff",(Avg_PCA*parseInt(component.get("v.year4inc")))); 
             component.set("v.year5PCAEff",(Avg_PCA*parseInt(component.get("v.year4inc"))));  

             var Avg_KR=component.get("v.Avg_KR"); 
             component.set("v.year1KREff",(Avg_KR*parseInt(component.get("v.year1inc")))); 
             component.set("v.year2KREff",(Avg_KR*parseInt(component.get("v.year2inc")))); 
             component.set("v.year3KREff",(Avg_KR*parseInt(component.get("v.year3inc")))); 
             component.set("v.year4KREff",(Avg_KR*parseInt(component.get("v.year4inc")))); 
             component.set("v.year5KREff",(Avg_KR*parseInt(component.get("v.year4inc")))); 
            
             var Avg_CCT=component.get("v.Avg_CCT");  
             component.set("v.year1CCTEff",(Avg_CCT*(parseInt(component.get("v.year1IncEff"))+parseInt(component.get("v.year1SREff"))+parseInt(component.get("v.year1PTEff")))/100)); 
             component.set("v.year2CCTEff",(Avg_CCT*(parseInt(component.get("v.year2IncEff"))+parseInt(component.get("v.year2SREff"))+parseInt(component.get("v.year2PTEff")))/100)); 
             component.set("v.year3CCTEff",(Avg_CCT*(parseInt(component.get("v.year3IncEff"))+parseInt(component.get("v.year3SREff"))+parseInt(component.get("v.year3PTEff")))/100)); 
             component.set("v.year4CCTEff",(Avg_CCT*(parseInt(component.get("v.year4IncEff"))+parseInt(component.get("v.year4SREff"))+parseInt(component.get("v.year4PTEff")))/100)); 
             component.set("v.year5CCTEff",(Avg_CCT*(parseInt(component.get("v.year5IncEff"))+parseInt(component.get("v.year5SREff"))+parseInt(component.get("v.year5PTEff")))/100)); 
            
            
            var Avg_SDM=component.get("v.Avg_SDM");  
             component.set("v.year1SDMEff",(Avg_SDM*(parseInt(component.get("v.year1IncEff"))+parseInt(component.get("v.year1SREff"))+parseInt(component.get("v.year1PTEff"))+parseInt(component.get("v.year1PCAEff"))+parseInt(component.get("v.year1KREff")))/100)); 
             component.set("v.year2SDMEff",(Avg_SDM*(parseInt(component.get("v.year2IncEff"))+parseInt(component.get("v.year2SREff"))+parseInt(component.get("v.year2PTEff"))+parseInt(component.get("v.year2PCAEff"))+parseInt(component.get("v.year2KREff")))/100)); 
             component.set("v.year3SDMEff",(Avg_SDM*(parseInt(component.get("v.year3IncEff"))+parseInt(component.get("v.year3SREff"))+parseInt(component.get("v.year3PTEff"))+parseInt(component.get("v.year3PCAEff"))+parseInt(component.get("v.year3KREff")))/100)); 
             component.set("v.year4SDMEff",(Avg_SDM*(parseInt(component.get("v.year4IncEff"))+parseInt(component.get("v.year4SREff"))+parseInt(component.get("v.year4PTEff"))+parseInt(component.get("v.year4PCAEff"))+parseInt(component.get("v.year4KREff")))/100)); 
             component.set("v.year5SDMEff",(Avg_SDM*(parseInt(component.get("v.year5IncEff"))+parseInt(component.get("v.year5SREff"))+parseInt(component.get("v.year5PTEff"))+parseInt(component.get("v.year5PCAEff"))+parseInt(component.get("v.year5KREff")))/100)); 
    
    	  var Avg_CME=component.get("v.Avg_CME"); 
     		 component.set("v.year1CMEEff",(Avg_CME*(parseInt(component.get("v.year1IncEff"))+parseInt(component.get("v.year1SREff"))+parseInt(component.get("v.year1PTEff"))+parseInt(component.get("v.year1PCAEff"))+parseInt(component.get("v.year1KREff")))/100)); 
             component.set("v.year2CMEEff",(Avg_CME*(parseInt(component.get("v.year2IncEff"))+parseInt(component.get("v.year2SREff"))+parseInt(component.get("v.year2PTEff"))+parseInt(component.get("v.year2PCAEff"))+parseInt(component.get("v.year2KREff")))/100)); 
             component.set("v.year3CMEEff",(Avg_CME*(parseInt(component.get("v.year3IncEff"))+parseInt(component.get("v.year3SREff"))+parseInt(component.get("v.year3PTEff"))+parseInt(component.get("v.year3PCAEff"))+parseInt(component.get("v.year3KREff")))/100)); 
             component.set("v.year4CMEEff",(Avg_CME*(parseInt(component.get("v.year4IncEff"))+parseInt(component.get("v.year4SREff"))+parseInt(component.get("v.year4PTEff"))+parseInt(component.get("v.year4PCAEff"))+parseInt(component.get("v.year4KREff")))/100)); 
             component.set("v.year5CMEEff",(Avg_CME*(parseInt(component.get("v.year5IncEff"))+parseInt(component.get("v.year5SREff"))+parseInt(component.get("v.year5PTEff"))+parseInt(component.get("v.year5PCAEff"))+parseInt(component.get("v.year5KREff")))/100)); 
           
            var Avg_MEE=component.get("v.Avg_MEE"); 
            component.set("v.year1MEEff",Avg_MEE*12);
            component.set("v.year2MEEff",Avg_MEE*12*1.5);
            component.set("v.year3MEEff",Avg_MEE*12*1.8);
            component.set("v.year4MEEff",Avg_MEE*12*1.8); 
            component.set("v.year5MEEff",Avg_MEE*12*1.8); 
            
			 var Avg_IE=component.get("v.Avg_IE"); 
 			component.set("v.year1ICEff",(Avg_IE*(parseInt(component.get("v.year1IncEff"))+parseInt(component.get("v.year1SREff"))+parseInt(component.get("v.year1PTEff"))+parseInt(component.get("v.year1PCAEff"))+parseInt(component.get("v.year1KREff"))+parseInt(component.get("v.year1CCTEff"))+parseInt(component.get("v.year1SDMEff"))+parseInt(component.get("v.year1CMEEff"))+parseInt(component.get("v.year1MEEff")))/100)); 
            
             var Avg_CE=component.get("v.Avg_CE");  
            component.set("v.year1CEEff",Avg_CE*52);
            component.set("v.year2CEEff",Avg_CE*52);
            component.set("v.year3CEEff",Avg_CE*52);
            component.set("v.year4CEEff",Avg_CE*52); 
            component.set("v.year5CEEff",Avg_CE*52); 
            
            component.set("v.year1TOTALEff",(parseInt(component.get("v.year1IncEff"))+parseInt(component.get("v.year1SREff"))+parseInt(component.get("v.year1PTEff"))+parseInt(component.get("v.year1PCAEff"))+parseInt(component.get("v.year1KREff"))+parseInt(component.get("v.year1CCTEff"))+parseInt(component.get("v.year1SDMEff"))+parseInt(component.get("v.year1CMEEff"))+parseInt(component.get("v.year1MEEff"))+parseInt(component.get("v.year1ICEff"))+parseInt(component.get("v.year1CEEff")))); 
            component.set("v.year2TOTALEff",(parseInt(component.get("v.year2IncEff"))+parseInt(component.get("v.year2SREff"))+parseInt(component.get("v.year2PTEff"))+parseInt(component.get("v.year2PCAEff"))+parseInt(component.get("v.year2KREff"))+parseInt(component.get("v.year2CCTEff"))+parseInt(component.get("v.year2SDMEff"))+parseInt(component.get("v.year2CMEEff"))+parseInt(component.get("v.year2MEEff"))+parseInt(component.get("v.year2CEEff")))); 
            component.set("v.year3TOTALEff",(parseInt(component.get("v.year3IncEff"))+parseInt(component.get("v.year3SREff"))+parseInt(component.get("v.year3PTEff"))+parseInt(component.get("v.year3PCAEff"))+parseInt(component.get("v.year3KREff"))+parseInt(component.get("v.year3CCTEff"))+parseInt(component.get("v.year3SDMEff"))+parseInt(component.get("v.year3CMEEff"))+parseInt(component.get("v.year3MEEff"))+parseInt(component.get("v.year3CEEff")))); 
            component.set("v.year4TOTALEff",(parseInt(component.get("v.year4IncEff"))+parseInt(component.get("v.year4SREff"))+parseInt(component.get("v.year4PTEff"))+parseInt(component.get("v.year4PCAEff"))+parseInt(component.get("v.year4KREff"))+parseInt(component.get("v.year4CCTEff"))+parseInt(component.get("v.year4SDMEff"))+parseInt(component.get("v.year4CMEEff"))+parseInt(component.get("v.year4MEEff"))+parseInt(component.get("v.year4CEEff")))); 
            component.set("v.year5TOTALEff",(parseInt(component.get("v.year5IncEff"))+parseInt(component.get("v.year5SREff"))+parseInt(component.get("v.year5PTEff"))+parseInt(component.get("v.year5PCAEff"))+parseInt(component.get("v.year5KREff"))+parseInt(component.get("v.year5CCTEff"))+parseInt(component.get("v.year5SDMEff"))+parseInt(component.get("v.year5CMEEff"))+parseInt(component.get("v.year5MEEff"))+parseInt(component.get("v.year5CEEff")))); 
              
            component.set("v.year1FTE",(parseInt(component.get("v.year1TOTALEff"))/(5*9*50)));
            component.set("v.year2FTE",(parseInt(component.get("v.year2TOTALEff"))/(5*9*50)));
            component.set("v.year3FTE",(parseInt(component.get("v.year3TOTALEff"))/(5*9*50)));
            component.set("v.year4FTE",(parseInt(component.get("v.year4TOTALEff"))/(5*9*50)));
            component.set("v.year5FTE",(parseInt(component.get("v.year5TOTALEff"))/(5*9*50)));
           
              
        } else if (a.getState() === "ERROR") {   
            $A.log("Errors", a.getError());
        }
        
    });

    $A.enqueueAction(action);
	//this.calculate(component,yr1);
    },
    
    
      
 /*  calculate : function(component,yr1) {
		console.log('testing');
	// var year1inc = component.get("v.model.Monthy_Incident_Volume__c");
   var year2inc = parseInt(yr1) * 75;
	 console.log('year1inc'+'  '+yr1);
       console.log('year2inc'+'  '+year2inc);
        component.set("v.year2inc",year2inc);
	  
    }*/
    
    convertToCSV : function(component,model_name){  
        // declare variables
        var csvStringResult, counter, keys, keysyear, columnDivider, lineDivider,res_role,res_name;

       var m1total,m2total,m3total,m4total,m5total,m6total,m7total,m8total,m9total,m10total,m11total,m12total;
       m1total=0;m2total=0;m3total=0;m4total=0;m5total=0;m6total=0;m7total=0;m8total=0;m9total=0;m10total=0;m11total=0;m12total=0;
     
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
  csvStringResult += ['Model Name','Ticket Volume','Year 1','Year 2','Year 3','Year 4','Year 5'];  
        csvStringResult += lineDivider;     
 /*  console.log('year list size '+ YrData.length);
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
							*/
       
       // return the CSV formate String 
        return csvStringResult;          
    },
    
})