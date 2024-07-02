// // import inquirer from "inquirer"
// // class player
// // {
// //     name :string;
// //     fuel : number = 100;
// //     constructor(name:string)
// // {
// //     this.name = name;}
// //     fuelDecrease(){
// //         let fuel = this.fuel -25
// //         this.fuel = fuel
// //     }
// //     fuelIncrease(){
// //         this.fuel =100
// //     }
// // }
// // class Opponent{
// //     name: string;
// //     fuel: number = 100;
// //     constructor(name: string) {
// //         this.name = name;
// //     }
// //     fuelDecrease() {
// //         this.fuel -= 25;
// //     }
// // }
// // class opponent
// // {
// //     name :string;
// //     fuel : number = 100;
// //     constructor(name:string)
// // {
// //     this.name = name;}
// //     fuelDecrease(){
// //         let fuel = this.fuel -25
// //         this.fuel = fuel
// //     }
// // }
// // async function main() {
// // let player1 = await inquirer.prompt
// // (
// //     [
// //         {
// //             name: "name",
// //             type : "input",
// //             message : " please Enter your  name:"
// //         }
// //     ]
// //  )
// // let opponent1 = await inquirer.prompt
// // (
// //     [
// //         {
// //             name: "select",
// //             type : "list",
// //             message : "select your opponent:",
// //             choices : ["skeleton","zombie","alien"]
// //         }
// //     ]
// // )
// // let p1 = new player(player.name)
// // let o1 = new opponent(opponent1.select)
// // do
// // {
// //  if(opponent1.select == "skeleton"){
// //      let ask = await inquirer.prompt
// //      (
// //          [
// //              {
// //                  name:    "opt",
// //                  type :   "list",
// //                  message: "what would you like to do?",
// //                  choices: ["Attack","Drink Portion","Run For Your Life.."]
// //              }
// //          ]
// //     );
// //  if(ask.opt  == "Attack")
// //     {
// //         let num =Math.floor(Math.random()* 2)
// //         if(num > 0){
// //             p1.fuelDecrease()
// //             console.log(`${p1.name} fuel is ${p1.fuel}`);
// //             console.log(`${o1.name} fuel is ${o1.fuel}`);
// //         if(p1.fuel<= 0){
// //             console.log(`you lose better luck Next time`)
// //         process.exit();
// //         }
// //         }
// //         if(num <= 0){
// //             o1.fuelDecrease()
// //             console.log(`${p1.name} fuel is ${p1.fuel}`);
// //             console.log(`${o1.name} fuel is ${o1.fuel}`);
// //             if(o1.fuel<= 0){
// //                 console.log(`congratulation you won`);
// //             process.exit();
// //             }
// //         }
// //         }
// // if(ask.opt == "Drink Portion")
// //     {
// //         p1.fuelIncrease()
// //         console.log(` you Drink Health Potion your fuel is ${p1.fuel}`);
// //     }
// // if(ask.opt == "Run For Your Life..")
// //     {
// //         console.log(`you lose better luck Next time`)
// //         process.exit();
// //     }
// // }
// // }
// // while(true)}
// ///////////////////////////////////////////////////////////////////////////////////////
// import inquirer from "inquirer";
// class Player {
//     name;
//     fuel = 100;
//     constructor(name:string) {
//         this.name = name;
//     }
//     fuelDecrease() {
//         let fuel = this.fuel - 25;
//         this.fuel = fuel;
//     }
//     fuelIncrease() {
//         this.fuel = 100;
//     }
// }
// class Opponent {
//     name;
//     fuel = 100;
//     constructor(name : string) {
//         this.name = name;
//     }
//     fuelDecrease() {
//         let fuel = this.fuel - 25;
//         this.fuel = fuel;
//     }
// }
// async function main() {
//     let playerName = await inquirer.prompt([
//         {
//             name: "name",
//             type: "input",
//             message: "Please enter your name:"
//         }
//     ]);
//     let opponentSelect = await inquirer.prompt([
//         {
//             name: "select",
//             type: "list",
//             message: "Select your opponent:",
//             choices: ["skeleton", "zombie", "alien"]
//         }
//     ]);
//     let player = new Player(playerName.name);
//     let opponent = new Opponent(opponentSelect.select);
//     do {
//         if (opponentSelect.select == "skeleton") {
//             let ask = await inquirer.prompt([
//                 {
//                     name: "opt",
//                     type: "list",
//                     message: "What would you like to do?",
//                     choices: ["Attack", "Drink Portion", "Run For Your Life.."]
//                 }
//             ]);
//             if (ask.opt == "Attack") {
//                 let num = Math.floor(Math.random() * 2);
//                 if (num > 0) {
//                     player.fuelDecrease();
//                     console.log(`${player.name} fuel is ${player.fuel}`);
//                     console.log(`${opponent.name} fuel is ${opponent.fuel}`);
//                     if (player.fuel <= 0) {
//                         console.log(`You lose, better luck next time`);
//                         process.exit();
//                     }
//                 }
//                 if (num <= 0) {
//                     opponent.fuelDecrease();
//                     console.log(`${player.name} fuel is ${player.fuel}`);
//                     console.log(`${opponent.name} fuel is ${opponent.fuel}`);
//                     if (opponent.fuel <= 0) {
//                         console.log(`Congratulations, you won!`);
//                         process.exit();
//                     }
//                 }
//             }
//             if (ask.opt == "Drink Portion") {
//                 player.fuelIncrease();
//                 console.log(`You drink health potion, your fuel is ${player.fuel}`);
//             }
//             if (ask.opt == "Run For Your Life..") {
//                 console.log(`You lose, better luck next time`);
//                 process.exit();
//             }
//         }
//     } while (true);
// }
// main();
// #!usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellowBright(" \n\t******** Welcome TO Adventure Game *********\n"));
class Hero {
    name;
    health = 100;
    constructor(name) {
        this.name = name;
    }
    decreaseHealth() {
        this.health -= 25;
    }
    increaseHealth() {
        this.health = 100;
    }
}
class Enemy {
    name;
    health = 100;
    constructor(name) {
        this.name = name;
    }
    decreaseHealth() {
        this.health -= 25;
    }
}
async function main() {
    const { heroName } = await inquirer.prompt({
        type: "input",
        name: chalk.gray("heroName"),
        message: chalk.blue("please enter your hero'name:"),
    });
    const { EnemyType } = await inquirer.prompt({
        type: "list",
        name: "EnemyType",
        message: chalk.blueBright("Select your Enemy"),
        choices: ["ZOMBIE", "SKELETON", "MONSTER"],
    });
    const hero = new Hero(heroName);
    const enemy = new Enemy(EnemyType);
    console.log(chalk.green(`${hero.name} encounters ${enemy.name}`));
    do {
        const { action } = await inquirer.prompt({
            type: "list",
            name: "action",
            message: chalk.blueBright("Choose your action"),
            choices: ["Attack", "Defend", "flee"],
        });
        switch (action) {
            case "Attack":
                const randomNum = Math.random();
                if (randomNum > 0.5) {
                    hero.decreaseHealth();
                    console.log(chalk.greenBright(`${hero.name} health: ${hero.health}`));
                    console.log(chalk.greenBright(`${enemy.name} health: ${enemy.health}`));
                    if (hero.health <= 0) {
                        console.log(chalk.redBright("You are defeated! Try again"));
                        return;
                    }
                }
                else {
                    enemy.decreaseHealth();
                    console.log(chalk.magenta(`${hero.name} health: ${hero.health}`));
                    console.log(chalk.greenBright(`${enemy.name} health: ${enemy.health}`));
                    if (enemy.health <= 0) {
                        console.log(chalk.yellowBright("\n\t******Congrats You Win!***********\n"));
                        return;
                    }
                }
                break;
        }
    } while (true);
}
main();
