var randomNumber1 = Math.floor((Math.random()*6)+1);
var randomNumber2 = Math.floor((Math.random()*6)+1);

var dice1 = "dice"+randomNumber1+".png"
var dice2 = "dice"+randomNumber2+".png"

document.querySelector("img.leslieImg").setAttribute("src", dice1);
document.querySelector("img.evaImg").setAttribute("src", dice2);

if(randomNumber1>randomNumber2){
    document.getElementsByTagName("h1")[0].innerHTML="Eva Won!!!";
}
if(randomNumber1<randomNumber2){
    document.getElementsByTagName("h1")[0].innerHTML="Leslie Won!!!";
}
if(randomNumber1===randomNumber2){
    document.getElementsByTagName("h1")[0].innerHTML="Play Again";
}
