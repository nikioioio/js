import {Component} from "../core/Component";

export class NavigationComponent extends Component{
    constructor(id) {
        super(id);
        this.tabs = []
    }

    init(){
        this.$el.addEventListener('click', tabClickHandler.bind(this))
    }

    registerTabs(tabs){
        this.tabs = tabs
    }
}


function tabClickHandler(event){
    event.preventDefault();
    if (event.target.classList.contains('tab')){
        Array.from(this.$el.querySelectorAll('.tab')).forEach((tab) => {
            tab.classList.remove('active');
        })

        event.target.classList.add('active');
    }

    this.tabs.forEach(el => el.component.hide());

    const activeTab = this.tabs.find(el => el.name === event.target.dataset.name);
    activeTab.component.show();

}