
window.onscroll=()=>{
    let top=window.scrollY;

    let about=document.querySelector('#about');
    let description=document.querySelector('.about-description');
    let aboutImg=document.querySelector('#about img');
    
    if(top>=about.offsetTop-200){
        description.classList.add('visible');
        aboutImg.classList.add('visible');
    }

    let features=document.querySelector('#features');
    let featCtr=document.querySelector('.features');

    if(top>=features.offsetTop-200){
       featCtr.classList.add('visible')
    }

    let faq=document.querySelector('#faq');
    let questions=document.querySelector('.questions');

    if(top>=faq.offsetTop){
        questions.classList.add('visible');
    }

}







