import {Component} from "../core/Component";
import {Form} from "../core/Form"
import {Validators} from "../core/Validators"

export class CreateComponent extends Component {


    constructor(id) {
        super(id);
    }

    init() {
        this.$el.addEventListener('submit', submitHandler.bind(this));

        this.form = new Form(this.$el, {
            title: [Validators.required],
            fulltext: [Validators.required,Validators.minLength(10)]
        });

    }
}

function submitHandler(event) {
    event.preventDefault()
    if (this.form.isValid()) {
        const formData = {
            type: this.$el.type.value,
            ...this.form.value()
        }
        console.log(formData)
    }else{
        console.warn('Form is invalid')
    }


}