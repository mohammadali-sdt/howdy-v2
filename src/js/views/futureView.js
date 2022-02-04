import icons from 'url:../../img/sprite.svg';
import WeatherConditionView from './weatherConditionView.js';

class FutureView extends WeatherConditionView {
  _parentElement = document.querySelector('.future');
  _icons = {
    rainDay: 'icon-rainy-full',
    rainNight: 'icon-rainy-full',
    clearDay: 'icon-clear-day-full',
    clearNight: 'icon-clear-night-full',
    cloudyDay: 'icon-cloudy-day-full',
    cloudyNight: 'icon-cloudy-night-full',
    mistDay: 'icon-cloud-fog',
    mistNight: 'icon-cloud-fog',
    snowDay: 'icon-snowy-full',
    snowNight: 'icon-snowy-full',
    lightingDay: 'icon-lightning-full',
    lightingNight: 'icon-lightning-full',
  };
  constructor() {
    super();
  }

  _generateCardMarkup(day) {
    return `
            <div class="future__card card">
                  <svg class="card__icon">
                    <use xlink:href="${icons}#${this.setIconByCondition(
      day.condition,
      day.is_day
    )}"></use>
                  </svg>
                  <div class="card__temp">${day.temp.toFixed(0)}&#176;</div>
                  <div class="card__day">${day.date.toLocaleDateString(
                    'en-US',
                    { weekday: 'short' }
                  )}</div>
            </div>
        `;
  }

  _generateMarkup(data) {
    return data.map((day) => this._generateCardMarkup(day)).join('');
  }
}

export default new FutureView();
