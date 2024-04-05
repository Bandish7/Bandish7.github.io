document.getElementById("show").onclick = function(){
    document.getElementById("mobnav").style.display="block";
    document.getElementById("show").style.display="none";
    document.getElementById("hide").style.display="block";
}
document.getElementById("hide").onclick = function(){
    document.getElementById("mobnav").style.display="none";
    document.getElementById("hide").style.display="none";
    document.getElementById("show").style.display="block";
}