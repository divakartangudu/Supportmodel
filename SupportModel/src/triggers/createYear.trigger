trigger createYear on ResourceLoading__c (after insert) {

if (Trigger.isInsert){
    List <Year__c > newclist = new List <Year__c>();
    for (ResourceLoading__c tnew : Trigger.new)
    {
    
       List<ResourceLoading__c> rlist= new List<ResourceLoading__c>([Select FTE__c
                                                             from ResourceLoading__c where Id =:tnew.Id
                                                                    ]);
       for (ResourceLoading__c r : rlist)
       {
           Year__c yr = new Year__c ();
           yr.ResourceLoadingId__c= tnew.Id;
           yr.Jan__c = r.FTE__c;
           yr.Feb__c = r.FTE__c;
           yr.Mar__c = r.FTE__c;
           yr.Apr__c = r.FTE__c;
           yr.May__c = r.FTE__c;
           yr.Jun__c = r.FTE__c;
           yr.Jul__c = r.FTE__c;
           yr.Aug__c = r.FTE__c;
           yr.Sept__c = r.FTE__c;
           yr.Oct__c = r.FTE__c;
           yr.Nov__c = r.FTE__c;
           yr.Dec__c = r.FTE__c;
           newclist.add(yr);
       }
       //newclist.addAll(clist);
       System.debug(newclist);   

  }
  if (newclist.size()>0)
        insert newclist;
  }

}