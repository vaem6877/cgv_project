//header 광고 닫기 (닫기 버튼을 누르면 광고 height 0)
let clsBtn = document.querySelector('.btn_ad_close i'),
	headAd = document.querySelector('.head_ad')
	headAdPost = document.querySelector('.head_ad_content .ad_poster');

clsBtn.addEventListener('click',(e)=>{
	e.preventDefault();
	headAd.style.height = 0+'px';
	headAdPost.style.height = 0+'px';
});

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

//스크롤 이벤트 (1. 메뉴 상단 고정 및 스타일 변경 2. 예매하기 및 top 버튼 등장)
let nav = document.querySelector('nav');
let fixBtn = document.querySelector('#btn_fixed'),
	ticketBtn = document.querySelector('.btn_fixed_ticket'),
	topBtn = document.querySelector('.btn_fixed_top');

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
topBtn.addEventListener('click',e=>{
    e.preventDefault();
    scrollTo({
        left:0,
        top:0,
        behavior:'smooth'
    });
});
