import View from './view.js';

class ErrorView extends View {
  _parentElement = document.querySelector('.error');
  _generateMarkup(data) {
    return `
            <p class="error__msg">
                ${data}
            </p>
        `;
  }
  showError() {
    this._parentElement.classList.add('error__show');
  }
  hideError() {
    this._parentElement.classList.remove('error__show');
  }
}

export default new ErrorView();
