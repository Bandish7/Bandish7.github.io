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

/*
    // Get all elements with class "globalBtn"
    var buttons = document.getElementsByClassName("globalBtn");

    // Iterate over each button and attach the event listener
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function() {
            // Open link in new tab
            window.open("https://lazybarbers.scheduloo.com/mfnlmkyuakha", "_blank");
        };
    } */

// Get all elements with the class "link-btn"
const buttons = document.querySelectorAll('.scheduloo');

// Function to handle button click
function openLinkInNewTab() {
    // Get the URL you want to open
    const url = 'https://lazybarbers.scheduloo.com/mfnlmkyuakha'; // Change this URL to the desired one

    // Open the URL in a new tab
    window.open(url, '_blank');
}

// Add click event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', openLinkInNewTab);
});