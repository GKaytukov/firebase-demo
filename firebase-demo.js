const person = {
    name: 'Todd',
    age: 46,
    awesome: true,
    spouse: 'Meghann', 
}
//destructuring 
const { spouse, age, name, awesome } = person

console.log(spouse)

const fruits = ['apple', 'banana', 'kiwi']

const [ a, b, c] = fruits

