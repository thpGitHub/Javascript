# for...in, for...of, foreach()

# 1. for...in  (instruction)
>(pour les objets, éviter fortement de l'utiliser sur un array !)

  >  permet d'itérer sur les propriétées d'un objet
```javascript
    var obj = {a:1, b:2, c:3};
    
for (var prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}

// Affiche dans la console :
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"

```


# 2. for...of (instruction)
```javascript
const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

// expected output: "a"
// expected output: "b"
// expected output: "c"
```

# 3. foreach() (methode)

```javascript
var items = ["item1", "item2", "item3"]
var copie = [];

items.forEach(function(item){
  copie.push(item);
});
```


```javascript
let arr = [3, 5, 7];
arr.toto = "coucou";

arr.forEach(function (element, index) {
  console.log(element); // affiche "3", "5", "7"
  console.log(index);  // affiche "0", "1", "2"
});
```


> La méthode forEach() permet d'exécuter une fonction donnée sur chaque élément du tableau.



|       Dogs       | Cats   |
| :--------------: | ------ |
| Golden Retriever | Calico |
|      Westie      | Tabby  |


Les différences entre for...of et for...in
Les deux instructions for...in et for...of permettent de parcourir un ensemble. Mais elles ne parcourent pas le même ensemble.

L'instruction for...in permet de parcourir les propriétés énumérables d'un objet dans un ordre arbitraire.

L'instruction for...of permet quant à elle de parcourir les données contenues dans l'objet itérable visé.

Dans l'exemple qui suit, on illustre la différence de comportement entre une boucle for...of et une boucle for...in utilisées sur un tableau (Array).

  