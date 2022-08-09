import { User } from "./User";

export interface Address{

    addressId : string;
    user : User;
    addressLine1 : string;
    street : string;
    city : string;
    zipCode : string;
    state : string;
    country : string;
}