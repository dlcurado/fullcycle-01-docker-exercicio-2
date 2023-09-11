const createApp = require("./index")
const port = 3000

const listenApp = async () => {
  let app
  app = await createApp()

  return app.listen(port, ()=>{
    console.log('Server Up : ' + port)
  })
}

listenApp()


