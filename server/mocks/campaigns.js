module.exports = function (app) {
    var express = require('express');
    var campaignsRouter = express.Router();

    // Use the body-parser library in this service
    var bodyParser = require('body-parser');
    campaignsRouter.use(bodyParser.json());

    var campaignDB = app.campaignDB;

    campaignsRouter.get('/', function (req, res) {
        delete req.query["_"];
        campaignDB.find(req.query).exec(function (error, campaigns) {
            res.send({
                'status': "ok",
                'data': campaigns
            })
        })
    });

    campaignsRouter.get('/guide', function (req, res) {
        delete req.query["_"];
        campaignDB.find(req.query).exec(function (error, campaigns) {
            res.send({
                'status': "ok",
                'data': campaigns
            })
        })
    });

    campaignsRouter.get('/campaigns/:id', function (req, res) {
        delete req.query["_"];
        campaignDB.find(req.query).exec(function (error, campaigns) {
            res.send({
                'status': "ok",
                'data': campaigns
            })
        })
    });

    campaignsRouter.get('/:id', function (req, res) {
        campaignDB.find({id: req.params.id}).exec(function (error, campaigns) {
            if (campaigns.length > 0)
                res.send({
                    'status': "ok",
                    'data': campaigns[0]
                });
            else {
                res.send({
                    'data': null
                });
            }
        });
    });

    // No changes from here on down
    campaignsRouter.post('/', function (req, res) {
        res.status(201).end();
    });

    campaignsRouter.put('/:id', function (req, res) {
        // we never change campaigns
    });

    campaignsRouter.delete('/:id', function (req, res) {
        res.status(204).end();
    });

    app.use('/ws/campaigns', campaignsRouter);
};
