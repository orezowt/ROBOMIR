let btns_modal = document.querySelectorAll('*[data-modal]')
let modal = document.querySelector('#modal-content')
let modal_shadow = document.querySelector('#modal-shadow')
let btn_close = document.querySelector("#button-close")
let html = document.documentElement;
let scrollPosition

function open_close(){
	modal.classList.toggle('modal-invisible')
	modal_shadow.classList.toggle('modal-invisible')
	modal_shadow.classList.toggle('modal-visible')
	modal.classList.toggle('modal-visible')
}

function open(){
	scrollPosition = window.pageYOffset;
	html.style.top = -scrollPosition + "px";
	html.classList.add("modal-opened");
	open_close()
}

function close(){
	html.classList.remove("modal-opened");
	//прокручиваем окно туда где оно было
	window.scrollTo({top: scrollPosition, left: 0, behavior:'instant'})
	html.style.top = ""
	open_close()
}

window.onload = function(){
	btns_modal.forEach(function(button){
		button.onclick = open
	})

	btn_close.onclick = close
	modal_shadow.onclick = close
}