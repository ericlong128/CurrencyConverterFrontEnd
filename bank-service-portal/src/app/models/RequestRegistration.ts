export class RequestRegistration {
    private username : string;
    private name : string;
    private age : number;
    private phoneNumber : string;
    private password : string;
    private email : string;
    private role: string;

    public setUsername(username: string){
        this.username = username;
    }

    public getUsername() : string {
        return this.username;
    }

    public setName(name: string) {
        this.name = name;
    }

    public getName() : string {
        return this.name;
    }

    public setAge(age: number) {
        this.age = age;
    }

    public getAge() : number {
        return this.age;
    }

    public setPhoneNumber(phoneNumber: string) {
        this.phoneNumber = phoneNumber;
    }

    public getPhoneNumber() : string {
        return this.phoneNumber;
    }

    public setPassword(password : string) {
        this.password = password;
    }

    public getPassword() : string {
        return this.password;
    }

    public setEmail(email : string) {
        this.email = email;
    }

    public getEmail() : string {
        return this.email;
    }

    public setRole(role: string) {
        this.role = role;
    }

    public getRole() : string {
        return this.role;
    }
}