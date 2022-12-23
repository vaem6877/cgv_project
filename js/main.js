/*--------------- S popup---------------*/
let popupModal = document.querySelector('dialog'),
    popupClose = popupModal.querySelector('.popup_close'),
    dayCheck = document.querySelector('#daycheck');

    function setCookie(name,value,day){
        let date = new Date();
        date.setDate(date.getDate()+day);
        document.cookie = `${name}=${value};expires=${date.toUTCString()}`;
    }

    function checkCookie(name){
        let cookieArr = document.cookie.split(';');

        let visited = false;

        for(let cookie of cookieArr){
            if(cookie.search(name) > -1){
                visited = true;
                break;
            }
        }
        if(visited == false){
            popupModal.setAttribute('open','');
        }
    }

    checkCookie('cgvpf');

    popupClose.addEventListener('click',()=>{
        if(dayCheck.checked){
            setCookie('cgvpf','home',1);
        }else{
            setCookie('cgvpf','home',-1);
        }
        popupModal.removeAttribute('open');
    });

/*--------------- E popup---------------*/


/* --------------- S 손현진 ----------------*/

//서브메뉴 (메인메뉴에 마우스를 올리면 서브메뉴 열리기)
let mainMenu = document.querySelectorAll('.nav_menu li'),
	menu = document.querySelector('.menu'),
	menuHeight = menu.offsetHeight,
	subMenu = document.querySelectorAll('.nav_menu li dl'),
	subMenuHeight = 0;

for(sM of subMenu){
	if(subMenuHeight < sM.offsetHeight){
		subMenuHeight = sM.offsetHeight;
	};
}
console.log(subMenuHeight);

for(mM of mainMenu){
	mM.addEventListener('mouseenter',()=>{
		menu.style.height=menuHeight+subMenuHeight+32+'px';
	});
	mM.addEventListener('mouseleave',()=>{
		menu.style.height=menuHeight+'px';
	})
}

//스크롤 이벤트 (1. 메뉴 상단 고정 및 스타일 변경 2. 예매하기 및 top 버튼 등장 3.페이지 돌아왔을 때 위치에 따라 자동적용)
let nav = document.querySelector('nav');
let main = document.querySelector('main'),
    movieChart = document.querySelector('.movie_chart');
let fixBtn = document.querySelector('#btn_fixed'),
	ticketBtn = document.querySelector('.btn_fixed_ticket'),
	topBtn = document.querySelector('.btn_fixed_top');

let relocateEvt = new Event('scroll');
window.addEventListener('scroll',()=>{
    if(window.pageYOffset > nav.offsetTop){
        nav.classList.add('active');
    }if(window.pageYOffset < main.offsetTop){
        nav.classList.remove('active');
    }
    if(window.pageYOffset > movieChart.offsetHeight){
        fixBtn.classList.add('active');
    }else{
        fixBtn.classList.remove('active');
    }
});

window.dispatchEvent(relocateEvt);

//top버튼 (클릭 시 상단으로 이동)
topBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    scrollTo({
        left:0,
        top:0,
        behavior:'smooth'
    });
});

//header 광고 닫기 (닫기 버튼을 누르면 광고 height 0, 스크롤이벤트 조절)
let clsBtn = document.querySelector('.btn_ad_close i'),
	headAd = document.querySelector('.head_ad')
	headAdPost = document.querySelector('.head_ad_content .ad_poster');

clsBtn.addEventListener('click',(e)=>{
	e.preventDefault();
	headAd.style.height = 0+'px';
	headAdPost.style.height = 0+'px';
});

/* --------------- E 손현진 ----------------*/


/* --------------- S 홍효헌 ----------------*/
let chart = document.querySelector('.chart_header .chart');
let chartShowing = document.querySelector('.chart_header .showing');
let chartPoster = document.querySelector(".chart_poster");
let chartPosterSlide = document.querySelectorAll(".chart_poster li");

let btnPrev = document.querySelector('.btn_nav_left');
let btnNext = document.querySelector('.btn_nav_right');

let currentIdxMovie = 0;
let length = chartPosterSlide.length - 31;
let lengthShow = chartPosterSlide.length - 21;
let slideWidth = 294;
let slideUnit = 2; 

let chartArrow = document.querySelector('.chart_arrow');

let chartForm = document.querySelector('.chart_form')
let formUnder = document.querySelector('.chart_form input');
let formBtn = document.querySelector('.chart_form i');

/* MOVIE CHART form */
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

/* 1. 이미지 전체 나열 */
chartPosterSlide.forEach((item, idx) => {
    item.style.left = idx * slideWidth + "px";
})

/* 2. imageSlide 함수 */
function imageSlide (slideIdx) {
    chartPoster.style.left = (slideIdx * (-slideWidth*slideUnit)) + "px";
    currentIdxMovie = slideIdx;
}

/* 3. 다음 버튼 */
btnNext.addEventListener('click', (e) => {
    e.preventDefault();

    chartPoster.style.transition = "left 0.3s ease-in-out";

    if(currentIdxMovie < 10) {
        nextIdx = (currentIdxMovie + 1) % length;
        imageSlide(nextIdx);
    } else {
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
        imageSlide(nextIdx);
    } else if (currentIdxMovie == 10) {
        nextIdx = 18;
        imageSlide(nextIdx);
    } else {
        nextIdx = (currentIdxMovie - 1) % chartPosterSlide.length;
        imageSlide(nextIdx);
    }

})

/* 무비차트 클릭시 */
chart.addEventListener('click', (e) => {
    chartPoster.style.transition = "none";
    chartPoster.style.left = 0 * slideWidth + "px";
    currentIdxMovie = 0;

    chart.style.fontWeight = "bold";
    chartShowing.style.fontWeight = "400";
    chartShowing.style.color = "#666666";
    chart.style.color = "#222222";
})

