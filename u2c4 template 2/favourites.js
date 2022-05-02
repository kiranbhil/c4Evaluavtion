// write js code here corresponding to favourites.html

var favotitArr = JSON.parse(localStorage.getItem("favourites"));
displayData(favotitArr);

function displayData(data){
    data.forEach(function(elem,index){
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
        td6.innerText = "Delete";
        td6.style.color = "red";
        td6.style.cursor = "pointer";
        td6.addEventListener("click",function(){
            deteteFun(elem,index);
        });
        tr.append(td1,td2,td3,td4,td5,td6);
        document.querySelector("tbody").append(tr);
    })
}
function deteteFun(elem, index){
    console.log("delete fun call")
    favotitArr.splice(index,1);
    // console.log(favotitArr);
    localStorage.setItem("favourites",JSON.stringify(favotitArr));
    window.location.reload();
}
    