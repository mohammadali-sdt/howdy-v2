class BgHandlerView {
    _parentElement;
    _colors;
    changeBgWithCondition(condition, is_day){
        if (condition.includes('rain') || condition.includes('drizzle') || condition.includes('sleet') || condition.includes('thundery')) {
            if (is_day) {
                this._parentElement.style.backgroundColor = this._colors.rainDay;
                return;
            }
             this._parentElement.style.backgroundColor =  this._colors.rainNight;
        } else if (condition.includes('clear') || condition.includes('sunny')) {
            if (is_day) {
                this._parentElement.style.backgroundColor = this._colors.clearDay;
                return;
            }
            this._parentElement.style.backgroundColor = this._colors.clearNight;
        } else if (condition.includes('cloudy') || condition.includes('overcast')) {
            if (is_day) {
                this._parentElement.style.backgroundColor = this._colors.cloudyDay;
                return;
            }
            this._parentElement.style.backgroundColor = this._colors.cloudyNight;
        } else if (condition.includes('mist') || condition.includes('fog')) {
            if (is_day) {
                this._parentElement.style.backgroundColor = this._colors.mistDay;
                return;
            }
            this._parentElement.style.backgroundColor = this._colors.mistNight;
        } else if (condition.includes('snow') || condition.includes('ice') || condition.includes('blizzard')) {
            if (is_day) {
                this._parentElement.style.backgroundColor = this._colors.snowDay;
                return;
            }
            this._parentElement.style.backgroundColor = this._colors.snowNight;
        }
    }
}

export default BgHandlerView;