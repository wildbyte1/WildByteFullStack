import express from 'express'
import 'dotenv/config'
import cors from 'cors'

const app = express();

// Middlewares
app.use(cors())
app.use(express.json())

// Routes
app.get('/', (req, res)=> res.send("API is Working"))
 
const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> {
    console.log('Server is running on port' + PORT)
})

export default app;