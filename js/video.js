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