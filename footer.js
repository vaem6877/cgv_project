let branchSubmit = document.querySelector('#branch_submit');
let SelectOption = document.querySelector('#branch');
let targeturl;

SelectOption.addEventListener('change', (e)=>{
    targeturl = e.target.value;
});
branchSubmit.addEventListener('click',(e)=>{
    e.preventDefault();
    window.open(targeturl);
});