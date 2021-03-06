const mongoose = require("mongoose");
const app = require("./app");
const port = process.env.PORT || 3080;
const { API_VERSION, IP_SERVER, PORT_DB } = require("./config");

//mongoose.set("useFindAndModify", false);
//mongodb+srv://root:toor@cluster0.1ae14.mongodb.net/cluster0?retryWrites=true&w=majority
//mongodb://${IP_SERVER}:${PORT_DB}/italoBurguer

mongoose.connect(`mongodb+srv://root:toor@cluster0.1ae14.mongodb.net/cluster0?retryWrites=true&w=majority`,
{useNewUrlParser: true, useUnifiedTopology: true }, 
(err, res) => {
    if(err){
        throw err;
    }else{
        console.log("CONEXIÓN ESTABLECIDAD CON LA BASE DE DATOS: ITALO BURGUER");

        app.listen(port, () =>{
            console.log("Server is running on port-> " +port);
            console.log(`http://${IP_SERVER}:${port}/api/${API_VERSION}/`);
        });
    }
});