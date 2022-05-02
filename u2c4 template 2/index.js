// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit",mathcSubmit);
var matchArr = JSON.parse(localStorage.getItem("schedule")) || [];

function mathcSubmit(){
    event.preventDefault();

    var mathcObj = {
        matchNum:masaiForm.matchNum.value,
        teama:masaiForm.teamA.value,
        teamb:masaiForm.teamB.value,
        matchDate:masaiForm.date.value,
        matchVenue:masaiForm.venue.value,
    };
    matchArr.push(mathcObj);
    console.log(mathcObj);
    localStorage.setItem("schedule",JSON.stringify(matchArr)); 
}
