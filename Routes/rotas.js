const server = require('../Server/service');
const RoboController = require('../Controller/RoboController');
const cors = require('cors');

server.use(cors());

robo = new RoboController;

//-----------Rotas-------------//

//list
server.get("/", async (req, res) => {
    const response = await robo.list();
    res.status(response.status).send(response.data)
})
//select
server.get("/:phone", async (req, res) => {
    const response = await robo.select(req.params.phone);

    res.status(response.status).send(response.data);
})
//add
server.post("/", async (req, res) => {
    response = await robo.add(req);

    res.status(response.status).send(response.data);
})
//beforeAdd
server.post("/week", async (req, res) => {
    response = await robo.beforeAdd(req);

    res.status(response.status).send(response.data);
})
//select week
server.get("/week/:date", async (req, res) => {
    response = await agenda.selectAllInWeek(req.params.date, '');

    res.status(response.status).send(response.data);
})
//update
server.put("/:id", async (req, res) => {
    const response = await robo.update(req, req.params.id);
    res.status(response.status).send(response.data);
})
//delete
server.delete("/:id", async (req, res) => {
    const response = await robo.delete(req.params.id);
    console.log(response)
    res.status(response.status).send(response.data);
})

module.exports = server;