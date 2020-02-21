const summary = {
  Day1:"JS Basics" ,
  Day2:"JS Basics2" ,
  Day3:"JS Basics3" ,
  Day4:"Servers",
  Day5:"Clients",
}

const express = require('express')

const app = express()

app.get ('/summary/:day',
(request,response) =>
{
  response.send(summary)
})

function render(){
  const document = 
  `<html>
  <head>
    <title>Home</title>
  </head>
  <body>
    <h1>Study Guide/h1>
    <p>coming soon...</p>
  </body>
</html>`

return document

}

app.get ('/:day' ,
(request,reponse) => {
  const page = render()

  response.send(page)
})

const port = 3000

function onListen () {
  console.log(`Listening on :${port}`)
}

app.listen(port,onListen)

