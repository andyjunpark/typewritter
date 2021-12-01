const sentence = "hello there from lighthouse labs";

let typewriter = function(str) {
  for (let i = 0; i < str.length; i++) {
    setTimeout(() => {
      process.stdout.write(str[i]);  // print the char here
    }, i*50)
  }
};

typewriter(sentence);