/* 상영예정작 클릭시 */
chartShowing.addEventListener("click", (e) => {
    chartPoster.style.transition = "none";
    chartPoster.style.left = 20 * -slideWidth + "px";
    currentIdxMovie = 10;

    chart.style.fontWeight = "400";
    chartShowing.style.fontWeight = "bold";
    chart.style.color = "#666666";
    chartShowing.style.color = "#222222";
})

/* 화살표 클릭시 */
let videoOffset = document.querySelector(".chart_bottom_line");

let videoOffsetAMT = videoOffset.offsetTop;

chartArrow.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({top: videoOffsetAMT-120, behavior: 'smooth'});
    console.log(videoOffsetAMT);
})

// 모달 창
let posterDetail = chartPoster.querySelectorAll('.poster_btn');
let overlay = document.querySelector('#overlay');
let overlayImg = document.querySelector('#overlay img');

posterDetail.forEach((item, idx) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        imgSrc = e.target.getAttribute('data-lightbox');
        detailAddress = e.target.getAttribute('data-link');

        overlayImg.setAttribute('src', imgSrc);

        overlay.classList.add('overlay_visible');

        /* 해당 상세보기 페이지로 넘어가게 */
        setTimeout(() => {
            location.href = "https://vaem6877.github.io/cgv_project/";
        }, 1500);
    })
})

overlayImg.addEventListener('click', (e) => {
    e.preventDefault();
    overlay.classList.remove('overlay_visible');
})
/* --------------- E 홍효헌 ----------------*/


/* --------------- S 박민지 ----------------*/

let pagerBtn = document.querySelectorAll('.video_pager_link'),
    title = document.querySelectorAll('.video_title > li'),
    movieList = document.querySelectorAll('.movie_list > li'),
    video = document.querySelectorAll('.movie_list > li > video'),
    vbtnP = document.querySelector('.video_txt button:first-of-type'),
    vbtnM = document.querySelector('.video_txt button:last-of-type'),
    currentIdx = 0;



// 페이저버튼을 각각 클릭했을때 모든 클래스명 active가 제거되고, 누른 것에만 클래스명이 생긴다
pagerBtn.forEach((item,idx)=>{
    item.addEventListener('click',(e)=>{
        e.preventDefault();
        for(pb of pagerBtn){
            pb.classList.remove('active');
        }
        e.target.classList.add('active');
        // 영화 타이틀 변경
        currentIdx = idx;
        for(tt of title){
            tt.classList.remove('active');
        }
        title[currentIdx].classList.add('active');
        // 영화 변경
        for(ml of movieList){
            ml.classList.remove('active');
        }
        movieList[currentIdx].classList.add('active');
        // 멈추고 음소거하고, 시작시간 초기화 -> 재생
        for(vd of video){
            vd.pause();
            vd.currentTime = 0;
            vd.muted = true;
        }
        video[currentIdx].play();
        // 버튼이 active가 없도록 
        vbtnP.classList.remove('active');
        vbtnM.classList.remove('active');
    })
});

// 일시정지, 재생
vbtnP.addEventListener('click',(e)=>{
    e.currentTarget.classList.toggle('active');
    if(e.currentTarget.classList.contains('active')){
        video[currentIdx].pause();
    } else {
        video[currentIdx].play();
    }
});
// 소리, 음소거
vbtnM.addEventListener('click',(e)=>{
    e.currentTarget.classList.toggle('active');
    if(e.currentTarget.classList.contains('active')){
        video[currentIdx].muted = false;
    } else {
        video[currentIdx].muted = true;
    }
});


/* --------------- E 박민지 ----------------*/



/* --------------- S 윤상혁 ----------------*/
const   themeContainer = document.querySelector('.theme_container'),
        themeSlides = themeContainer.querySelectorAll('.theme_slide'),
        themeSlideCount = themeSlides.length,
        themePrev = document.querySelector('.theme_prev'),
        themeNext = document.querySelector('.theme_next');
 let    themeCurrentIdx = 0,
        themeSlideToShow = 5,
        themeSildeWidth = 150,
        themeSlideMargin = 60,
        themeMoveAmt = themeSildeWidth + themeSlideMargin;
        
themeContainer.style.width = `${themeMoveAmt*themeSlideCount}px`

function themeMoveSlide(themeNum){
    themeContainer.style.transform = `translateX(${-themeMoveAmt*themeNum}px)`;
    themeCurrentIdx = themeNum;
}
//이전 다음 버튼 기능
themeNext.addEventListener('click',(e)=>{
    e.preventDefault();
    if(themeCurrentIdx == themeSlideCount-themeSlideToShow){
        themeMoveSlide(0);
    }else{
        themeMoveSlide(++themeCurrentIdx)
    }
});
themePrev.addEventListener('click',(e)=>{
    e.preventDefault();
    if(themeCurrentIdx == 0){
        themeMoveSlide(themeSlideCount-themeSlideToShow);
    }else{
        themeMoveSlide(--themeCurrentIdx);
    }
});

let branchSubmit = document.querySelector('#branch_submit');
let SelectOption = document.querySelector('#branch');
let branchExpand = document.querySelector('.branch_expand');
let targeturl;

SelectOption.addEventListener('change', (e)=>{
    targeturl = e.target.value;
});
branchSubmit.addEventListener('click',(e)=>{
    e.preventDefault();
    window.open(targeturl);
});

//----------------------------------------------
SelectOption.addEventListener('click', ()=>{
    branchExpand.classList.toggle('active');
});
SelectOption.addEventListener('focusout', ()=>{
    branchExpand.classList.remove('active');
});

/* --------------- E 윤상혁 ----------------*/
