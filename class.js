/**
 * class --> template 
 * properties
 * method (a special type of function inside a class without the function keyword)
 * 
 * 
 * object
 * 
 * 
*/

class Player {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.location = "Bangladesh";
        // console.log('calling the constructor method', name);
    }
    goal(){
        console.log("Score a goal!")
            
    }
    getTeamName() {
        return 'Barcelona'
    }
}
const Player1 = new Player("Tom Brady", 33);
const Player2 = new Player("Shanto", 22);
// Player1.goal();
console.log(Player1);
console.log(Player1 instanceof Player);
// console.log();
console.log(Player2);
