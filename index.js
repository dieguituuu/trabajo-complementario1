alert('Tabla de multiplicación')
let num = parseInt(prompt('Ingresa un número'))

for(let i = 1; i <= 10; i++){
    let result = num * i
    alert(num + ' x ' + i + ' = ' + result)
}