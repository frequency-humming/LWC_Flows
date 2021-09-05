import { LightningElement,api,wire } from 'lwc';
import searchAccountBox from '@salesforce/apex/AccountSearch.searchAccount';


export default class Flow_search extends LightningElement {

    @api account;
    @api results;
    @api accountId;

    handleSearch(event){
        this.account = event.target.value;
        searchAccountBox({query:this.account})
        .then( result => {
            this.results = result;
            console.log(this.results);
        })
        .catch( error => {
            console.log(error);
        })
    }

    handleClick(event){
        this.accountId = event.target.value;
    }
}