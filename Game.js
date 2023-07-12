// link do gry: https://websamuraj.pl/examples/js/gra/

class Game {
    constructor() {
        this.wallet = new Wallet(200);
        this.statstics = new Statistics();

        this.divColors = document.querySelectorAll(".game .color");
        this.inputBid = document.querySelector("#bid");
        // this.btnStart = document.querySelector("#start");
        document.querySelector("#start").addEventListener('click', this.startGame.bind(this));
        this.spanWallet = document.querySelector(".panel .wallet");
        this.spanResult = document.querySelector(".score .result");
        this.scoreGame = document.querySelector(".score .number");
        this.scoreWin = document.querySelector(".score .win");
        this.scoreLoss = document.querySelector(".score .loss");
        this.render();





    }

    render(colors = ["grey", "grey", "grey"], money = this.wallet.getWalletValue(), result = "", stats = [0, 0, 0], winMoney = "") {
        this.divColors[0].style.backgroundColor = colors[0];
        this.divColors[1].style.backgroundColor = colors[1];
        this.divColors[2].style.backgroundColor = colors[2];

        this.spanWallet.textContent = money;
        if (result !== "") {
            this.spanResult.textContent = result ? "wygrałeś! " : "przegrałeś! ";
        }
        this.scoreGame.textContent = stats[0];
        this.scoreWin.textContent = stats[1];
        this.scoreLoss.textContent = stats[2];

    }

    startGame() {
        let bid = Math.floor(this.inputBid.value);
        if (this.wallet.checkCanPlay(bid)) {

            let draw = new Draw();
            let colors = draw.drawResult();


            this.wallet.changeWalletValue(bid, '-');
            console.log(this.wallet.getWalletValue());
            let result = Result.checkWin(colors);
            console.log(result);
            let winMoney = Math.floor(Result.moneyWinInGame(colors, bid));
            console.log(winMoney);
            this.wallet.changeWalletValue(winMoney);
            this.statstics.addGameToStats(result, bid);
            let stats = this.statstics.showGameStats();
            console.log(stats);
            this.render(colors, this.wallet.getWalletValue(), result, stats, winMoney);
        } else alert("niepoprawna kwota zakładu lub masz za mało pieniedzy!")

    }



}