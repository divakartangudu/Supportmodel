public with sharing class ResourceLoadingRec{  

//To display set of resource records related to a Support Model in a table    
@AuraEnabled
 public static list < ResourceLoading__c > fetchResource(String recordId) {
     
       system.debug('rec id list '+recordId);
  list < ResourceLoading__c > returnResList = new List < ResourceLoading__c > ();
 
  List < ResourceLoading__c > lstRes = [Select Id,model__r.name,model__r.Contract_Start_Date__c,FTE_Jan__c,CreatedById,Days__c,End_Date__c,GCM_Level__c,LastModifiedById,Loading__c,Base_Location__c,Model__c,Rate_Hr__c,Name,Role__c,Select__c,Start_Date__c,Total_Fee__c
 FROM ResourceLoading__c Where Model__c =:recordId];  
  for (ResourceLoading__c r: lstRes) {
   returnResList.add(r);
  }
 // return the List of resource records
  return returnResList;
 }
  
 
    
//To display years data  
@AuraEnabled
 public static list < Year__c > fetchYears(String yearsel, String recordId) {  
     
       system.debug('rec id list years '+recordId+  'year selected 1252  '+ yearsel);        
  list < Year__c > returnYrsList = new List < Year__c > ();  
 
  List < Year__c > lstYrs = [Select Id, ResourceLoadingId__r.model__r.name, ResourceLoadingId__r.Role__c,FTE_Jan__c, Year__c, Jan__c, Feb__c, 
                             Mar__c, Apr__c, May__c, Jun__c, Jul__c, Aug__c, Sept__c, Oct__c, Nov__c, Dec__c  
 							FROM Year__c Where ResourceLoadingId__r.model__c =:recordId and toLabel(Year__c) =: yearsel];              
  for (Year__c y: lstYrs) {     
   returnYrsList.add(y);  
  }
 // return the List of resource year records  
  return returnYrsList;  
 }    
    
//To add resource record    
@AuraEnabled
public static ResourceLoading__c saveRes (ResourceLoading__c res, String recordId) {
    system.debug('rec id '+recordId);
  Model__c m1= [Select Id,name,Contract_Start_Date__c FROM Model__c Where Id =:recordId limit 1]; 
    System.debug('contract start date '+m1.Contract_Start_Date__c);
    Date CtDate=m1.Contract_Start_Date__c;

    Date Stdt=res.Start_Date__c;
    Date Edt=res.End_Date__c;
    
    system.debug('Stdt '+Stdt+' CtDate '+ CtDate);  
    
     if(Stdt > Edt)  
    {
        throw new AuraHandledException('Start date can not be after End Date');             
    }
    if(Stdt < CtDate)
    {
        throw new AuraHandledException('Resource start date can not be before Contract Start Date');         
    }
    
res.Model__c=recordId;     
upsert res;
return res;  
}

//To delete Resource records    
@AuraEnabled
 public static List < String > deleteRecords(List < String > lstRecordId) {
  // for store Error Messages  
  List < String > oErrorMsg = new List < String > ();
  // Query Records for delete where id in lstRecordId [which is pass from client side controller] 
  List < ResourceLoading__c > lstDeleteRec = [select Id from ResourceLoading__c where id IN: lstRecordId];
  
  // delte Resource list with Database.DeleteResult[] database class.
  // It deletes some queried Resource using <samp class="codeph apex_code">Database.<span class="statement">delete</span></samp> 
  // with a false second parameter to allow partial processing of records on failure.
  // Next, it iterates through the results to determine whether the operation was successful or not
  // for each record. and check if delete Resource successful so print msg on debug, 
  // else add error message to oErrorMsg List and return the list  
  Database.DeleteResult[] DR_Dels = Database.delete(lstDeleteRec, false);
  // Iterate through each returned result
  for (Database.DeleteResult dr: DR_Dels) {
   if (dr.isSuccess()) {
      system.debug('successful delete Resource');
     // Operation was successful
   } else {
    // Operation failed, so get all errors   
    oErrorMsg.add('');
    for (Database.Error err: dr.getErrors()) {
     // add Error message to oErrorMsg list and return the list
     oErrorMsg.add(err.getStatusCode() + ': ' + err.getMessage());
    }
   }
  }
  return oErrorMsg;    
 
 }    
    
    
    //To display set of resource records related to a Support Model in a table    
@AuraEnabled
 public static Model__c GetModel(String recordId) {
     
       system.debug('rec id in GetStartDate '+recordId);   
     
     Model__c m= [Select Id,name,Contract_Start_Date__c FROM Model__c Where Id =:recordId limit 1]; 
System.debug('contract start date '+m.Contract_Start_Date__c);
 // return the List of resource records
  return m; 
 }
    
}