export {};

// 'await' expression is only allowed within an async function

// EXAMPLE 1 - Mark the directly enclosing function as `async`

// 👇️ mark as async
async function getNum() {
  const num = await Promise.resolve(42);

  return num;
}

// ---------------------------------------------------

// // EXAMPLE 2 - Ensure correct function is makred as async

// function loopNumbers() {
//   // 👇️ inner function is async,
//   // because it uses await
//   [1, 2, 3].forEach(async (num) => {
//     await Promise.resolve(num);
//   });
// }
