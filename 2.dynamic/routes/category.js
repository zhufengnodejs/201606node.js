module.exports = function (app) {
    app.route('/categories')
        .get(function (req, res) {
            res.send([{id: 1}, {id: 2}])
        })
        .post(function (req, res) {
            res.send({id: 1})
        })
        .delete(function (req, res) {
            res.send({})
        })
        .put(function (req, res) {
            res.send({id: 1})
        })
}