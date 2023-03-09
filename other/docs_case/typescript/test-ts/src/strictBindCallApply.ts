export function fnn(name: string, age: number) {
  return name + age;
}

// fnn('wfly');
// fnn.call(null, 'wfly');
// fnn.apply(null, ['wfly']);
// fnn.bind(null, 'wfly')();

fnn('wfly', 18);
fnn.call(null, 'wfly', 18);
fnn.apply(null, ['wfly', 18]);
fnn.bind(null, 'wfly', 18)();
