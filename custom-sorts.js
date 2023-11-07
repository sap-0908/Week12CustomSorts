function ageSort(users) {
  for (let i = 0; i < users.length; i++) {
    let sorted = users.sort((a,b) => a.age - b.age);
    return sorted;
  }
}

function oddEvenSort(arr) {
  const even = []
  const odd = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {

      even.push(arr[i]);
    } else if (arr[i] % 2 !== 0) {
      odd.push(arr[i])
  }
  }
  let sortEven = even.sort((a, b) => a - b)
  let sortOdd = odd.sort((a, b) => a - b)
  return [...sortOdd, ...sortEven];
}

function validAnagrams(s, t) {
  let sortedS = s.split("").sort()
  let sortedT = t.split("").sort()

  for (let i = 0; i < sortedS.length; i++) {
    // for (let i = 0; i < sortedT.length; i++) {
      if (sortedS[i] === sortedT[i]) {
        return true
      } else return false
    }
  }


function reverseBaseSort(arr) {
  // Your code here
  let three = []
  let two = []
  let one = []

  for (let i = 0; i < arr.length; i++) {
    console.log("ToString", arr[i])
    let arrString = arr[i].toString()
    if (arrString.length === 3) {
      three.push(arrString)
      three.sort()
      Number(...three)
    } else if (arrString.length === 2) {
      two.push(parseInt(arrString))
      two.sort()

    } else one.push(parseInt(arrString))
    one.sort()
    Number(...one)
  }
  return [...three, ...two, ...one]
}
// const arr1 = [11, 1, 101, 0, 10, 100];
// const arr2 = [1, 45, 164, 6, 31, 90, 671];

// console.log(reverseBaseSort(arr1))
// console.log(reverseBaseSort(arr2))

function frequencySort(arr) {
  // Your code here
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
