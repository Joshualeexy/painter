let bars = document.getElementById("bars");
let navinks = document.getElementById("nav-links");

function togglenav() {
document.getElementById('nav-links').style.display='flex'

}
bars.addEventListener('click',togglenav);

function togglenavc() {
document.getElementById('nav-links').style.display='none'

}
bars.addEventListener('dblclick',togglenavc);