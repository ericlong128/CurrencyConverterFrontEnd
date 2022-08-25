import { Address } from "./Address";

export class User{

    id: number;
    username : string;
    password : string;
    name : string;
    email : string;
    phoneNumber : string;
    age : number;
    role: Role[];
    // dateOfBirth : Date;
    // address : Address;

    constructor(
        id: number,
        username : string,
        password : string,
        name : string,
        email : string,
        phoneNumber : string,
        age : number,
        role: Role[]
    ) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.age = age;
        this.role = role;
    }
}

export class Role {
    id: number;
    name: string;

    constructor(
        id: number,
        name: string
    ) {
        this.id = id;
        this.name = name;
    }
}