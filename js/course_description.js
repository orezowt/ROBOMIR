let btns = document.querySelectorAll(".button-read-more")
let courses = document.querySelectorAll(".courses")


function switch_view(button, class_name){
	let selected_course = button.parentNode.parentNode

	// сбрасываем текст кнопок, если открываем описание нескольких курсов одновременно
	btns.forEach(function(btn){
		if (btn != button){
			btn.innerHTML = "Узнать больше"
		}
	})

	if (button.innerHTML == "Узнать больше"){
		button.innerHTML = "Свернуть описание"
	}
	else{
		button.innerHTML = "Узнать больше"
	}
	
	// сбрасываем стили для блоков с курсами, 
	// если открываем описание нескольких курсов одновременно
	courses.forEach(function(course){
		if (course != selected_course)
			course.classList.remove(class_name)
	})
	
	selected_course.classList.toggle(class_name)
	selected_course.scrollIntoView(
		{behaviour: 'smooth', block: 'center'}
		)
}


btns.forEach(function(button){
	button.onclick = function(){
		let screen_width = window.innerWidth

		if (screen_width < 600){
			switch_view(button, "mb-full-description")
		}
		else{
			switch_view(button, "full-description")
		}		
	} 
})