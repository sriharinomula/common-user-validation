export class validatePassword{
    constructor (password) {
        this.password = password
    }

    passValidate() {
        return this.password.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/) ? true : false
    }
}