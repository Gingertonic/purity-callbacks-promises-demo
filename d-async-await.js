// Refactor our logFetch function to use async await
// Use try and catch for error handling

async function logFetch() {
  try {
    const response = await fetch(`https://api.github.com/users/Gingertonic`);
    console.log(await response.text())
  } catch(err) {
    console.log('oops!', err)
  }
}

logFetch()
// Remember JS is asynchronous so even though our lofFetch function knows it will need to be patient, this next line doesn't know!
console.log('done stuff')
