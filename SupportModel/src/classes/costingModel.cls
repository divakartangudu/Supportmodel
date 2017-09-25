public with sharing class costingModel {
    
    @AuraEnabled
    public static Model__c getModel(String recordId)
    {
        System.debug(recordId); 
        Model__c mod = [Select Id,Name,Monthy_Incident_Volume__c,Monthly_Service_Request_Volume__c,  
                        Problem_Ticket_Volume__c, Average_Incident_Resolution_Time__c,Average_Service_Request_Resolution_Time__c,
                        Avg_Problem_Ticket_Resolution_Time__c, Avg_Time_for_Prev_Corr_Actions__c,
                        Average_Time_for_Knowledge_Retention__c, Avg_Communication_Collaboration_Time__c,
                        SDM_Efforts__c, Contract_Management_Efforts__c,  Change_Minor_Enhancement_Efforts_Month__c,
                        Initial_Efforts__c, Consulting_Efforts__c, 
                        Service_Optimization_Year_1_Year_2__c,Service_Optimization_Year_2_Year_3__c,
                        Service_Optimization_Year_3_Year_4__c,
                        Business_User_Count__c,TVITYear1__c FROM Model__c Where Id =:recordId LIMIT 1 ];
        return  mod;

                 
    }

    
}