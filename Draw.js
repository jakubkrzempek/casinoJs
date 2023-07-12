class Draw {
    constructor() {
        this.options = ["red", "green", "blue"];
        let _result = this.drawResult();


        this.getDrawResult = () => {

            return _result;
        }

    }
    drawResult = () => {
        let colors = [];
        colors[0] = this.options[Math.floor(Math.random() * 3)];
        colors[1] = this.options[Math.floor(Math.random() * 3)];
        colors[2] = this.options[Math.floor(Math.random() * 3)];
        return colors;
    }

}
