import { LightningElement,track,api } from 'lwc';

export default class Flow extends LightningElement {
    @api phone;
    @api title;
    @api department;
    @api firstName;
    @api lastName;
    @api email;

    handleChange(event){
        if(event.target.name == "phone"){
            this.phone = event.target.value;
            console.log(this.phone)
        }
        else if(event.target.name == "title"){
            this.title = event.target.value;
            console.log(this.title)
        }
        else if(event.target.name == "department"){
            this.department = event.target.value;
            console.log(this.department)
        }
        else if(event.target.name == "firstName"){
            this.firstName = event.target.value;
            console.log(this.firstName)
        }
        else if(event.target.name == "lastName"){
            this.lastName = event.target.value;
            console.log(this.lastName)
        }
        else if(event.target.name == "email"){
            this.email = event.target.value;
            console.log(this.email)
        }
    } 

}