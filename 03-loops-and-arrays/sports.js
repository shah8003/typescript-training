var sportsOne = ["Golf", "Cricket", "Tennis", "Football"];
/*
for (let i=0; i<sportsOne.length; i++) {
    console.log(sportsOne[i]);
}
*/
// lets use the simplified for loop
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var tempSport = sportsOne_1[_i];
    if (tempSport == "Tennis") {
        console.log(tempSport + "<< My Favourite!");
    }
    else {
        console.log(tempSport);
    }
}
