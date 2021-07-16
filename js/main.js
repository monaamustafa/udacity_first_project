let navbar = document.querySelector('ul');
let listItem = document.querySelectorAll('nav ul li');
let sectionItems = document.querySelectorAll('.mainSection');
// dynamic padding top each section 
window.addEventListener('load', function () {
    for (let k = 0; k < sectionItems.length; k++) {
        sectionItems[k].style.paddingTop = navbar.clientHeight + "px";
    }
})
// dynamic scroll
for (let i = 0; i < sectionItems.length; i++) {
    listItem[i].addEventListener('click', () => {
        sectionItems[i].scrollIntoView({
            behavior: 'smooth'
        });
        // remove active class 
        for (let j = 0; j < listItem.length; j++) {
            listItem[j].classList.remove('active');
        }
        // add active class to 
        listItem[i].classList.add('active');

        console.log(listItem[i]);

    });
}
//Scroll-top
let bodyScroll = document.querySelector('html, body');
let iconScroll = document.querySelector('.scroll-top');
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