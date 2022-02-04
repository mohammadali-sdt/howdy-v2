import View from './view.js';


class SearchFormView extends View{
    _parentElement = document.querySelector('.search-form');

    constructor() {
        super();
    }

    submitForm(handler){
        this._parentElement.addEventListener('submit', function (e){
            e.preventDefault();
            const form = new FormData(e.target);
            const city = form.get('search_input');
            handler(city);
            e.target.reset();
        })
    }
}

export default new SearchFormView();