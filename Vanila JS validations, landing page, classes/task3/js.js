function Animal(age) {
    this.age = age;
    this.Sleep = function () {
      console.log('zzzzzz');
    }
}

function Dolphin(age) {
  Animal.call(this, age);
  this.Swim = function () {
    console.log('splah');
  }
}

function Lion(age) {
  Animal.call(this, age);

  this.Roar = function () {
    console.log('wrrrrr');
  }

  this.Eat = function () {
    console.log('yummy');
  }
}

function Eagle(age) {
  Lion.call(this, this.Eat);
  this.age = age;

  this.Fly = function () {
    console.log('whoohooo ');
  }
}

function Bee(age) {
  Eagle.call(this, age, this.Fly);
}

var dolphin = new Dolphin(22);
var lion = new Lion(10);
var eagle = new Eagle(33);
var bee = new Bee(0.1);

//1. dolphin
//console.log(dolphin.age);
//console.log(dolphin.Swim());

//2. lion
/*console.log(lion.age);
console.log(lion.Roar());
console.log(lion.Eat());*/

//3. eagle
/*console.log(eagle.age);
console.log(eagle.Fly());
console.log(eagle.Eat());*/

//4. bee
//console.log(bee.age);
//console.log(bee.Fly());
