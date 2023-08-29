
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
 
  razzle(); 
  function razzle() {
    console.log("You've been razzled!");
  }
  
  // Define function expression
  const greet = function(name) {
    console.log(`Hello, ${name}!`);
  };
  greet("Alice"); // "Hello, Alice!"
  
  // Define anonymous function
  const multiply = function(a, b) {
    return a * b;
  };
  console.log(multiply(3, 4)); // 12
  
  // Define a function using a function expression
  const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  
  // Define an IIFE: Immediately-Invoked Function Expression
  const result = (function() {
    const x = 5;
    return x * 2;
  })();
  console.log(result); // 10
  
  // Define function-level scope
  function outer() {
    const outerVar = "outer";
    return function inner() {
      const innerVar = "inner";
      console.log(`${outerVar} ${innerVar}`);
    };
  }
  const innerFunc = outer();
  innerFunc(); // "outer inner"
  
  // Define closure
  function outerFunc() {
    const outerVar = "outer";
    return function innerFunc() {
      const innerVar = "inner";
      console.log(`${outerVar} ${innerVar}`);
    };
  }
  const closureFunc = outerFunc();
  closureFunc(); // "outer inner"
  
  // Define function-level scope and closure together
  function outerScope(name) {
    const outerVar = "Hello";
    return function innerClosure(lang = "Python") {
      console.log(`${outerVar}, ${name}! It's a fine day to learn ${lang}`);
    };
  }
  const greetingFunc = outerScope("Dr. Strange");
  const closureExample = greetingFunc();
  closureExample("JavaScript"); // "Hello, Dr. Strange! It's a fine day to learn JavaScript"
  
  // Define wrapAdjective function
  function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  
 
  const emphaticPrompt = wrapAdjective("!!!");
  console.log(emphaticPrompt("a dedicated programmer")); 
  
 g
 
  
