let pager = document.querySelector('#video_pager'),
    pagerBtn = document.querySelectorAll('.video_pager_link'),
    title = document.querySelectorAll('.video_title > li'),
    movieList = document.querySelectorAll('.movie_list > li'),
    video = document.querySelectorAll('.movie_list > li > video'),
    currentIdx = 0;



// 페이저버튼을 각각 클릭했을때 모든 클래스명 active가 제거되고, 누른 것에만 클래스명이 생긴다
pagerBtn.forEach((item,idx)=>{
    item.addEventListener('click',(e)=>{
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
    })
})


// let btnPause = document.querySelector('.btn_movie .pause'),
//     bpicon = document.querySelector(btnPause > 'a > i'),
//     btnMuted = document.querySelector('.btn_movie .muted'),
//     bmicon = document.querySelector(btnMuted >'i');
    
//     console.log(btnPause);
//     btnPause.addEventListener('click',(e)=>{
//         e.preventDefault();
//         bpicon.setAttribute('class','fa-solid fa-play');
//     })
//     btnMuted.addEventListener('click',(e)=>{
//         bmicon.setAttribute('class','fa-solid fa-volume-high');
//     })