const mainRouter = require('express').Router();
const Songs = require('../models/songs');
const Rating = require('../models/rating');
const mongoose = require('mongoose');
mainRouter.get('/songs', async (request, response) => {
    try {
        const data = await Songs.findOne({});
        response.json(data.songs);
    } catch (error) {
        response.status(500).json([]);
    }

})
mainRouter.get('/rating', async (request, response) => {
    try {
        const data = await Rating.findOne({});
        response.json(data.rating);
    } catch (error) {
        response.status(500).json([]);
    }

})

mainRouter.post('/rating', async (request, response) => {
    try {
        const data = await Rating.findOne({});
        const title = request.body.title;
        if (title && data.rating.has(title)) {
            const curr = data.rating.get(title)
            if (request.body.action === 0) {
                data.rating.set(title, curr <= 0 ? 0 : curr - 1);
                await data.save();
            }
            else if (request.body.action === 1) {
                data.rating.set(title,curr+1);
                await data.save();
            }
        }
        response.json(data.rating);
    } catch (error) {
        console.log(error);
        response.status(500).json([]);
    }

})
module.exports = mainRouter;