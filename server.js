const summary = {
  Monday:
  { subject: "Terminal",
    imgUrl: "https://extensions.gnome.org/extension-data/screenshots/screenshot_442_1.png",
    youtubeUrl: "https://www.youtube.com/watch?v=5XgBd6rjuDQ"
    } ,
  Tuesday: 
  {
    subject: "JS Basics" ,
    imgUrl: "https://miro.medium.com/max/2136/1*Q3UFmjW9fHKcF5EKucyN1g.jpeg",
    youtubeUrl: "https://www.youtube.com/watch?v=U8XF6AFGqlc"
  },
  Wednesday:
  { subject: "Terminal",
    imgUrl: "https://extensions.gnome.org/extension-data/screenshots/screenshot_442_1.png",
    youtubeUrl: "https://www.youtube.com/watch?v=5XgBd6rjuDQ"
}
}

const express = require('express')

const app = express()

app.get ('/summary/:day/',
(request,response) =>
{
  response.send(request.params.day)

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

app.get ('/:day/' ,
(request,reponse) => {
  const page = render()

  response.send(page)
})


const port = process.env.PORT || 3000


function onListen () {
  console.log(`Listening on :${port}`)
}

app.listen(port,onListen)
