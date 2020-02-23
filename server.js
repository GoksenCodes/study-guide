const summary = {
  Monday:
  { subject: "Terminal",
    imgUrl: "https://extensions.gnome.org/extension-data/screenshots/screenshot_442_1.png",
    youtubeUrl: "https://www.youtube.com/watch?v=5XgBd6rjuDQ", 
    linkToNextDay: "https://goksen-student-guide.herokuapp.com/tuesday"
    } ,
  Tuesday: 
  {
    subject: "JS Basics" ,
    imgUrl: "https://miro.medium.com/max/2136/1*Q3UFmjW9fHKcF5EKucyN1g.jpeg",
    youtubeUrl: "https://www.youtube.com/watch?v=U8XF6AFGqlc",
    linkToNextDay: "https://goksen-student-guide.herokuapp.com/wednesday",
    linkToPreviousDay: "https://goksen-student-guide.herokuapp.com/monday"
  },
  Wednesday:
  { subject: "Terminal",
    imgUrl: "https://extensions.gnome.org/extension-data/screenshots/screenshot_442_1.png",
    youtubeUrl: "https://www.youtube.com/watch?v=5XgBd6rjuDQ",
    linkToNextDay: "https://goksen-student-guide.herokuapp.com/thursday",
    linkToPreviousDay: "https://goksen-student-guide.herokuapp.com/tuesday"
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
    <title>StudyGuide</title>
  </head>
  <body>
    <h1>Welcome to Study Guide/h1>
    <h2>Summary<h2>
  </body>
</html>`

return document

}

app.get ('/:day/' ,
(request,reponse) => {
  const document = render()

  response.send(document)
})


const port = process.env.PORT || 3000


function onListen () {
  console.log(`Listening on :${port}`)
}

app.listen(port,onListen)
