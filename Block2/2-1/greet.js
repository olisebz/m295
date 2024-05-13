/*
We have a main function called greet that takes two arguments: name and callback.
Inside greet, we log a greeting message with the provided name.
After greeting, we call the callback function.
We define another function called sayGoodbye, which serves as our callback function. It logs a farewell message.
Finally, we call the greet function with "Alice" as the name and sayGoodbye as the callback function. */

function greet(name, callback) {
  callback("Hello " + name);
}

greet("Oli", (result) => {
  console.log(result);
});
