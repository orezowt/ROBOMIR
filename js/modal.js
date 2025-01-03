const modal = document.querySelector('#modal-registration')
const btn_close = document.querySelector("#modal-button-close")
let btns_modal = document.querySelectorAll('*[data-modal]')

function closeOnBackDropClick({currentTarget, target}){
	const modal = currentTarget
	const isClickedOnBackDrop = target === modal
	if (isClickedOnBackDrop){
		close()
	}
}

function openmodalAndLockScroll(){
	modal.showModal()
	document.body.classList.add('scroll-lock')
}

function returnScroll(){
	document.body.classList.remove('scroll-lock')
}

function close(){
	modal.close()
	returnScroll()
}

modal.addEventListener('click', closeOnBackDropClick)
modal.addEventListener('cancel', (event)=>{
	returnScroll()
})
btns_modal.forEach(function(button){
	button.addEventListener('click', openmodalAndLockScroll)
})
btn_close.addEventListener('click', (event)=>{
	event.stopPropagation()
	close()
})