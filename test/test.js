let input = ['14', '29', '16 D', '15 D', '14 D', '16 D', '13 D', '13 D', '11 D', '17 D', '4 D', '15 D', '20 D',
    '13 D', '9 D', '16 D', '6 D', '2 D', '9 D', '6 D', '11 D', '6 D', '19 D', '6 D', '9 D',
    '4 D', '7 D', '10 D', '15 D', '1 D', '14 D'],
    // output : 15

    // let input   [ '11', '5', '1 I', '12 D', '11 I', '14 D', '15 D' ],
    // output : KO

    tab = [];

console.log(input);

for (let i = 0; i < 20; i++) {
    tab.push(i + 1);
}
/*
for (const iterator of input.slice(2)) {
    let test = iterator.split('');
    if (test[1] === 'D') {

    }
}
*/

input.slice(2).forEach((element, index) => {
    //console.log(`index : ${index}`);
    //console.log(`element : ${element}`);
    let test = element.split(' ');
    //console.log(`test : ${test}`);
    if (test[1] === 'D') {
        [tab[index], tab[index - 1]] = [tab[index - 1], tab[index]];
    }

});

//[[tab[0]], [tab[1]]] = [[tab[1]], [tab[0]]];

//tab.splice(3, 1);

console.log(tab);
