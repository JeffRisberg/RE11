const express = require('express');

const numeric = require("../util/numeric");

const notificationsRouter = express.Router();

const bodyParser = require('body-parser');

function isNormalInteger(str) {
    var n = Math.floor(Number(str));
    return String(n) === str && n >= 0;
}

module.exports = (app) => {
    app.use(bodyParser.urlencoded({
        extended: true,
    }));

    notificationsRouter.use(bodyParser.json());

    var keywordDB = app.keywordDB;

    notificationsRouter.get('/', function (req, res) {
        const skip = req.query.skip;
        const limit = req.query.limit;
        const sortDir = req.query.sortDir ? parseInt(req.query.sortDir) : 1;
        const sort = req.query.sort ? {[req.query.sort] : sortDir} : {'id' : sortDir};

        delete req.query['_'];
        delete req.query['skip'];
        delete req.query['limit'];
        delete req.query['sort'];
        delete req.query['sortDir'];

        keywordDB.count(req.query).exec(function (error, count) {
            let query = keywordDB.find(req.query);

            if (numeric.isNormalInteger(skip)) query = query.skip(parseInt(skip));
            if (numeric.isNormalInteger(limit)) query = query.limit(parseInt(limit));

            query.sort(sort).exec(function (error, notifications) {
                res.send({
                    'status': "ok",
                    'data': notifications,
                    'count' : count
                })
            })
        });
    });

    notificationsRouter.get('/:id', function (req, res) {
        keywordDB.find({id: req.params.id}).exec(function (error, notifications) {
            if (notifications.length > 0)
                res.send({
                    'status': "ok",
                    'data': notifications[0]
                });
            else {
                res.send({
                    'data': null
                });
            }
        });
    });

    // No changes from here on down
    notificationsRouter.post('/', function (req, res) {
        res.status(201).end();
    });

    notificationsRouter.put('/:id', function (req, res) {
        // we never change notifications
    });

    notificationsRouter.delete('/:id', function (req, res) {
        res.status(204).end();
    });

    app.use('/ws/notifications', notificationsRouter);
};
