let btns = document.querySelectorAll(".button-read-more")
let courses = document.querySelectorAll(".courses")

// function FullDescription(btn){
// 	let course = btn.previousElementSibling.previousElementSibling
// 	course.classList.toggle("full-description")
// }

btns.forEach(function(button){
	button.onclick = function(){

		if (button.innerHTML == "Узнать больше"){
			button.innerHTML = "Свернуть описание"
		}
		else{
			button.innerHTML = "Узнать больше"
		}

		let selected_course = button.parentNode.parentNode
		courses.forEach(function(course){

			if (course != selected_course)
				course.classList.remove("full-description")
		})
		
		selected_course.classList.toggle("full-description")
		selected_course.scrollIntoView(
			{behaviour: 'smooth', block: 'center'}
			)
		
	} 
})