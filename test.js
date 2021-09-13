class Validators {
    static required(value = ''){
        return value && value.trim()
    }
    static minLength(length) {
        return v => {
            return v
        }
    }
}


const a = Validators.required('fvdvfddfvdf')
const b = Validators.minLength(5)()