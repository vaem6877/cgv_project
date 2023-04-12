/*--------------- 변수 선언과 할당 ---------------*/
let chart = document.querySelector('.chart_header .chart'),
    chartShowing = document.querySelector('.chart_header .showing'),
    chartPoster = document.querySelector(".chart_poster"),
    chartPosterSlide = document.querySelectorAll(".chart_poster li");

let btnPrev = document.querySelector('.btn_nav_left'),
    btnNext = document.querySelector('.btn_nav_right'),
    chartArrow = document.querySelector('.chart_arrow');

let chartForm = document.querySelector('.chart_form'),
    formUnder = document.querySelector('.chart_form input'),
    formBtn = document.querySelector('.chart_form i');

let currentIdxMovie = 0,
    length = chartPosterSlide.length - 31, /* 슬라이드 넘기는 개수에 따라 빼주는 숫자 조절하기 */
    lengthShow = chartPosterSlide.length - 21;

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

/* imageSlide 함수 */
function imageSlide (slideIdx) {
    chartPoster.style.left = (slideIdx * -588) + "px"; /* 1장-294, 2장-588*/
    currentIdxMovie = slideIdx;

    console.log(currentIdxMovie);
}

/* btnNext */
btnNext.addEventListener('click', (e) => {
    e.preventDefault();

    chartPoster.style.transition = "left 0.3s ease-in-out";

    console.log(currentIdxMovie);

    if(currentIdxMovie < 10) {
        nextIdx = (currentIdxMovie + 1) % length;
        imageSlide(nextIdx);
    } else {
        console.log(currentIdxMovie);

        if((currentIdxMovie + 1) % lengthShow == 0) {
            nextIdx = 10;
            imageSlide(nextIdx);
        } else {
            nextIdx = (currentIdxMovie + 1) % lengthShow;
            imageSlide(nextIdx);
        }
    }
})

/* btnPrev */
btnPrev.addEventListener('click', (e) => {
    e.preventDefault();
    
    chartPoster.style.transition = "left 0.3s ease-in-out";

    if(currentIdxMovie == 0) {
        nextIdx = 8;
        // chartPoster.style.transition = "none";
        imageSlide(nextIdx);
    } else if (currentIdxMovie == 10) {
        nextIdx = 18;
        // chartPoster.style.transition = "none";
        imageSlide(nextIdx);
    } else {
        nextIdx = (currentIdxMovie - 1) % chartPosterSlide.length;
        imageSlide(nextIdx);
        // currentIdxMovie = slideIdx;
    }

})

/* 무비차트 클릭시 */
chart.addEventListener('click', (e) => {
    chartPoster.style.transition = "none";
    chartPoster.style.left = 0 * 294 + "px";
    // btnPrev.style.display = "none";
    currentIdxMovie = 0;

    chart.style.fontWeight = "bold";
    chartShowing.style.fontWeight = "400";
    chartShowing.style.color = "#666666";
    chart.style.color = "#222222";
})

/* 상영예정작 클릭시 */
chartShowing.addEventListener("click", (e) => {
    chartPoster.style.transition = "none";
    chartPoster.style.left = 20 * -294 + "px";
    // btnPrev.style.display = "none";
    currentIdxMovie = 10;

    chart.style.fontWeight = "400";
    chartShowing.style.fontWeight = "bold";
    chart.style.color = "#666666";
    chartShowing.style.color = "#222222";
})

/* 화살표 클릭시 */
/* let videoOffset = document.querySelector(".chart_bottom_line");

let videoOffsetAMT = videoOffset.offsetTop;
 */
let videoOffset = document.querySelector(".video");

let videoOffsetAMT = videoOffset.offsetTop;

console.log(videoOffsetAMT);


chartArrow.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({top: videoOffsetAMT, behavior: 'smooth'});
    console.log(videoOffsetAMT);
})

let posterDetail = chartPoster.querySelectorAll('.poster_btn'),
    overlay = document.querySelector('#overlay'),
    overlayImg = document.querySelector('#overlay img');

posterDetail.forEach((item, idx) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        console.log('출력');

        imgSrc = e.target.getAttribute('data-lightbox');
        detailAddress = e.target.getAttribute('data-link');

        overlayImg.setAttribute('src', imgSrc);

        overlay.classList.add('overlay_visible');

        /* setTimeout(() => {
            location.href = detailAddress;
        }, 800); */
    })
})
