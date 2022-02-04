import BgHandlerView from './bgHandlerView.js';

class SearchBtnView extends BgHandlerView {
  _parentElement = document.querySelector('.search__btn');
  _colors = {
    rainDay: '#79f4ff',
    rainNight: '#46bde9',
    clearDay: '#a1fb8f',
    clearNight: '#a596f8',
    cloudyDay: '#81b0fb',
    cloudyNight: '#588ae0',
    mistDay: '#b1e1cd',
    mistNight: '#91b9b4',
    snowDay: '#88d4f0',
    snowNight: '#7cadfb',
  };
  showBtn() {
    this._parentElement.parentNode.classList.remove('search__hide');
  }
}

export default new SearchBtnView();
