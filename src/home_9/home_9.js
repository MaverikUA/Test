var name = prompt ('Введите логин');

if (name == 'Админ') {
    var pass = prompt('теперь пароль');
    if (pass == 'черный') {
        alert('пожаловать');
    } else if (pass == null) {
        alert('отмена');
    } else {
        alert('неверно');
    }
} else if (name == null) {
    alert ('отмена');
} else {
    alert ('я хз вас');
}
