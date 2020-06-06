const express = require("express")
const server = express()

//Configurar pasta Publica
server.use(express.static("public"))



//utilizando tamplate engine

const nunjucks =  require("nunjucks")
nunjucks.configure("src/views",{
    express: server,
    noCache: true
})


// configurar caminhos da minha aplicação
//pagina inicial 
//req: requisição
//res: resposta
server.get("/",(req, res) => {
    return res.render("index.html",{title:"Um titulo"})
})


server.get("/create-point",(req, res)=> {
    return res.render("create-point.html")
})


//ligar o Servidor 

server.listen(3000)

