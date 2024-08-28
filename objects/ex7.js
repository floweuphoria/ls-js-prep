
let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

myObj.qux = 3;

let objKeys = Object.keys(myObj);

objKeys.forEach(function (key) {
  console.log(key);
});

for (let key in myObj) {
  console.log(key);
}

// Without running this code, can you determine whether 
// these two snippets produce the same output? Why?

// no - second one will include the prototype's keys

for (let key in myObj) {
  if (myObj.hasOwnProperty(key)) {
    console.log(key);
  }
}