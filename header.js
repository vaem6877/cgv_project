let mainMenu = document.querySelectorAll('.nav_menu li');
let nav = document.querySelector('.nav_menu');
let navHeight = nav.offsetHeight;
let subMenu = document.querySelectorAll('.nav_menu li dl');
let subMenuHeight = 0;

for(sM of subMenu){
	if(subMenuHeight < sM.offsetHeight){
		subMenuHeight = sM.offsetHeight;
	};
}
console.log(subMenuHeight);

for(mM of mainMenu){
	mM.addEventListener('mouseenter',()=>{
		nav.style.height=navHeight+subMenuHeight+'px';
	});
	mM.addEventListener('mouseleave',()=>{
		nav.style.height=navHeight+'px';
	})
}