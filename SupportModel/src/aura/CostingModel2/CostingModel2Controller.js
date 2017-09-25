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
})