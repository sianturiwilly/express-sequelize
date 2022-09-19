const route = require('express').Router();

route.get('/', (req, res) => {
    res.send('Hello World!')
})

const todoRoutes = require('./todo');
route.use('/todos', todoRoutes);
  
// route.get('/items', (req, res) => {
//     res.send('Pages Items Utama')
// })

module.exports = route;