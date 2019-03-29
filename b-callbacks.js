// Make a function that prints out a secret message
function secret(message){
  console.log(`The secret message is: ${message}`)
}

// Make a function that prints out a public message
function public(message){
  console.log(`PSA: ${message}`)
}

// Make a function that can print out a message as public or secret
function printMessage(callback, message){
  callback(message)
}

// Use printMessage to publicly send the message "The giraffes are coming."
printMessage(public, "The giraffes are coming.")
// Use printMessage to secretly send the message "Giraffes is the code name for aliens"
printMessage(secret, "Giraffes is the code name for aliens")

// Make a function that prints out a message after 2 seconds
function delayed(message) {
  setTimeout(() => {
    return `Thank you for your patience. The message is ${message}`
  }, 2000)
}

// Use printMessage to send the message "How you doin'?" after 2 seconds
printMessage(delayed, "How you doin'?")
// What will we see first? "How you doin'?" or "Please standby"?
console.log('Please standby')
