const promiseOne = new Promise(function (resolve, reject) {
  // it can be anything
  // network call
  // DB call

  setTimeout(() => {
    console.log("Async task complete");
    resolve();
  }, 1000)
})

promiseOne.then(() => {
  console.log("Promise completed");
})


// takes a callback function





// or


new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async task 2");
    resolve()
  }, 1000)
}).then(() => {
  console.log("Async 2 resolved");
})



const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ username: "rashu", email: "rashu@gmail.com" })
  }, 1000)
})


promiseThree.then((user) => {
  console.log(user);

})



const promiseFour = new Promise(function (resolve, reject) {
  let error = true
  if (!error) {
    resolve({ username: "rashu", password: "123" })
  }
  else {
    reject("something went wrong")
  }
})

promiseFour.then((user) => {
  console.log(user);
  return user.username
}).then((username) => {
  console.log(username);
}).catch((error) => {
  console.log(error);
}).finally(() => {
  console.log("Promise is either resolved or rejected");

})


// we can also handle promise without then and catch (with the use of async and await)


const promiseFive = new Promise(function (resolve, reject) {
  console.log("inside promise");
  let error = true
  if (!error) {
    console.log("inside resolve");
    resolve({ username: "priyanshu", password: "123" })
  }
  else {
    console.log("inside reject");
    reject("something went wrong with promise 5")
  }
})

async function consumePromiseFive() {
  try {
    const response = await promiseFive
    console.log("inside try");
    console.log(response);
  } catch (error) {
    console.log("inside catch");
    console.log(error);
  }
}


consumePromiseFive();



// when using fetch


async function getAllUser() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json() // here we have to use await because this also takes time to change into json format
    console.log(data);
  }
  catch (error) {
    console.log("Error:", error);
  }
}


getAllUser()