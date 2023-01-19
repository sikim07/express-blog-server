const express = require('express')
const app = express()
const port = 5500

app.get('/', (req, res) => {
    console.log('[/] URL Called')
    res.send('Hello World!')
})

app.get('/test', (req, res) => {
    console.log('[/test] URL Called')
    res.json({
        ok: 'true',
        data: 'test'
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port [${port}]`)
})