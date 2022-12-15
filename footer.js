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

