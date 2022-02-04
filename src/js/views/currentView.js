import icons from 'url:../../img/sprite.svg';
import WeatherConditionView from './weatherConditionView.js';

class CurrentView extends WeatherConditionView {
  _parentElement = document.querySelector('.current');
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

  _generateMarkup(data) {
    return `
      <h3 class="current__date">${data.location.datetime.toLocaleDateString(
        'en-US',
        {
          weekday: 'long',
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        }
      )}</h3>
        <div class="current__content">
          <div class="current__card">
            <p class="current__temp">${data.current.temp.toFixed(0)}&#176;</p>
            <p class="current__location">${data.location.name}, ${
      data.location.country
    }</p>
          </div>
          <div class="current__card">
            <svg class="current__icon">
              <use xlink:href="${icons}#${this.setIconByCondition(
      data.current.condition,
      data.current.is_day
    )}"></use>
            </svg>
            <p class="current__condition">${
              data.current.is_day === 0 ? 'Night' : 'Day'
            }, ${
      data.current.condition.charAt(0).toUpperCase() +
      data.current.condition.slice(1)
    }</p>
          </div>
        </div>
    `;
  }
}

export default new CurrentView();
