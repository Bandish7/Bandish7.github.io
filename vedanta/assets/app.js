function toggle(event) {
    const targetButton = event.target;
    const ansElementStyle = targetButton.parentElement.parentElement.querySelector('.faqans');
    ansElementStyle.classList.toggle('show')
    //     if(ansElementStyle.display !== 'none') {
    //         ansElementStyle.display = 'none';
    //     }
    //     else {
    //         ansElementStyle.display = 'block';
    //     } 
}
const faqButtons = document.querySelectorAll('.faq button');
faqButtons.forEach(button => {
    button.addEventListener('click', toggle);
})

// Mobile Menu Bar
document.getElementById("hamburger").onclick = function(){
    document.getElementById("mobilenavmenu").style.display = "block";
    document.getElementById("closebtn").style.display = "block";
    document.getElementById("hamburger").style.display = "none";
}
document.getElementById("closebtn").onclick = function(){
    document.getElementById("mobilenavmenu").style.display = "none";
    document.getElementById("closebtn").style.display = "none";
    document.getElementById("hamburger").style.display = "block";
}