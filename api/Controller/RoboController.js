
class RoboController {

    table = [[], [], [], [], []];
    command = '';
    message = '';
    status = 0;
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
        switch (this.command.toLowerCase()) {
            case 'report':
                console.log(this.table);
                break;
            case 'move':
                if (this.c[2] == 'south' || this.c[2] == 'north') {
                    const verify = +this.c[0] + +this.directions[this.c[2]];
                    if (!(verify < 0 || verify >= 5)) {
                        this.c[0] = +this.c[0] + +this.directions[this.c[2]];
                        this.table = this.reset(this.table);
                        this.table[this.c[0]][this.c[1]] = 'X';
                    } else
                        this.message = ("não pode mover alem do limite");
                } else {
                    const verify = +this.c[1] + +this.directions[this.c[2]];
                    if (!(verify < 0 || verify >= 5)) {
                        this.c[1] = +this.c[1] + +this.directions[this.c[2]];
                        this.table = this.reset(this.table);
                        this.table[this.c[0]][this.c[1]] = 'X';
                    } else
                        this.message = ("não pode mover alem do limite");
                }
                break;
            case 'left':
                this.c[2] = 'east';
                break;
            case 'right':
                this.c[2] = 'west';
                break;
            case 'up':
                this.c[2] = 'north';
                break;
            case 'down':
                this.c[2] = 'south';
                break;
            default:
                this.message = ("comando invalido");
        }
    }

    async init(configs) {
        this.table = this.reset(this.table);
        this.message = this.command = '';

        this.c = Object.values(configs);

        this.table[this.c[0]][this.c[1]] = 'X';

        return { status: 200, data: {table: this.table, message: this.message} };
    }

    async move({ command }) {
        this.message = '';
        this.command = command;

        this.engineRobot();

        return { status: 200, data: {table: this.table, message: this.message} };
    }

}

module.exports = RoboController;