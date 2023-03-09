// export const x: number | string = Math.random() > 0.5 ? '2020' : 2021;
// const y: number = x;

export function getCurrentYear(callback: (date: string | number) => void) {
  callback(Math.random() > 0.5 ? '2020' : 2020);
}

// getCurrentYear((date: string) => {
//   console.log(date.charAt(0));
// });
