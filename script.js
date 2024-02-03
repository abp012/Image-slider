let flag=0;
slideshow(flag);
function controller(x) {
    flag=flag+x;
    slideshow(flag);
}
function slideshow(num) {
    let slides=document.getElementsByClassName('slide');
    //console.log(slides);
    if(num == slides.length) {
        num=0;
        flag=0;
    }
    if(num==-1) {
        num=slides.length-1;
        flag=slides.length-1;
    }
    for(let y of slides) {
        y.style.display= "none";
    }

    slides[num].style.display = "block";
}