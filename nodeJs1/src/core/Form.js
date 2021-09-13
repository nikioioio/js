export class Form {

    constructor(form, controls) {
        this.form = form;
        this.controls = controls;
    }

    value(){
        const values = {}
        Object.keys(this.controls).forEach(el => values[el] = this.form[el].value )
        return values
    }

    isValid(){
        let isFormValid = true;

        Object.keys(this.controls).forEach(control => {
            const validators = this.controls[control]

            let isValid = true;

            validators.forEach(validator =>{
                isValid = validator(this.form[control].value) && isValid
            } )

            if (!isValid){
                setError(this.form[control])
            }
            isFormValid = isValid && isFormValid ? true : false
        } )

        return isFormValid
    }
}


function setError($element){
    const errorMessage = '<p class="validation-error">Введите корректные двнные</p>';
    $element.classList.add('invalid');
    $element.insertAdjacentHTML('afterend',errorMessage)
}