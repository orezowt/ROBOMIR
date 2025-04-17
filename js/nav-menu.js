let dropdown_menu = document.querySelector('ul.menu-container')
let btn_nav_menu = document.querySelector('#mb-button-menu')
let menu = document.querySelectorAll('.menu')



 
document.addEventListener( 'mouseup', (e) => {
	const withinBoundaries = e.composedPath().includes(menu[0]) || e.composedPath().includes(menu[1]);
	
	if (dropdown_menu.contains(e.target) || !withinBoundaries) {
        dropdown_menu.style.display = 'none';
    }
})

btn_nav_menu.addEventListener('click', ()=>{
	(getComputedStyle(dropdown_menu).display == 'none') ? dropdown_menu.style.display = 'block' : dropdown_menu.style.display = 'none'
})
