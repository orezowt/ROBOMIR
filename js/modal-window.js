let btns_modal = document.querySelectorAll('*[data-modal]')
let modal = document.querySelector('#modal-registration')
let btn_close = document.querySelector("#modal-button-close")
let html = document.documentElement;
let scrollPosition

function closeOnBackDropClick({currentTarget, target}){
	const modal = currentTarget
	const isClickedOnBackDrop = target === modal
	if (isClickedOnBackDrop){
		close()
	}
}

function returnScroll(){
	document.body.classList.remove('scroll-lock')
}

function open(){
	scrollPosition = window.pageYOffset;
	html.style.top = -scrollPosition + "px";
	modal.showModal()
	document.body.classList.add('scroll-lock')
}

function close(){
	//прокручиваем окно туда где оно было
	window.scrollTo({top: scrollPosition, left: 0, behavior:'instant'})
	html.style.top = ""
	modal.close()
	returnScroll()
}

modal.addEventListener('click', closeOnBackDropClick)
modal.addEventListener('cancel', (event)=>{
	returnScroll()
})
btns_modal.forEach(function(button){
	button.onclick = open
})

btn_close.addEventListener('click', (event)=>{
	event.stopPropagation()
	close()
})
