require('dotenv').config()
const express = require('express')
const mysql = require('mysql2/promise')
const random_name = require('node-random-name')

async function createApp() {
  const app = express()
  const connection = mysql.createPool(process.env.DB_CONNECTION);

  app.get('/', async (req, res)=>{
    await addName(random_name());
    const namelist = await getNames();
    //res.json(namelist);
    var resultado = '<h1>Full Cycle Rocks!</h1>'
    resultado += '<ul>'
    namelist.forEach((item)=>{
      resultado += '<li>' + item.name + '</li>';
    });
    resultado += '</ul>'

    res.send(resultado)
  })

  app.post('/newname', async (req, res)=>{
    const name = req.query.name
    await addName(name);
    var resultado = '<h1>Full Cycle Rocks!</h1>'
    resultado += '<h3>Nome criado com sucesso!</h3>'
    resultado += '<p>Nome:' + name + '</p>'
    res.send(resultado)
  })

  async function getNames() {
    const namelist = await connection.query("SELECT * FROM people;");
    return namelist[0];
  }

  async function addName(name) {
    const sql = 'INSERT INTO people(name) values(?);'
    await connection.query(sql, name)
  }

  return app
}

module.exports = createApp