const links=document.querySelector('.links');
const burger=document.querySelector('.burger');
const dropDownLink=document.querySelectorAll('.mainlink');
const innerLinks=document.querySelectorAll('.inner_links')


// dropDownLink.forEach(function(link,index){
//  link.addEventListener('click',showItems)
// })



burger.addEventListener('click',slideNav);

function slideNav(e){
links.classList.toggle('open-nav')
burger.classList.toggle('toggle')
links.style.animation=`fade`
}

