class View{
    _parentElement;
    render(data) {
        const markup = this._generateMarkup(data);
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    _clear(){
        this._parentElement.innerHTML = '';
    }

    _generateMarkup(data){

    }

    addClassToParentEl(className) {
        this._parentElement.classList.add(className);
    }

    removeClassFromParent(className) {
        this._parentElement.classList.remove(className);
    }

}

export default View;