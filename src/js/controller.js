import overlayView from '../js/views/overlayView.js';
import currentView from '../js/views/currentView.js';
import heroView from '../js/views/heroView.js';
import futureView from './views/futureView.js';
import containerView from './views/containerView.js';
import spinnerView from '../js/views/spinnerView.js';
import errorView from '../js/views/errorView.js';
import searchFormView from '../js/views/searchFormView.js';
import searchBtnView from './views/searchBtnView.js';
import * as model from '../js/model.js';

const showOverlayHandler = function (overlay) {
  overlay.removeClassFromParent('overlay--hide');
};

const hideOverlayHandler = function (overlay) {
  overlay.addClassToParentEl('overlay--hide');
};

const getWeatherByCityHandler = async function (city) {
  try {
    overlayView.disappearOverlay();
    spinnerView.showSpinner();
    await model.getWeatherBycity(city);
    const { current, location, future } = model.state;

    heroView.render(current);
    currentView.render({ current, location });
    futureView.render(future);
    containerView.changeBgWithCondition(current.condition, current.is_day);

    searchBtnView.changeBgWithCondition(current.condition, current.is_day);
    spinnerView.hideSpinner();
  } catch (err) {
    spinnerView.hideSpinner();
    errorView.render(err.message);
    errorView.showError();
    overlayView.appearOverlay();
  }
};

function init() {
  navigator.geolocation.getCurrentPosition(
    async (pos) => {
      spinnerView.showSpinner();
      try {
        await model.getCityByCoords(pos.coords.longitude, pos.coords.latitude);
        await getWeatherByCityHandler(model.state.city);
        spinnerView.hideSpinner();
      } catch (err) {
        spinnerView.hideSpinner();
        errorView.render(err.message);
        errorView.showError();
        overlayView.appearOverlay();
      }
    },
    (err) => {
      spinnerView.hideSpinner();
      errorView.render("Cannot get you, Trun on your Location !");
      errorView.showError();
      overlayView.appearOverlay();
    }
  );
  overlayView.showOverlay(showOverlayHandler);
  overlayView.hideOverlay(hideOverlayHandler);
  searchFormView.submitForm(getWeatherByCityHandler);
  searchBtnView.showBtn();
}

init();
