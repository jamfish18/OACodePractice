/**
 * Array datatype and built in array methods
 */

const arrays = () => {
  // this is an arrow function
  
  const cars = [
    "Saab",
    "Volvo",
    "BYD",
    "Tesla"
  ]

  const cars2 = new Array("Audi", "Mercedes", "BMW")

  // METHODS //

  // to string method
  console.log(cars.toString() + " = the string printed by .toString on cars")

  // length:
  console.log("length of cars: ", cars.length)

  // sorting:
  console.log("sorted cars: ", cars.sort()) // sort in chrome uses Timsort, lower bound O(n), upper O(nlogn). Firefox uses merge()

  // iteration/looping
  let str = ""
  for (let i = 0; i < cars.length; i++) {
    str = str.concat(cars[i] + ' ')
  }
  console.log(str)

  cars.forEach((item) => {
    str = str.concat(item + ' ')
  })
  console.log(str)

  //  checking array type
  console.log(Array.isArray(cars))
  console.log(cars instanceof Array)

  // using at()
  // solved the problem of using -1 for index
  console.log(cars.at(-1))

  // insertion:
  console.log(cars.push('Hyundai'))
  console.log(cars)
  console.log(cars.unshift("Bugatti"))
  console.log(cars)

  // popping and shifting (last and first removal)
  console.log(cars.pop())
  console.log(cars)
  console.log(cars.shift())
  console.log(cars)

  // join behaves same as toString but can add separator
  console.log(cars.join())
  console.log(cars.join(" + "))

  let allCars = cars.concat(cars2)
  console.log(allCars, [], []) // merging 4 arrays here, but []s are unneccesary 


  // splice method
  // add new items into an array
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.splice(2, 0, "Lemon", "Kiwi"); 
  console.log(fruits)

  // splice to remove items from array without leaving holes
  fruits.splice(1, 2)
  console.log(fruits)

  // array.toSpliced splices an array without altering the original
  const newFruits = fruits.toSpliced(3, 0, "Potato")
  console.log(newFruits)

  // slice method (returns new array from index)
  console.log(newFruits.slice(3))


}






function array() {
  // this is a normal function

}

arrays()