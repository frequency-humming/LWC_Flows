public with sharing class AccountSearch {

    public static List<Account> acc = New List<Account>();

    @AuraEnabled(cacheable=true)
    public static List<Account> searchAccount(String query){
        system.debug('in the apex class');
        try {
            String name = '%'+query+'%';
            acc = [Select Id, Name FROM Account WHERE Name LIKE :name LIMIT 20];
            return acc;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
