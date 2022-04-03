const server = require('../Server/service');
const RoboController = require('../Controller/RoboController');
const cors = require('cors');

server.use(cors());

robo = new RoboController;

//-----------Rotas-------------//

//list
server.post("/", async (req, res) => {
    const response = await robo.init(req.body);
    res.status(response.status).send(response.data);
})

server.post("/robot", async (req, res) => {
    const response = await robo.move(req.body);
    res.status(response.status).send(response.data);
})


module.exports = server;