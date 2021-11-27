const myNumber = 42

localStorage.setItem('number', myNumber.toString())
//setItem позволяет нам посылать в хранилище значения (они должны быть строкой, иначе js сам их преобразует в строку)
//принимает в себя данные (ключ, значение)
localStorage.getItem('number')
//через метод getItem получаем данные, занесенные под ключом number
localStorage.removeItem('number')
//удаляет значение/ключ
localStorage.clear()
//удаляет все данные

const object = {
    name: 'Nikita',
    age: 26,
}

localStorage.setItem('person', JSON.stringify(object))
//этот метод превращает объект в строку, чтобы можно было его записать в localStorage
//метод, чтобы перевести такую строку обратно в объект, называется JSON.parse(название строки)