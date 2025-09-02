import express from 'express'
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const app = express()
const PORT = process.env.PORT || 3000; 
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.send('Hello Express from Render 😍😍😍. <a href="dylan">dylan</a>')
})

// endpoints...middlewares...apis? 

// send an html file
app.get('/dylan', (req, res) => {
 
  res.sendFile(join(__dirname, 'public', 'dylan.html')) 

})

app.get('/api/dylan', (req, res) => {
  // res.send('dylan. <a href="/">home</a>')
  const myVar = 'Hello from server!';
  res.json({ myVar });
})


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})