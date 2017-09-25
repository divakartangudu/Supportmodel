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
    
})