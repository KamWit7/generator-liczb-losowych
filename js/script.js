const MIN_NUMBER = 0
const MAX_NUMBER = 100
const NUMBERS = 20

const qs = (query) => document.querySelector(query)

const even = qs(".even-numbers")
const odd = qs(".odd-numbers")
const btn = qs(".btn")

const numbers = Array.from(Array(NUMBERS)) // empty array with length 20

const ifEven = (nr) => nr % 2 === 0
const ifOdd = (nr) => nr % 2 !== 0

const getRandomBetween = (min, max) =>
  Math.round(Math.random() * (max - min) + min)

const filterNumbers = (numbers, type) => {
  let filterType = type === "even" ? ifEven : ifOdd

  return numbers.filter((nr) => filterType(nr))
}

const displayNumbers = (numbers, parent) => {
  numbers.forEach((nr) => {
    let listItem = document.createElement("li")
    listItem.innerText = nr
    parent.append(listItem)
  })
}

const setAnimation = () => {
  odd.parentNode.classList.toggle("appear-aniamtion")
  even.parentNode.classList.toggle("appear-aniamtion")
}

const clearNumbers = () => {
  setAnimation()
  ;[...odd.children].forEach((li) => {
    li.remove()
  })
  ;[...even.children].forEach((li) => {
    li.remove()
  })
}

const generateNumbers = () => {
  if (odd.firstElementChild || even.firstElementChild) clearNumbers()

  setTimeout(() => {
    setAnimation()
  }, 0)

  let randomNumber = numbers.map(() => getRandomBetween(MIN_NUMBER, MAX_NUMBER))

  let oddNumbers = filterNumbers(randomNumber, "odd")
  let evenNumbers = filterNumbers(randomNumber, "even")

  displayNumbers(
    oddNumbers.sort((a, b) => a - b),
    odd
  )
  displayNumbers(
    evenNumbers.sort((a, b) => a - b),
    even
  )
}

btn.addEventListener("click", generateNumbers)
