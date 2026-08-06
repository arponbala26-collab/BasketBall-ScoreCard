let homeScore=0;
let guestscore=0;

let homepointEl=document.getElementById("home-point");
let guestpointEl=document.getElementById("Guest-point");

function addscore(team,points){
if(team ==='home'){
   homeScore = homeScore+points;
   homepointEl.textContent=homeScore;
}
else if (team ==='guest') {
    guestscore =  guestscore+points;
    guestpointEl.textContent=guestscore;
}
}