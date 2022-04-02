const rotas = require("../Routes/rotas");

rotas.listen(8081, () => {
    console.log("Server On in port 8081 at", new Date().toLocaleString());
});