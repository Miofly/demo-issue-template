export class Person {
  name = '';
  constructor(_name: string) {
    this.name = _name;
  }

  getName() {
    console.log(this, this.name);
    return function () {
      // console.log(this.name);
    };
  }
}

new Person('小明').getName().call({ name: '小红' });
