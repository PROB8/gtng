const express       = require('express');
const app           = express()
const path          = require('path')



app.get('*', (req,res) => {
    const index = 'asdfasd'
})


let server
const runServer = (port=3001) => {
    
    server = app.listen(port, ()=> {
        console.log(`app runing on port ${port}`)
    })

}


const closeServer = () => {
    server.close()
}

if (require.main === module) {
    runServer();
  }
  
  module.exports = {
    app, runServer, closeServer
  };