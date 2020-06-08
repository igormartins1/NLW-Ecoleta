// importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//iniciar o obejto de banco de dados
const db = new sqlite3.Database("./src/database/database.db")

//utilizar o objeto de  banco de dados, para nossa operação
db.serialize(() =>{

    // com comandos SQL eu vou:

    //1-criar uma tabela 
    //

db.run(`
     CREATE TABLE IF NOT EXISTS places(
         id INTERGER PRIMARY KEY AUTOINCREMENT,
         image TEXT,
         name TEXT,
         adress TEXT,
         adress2 Text,
         state TEXT,
         city TEXT,
         items TEXT,
     );
`)

    //2-inserir dados na tabela 
    const query =`
        INSERT INTO places(
            image,
            name,
            adress,
            adress2,
            state,
            city,
            items
        ) VALUES(
            ?,?.?,?,?,?,?);
`

    const values = [
        "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=801&q=80",
        "Colectoria",
        "Guilherme Gembala, Jardim América",
        "Número 02",
        "Santa Catarina",
        "Rio do Sul",
        "Residuos Eletronicos e Lampadas"

    ]

    function afterInsertData(){
        if (err) {
            return console.log(err)
        }
        console.log("Cadastro com sucesso")
        console.log(this)
    }

    //db.run(query, values, afterInsertData)
       


    //3-consultar dados da tabela 

    db.all(` SELECT * FROM places`, function(err,rows){
        if (err) {
            return console.log(err)
        }

        Console.log("Aqui estão seus Registros")
        console.log(rows)

    })

    //4-deletar um dados da tabela 

    db.run(`DELETE FROM places WHERE id= ?`,[1], function(err){
        if (err) {
            return console.log(err)
        }

    console.log("Registro Deletado com Sucesso!")

    })
})