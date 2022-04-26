// bug => var
// js
// 变量的生命周期 => 作用域 => C++、Java..etc => 块作用域
// 函数作用域A, console.log(i) 不会报错
function A() {
  let p = true;
  for (var i = 0; p; p = false) {}
  console.log(i);
}
A();

// 块级作用域，console.log(i) ReferenceError
function B() {
  let p = true;
  for (let i = 0; p; p = false) {}
  console.log(i);
}
B()