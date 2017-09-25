public class AMCostingModel {

   @AuraEnabled
    public static Model__c getInputs(Id modelid)
    {
        return[Select Name,Id from Model__c  where id=:modelid];
    }
}