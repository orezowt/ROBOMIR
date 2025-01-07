let dropdown_menu = document.querySelector('ul.menu')
let btn_nav_menu = document.querySelector('#mb-button-menu')


btn_nav_menu.addEventListener('click', ()=>{
	(getComputedStyle(dropdown_menu).display == 'none') ? dropdown_menu.style.display = 'block' : dropdown_menu.style.display = 'none'
})
 
document.addEventListener( 'mouseup', (e) => {
	const withinBoundaries = e.composedPath().includes(dropdown_menu);

	if (!dropdown_menu.contains(e.target) || withinBoundaries) {
        dropdown_menu.style.display = 'none';
    }
})
