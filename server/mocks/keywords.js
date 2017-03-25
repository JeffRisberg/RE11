const express = require('express');

const numeric = require("../util/numeric");

const keywordsRouter = express.Router();

const bodyParser = require('body-parser');

function isNormalInteger(str) {
    var n = Math.floor(Number(str));
    return String(n) === str && n >= 0;
}

module.exports = (app) => {
    app.use(bodyParser.urlencoded({
        extended: true,
    }));

    keywordsRouter.use(bodyParser.json());

    var keywordDB = app.keywordDB;

    keywordsRouter.get('/', function (req, res) {
        const skip = req.query.skip;
        const limit = req.query.limit;
        const sort = req.query.sort ? {[req.query.sort] : 1} : {'id' : 1};

        delete req.query['_'];
        delete req.query['skip'];
        delete req.query['limit'];
        delete req.query['sort'];

        let query = keywordDB.find(req.query);

        if (numeric.isNormalInteger(skip)) query = query.skip(parseInt(skip));
        if (numeric.isNormalInteger(limit)) query = query.limit(parseInt(limit));

        query.exec(sort).exec(function (error, keywords) {
            res.send({
                'status': "ok",
                'data': keywords
            })
        })
    });

    keywordsRouter.get('/:id', function (req, res) {
        keywordDB.find({id: req.params.id}).exec(function (error, keywords) {
            if (keywords.length > 0)
                res.send({
                    'status': "ok",
                    'data': keywords[0]
                });
            else {
                res.send({
                    'data': null
                });
            }
        });
    });

    // No changes from here on down
    keywordsRouter.post('/', function (req, res) {
        res.status(201).end();
    });

    keywordsRouter.put('/:id', function (req, res) {
        // we never change keywords
    });

    keywordsRouter.delete('/:id', function (req, res) {
        res.status(204).end();
    });

    app.use('/ws/keywords', keywordsRouter);
};
