// write js code here corresponding to matches.html

var matchArr = JSON.parse(localStorage.getItem("schedule"));
displayData(matchArr);

var favotitArr = JSON.parse(localStorage.getItem("favourites")) || [];

function handleFilter(){
    var selected = document.getElementById("filterVenue").value;
    // console.log(selected);
    var filterValue = matchArr;
    var filterList = matchArr.filter(function(elem){
        return elem.matchVenue == selected;
    });
    displayData(filterList);
}


function displayData(data){
    document.querySelector("tbody").innerText = "";
    data.forEach(function(elem){
        var tr = document.createElement("tr");

        var td1 = document.createElement("td");
        td1.innerText = elem.matchNum;

        var td2 = document.createElement("td");
        td2.innerText = elem.teama;

        var td3 = document.createElement("td");
        td3.innerText = elem.teamb;

        var td4 = document.createElement("td");
        td4.innerText = elem.matchDate;

        var td5 = document.createElement("td");
        td5.innerText = elem.matchVenue;

        var td6 = document.createElement("td");
        td6.innerText = "Add as Favourites";
        td6.style.color = "green";
        td6.style.cursor = "pointer";
        td6.addEventListener("click",function(){
            favotiteFun(elem);
        });
        tr.append(td1,td2,td3,td4,td5,td6);
        document.querySelector("tbody").append(tr);
    })
}
function favotiteFun(elem){
    favotitArr.push(elem);
    console.log(favotitArr);
    localStorage.setItem("favourites",JSON.stringify(favotitArr));
}
    