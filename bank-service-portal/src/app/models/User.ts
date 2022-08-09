import { Address } from "./Address";

export interface User{

    username : string;
    password : string;
    firstName : string;
    lastName : string;
    emailId : string;
    dateOfBirth : Date;
    address : Address;
}