import { API_KEY, API_URL, API_URL_GEOCODING, API_KEY_GEOCODING } from '../js/config.js';
import { getJSON } from '../js/helpers.js';

export const state = {
  current: {},
  future: {},
  location: {},
};

export const getWeatherBycity = async function (city) {
  const url = `${API_URL}?key=${API_KEY}&q=${city}&days=7&aqi=no&alerts=no`;
  try {
    const data = await getJSON(url, 'City Not Found');

    // console.log(data);

    const {
      is_day,
      temp_c,
      condition: { text },
    } = data.current;

    state.current = {
      is_day,
      condition: text.toLowerCase(),
      temp: Number(temp_c),
    };

    state.future = data.forecast.forecastday.map((day) => {
      return {
        temp: Number(day.day.avgtemp_c),
        condition: day.day.condition.text.toLowerCase(),
        date: new Date(day.date),
        is_day,
      };
    }).slice(1);

    const { localtime, name, country } = data.location;

    state.location = {
      datetime: new Date(localtime),
      name,
      country,
    };

    //
  } catch (err) {
    throw err;
  }
};

export const getCityByCoords = async function(lng, lat) {
  try{
    const url = `${API_URL_GEOCODING}?lat=${lat}&lon=${lng}&apiKey=${API_KEY_GEOCODING}`;
    const data = await getJSON(url, 'Cannot Get You');
    const { features } = data;
    const [locationData] = features;
    state.city = locationData.properties.city;
  }catch(err){
    throw err;
  }

}
