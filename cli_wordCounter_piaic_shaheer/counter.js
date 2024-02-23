import chalk from "chalk";
import inquirer from "inquirer";
/* The user will enter a english paragraph
and all that is needed is to just to implement
counting characters and words without whitespaces.
Create a GitHub repository for the project
and submit its URL in the project submission form. */
const green = chalk.greenBright.bold.underline;
const red = chalk.redBright.bold;
const yellow = chalk.yellowBright.bold;
const blue = chalk.blueBright;
const whites = chalk.whiteBright.bold;
console.log("\n\n");
console.log("\n\n");
console.log(green(" ██╗  ██╗ ███  ██╗ ████ ██╗ ███  ███╗         █████╗  █████╗  ██╗   ██╗ ███╗ ░██╗ ████████╗ ███████╗ ██████╗ "));
console.log(green(" ██║  ██╗  ██║ ██╔══██╗ ██╔══██╗ ██╔══██╗    ██╔══██╗ ██╔══██╗ ██║   ██║ ████╗░██║ ╚══██╔══╝ ██╔════╝ ██╔══██╗"));
console.log(green(" ╚██╗████╗██╔╝ ██║  ██║ ██████╔╝ ██║  ██║    ██║  ╚═╝ ██║  ██║ ██║   ██║ ██╔██╗██║    ██║    █████╗   ██████╔╝"));
console.log(green("  ████╔═████║  ██║  ██║ ██╔══██╗ ██║  ██║    ██║  ██╗ ██║  ██║ ██║   ██║ ██║╚████║    ██║    ██╔══╝   ██╔══██╗"));
console.log(green("  ╚██╔╝ ╚██╔╝  ╚█████╔╝ ██║  ██║ ██████╔╝    ╚█████╔╝ ╚█████╔╝ ╚██████╔╝ ██║ ╚███║    ██║    ███████╗ ██║  ██║"));
console.log(green("   ╚═╝   ╚═╝    ╚════╝  ╚═╝  ╚═╝ ╚═════╝      ╚════╝   ╚════╝   ╚═════╝  ╚═╝  ╚══╝    ╚═╝    ╚══════╝ ╚═╝  ╚═╝"));
console.log();
console.log(blue(`Ｄｅｖｅｌｏｐｅｄ  ｗｉｔｈ ${red('❤')}  ｂｙ  Ｓｈａｈｅｅｒ`));
console.log();
;
async function counts() {
    console.log();
    let paragraph1 = await inquirer.prompt([
        {
            name: "user",
            type: "string",
            message: green("Enter a paragraph or sentence: "),
        }
    ]);
    let paragraph = paragraph1.user;
    let countLetter = 0;
    for (let counter = 0; counter < paragraph.length; counter++) {
        if (paragraph[counter] == " ") {
            countLetter += 0;
        }
        else if (paragraph[counter] != " ") {
            countLetter += 1;
        }
    }
    const words = paragraph.split(" ");
    console.log(red(`\nYour number of words: ${words.length}`));
    console.log(red(`\nYour Number of letters: ${countLetter}\n`));
}
await counts();
do {
    var start = await inquirer.prompt([{
            name: "again",
            type: "list",
            choices: ["Yes", "No"],
            message: yellow("Start Again?\n")
        }]);
    if (start.again == "Yes") {
        await counts();
    }
    else if (start.again == "No") {
        console.log(green("\nThanks for using Word Counter\n"));
        break;
    }
} while (start.again != "No");
