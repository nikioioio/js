import {Component} from "../core/Component";
import {Form} from "../core/Form"
import {Validators} from "../core/Validators"
import {apiService} from "../services/api.service";
export { apiService } from "../services/api.service"

//form class
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

async function submitHandler(event) {
    event.preventDefault()
    if (this.form.isValid()) {
        const formData = {
            type: this.$el.type.value,
            date: new Date().toLocaleDateString(),
            ...this.form.value()
        }
        this.form.clear()
        await apiService.createPost(formData)
        alert('Запись создана в БД')
    }


}