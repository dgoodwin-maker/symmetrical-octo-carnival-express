import express from 'express'
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
// import { dirname } from 'node:path';
// import { fileURLToPath } from 'node:url';

const app = express()
const PORT = process.env.PORT || 3000; 
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')))
// app.use(express.static(path.join(__dirname, 'public'))); // Serve static files
app.use(express.static(join(__dirname, 'public')));
// app.use(express.static(__dirname + 'public'));


app.get('/', (req, res) => {
  res.send('Hello Express from Render 😍😍😍. <a href="dylan">dylan</a>')
})

// endpoints...middlewares...apis? 
// send an html file

app.get('/dylan', (req, res) => {
  // res.send('dylan. <a href="/">home</a>')

  res.sendFile('dylan.html'); 

})



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
