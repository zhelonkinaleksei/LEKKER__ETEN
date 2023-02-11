<?php
    use PHPMailer-6.7.1\PHPMailer\PHPMailer;
    use PHPMailer-6.7.1\PHPMailer\Exception;

    require 'phpmailer-6.7.1\src\Exception.php';
    require 'phpmailer-6.7.1\src\PHPMailer.php';

    $mail = new PHPMailer(trur);
    $mail->Charset - ' UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->IsHTML(true);

    $mail->setFrom('info@.com', 'Тест формы');
    $mail->addAddress('zhelonkinaleksei2710@gmail.com');
    $mail->Subject = 'Клиент оставил заявку на бронь';

    $body = '<h1>Заголовок приходящего письма</h1>';

    if(trim(!empty($_POST['Name']))){
        $body.='<p><strong>Имя:</strong> '.$_POST['Name'].'</p>';
    }
    if(trim(!empty($_POST['Email']))){
        $body.='<p><strong>E-mail:</strong> '.$_POST['Email'].'</p>';
    }
    if(trim(!empty($_POST['Message']))){
        $body.='<p><strong>Имя:</strong> '.$_POST['Message'].'</p>';
    }

    $mail->Body = $body;

    if (!$mail->send()){
        $message = 'Ошибка'
    }
    else{
        $message = 'Данные отправлены';

        $response = ['message' => $message];
        echo json-encode($response);
    }



