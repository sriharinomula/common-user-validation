export class ValidateEmail {
    constructor(email) {
        this.email = email
    }

    emailValidate() {
        return this.email.toLowerCase().match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) ? true : false
    }

}