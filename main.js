// // Написать программу, которая создает новый массив из произведения(*) значений двух массивов одинакового размер. Также, нужно обработать ситуацию, если массивы будут разной длины.

let arr1 = [1, 2, 5, 6, 25];
let arr2 = [3, 5, 8, 65, 1, 6, 8, 31];
console.log(arr1);
console.log(arr2);
let arr3 = arr1.length >= arr2.length ? arr1 : arr2;

for (let i = 0; i < Math.min(arr1.length, arr2.length); i++) {
    arr3[i] = arr1[i] * arr2[i];
};

console.log(arr3);


// 2. Написать программу для поиска повторяющихся значений в заданном массиве. В консоле должен выводиться массив со всеми элементы, которые повторяются более одного раза.


let arr = [1, 2, 2, 3, 9, 4, 5, 6, 1, 7, 4, 9, 9, 10, 2, 3]

let arrRepeat = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++)
        if (arr[j] === arr[i]) {
            arrRepeat.push(arr[i])
        }
    };
    let arr4 = [];
    let resultArr = arrRepeat.filter((item, index) => {
            arr4.push({item, index, indexOf: arrRepeat.indexOf(item)})
            return index === arrRepeat.indexOf(item);
    });
    // console.log(arrRepeat);
    console.log(arr);
    console.log(resultArr);



//  // 3. Написать программу нахождения количества букв в строке. Пользователь вводит вначале слово, а потом букву. Вывести в консоль количество такой букву в заданной строке.

    let word = prompt('Enter word').trim();
    let letter = prompt('Enter letter').trim();
    let arrWord = word.split('');
    let result = arrWord.filter(item => item === letter);
    let answer = word.includes(letter) ? alert('The string contains the following number of' + ' ' + '"' + letter +  '"' + ':' + '  '+ result.length) : alert('The string doesn`t contains any numbers of' + ' ' + '"' + letter + '"');
// console.log(word);
// console.log(letter);
// console.log(arrWord);
// console.log(result);



   