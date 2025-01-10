<?php 
	$name = 'Имя: '.$_POST['name'].' <br />';
    $phone =  'Телефон: '.$_POST['phone'].' <br />';
    $email =  'Почта: '.$_POST['email'].' <br />';
    (isset($_POST['course'])) ? $course = 'Курс: '.$_POST['course'] : $course = '';
    (isset($_POST['message'])) ? $message =  'Сообщение: '.$_POST['message'].' <br />' : $message = '';
    $AllInOne =  $name.$phone.$email.$message.$course;
    $to = 'sabjer20@gmail.com'; 
    $headers="From: Robomir.ru\nReply-to:itmir51@gmail.com\nContent-Type: text/html; charset=\"utf-8\"\n"; 
    ($course != '') ? $title = "ЗАЯВКА НА КУРС" : $title = 'Свяжитесь с нами' 
    mail($to, $title, $AllInOne, $headers); 
