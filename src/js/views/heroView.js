import rainDay from 'url:../../img/rain-day.jpg';
import rainNight from 'url:../../img/rain-night.jpg';
import clearDay from 'url:../../img/clear-day.jpg';
import clearNight from 'url:../../img/clear-night.png';
import cloudyDay from 'url:../../img/cloudy-day.png';
import cloudyNight from 'url:../../img/cloudy-night.jpg';
import mistDay from 'url:../../img/mist-day.jpg';
import mistNight from 'url:../../img/mist-night.jpg';
import snowDay from 'url:../../img/snow-day.jpg';
import snowNight from 'url:../../img/snow-night.jpg';
import WeatherConditionView from './weatherConditionView.js';

class HeroView extends WeatherConditionView {
  _parentElement = document.querySelector('.hero');
  _icons = {
    rainDay,
    rainNight,
    clearDay,
    clearNight,
    cloudyDay,
    cloudyNight,
    mistDay,
    mistNight,
    snowDay,
    snowNight,
  };
  constructor() {
    super();
  }

  _generateMarkup(data) {
    return `
            <img
              class="hero__img"
              src="${this.setIconByCondition(data.condition, data.is_day)}"
              alt="${data.condition}"
            />
        `;
  }
}

export default new HeroView();
