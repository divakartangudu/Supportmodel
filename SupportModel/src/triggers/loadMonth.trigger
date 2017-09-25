trigger loadMonth on ResourceLoading__c (after insert) {  

 
    Integer startMnth;Integer startYear;Integer endMnth;Integer endYear; Integer endMonth; Integer diffmnths;
    Integer diffyear;  
    Integer y;
    Integer CtStartMnth;  
    Integer Duration;
    Integer D;
    Integer startMnthRes;
    Integer mcount;
    Integer TotalContractMonths;  
    Double FTE_Jan;

      List <Year__c > newclist = new List <Year__c>();
      Year__c yr = new Year__c ();
      
    for (ResourceLoading__c tnew : Trigger.new)  
    {
      
       List<ResourceLoading__c> rlist= new List<ResourceLoading__c>([Select FTE__c, 
                                                                     Startmonth__c, 
                                                                     Startyear__c, 
                                                                     Endmonth__c,
                                                                     Endyear__c,
                                                                     Totalmonths__c,
                                                                     TotalContractMonths__c,
                                                                     StartMonthDiff__c,
                                                                     Model__r.Contract_Start_Date__c,
                                                                     Model__r.Contract_Duration__c,
                                                                     FTE_Jan__c
                                                             from ResourceLoading__c where Id =:tnew.Id  
                                                              ]);
        for (ResourceLoading__c r: rlist)
        {
        
        startMnthRes = (Integer)r.Startmonth__c;  
   
         startYear = (Integer)r.Startyear__c;
             endMnth = (Integer)r.Endmonth__c;
             endYear = (Integer)r.Endyear__c;
             diffmnths = (Integer)r.Totalmonths__c;
             TotalContractMonths=(Integer)r.TotalContractMonths__c;
             diffyear=endYear-startYear;
             System.debug('startYear:'+' '+startYear);
            System.debug('endMnth:'+' '+endMnth);
            System.debug('endYear:'+' '+endYear);
             System.debug('diffmnths:'+' '+diffmnths);
             System.debug('TotalContractMonths:'+' '+TotalContractMonths);
             System.debug('diffyear:'+' '+diffyear);
            System.debug('contract start year '+ r.Model__r.Contract_Start_Date__c);  
            CtStartMnth=r.Model__r.Contract_Start_Date__c.Month();
            System.debug('CtStartMnth '+ CtStartMnth);  
            System.debug('startMnthRes '+ startMnthRes); 
   //          startMnth = (Integer)r.Startmonth__c-CtStartMnth+1;  
            startMnth=(Integer)r.StartMonthDiff__c;
             System.debug('startMnth:'+' '+startMnth);
    //      Duration=r.Model__r.Contract_Duration__c;  
           FTE_Jan=r.FTE_Jan__c;
             System.debug('FTE_Jan:'+' '+FTE_Jan);

//First year calculation


System.debug('1207');    

    //      if(TotalContractMonths<=12)         //checking 1554 5th sep
            if(diffmnths<=12)
            {
                Integer ytemp=1;
            if (startMnth >12 && startMnth<=24)
                ytemp+=1;
            if (startMnth >24 && startMnth<=36)
                ytemp+=2;   
            if (startMnth >36 && startMnth<=48)
                ytemp+=3;   
            if (startMnth >48 && startMnth<=60)
                ytemp+=4;   
            system.debug('ytemp before mcount logic starts '+ytemp);
                
            System.debug('inside TotalContractMonths logic');  
                       for (Integer c=0;c<diffmnths;c++)        
            {
            
                        if(math.mod(startMnth, 12)==1)
                            {
                               yr.Jan__c = r.FTE__c;
                                System.debug('1');
                            }
                        else if(math.mod(startMnth, 12)==2)
                            {
                            yr.Feb__c = r.FTE__c;
                               System.debug('2');
                            }
                        else if(math.mod(startMnth, 12)==3)
                            {
                            yr.Mar__c = r.FTE__c;
                               System.debug('3');  
                            }
                        else if(math.mod(startMnth, 12)==4)
                            {
                            yr.Apr__c = r.FTE__c;
                                System.debug('4');
                            }
                        else if(math.mod(startMnth, 12)==5)
                            {
                            yr.May__c = r.FTE__c;
                               System.debug('5');
                            }
                        else if(math.mod(startMnth, 12)==6)
                            {
                            yr.Jun__c = r.FTE__c;
                               System.debug('6');
                            }
                        else if(math.mod(startMnth, 12)==7)
                            {
                            yr.Jul__c = r.FTE__c;
                                System.debug('7');
                            }
                        else if(math.mod(startMnth, 12)==8)
                            {
                            yr.Aug__c = r.FTE__c;
                                System.debug('8');
                            }
                        else if(math.mod(startMnth, 12)==9)
                            {
                            yr.Sept__c = r.FTE__c;
                                System.debug('9');
                            }
                        else if(math.mod(startMnth, 12)==10)
                            {
                            yr.Oct__c = r.FTE__c;
                                System.debug('10');
                            }
                        else if(math.mod(startMnth, 12)==11)
                            {
                            yr.Nov__c = r.FTE__c;
                                System.debug('11');
                            }
                         else if(math.mod(startMnth, 12)==0)
                            {
                            yr.Dec__c = r.FTE__c;
                            
                                System.debug('12');
                            }
                 
                             startMnth++;   
            }
            yr.ResourceLoadingId__c= tnew.Id;
            yr.Year__c = 'Year'+ytemp;
            newclist.add(yr);
                             
            }
   
            else
            {
                System.debug('mcount logic starts');
                Integer ytemp=1;
                mcount=12-math.mod(startMnth, 12);//updated logic
            
            //Logic go display year data if Resource Start year is not same as Contract Start year
            
            if (startMnth >12 && startMnth<=24)
                ytemp+=1;
            if (startMnth >24 && startMnth<=36)
                ytemp+=2;   
            if (startMnth >36 && startMnth<=48)
                ytemp+=3;   
            if (startMnth >48 && startMnth<=60)
                ytemp+=4;   
            system.debug('ytemp before mcount logic starts '+ytemp);
            
            
            System.debug('mcount:'+' '+mcount);  
            if(mcount>=0){
                yr.ResourceLoadingId__c= tnew.Id;
            
           for (Integer i=0;i<=mcount;i++)        
            {
                
                System.debug('inside year 1 logic');  
                if(math.mod(startMnth, 12)==1)
                            {
                               yr.Jan__c = r.FTE__c;
                                System.debug('1');
                            }
                        else if(math.mod(startMnth, 12)==2)
                            {
                            yr.Feb__c = r.FTE__c;
                               System.debug('2');
                            }
                        else if(math.mod(startMnth, 12)==3)
                            {
                            yr.Mar__c = r.FTE__c;
                               System.debug('3');  
                            }
                        else if(math.mod(startMnth, 12)==4)
                            {
                            yr.Apr__c = r.FTE__c;
                                System.debug('4');
                            }
                        else if(math.mod(startMnth, 12)==5)
                            {
                            yr.May__c = r.FTE__c;
                               System.debug('5');
                            }
                        else if(math.mod(startMnth, 12)==6)
                            {
                            yr.Jun__c = r.FTE__c;
                               System.debug('6');
                            }
                        else if(math.mod(startMnth, 12)==7)
                            {
                            yr.Jul__c = r.FTE__c;
                                System.debug('7');
                            }
                        else if(math.mod(startMnth, 12)==8)
                            {
                            yr.Aug__c = r.FTE__c;
                                System.debug('8');
                            }
                        else if(math.mod(startMnth, 12)==9)
                            {
                            yr.Sept__c = r.FTE__c;
                                System.debug('9');
                            }
                        else if(math.mod(startMnth, 12)==10)
                            {
                            yr.Oct__c = r.FTE__c;
                                System.debug('10');
                            }
                        else if(math.mod(startMnth, 12)==11)
                            {
                            yr.Nov__c = r.FTE__c;
                                System.debug('11');
                            }
                         else if(math.mod(startMnth, 12)==0)
                            {
                            yr.Dec__c = r.FTE__c;
                            
                                System.debug('12');
                            }
                 
                             startMnth++; 
                            diffmnths=diffmnths-1;                           
                          System.debug(startMnth);          
            }
        //   yr.Year__c = 'Year1';
            yr.Year__c = 'Year'+ytemp;
            
           newclist.add(yr);
        }//end of if
          
          System.debug('diff month remains after 1st year logic '+diffmnths);    
        Integer divn=diffmnths/12;
        Integer remainder = math.mod(diffmnths, 12);
        System.debug('divn:'+' '+divn);
        System.debug('remainder:'+' '+remainder);
 //       Integer ytemp=2;

//Calculate logic for 12 month blocks       
         for (d=1;d<=divn;d++)  
            {
            Year__c yr = new Year__c ();
            yr.ResourceLoadingId__c= tnew.Id;
                for (Integer i=0;i<12;i++)
                {
    

                 if(math.mod(startMnth, 12) ==1)
                            {
                               yr.Jan__c = r.FTE__c;
                                System.debug('1');
                            }
                        else if(math.mod(startMnth, 12)==2)
                            {
                            yr.Feb__c = r.FTE__c;
                               System.debug('2');
                            }
                        else if(math.mod(startMnth, 12)==3)
                            {
                            yr.Mar__c = r.FTE__c;
                               System.debug('3');
                            }
                        else if(math.mod(startMnth, 12)==4)
                            {
                            yr.Apr__c = r.FTE__c;
                                System.debug('4');
                            }
                        else if(math.mod(startMnth, 12)==5)
                            {
                            yr.May__c = r.FTE__c;
                               System.debug('5');
                            }
                        else if(math.mod(startMnth, 12)==6)
                            {
                            yr.Jun__c = r.FTE__c;
                               System.debug('6');
                            }
                        else if(math.mod(startMnth, 12)==7)
                            {
                            yr.Jul__c = r.FTE__c;
                                System.debug('7');
                            }
                        else if(math.mod(startMnth, 12)==8)
                            {
                            yr.Aug__c = r.FTE__c;
                                System.debug('8');
                            }
                        else if(math.mod(startMnth, 12)==9)
                            {
                            yr.Sept__c = r.FTE__c;
                                System.debug('9');
                            }
                        else if(math.mod(startMnth, 12)==10)
                            {
                            yr.Oct__c = r.FTE__c;
                                System.debug('10');
                            }
                        else if(math.mod(startMnth, 12)==11)
                            {
                            yr.Nov__c = r.FTE__c;
                                System.debug('11');
                            }
                         else if(math.mod(startMnth, 12)==0)
                            {
                            yr.Dec__c = r.FTE__c;
                            
                                System.debug('12');
                            }
                    startMnth++;    
                        System.debug(startMnth);    
                }
            ytemp++;                    
             yr.Year__c = 'Year'+ytemp;
            newclist.add(yr);  
            
             System.debug('newclist:'+' '+newclist);   
             
                     }
                     
//Calculate logic for remainder months                   
        if(remainder!=0){
            Year__c yr = new Year__c ();
            yr.ResourceLoadingId__c= tnew.Id;
            for (Integer i=0;i<remainder;i++)
                {
                    
                    
                    if(math.mod(startMnth, 12)==1)
                            {
                               yr.Jan__c = r.FTE__c;
                                System.debug('1');
                            }
                        else if(math.mod(startMnth, 12)==2)
                            {
                            yr.Feb__c = r.FTE__c;
                               System.debug('2');
                            }
                        else if(math.mod(startMnth, 12)==3)
                            {
                            yr.Mar__c = r.FTE__c;
                               System.debug('3');
                            }
                        else if(math.mod(startMnth, 12)==4)
                            {
                            yr.Apr__c = r.FTE__c;
                                System.debug('4');
                            }
                        else if(math.mod(startMnth, 12)==5)
                            {
                            yr.May__c = r.FTE__c;
                               System.debug('5');
                            }
                        else if(math.mod(startMnth, 12)==6)
                            {
                            yr.Jun__c = r.FTE__c;
                               System.debug('6');
                            }
                        else if(math.mod(startMnth, 12)==7)
                            {
                            yr.Jul__c = r.FTE__c;
                                System.debug('7');
                            }
                        else if(math.mod(startMnth, 12)==8)
                            {
                            yr.Aug__c = r.FTE__c;
                                System.debug('8');
                            }
                        else if(math.mod(startMnth, 12)==9)
                            {
                            yr.Sept__c = r.FTE__c;
                                System.debug('9');
                            }
                        else if(math.mod(startMnth, 12)==10)
                            {
                            yr.Oct__c = r.FTE__c;
                                System.debug('10');
                            }
                        else if(math.mod(startMnth, 12)==11)
                            {
                            yr.Nov__c = r.FTE__c;
                                System.debug('11');
                            }
                         else if(math.mod(startMnth, 12)==0)
                            {
                            yr.Dec__c = r.FTE__c;
                            
                                System.debug('12');
                            }
                    startMnth++; 
                        System.debug(startMnth);    
                }
             
             ytemp+=1;      
             yr.Year__c = 'Year'+ytemp;
             
            newclist.add(yr);  
             System.debug('newclist:'+' '+newclist);     
        }       
                }
        }
        }
    if (newclist.size()>0)   
        upsert newclist;  
   }