function bar(arg1, arg2) {
  let foo = 'Hello';
  const qux = {
    abc: [1, 2, 3, [4, 5, 6]],
    def: null,
    ghi: NaN,
    jkl: foo,
    mno: arg1,
    pqr: arg2,
  };

  return qux;
}

let result = bar('Victor', 'Antonina');

/*
variables, object property names, primitive values, objects

variables:
bar, foo, qux, foo, arg1, arg2, result

object property names:
abc, def, ghi, jkl, mno, pqr, 0, 1, 2, 3

primitive values:
'Hello', 1,2,3,4,5,6 null, NaN, 'Victor', 'Antonina'

*/