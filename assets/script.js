var original = document.querySelector('#original')
var contador = document.querySelector('#contador')

contador.innerHTML = original.minLength

original.addEventListener('keyup', function(){
    console.log(original.value.length)
    contador.innerHTML = original.value.length
})

//não consegui fazer a segunda parte :)
