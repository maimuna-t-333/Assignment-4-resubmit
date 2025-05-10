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


function validEmail(email) {

    if (typeof email !== 'string') {
        return 'Invalid'
    }

    const firstChar = email[0];
    if (".-_+@".includes(firstChar)) {
        return false;
    }

    if (email.includes(" ")) {
        return false;
    }
    const atCount = email.split("@").length - 1;
    if (atCount !== 1) {
        return false;
    }
    if (!email.endsWith('.com')) {
        return false;
    }
    return true
}


function electionResult(votes) {

    if (!Array.isArray(votes)) {
        return "Invalid";
    }

    let mango = 0;
    let banana = 0;

    for (const vote of votes) {
        if (vote === "mango") {
            mango++;
        } else if (vote === "banana") {
            banana++;
        }
    }

    if (mango > banana) {
        return "Mango";
    } else if (banana > mango) {
        return "Banana";
    } else {
        return "Draw";
    }
}

function isBestFriend(f1, f2) {

    if (typeof f1 !== 'object' || typeof f2 !== 'object') {
        return "Invalid";
    }
    if (f1.roll === f2.bestFriend && f2.roll === f1.bestFriend) {
        return true;
    }
    else {
        return false;
    }

}


function calculateWatchTime(times) {

    if (!Array.isArray(times)) {
        return "Invalid";
    }

    for (let time of times) {
        if (typeof time !== "number") {
            return "Invalid";
        }
    }

    let totalSeconds = 0;

    for (let i = 0; i < times.length; i++) {

        totalSeconds = totalSeconds + times[i];

    }

    let hour = Math.floor(totalSeconds / 3600);

    let minute = Math.floor((totalSeconds % 3600) / 60);

    let second = totalSeconds % 60;


    return { hour, minute, second };

}