function hello(greeting, name) {
  return greeting + ' ' + name;
}

function xyzzy() {
  return { a: 1, b: 2, c: [3, 4, 5], d: {} };
}

const howdy = hello('Hi', 'Grace');
let foo = xyzzy();

/*
variables:
hello, greeting, name, xyzzy, howdy, foo

object property names:
a, b, c, d

primitives:
' ', 1, 2, 3, 4, 5, 'Hi', 'Grace'
'a', 'b', ...
0, 1, ...

objects:
function hello(greeting, name) {
  return greeting + ' ' + name;
}

function xyzzy() {
  return { a: 1, b: 2, c: [3, 4, 5], d: {} };
}

{ a: 1, b: 2, c: [3, 4, 5], d: {} };
[3, 4, 5]
{}

*/
