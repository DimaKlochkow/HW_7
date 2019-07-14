var str = 'abcdefghijklmnopqrstuvwxyz';
var elements = +prompt('Введите количество элементов'),
    min = +prompt('Введите минимальное значение'),
    max = +prompt('Введите максимальное значение');
var words = [];

for (var i = 0; i < elements; i++) {
    var newWord = '';
    var letters = Math.round(Math.random() * (max - min) + min);
    console.group('New word' + letters);
    for (var b = 0; b < letters; b++) {
        // console.log(b);
        var index = Math.round(Math.random() * (str.length - 1));
        newWord += str[index];

    }
    console.log(newWord);
    console.groupEnd();
}