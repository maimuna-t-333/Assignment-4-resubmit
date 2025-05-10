function isBestFriend( f1 , f2 ) {

if (typeof f1 !== 'object' || typeof f2 !== 'object') {
        return "Invalid";
    }
if(f1.roll === f2.bestFriend && f2.roll === f1.bestFriend){
    return true;
}
else{
    return false;
}

}

let f1={ name: "hashem", roll: 1 , bestFriend: 1}

let f2={ name: "kashem" , roll: 1, bestFriend: 1 }


// console.log(isBestFriend(f1,f2));