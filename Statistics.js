class Statistics {
    constructor() {
        this.gameStats = [];

    }
    addGameToStats = (isWin, bid) => {
        this.gameStats.push({ win: isWin, bid: bid })
    }

    showGameStats = () => {
        let winGame = 0;
        this.gameStats.forEach((game) => {

            if (game.win === true) winGame++;
        })
        return [this.gameStats.length, winGame, this.gameStats.length - winGame];
    }
}