class Wallet {
    constructor(money) {
        let _money = money;

        this.getWalletValue = () => _money;

        this.changeWalletValue = function (money, operation = "+") {
            if (typeof (money) === "number" && !isNaN(money)) {
                if (operation === "+") {
                    _money += money;
                }

                else if (operation === "-") {
                    _money -= money;
                }
            }
        }

        this.checkCanPlay = function (bid) {
            if (bid > _money || bid < 1) {
                return false;
            } else return true;
        }
    }


}