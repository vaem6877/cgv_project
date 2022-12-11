/*--------------- 변수 선언과 할당 ---------------*/
let chart = document.querySelector('.chart_header .chart');
let chartShowing = document.querySelector('.chart_header .showing');

let chartPoster = document.querySelector(".chart_poster");
let chartPosterSlide = document.querySelectorAll(".chart_poster li");

let btnPrev = document.querySelector('.btn_nav_left');
let btnNext = document.querySelector('.btn_nav_right');

let chartForm = document.querySelector('.chart_form')
let formUnder = document.querySelector('.chart_form input');
let formBtn = document.querySelector('.chart_form i');

let currentIdx = 0;
let length = chartPosterSlide.length - 31; /* 슬라이드 넘기는 개수에 따라 빼주는 숫자 조절하기 */
let lengthShow = chartPosterSlide.length - 20;

/*--------------- MOVIE CHART form ---------------*/
chartForm.addEventListener('focusin', (e) => {
    e.preventDefault();
    formBtn.style.color = "red";
    formUnder.classList.add("input_active");

})
chartForm.addEventListener('focusout', (e) => {
    e.preventDefault();
    formBtn.style.color = "#666666";
    formUnder.classList.remove("input_active");
})

/*--------------- CHART SECTION image slide ---------------*/
chartPosterSlide.forEach((item, idx) => {
    item.style.left = idx * 294 + "px";  // 5880 부터
})

function imageSlide (slideIdx) {
    chartPoster.style.left = (slideIdx * -588) + "px"; /* 1장-294, 2장-588*/
    currentIdx = slideIdx;

    console.log(currentIdx);
    /* 버튼 사라짐 */

    if(currentIdx == 10) {
        btnPrev.style.display = "none";
    } else if(currentIdx > 0) {
        btnPrev.style.display = "inline-block";
    } else {
        btnPrev.style.display = "none";
    }
}

btnNext.addEventListener('click', (e) => {
    e.preventDefault();

    chartPoster.style.transition = "left 0.3s ease-in-out";

    console.log(currentIdx);

    if(currentIdx < 10) {
        nextIdx = (currentIdx + 1) % length;
        imageSlide(nextIdx);
    } else {
        console.log(currentIdx);

        if((currentIdx + 1) % lengthShow == 0) {
            nextIdx = 10;
            imageSlide(nextIdx);
        } else {
            nextIdx = (currentIdx + 1) % lengthShow;
            imageSlide(nextIdx);
        }
    }
})

btnPrev.addEventListener('click', (e) => {
    e.preventDefault();
    
    chartPoster.style.transition = "left 0.3s ease-in-out";

    nextIdx = (currentIdx - 1) % chartPosterSlide.length;
    imageSlide(nextIdx);
    // currentIdx = slideIdx;
})

/* 무비차트 클릭시 */
chart.addEventListener('click', (e) => {
    chartPoster.style.transition = "none";
    chartPoster.style.left = 0 * 294 + "px";
    btnPrev.style.display = "none";
    currentIdx = 0;
})

/* 상영예정작 클릭시 */
chartShowing.addEventListener("click", (e) => {
    chartPoster.style.transition = "none";
    chartPoster.style.left = 20 * -294 + "px";
    btnPrev.style.display = "none";
    currentIdx = 10;
})


// 더블 클릭시 슬라이드 마지막으로 이동(우측으로 이동 빨리 이동하기 위해 누를 경우 마지막 페이지로 이동할 수 있음 별로 인듯)
/* btnNext.addEventListener('dblclick', (e) => {
    e.preventDefault();
    imageSlide(8);
}) */