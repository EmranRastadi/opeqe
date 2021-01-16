$(document).ready(function() {
    $('.sidenav').sidenav();
    $('.timer').startTimer();
    $('.timer').startTimer({
        classNames: {
            hours: 'myClass-hours',
            minutes: 'myClass-minutes',
            seconds: 'myClass-seconds',
            clearDiv: 'myClass-clearDiv',
            timeout: 'myClass-timeout'
        }
    });


    $('.flickity-viewport').flickity({
        // options
        cellAlign: 'left',
        autoPlay : true,
        draggable: false,
        contain: true
    });


    $('.sidenav').sidenav();


});

const header = document.querySelector(".scroll_nav");
const top_page = document.querySelector(".top_page");
const sectionOneOption = {
    rootMargin : "-50px 0px 0px 0px"
};
console.log(header);
const sectionOneObserver = new IntersectionObserver(function(entrise , sectionObserver){
entrise.forEach(entry =>  {
    if (!entry.isIntersecting) {
        header.classList.add("headers");
    }else{
        header.classList.remove("headers");
    }
    // console.log(entry);
})
},sectionOneOption);
sectionOneObserver.observe(top_page);