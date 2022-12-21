const   themeContainer = document.querySelector('.theme_container'),
        themeSlides = themeContainer.querySelectorAll('.theme_slide'),
        themeSlideCount = themeSlides.length,
        themeSlideBtns = document.querySelectorAll('.theme_controls a');
 let themeCurrentIdx = 0;

function themeMoveSlide(themeNum){
    themeContainer.style.transform = `translateX(${-themeNum*990}px)`;
    themeCurrentIdx = themeNum;
}
//이전 다음 버튼 기능
for(btn of themeSlideBtns){
    btn.addEventListener('click',(e)=>{
        e.preventDefault();
        if(e.target.classList.contains('theme_prev')){
            themeMoveSlide((themeSlideCount+themeCurrentIdx-1)%themeSlideCount); 

        }else{
            themeMoveSlide((themeCurrentIdx+1)%themeSlideCount);

        }
    });
}
//----------------------------------------------
// let branchSubmit = document.querySelector('#branch_submit');
// let SelectOption = document.querySelector('#branch');
// let branchExpand = document.querySelector('.branch_expand');
// let targeturl;

// SelectOption.addEventListener('change', (e)=>{
//     targeturl = e.target.value;
// });
// branchSubmit.addEventListener('click',(e)=>{
//     e.preventDefault();
//     window.open(targeturl);
// });

// //----------------------------------------------
// SelectOption.addEventListener('click', ()=>{
//     branchExpand.classList.toggle('active');
// });
// SelectOption.addEventListener('focusout', ()=>{
//     branchExpand.classList.remove('active');
// });




