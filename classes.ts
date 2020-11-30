class UserAccount {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  logDeatails(): void {
    console.log(`The player ${this.name} is ${this.age} years old.`);
  }

}

const andre = new UserAccount('André Luiz', 26);

andre.logDeatails();

console.log(andre);
console.log(andre.age);