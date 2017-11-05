const person = {
  name: "Stephen",
  age: 33
};

person.hometown = "Greenville";

person.hometown = "GVegas";

console.log(person);

/* to debug in Node, run the application with node inspect fileName. You can use "n" for next, to walk through the code and "c" to finish the program. 'repl" is where you can access the internals of the program by exectuing JavaScript in the command line at that point in the program. Just like Chrome dev tools console! Or you can use the "debugger" key word, c will skip everything to that point.*/
