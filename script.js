const formInsert = document.getElementById("form-insert-student");
formInsert.addEventListener('submit', (event)=>{
    event.preventDefault();//отменяем стандартную отправку формы
    let farmData = new FormData(formInsert);//собираем данные с формы, корторые ввел пользователь
    let xhr = new XMLHttpRequest();//создаем объект отправки запроса на сервер
    xhr.open("POST", "insertStudent.php");//открываем соединение
    xhr.send(FormData);//отправка данных на сервер
    xhr.onload = () => {console.log(xhr.response)};
});