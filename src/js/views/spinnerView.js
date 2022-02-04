class SpinnerView {
    _parentElement = document.querySelector('.spinner');

    showSpinner(){
        this._parentElement.classList.add('spinner__show');
    }
    hideSpinner(){
        this._parentElement.classList.remove('spinner__show');
    }
}

export default new SpinnerView();