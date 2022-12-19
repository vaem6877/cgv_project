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
let fixBtn = document.querySelector('#btn_fixed'),
	ticketBtn = document.querySelector('.btn_fixed_ticket'),
	topBtn = document.querySelector('.btn_fixed_top');

console.log(subMenu.pageYoffset)

let relocateEvt = new Event('scroll');

window.addEventListener('scroll',()=>{
    if(window.pageYOffset > 230){
        nav.classList.add('active');
    }else{
        nav.classList.remove('active');
    }
    if(window.pageYOffset > 450){
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

	window.addEventListener('scroll',()=>{
		if(window.pageYOffset > 150){
			nav.classList.add('active');
		}else{
			nav.classList.remove('active');
		}
		if(window.pageYOffset > 370){
			fixBtn.classList.add('active');
		}else{
			fixBtn.classList.remove('active');
		}
	});
});

/* --------------- E 손현진 ----------------*/


/* --------------- S 홍효헌 ----------------*/
/* 변수 선언과 할당 */
let chart = document.querySelector('.chart_header .chart');
let chartShowing = document.querySelector('.chart_header .showing');
let chartPoster = document.querySelector(".chart_poster");
let chartPosterSlide = document.querySelectorAll(".chart_poster li");

let btnPrev = document.querySelector('.btn_nav_left');
let btnNext = document.querySelector('.btn_nav_right');
let chartArrow = document.querySelector('.chart_arrow');

let chartForm = document.querySelector('.chart_form')
let formUnder = document.querySelector('.chart_form input');
let formBtn = document.querySelector('.chart_form i');

let currentIdxMovie = 0;
let length = chartPosterSlide.length - 31; /* 슬라이드 넘기는 개수에 따라 빼주는 숫자 조절하기 */
let lengthShow = chartPosterSlide.length - 21;

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

/* CHART SECTION image slide  */
chartPosterSlide.forEach((item, idx) => {
    item.style.left = idx * 294 + "px";  // 5880 부터
})

/* imageSlide 함수 */
function imageSlide (slideIdx) {
    chartPoster.style.left = (slideIdx * -588) + "px"; /* 1장-294, 2장-588*/
    currentIdxMovie = slideIdx;

    console.log(currentIdxMovie);

    /* 버튼 사라짐 */
    /* if(currentIdxMovie == 10) {
        btnPrev.style.display = "none";
    } else if(currentIdxMovie > 0) {
        btnPrev.style.display = "inline-block";
    } else {
        btnPrev.style.display = "none";
    } */
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
let videoOffset = document.querySelector(".chart_bottom_line");

let videoOffsetAMT = videoOffset.offsetTop;


chartArrow.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({top: videoOffsetAMT-120, behavior: 'smooth'});
    console.log(videoOffsetAMT);
})

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

        setTimeout(() => {
            location.href = detailAddress;
        }, 800);
    })
})
/* --------------- E 홍효헌 ----------------*/


/* --------------- S 박민지 ----------------*/

let pager = document.querySelector('#video_pager'),
    pagerBtn = document.querySelectorAll('.video_pager_link'),
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
        // 멈추고, 시작시간 초기화 -> 재생
        for(vd of video){
            vd.pause();
            vd.currentTime = 0;
        }
        video[currentIdx].play();
        // 버튼이 active가 없도록 
        vbtnP.classList.remove('active');
        vbtnM.classList.remove('active');
    })
});

// 일시정지, 멈춤
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
        video[currentIdx].muted = true;
    } else {
        video[currentIdx].muted = false;
    }
});


/* --------------- E 박민지 ----------------*/



/* --------------- S 윤상혁 ----------------*/
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