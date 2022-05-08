// Виправити код
var name = 'Vic 2';
var user = {
  age: 5,
  name: 'Vic',
  getName: function() {
    return this.name;
  }
};
const getName = user.getName.bind(user);
console.log(getName())

// Виправити код
const user1 = {
    age: 5,
    name: 'Vic',
    getName1: function() {
      return this.name;
    }
  };
  const user2 = {
    name: 'Arni',
  }
  
  const getName1 = user1.getName1;
  console.log(getName1.call(user2))