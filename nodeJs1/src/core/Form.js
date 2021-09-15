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

    clear() {
        Object.keys(this.controls).forEach(el => this.form[el].value = '' )
    }

    isValid(){
        let isFormValid = true;

        Object.keys(this.controls).forEach(control => {
            const validators = this.controls[control]

            let isValid = true;

            validators.forEach(validator =>{
                isValid = validator(this.form[control].value) && isValid
            } )

            !isValid ? setError(this.form[control]) : clearError(this.form[control])

            isFormValid = isValid && isFormValid ? true : false
        } )

        return isFormValid
    }
}


function setError($element){
    clearError($element)
    const errorMessage = '<p class="validation-error">Введите корректные данные</p>';
    $element.classList.add('invalid');
    $element.insertAdjacentHTML('afterend',errorMessage)
}

function clearError($element){
    $element.classList.remove('invalid');

    if ($element.nextSibling) {
        $element.closest('.form-control').removeChild($element.nextSibling)
    }
    //Родитель первый по иерерархии

}