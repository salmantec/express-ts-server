class User {
    public name: String;
    public email: String;
    private role: String;
    private password: String;
    private ID: Number;

    constructor()
    constructor(email: String)
    constructor(name: String, email: String)
    constructor(name: String, email: String, password: String, role: String)
    constructor(name?: String, email?: String, password?: String, role?: String) {
        this.name = name
        this.email = email
        this.password = password
        this.role = role
    }

    public register() {
        this.ID = Math.round(Math.random() * 10000);
    }

    public getJsonObject(): Object {
        return {
            email: this.email,
            name: this.name,
            role: this.role,
            password: this.password,
            ID: this.ID
        }
    }
}

export default User;