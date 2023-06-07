let allGames = document.getElementsByClassName ("productSchema__product");

let filters = document.getElementsByClassName("filter");

setTimeout(function() {
    window.scrollTo(0,0);
  }, 100);
  
  

//soulslike filter

for(let i = 0; i< filters.length; i++){
    filters[i].checked = true;
}

let soulslikeFilter = document.getElementById("checkbox-bmw");
soulslikeFilter.onchange = function(){
    if(soulslikeFilter.checked === true){
        for (let i = 0; i < allGames.length; i++) {
            if(allGames[i].dataset.category === "bmw"){
                allGames[i].style.display = "block";
            }
        }
    }
    else{
        for (let i = 0; i < allGames.length; i++) {
            if(allGames[i].dataset.category === "bmw"){
                allGames[i].style.display = "none";
            }
        }
    }
}

let rpgFilter = document.getElementById("checkbox-yamaha");
rpgFilter.onchange = function(){
    if(rpgFilter.checked === true){
        for (let i = 0; i < allGames.length; i++) {
            if(allGames[i].dataset.category === "yamaha"){
                allGames[i].style.display = "block";
            }
        }
    }
    else{
        for (let i = 0; i < allGames.length; i++) {
            if(allGames[i].dataset.category === "yamaha"){
                allGames[i].style.display = "none";
            }
        }
    }
}

let actionFilter = document.getElementById("checkbox-kawasaki");
actionFilter.onchange = function(){
    if(actionFilter.checked === true){
        for (let i = 0; i < allGames.length; i++) {
            if(allGames[i].dataset.category === "kawasaki"){
                allGames[i].style.display = "block";
            }
        }
    }
    else{
        for (let i = 0; i < allGames.length; i++) {
            if(allGames[i].dataset.category === "kawasaki"){
                allGames[i].style.display = "none";
            }
        }
    }
}

let hondaFilter = document.getElementById("checkbox-honda");
hondaFilter.onchange = function(){
    if(hondaFilter.checked === true){
        for (let i = 0; i < allGames.length; i++) {
            if(allGames[i].dataset.category === "honda"){
                allGames[i].style.display = "block";
            }
        }
    }
    else{
        for (let i = 0; i < allGames.length; i++) {
            if(allGames[i].dataset.category === "honda"){
                allGames[i].style.display = "none";
            }
        }
    }
}



setInterval(function(){
    document.getElementsByTagName("body")[0].style.overflow = "auto";
}, 1500);