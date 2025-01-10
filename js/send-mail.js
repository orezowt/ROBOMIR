$('#contact-us-form').submit(function(e){
	var popup = $('#contact-us-form-popup-text');
	e.preventDefault();
	$.ajax({
		url: "php/send-mail.php",
		type: "POST",
		data: $('#contact-us-form').serialize(),
		success: function(response) {
			//обработка успешной отправки
			popup.html('Ваше сообщение успешно отправлено!').delay(2000).fadeOut(1000);

			$('#input-contact-us-name').val('');
			$('#input-contact-us-email').val('');
			$('#input-contact-us-phone').val('');
			$('#input-contact-us-message').val('');
		},
		error: function(response) {
			//обработка ошибок при отправке
			popup.html('Что-то пошло не так...').delay(2000).fadeOut(1000);
		}
	});
});


$('#modal-form').submit(function(e){
	var popup = $('#modal-form-popup-text');
	e.preventDefault();
	$.ajax({
		url: "php/send-mail.php",
		type: "POST",
		data: $('#modal-form').serialize(),
		success: function(response) {
			//обработка успешной отправки
			popup.html('Ваша заявка успешно отправлена!').delay(2000).fadeOut(1000);

			$('#input-modal-name').val('');
			$('#input-modal-email').val('');
			$('#input-modal-phone').val('');
		},
		error: function(response) {
			//обработка ошибок при отправке
			popup.html('Что-то пошло не так...').delay(2000).fadeOut(1000);
		}
	});
});