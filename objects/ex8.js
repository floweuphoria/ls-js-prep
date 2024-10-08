function copyObj(objToCopy, array) {
  let newObj = {};

  if (array) {
    array.forEach(key => {
      newObj[key] = objToCopy[key];
    })
  } else {
    return Object.assign(newObj, objToCopy);
  }
  return newObj;
}

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, ['foo', 'qux']);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, ['bar']);
console.log(newObj3);       // => { bar: 2 }

let newObj4 = copyObj(objToCopy, ['xzz']);
console.log(newObj4);