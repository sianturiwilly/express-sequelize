const { todo } = require('../models');

class TodoController {
    static getTodos(req, res){
        todo.findAll({
            order: [
                ['id', 'ASC']
            ]
        })
            .then(todos => {
                res.json(todos)
            })
            .catch(err => {
                res.json(err)
            })
    }

    static addTodo(req, res){
        const { task, status } = req.body;

        todo.create({
            task, status
        })
            .then(result => {
                res.json(result)
            }).catch(err => {
                res.json(err)
            })
    }

    static findById(req, res){
        let id = +req.params.id
        todo.findByPk(id)
            .then(result => {
                if(result  !== null){
                    res.json(result)
                }else{
                    res.json({
                        message: "Todo not found."
                    })
                }
            })
            .catch(err => {
                res.json(err)
            })
    }

    static deleteTodo(req, res){
        let id = +req.params.id

        todo.destroy({
            where: {
                id
            }
        })
            .then(result => {
                if(result === 1){
                    message: "Todo has been deleted."
                }else{
                    res.json({
                        message: "Todo failed to deleted."
                    })
                }
                res.json(result)
            })
            .catch(err => {
                res.json(err)
            })
    }

    static updateTodo(req, res){
        let id = +req.params.id
        const { task, status } = req.body

        todo.update({
            task, status: Boolean(status)
        }, {
            where: {
                id
            }
        })
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.json(err)
        })
    }
}

module.exports = TodoController;