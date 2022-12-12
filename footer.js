let bestTitle = document.querySelector('.best_title');
let bestDesc = document.querySelector('.best_desc');
let toptheater = document.querySelector('.toptheater');
let dim = document.querySelectorAll('.dim');

toptheater.addEventListener('mouseenter', (e)=>{
    e.preventDefault();
    bestTitle.classList.add('active');
    bestDesc.classList.add('active');
    dim.forEach((item,idx)=>{
        item[idx].classList.add('active');
    });    
});
toptheater.addEventListener('mouseleave', (e)=>{
    e.preventDefault();
    bestTitle.classList.remove('active');
    bestDesc.classList.remove('active');
    dim.forEach((item,idx)=>{
        item[idx].classList.remove('active');
    });
});