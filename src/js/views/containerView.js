import BgHandlerView from "./bgHandlerView.js";

class ContainerView extends BgHandlerView{
    _parentElement = document.querySelector('.container');
    _colors = {
        rainDay:'#9bf6ff',
        rainNight:'#67c8eb',
        clearDay:"#caffbf",
        clearNight:'#bdb2ff',
        cloudyDay:'#a0c4ff',
        cloudyNight:'#7ba2e3',
        mistDay:'#CAF6E6ff',
        mistNight:'#A5C8C4ff',
        snowDay:'#a8def1',
        snowNight:'#a0c4ff'
    }

    constructor() {
        super();
    }

}

export default new ContainerView();