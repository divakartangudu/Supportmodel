({
	myAction : function(component, event, helper) {
		helper.loadModel(component);
       
   //     helper.calculate(component);
	},
    
     toggleColumn : function(component, event, helper)
    {
        var togglecol = component.find("hidecol3");
        var togglecol1 = component.find("hidecol5");
        console.log('togglecol:' +' '+togglecol);
        $A.util.toggleClass(togglecol,"toggle");
       $A.util.toggleClass(togglecol1,"slds-show");
    },
    
    //To Export Effort Data to CSV
    	export_effort : function(component, event, helper) {
	var model_name=component.get("v.model.Name");
	console.log("model name "+model_name);
  
 //      var yearsel=component.find("Yearslist").get("v.value");    
 //   console.log('year_sel export'+ yearsel);  
   
       // call the helper function which "return" the CSV data as a String   
        var csv = helper.convertToCSV(component,model_name);   
         if (csv == null){return;} 
        
        // ####--code for create a temp. <a> html tag [link tag] for download the CSV file--####     
	     var hiddenElement = document.createElement('a');
          hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
          hiddenElement.target = '_self'; // 
       var today = new Date();   
            var datenow = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            var timenow = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var dateTimenow = datenow+' '+timenow;
    //   var filename='Resource_Loading_Export'+new Date()+'.csv'
    var filename='Efforts_Export-'+dateTimenow+'.csv';      
       console.log('filename '+filename);  
          hiddenElement.download = filename;  // CSV file Name* you can change it.[only name not .csv] 
          document.body.appendChild(hiddenElement); // Required for FireFox browser
    	  hiddenElement.click(); // using click() js function to download csv file   
  
       

	},
    
       
    
})