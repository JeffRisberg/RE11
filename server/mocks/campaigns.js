const express = require('express');

const campaignsRouter = express.Router();

const bodyParser = require('body-parser');

module.exports = (app) => {
    app.use(bodyParser.urlencoded({
        extended: true,
    }));

    campaignsRouter.use(bodyParser.json());

    var campaignDB = app.campaignDB;

    campaignsRouter.get('/', function (req, res) {
        const skip = req.query.skip;
        const limit = req.query.limit;
        const sort = req.query.sort ? req.query.sort : { '_id' : 1};
        let query = campaignDB.find(req.query).sort(sort);

        if (skip) query = query.skip(skip);
        if (limit) query = query.limit(limit);

        delete req.query['_'];
        delete req.query['skip'];
        delete req.query['limit'];
        delete req.query['sort'];

        query.exec(function (error, campaigns) {
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
