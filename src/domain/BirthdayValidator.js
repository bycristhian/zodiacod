

class BirthdayValidator {

    value = { month: 0, day: 0 }
    errors = []

    constructor(birthday){
        this.value = birthday
        this.validate()
    }

    validate(){
        if (this.value.day < 1 || this.value.day > 31){
            this.addError("day", "El día debe estar entre el rango 1 y 31")
        }
    }

    addError(type, message){
        this.errors.push({ type: type, message: message })
    }

    is_valid(){
        return this.errors.length == 0
    }


}

export default BirthdayValidator