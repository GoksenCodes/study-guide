const axios = require('axios')

const day = process.argv[2]

const url = 'https://goksen-student-guide.herokuapp.com/summary'

async function logSummary() {
  try {
    const response = await axios.get(url)
    console.log(response.data)
  } catch (error){
    console.log(error.message)
  }
}




logSummary()