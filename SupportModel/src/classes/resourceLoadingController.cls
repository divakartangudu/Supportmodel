public class resourceLoadingController{
    
    /*@AuraEnabled
    public static ResourceLoading__c TargetRec() {
        return (ResourceLoading__c)ResourceLoading__c.sObjectType.newSObject(null, true);
    }
    */
    	
    @AuraEnabled
    public Static List<String> GetFieldPicklistValues(String ObjectApi_name, String picklistField)
    {
        system.debug('In GetFieldPicklistValues');
        Schema.SObjectType objectType = Schema.getGlobalDescribe().get(ObjectApi_name);
        system.debug('In step1');
        Sobject Object_name = objectType.newSObject();
        system.debug('In step2');
        Schema.sObjectType sobject_type = Object_name.getSObjectType();
        system.debug('In step3');
        Map<String, Schema.SObjectField> field_map = sobject_type.getDescribe().fields.getMap();
        system.debug('In step4');
        List<Schema.PicklistEntry> controllingFieldValues = field_map.get(picklistField).getDescribe().getPickListValues();
        system.debug('In step5');
        system.debug('In step6' + controllingFieldValues);
        list<String> picklistValues =  new  list<String>();
        for (Schema.PicklistEntry pklVal : controllingFieldValues){
            picklistValues.add(pklVal.getValue()); 
        }
        system.debug('In step7' + picklistValues);
        return picklistValues;
    }

}