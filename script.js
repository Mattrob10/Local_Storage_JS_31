// console.log(window);

// console.log(Object.getOwnPropertyNames(window));

// LOCAL STORAGE METHODS
// setItem():  Add key and value to localStorage
// getItem():  This is how you get items from localStorage
// removeItem(): Remove an item by key from localStorage
// clear(): Clear ALL localStorage
//  key():  Passed a # to retrieve the key of a locaStorage


// window.localStorage.setItem("key", "value");
window.localStorage.setItem("firstName", "Matthew");
localStorage.setItem("lastName", "Robinson");

const person = {
  fullName: "Matthew Robinson",
  location: "Cleveland",
};


localStorage.setItem("user", JSON.stringify(person));

const iAppleProducts = ["iHome","iMac","iPad","iPhone"];

localStorage.setItem("Apple iProducts", JSON.stringify(iAppleProducts));

// Get Item from localStorage

// console.log(localStorage.getItem("Apple iProducts"));

// Remove Item from LS

localStorage.removeItem("Apple iProducts");

// Clear LOCAL STORAGE

// localStorage.clear();

localStorage.setItem("name", "MAYO");
localStorage.setItem("age", "OLD");

console.log(localStorage.key(2));