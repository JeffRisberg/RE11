module.exports = function (app) {
    var express = require('express');
    var keywordsRouter = express.Router();

    // Use the body-parser library in this service
    var bodyParser = require('body-parser');
    keywordsRouter.use(bodyParser.json());

    var keywordDB = app.keywordDB;

    keywordsRouter.get('/', function (req, res) {
        delete req.query["_"];
        keywordDB.find(req.query).exec(function (error, keywords) {
            res.send({
                'status': "ok",
                'data': keywords
            })
        })
    });

    keywordsRouter.get('/guide', function (req, res) {
        delete req.query["_"];
        keywordDB.find(req.query).exec(function (error, keywords) {
            res.send({
                'status': "ok",
                'data': keywords
            })
        })
    });

    keywordsRouter.get('/keywords/:id', function (req, res) {
        delete req.query["_"];
        keywordDB.find(req.query).exec(function (error, keywords) {
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
