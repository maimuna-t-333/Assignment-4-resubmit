function cashOut(money) {

    if (typeof money !== 'number') {
        return 'Invalid'
    }
    else if (money < 0) {
        return 'Invalid'
    }
    else {
        let charge = money * (1.75 / 100);
        return charge;
    }
}

// const money = "mewauu";

// console.log(cashOut(money));







