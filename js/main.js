let navbar = document.querySelector('ul');

const sections = Array.from(document.getElementsByTagName("section"));
const bodyScroll = document.querySelector('html, body');
let iconScroll = document.querySelector('.scroll-top');
// dynamic scroll
let count=0;
for(section of sections){
    const listItem = document.createElement('li');
    count++;
    listItem.innerHTML="Item"+count;
    navbar.appendChild(listItem);
}


const navItems =Array.from(document.getElementsByTagName('li'));
for (let i = 0; i < sections.length; i++) {
    navItems[i].addEventListener('click', () => {
        sections[i].scrollIntoView({
            behavior: 'smooth'
        });
        // remove active class 
        for (let j = 0; j < sections.length; j++) {
            navItems[j].classList.remove('active');
        }
        // add active class to 
        navItems[i].classList.add('active');
        // console.log(listItem[i]);
    });
}
//Scroll-top
window.addEventListener('scroll', function () {
    if (bodyScroll.scrollTop >= 60) {
        iconScroll.style.display = 'block';
    } else {
        iconScroll.style.display = 'none';
    }
});
iconScroll.addEventListener('click', function () {
    // window.scrollTo(0, 0);
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

});