<?xml version="1.0" encoding="UTF-8"?>
<Workflow xmlns="http://soap.sforce.com/2006/04/metadata">
    <fieldUpdates>
        <fullName>Update_Yearly_Effort</fullName>
        <field>Yearly_Efforts_Actual__c</field>
        <formula>Yearly_Efforts_Hrs_IT__c</formula>
        <name>Update Yearly Effort</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Formula</operation>
        <protected>false</protected>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Update_actual_tickets</fullName>
        <field>No_of_Tickets_Actual__c</field>
        <formula>No_Of_Tickets_IT__c</formula>
        <name>Update actual tickets</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Formula</operation>
        <protected>false</protected>
    </fieldUpdates>
    <rules>
        <fullName>No of Tickets Actual</fullName>
        <actions>
            <name>Update_actual_tickets</name>
            <type>FieldUpdate</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Model__c.Monthy_Incident_Volume__c</field>
            <operation>notEqual</operation>
            <value>0</value>
        </criteriaItems>
        <description>To find No of Tickets Actual</description>
        <triggerType>onAllChanges</triggerType>
    </rules>
    <rules>
        <fullName>Yearly Effort Actual</fullName>
        <actions>
            <name>Update_Yearly_Effort</name>
            <type>FieldUpdate</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Model__c.Monthy_Incident_Volume__c</field>
            <operation>notEqual</operation>
            <value>0</value>
        </criteriaItems>
        <description>To Find Yearly Effort Actual</description>
        <triggerType>onAllChanges</triggerType>
    </rules>
</Workflow>
