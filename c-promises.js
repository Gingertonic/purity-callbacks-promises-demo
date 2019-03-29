// Make a function sayThis which takes in a string or defaults to an empty string.
// The function should return a Promise which resolves with the word `this` prepended to the initial string
const sayThis = (theThingToSay = '') => {
  return new Promise(resolve => {
    console.log(' this' + theThingToSay);
    resolve(' this' + theThingToSay)
  })
}

// Make a function sayThat which takes in a string or defaults to an empty string.
// The function should return a Promise which resolves with the word `that` prepended to the initial string
const sayThat = (theThingToSay = '') => {
  return new Promise(resolve => {
    console.log(' that' + theThingToSay);
    resolve(' that' + theThingToSay)
  })
}

// Call sayThis, wait for it to resolve and then call sayThat using the result of sayThis. And repeat!
// sayThis().then(sayThat).then(sayThis).then(sayThat).then(sayThis)


// Make a more useful function using then syntax - use fetch to get data from an api
// Just like our sayThis and sayThat functions, fetch also returns a Promise
function logFetch(url){
  fetch(url)
    .then(response => response.text())
    .then(text => console.log(text))
    .catch(err => {
      console.log('oops!', err)
    })
}

logFetch(`https://ap.github.com/users/Gingertonic`)
