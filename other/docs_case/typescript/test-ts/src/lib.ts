export const body = document.getElementsByClassName('body');

export function test() {
  return new Promise((resolve) => {
    resolve('yes');
  });
}

export const testSymbol = Symbol('first');
