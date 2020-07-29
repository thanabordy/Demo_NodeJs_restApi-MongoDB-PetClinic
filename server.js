const express = require('express')
const cors = require('cors')
const app = express()

// middle ware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use('/api', require('./routes/clinic'))
app.use('/api', require('./routes/customer'))

app.get('/', (req, res) => {
    res.json({ message: 'Ahoy!' })
})

const PORT = process.env.PORT || 2000
app.listen(PORT, () => {
    const env = `${process.env.NODE_ENV || 'development'}`
    console.log(`App listening on port ${PORT}`)
    console.log(`App listening on env ${env}`)
    console.log(`Press Ctrl+C to quit.`)
})