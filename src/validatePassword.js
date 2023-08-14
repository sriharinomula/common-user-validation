export class validatePassword{

    passValidate(password) {
        return password.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/) ? true : false
    }
}