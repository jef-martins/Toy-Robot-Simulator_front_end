//const readlineSync = require('readline-sync');

class RoboController {

    table = [[], [], [], [], []];
    command = '';
    c = [];

    directions = {
        north: -1,
        south: 1,
        east: -1,
        west: 1
    }

    reset(table) {
        for (let i = 0; i < 5; i++)
            for (let j = 0; j < 5; j++)
                table[i][j] = 'o';
        return table;
    }

    engineRobot() {
        switch (command.toLowerCase()) {
            case 'report':
                console.log(table);
                break;
            case 'move':
                if (c[2] == 'south' || c[2] == 'north') {
                    const verify = +c[0] + +directions[c[2]];
                    if (!(verify < 0 || verify >= 5)) {
                        c[0] = +c[0] + +directions[c[2]];
                        table = this.reset(table);
                        table[c[0]][c[1]] = 'X';
                    } else
                        console.log("não pode mover alem do limite");
                } else {
                    const verify = +c[1] + +directions[c[2]];
                    if (!(verify < 0 || verify >= 5)) {
                        c[1] = +c[1] + +directions[c[2]];
                        table = this.reset(table);
                        table[c[0]][c[1]] = 'X';
                    } else
                        console.log("não pode mover alem do limite");
                }
                break;
            case 'left':
                c[2] = 'east';
                break;
            case 'right':
                c[2] = 'west';
                break;
            case 'up':
                c[2] = 'north';
                break;
            case 'down':
                c[2] = 'south';
                break;
            default:
                console.log("comando invalido");
        }
    }

    async init(configs) {
        this.table = this.reset(this.table);

        this.c = Object.values(configs);

        this.table[this.c[0]][this.c[1]] = 'X';

        return { "status": 200, data: this.table };
    }

    async move(command) {
        this.engineRobot()

        return { "status": 200, data: this.table };
    }

}

module.exports = RoboController;