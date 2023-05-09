const express = require('express')
const app = express()
const port = 8080

app.get('/', function(req,res){
    let unixtime = parseInt(Math.round(new Date().getTime() / 1000).toString())

//    var hex = unixtime.toString(16).toUpperCase();
   let hextime = unixtime.toString(16).toUpperCase();
   let hextodec = parseInt(hextime, 16)
   const date = new Date(hextodec*1000);

    res.send(hextime+' => '+ hextodec+' => '+date)
})
app.listen(port, () => {
    console.log('Server Berjalan di Port : ' + port);
  });