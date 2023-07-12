class Result {
    static checkWin(colors) {
        if (colors[0] === colors[1] && colors[1] === colors[2]) {
            return true;
        } else if (colors[0] !== colors[1] && colors[0] !== colors[2] && colors[1] !== colors[2]) {
            return true;
        }
        else return false;
    }
    static moneyWinInGame(colors, bid) {
        if (Result.checkWin(colors) === true) {
            return bid * 3;
        } else {
            return 0;
        }
    }
}
