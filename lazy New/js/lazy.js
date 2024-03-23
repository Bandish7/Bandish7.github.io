document.getElementById("showGar").onclick = function () {
    document.getElementById('mobMenu').style.display = 'block';
    document.getElementById("showGar").style.display = 'none' 
    document.getElementById("hideGar").style.display = 'block';
    
}

document.getElementById("hideGar").onclick = function () {
    document.getElementById('mobMenu').style.display = 'none';
    document.getElementById("showGar").style.display = 'block' 
    document.getElementById("hideGar").style.display = 'none';
    
}