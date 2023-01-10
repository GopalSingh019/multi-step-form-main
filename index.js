

document.addEventListener("DOMContentLoaded", function(){
    document.getElementsByClassName('section')[0].style.display='flex';
    document.getElementsByClassName('section__backbtn')[0].style.display='none';

    document.getElementsByClassName('sidebar__stepnumber')[0].classList.add('sidebar__stepnumberActive');
    let inputsElm=document.getElementsByTagName('input');
    for(i=0;i<inputsElm.length;i++){
        inputsElm[i].addEventListener('onchange',oninputChanged);
    }
});

function oninputChanged(oEvent){
    console.log(oEvent);
}