const readlineSync = require('readline-sync');

function reset(table) {
    for (let i = 0; i < 5; i++)
        for (let j = 0; j < 5; j++)
            table[i][j] = 'o';
    return table;
}

function main() {
    let table = [[], [], [], [], []];
    let command = '';

    table = reset(table);

    command = readlineSync.question('Digite o comando inicial? ');
    const c = command.split(' ');
    table[c[0]][c[1]] = 'X';

    const directions = {
        north: -1,
        south: 1,
        east: -1,
        west: 1
    }

    do {
        command = readlineSync.question('Digite um comando? ');

        switch (command.toLowerCase()) {
            case 'report':
                console.log(table);
                break;
            case 'move':
                if (c[2] == 'south' || c[2] == 'north') {
                    table = reset(table);
                    c[0] = +c[0] + +directions[c[2]];
                    table[c[0]][c[1]] = 'X';
                } else {
                    table = reset(table);
                    c[1] = +c[1] + +directions[c[2]];
                    table[c[0]][c[1]] = 'X';
                }
                break;
            case 'left':
                c[2] = 'east';
                break;
            case 'rigth':
                c[2] = 'west';
                break;
            case 'up':
                c[2] = 'north';
                break;
            case 'down':
                c[2] = 'south';
                break;
        }

    } while (command.toLowerCase() != 'exit');
}

main();  