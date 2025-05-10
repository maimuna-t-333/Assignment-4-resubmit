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

// console.log(electionResult(["mango", "BananA", "na vote", "na vote"]))

