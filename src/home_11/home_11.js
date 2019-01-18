function toFirstUpperCase(str) {
    var str = prompt('');
    return str[0].toUpperCase() + str.slice(0);
}

console.log(toFirstUpperCase('str'));


function isEmpty(obj) {
    let isEmpty = true;
    for (var prop in obj) {
        isEmpty = false;
        break;
    }
    return isEmpty;
}
var user = {
    name: 'Lena'
};

console.log(isEmpty(user));
delete user.name;
console.log(isEmpty(user));