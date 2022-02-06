var chocolate = document.getElementById("choc");
var strawbery = document.getElementById("straw");
var butter = document.getElementById("butt");
var vanilla = document.getElementById("vani");
var rev = document.getElementById("redv");
var buy = document.getElementById("buy");

var count = 1;



chocolate.addEventListener("click", ()=> {
    let countLayer = "layer"+count;
    let a = document.getElementById(countLayer);
    a.style.visibility = "visible";
    a.style.background = "brown";
    count++;

})

strawbery.addEventListener("click", function () {
    let countLayer = "layer"+count;
    let a = document.getElementById(countLayer);
    a.style.visibility = "visible";
    a.style.background = "#fc5a8d";
    count++;
})
butter.addEventListener("click", function () {
    let countLayer = "layer"+count;
    let a = document.getElementById(countLayer);
    a.style.visibility = "visible";
    a.style.background = "#FF5733";
    count++;
})
vanilla.addEventListener("click", function () {
    let countLayer = "layer"+count;
    let a = document.getElementById(countLayer);
    a.style.visibility = "visible";
    a.style.background = "#F3E5AB";
    count++;
})
rev.addEventListener("click", function () {
    let countLayer = "layer"+count;
    let a = document.getElementById(countLayer);
    a.style.visibility = "visible";
    a.style.background = "#7F2A3C";
    count++;
})