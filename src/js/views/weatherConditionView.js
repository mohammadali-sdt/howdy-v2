import View from "./view.js";

class WeatherConditionView extends View {
    _icons;

    setIconByCondition(condition, is_day) {
        if (condition.includes('rain') || condition.includes('drizzle') || condition.includes('sleet')) {
            if (is_day) {
                return this._icons.rainDay;
            }
            return this._icons.rainNight;
        } else if (condition.includes('clear') || condition.includes('sunny')) {
            if (is_day) {
                return this._icons.clearDay;
            }
            return this._icons.clearNight;
        } else if (condition.includes('cloudy') || condition.includes('overcast')) {
            if (is_day) {
                return this._icons.cloudyDay;
            }
            return this._icons.cloudyNight;
        } else if (condition.includes('mist') || condition.includes('fog')) {
            if (is_day) {
                return this._icons.mistDay;
            }
            return this._icons.mistNight;
        } else if (condition.includes('snow') || condition.includes('ice') || condition.includes('blizzard')) {
            if (is_day) {
                return this._icons.snowDay;
            }
            return this._icons.snowNight;
        } else if (condition.includes('thundary')) {
            if (this._icons.lightingDay) {
                return this._icons.lightingDay;
            }
            if (is_day) {
                return this._icons.rainDay;
            }
            return this._icons.rainNight;

        }
    }


}

export default WeatherConditionView;