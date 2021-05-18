class Person {

    constructor(firstName, middle_name, last_name, age) {
        this.firstName = firstName;
        this.middleName = middle_name;
        this.lastName = last_name;
        this.age = age;
    }

    sayHello() {
        console.log(this.firstName + ' says Hello!');
    }

}


const homer = new Person('Homer', 'Jay', 'Simpson', 39);
homer.sayHello();

const marge = new Person('Marge', 'Jacqueline', 'Simpson', 36);
marge.sayHello();

const bart = new Person;
bart.firstName = 'Bart';
bart.sayHello();

const lisa = new Person;

console.log(homer);
console.log(marge);
console.log(bart);
console.log(lisa);