trigger createCategory on Model__c (After Insert) {

if (Trigger.isInsert){
	List<Master_Category__c> mclist = new List<Master_Category__c>([Select Category_Name__c,
                                                                    Type__c,
                                                                    Percentage__c,
                                                                    Unit_of_Effort_Hrs__c,
                                                                    Priority__c    
                                                     				from Master_Category__c
                                                                    ]);
    List <Category__c> newclist = new List <Category__c>();
    for (Model__c tnew : Trigger.new)
    {
    
       //List <Category__c> newclist = new List <Category__c>();
       //Category__c cat = new Category__c();
       for (Master_Category__c m : mclist)
       {
           Category__c cat = new Category__c();
           cat.Category_Name__c = m.Category_Name__c;
           cat.Type__c = m.Type__c;
           cat.Percentage__c = m.Percentage__c;
           cat.Unit_of_Effort_Hrs__c = m.Unit_of_Effort_Hrs__c;
           cat.Priority__c = m.Priority__c;
           cat.Models__c = tnew.Id;
           newclist.add(cat);
       }
       //newclist.addAll(clist);
       System.debug(newclist);   

	}
	if (newclist.size()>0)
        insert newclist;
  }

}