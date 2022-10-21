const path = require('path')
const express = require('express')
const app = express()
const port = 8080

/* your app config here */
app.use('/', express.static(path.resolve(__dirname, '../vue-project/dist')))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})