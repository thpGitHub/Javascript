
>la différence entre fonction déclaré et une function expression est lié à la facon dont le navigateur interprète et stock en mémoire ces informations.
Dans le cas d’une function déclarée de manière classique, toute la function est chargée dans la mémoire du navigateur même si elle n’est pas utilisée immédiatement. À la différence d'une function expression qui ne sera chargée que lorsqu’elle sera appelée.


# function expression

```javascript
    let message = function(){
  alert('Im me');
};

```

# function declared

```javascript
    function message(){
    alert('Im me');
}
```
