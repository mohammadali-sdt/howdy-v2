import View from './view.js';

class OverlayView extends View{
  _parentElement = document.querySelector('.overlay');
  _searchBtn = document.querySelector('.search__btn');
  _closeBtn = document.querySelector('.overlay__close');

    constructor() {
      super();
    }

  _hideWindow(handler) {
    handler(this);
  }

  _showWindow(handler) {
    handler(this);
  }

  showOverlay(handler) {
    this._searchBtn.addEventListener(
      'click',
      this._showWindow.bind(this, handler)
    );
  }

  hideOverlay(handler) {
    this._closeBtn.addEventListener(
      'click',
      this._hideWindow.bind(this, handler)
    );
  }

  appearOverlay(){
      this._parentElement.classList.remove('overlay--hide');
  }

  disappearOverlay(){
    this._parentElement.classList.add('overlay--hide');
  }


}

export default new OverlayView();
