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
