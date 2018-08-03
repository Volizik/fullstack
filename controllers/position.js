const Position = require('../models/Position');
const errorHandler = require('../utils/errorHandler');

module.exports.remove = async (req, res) => {
    try {
        await Position.remove({_id: req.params.id});
        res.status(200).json({
            message: 'Позиция удалена'
        })
    } catch (e) {
        errorHandler(e, res)
    }
};

module.exports.update = async (req, res) => {
    try {
        const position = await Position.findOneandUpdate(
            {_id: req.params.id},
            {$set: req.body},
            {new: true}
        );
        res.status(200).json(position)
    } catch (e) {
        errorHandler(e, res)
    }
};

module.exports.getByCategoryId = async (req, res) => {
    try {
        const positions = await Position.find({
            category: req.params.categoryId,
            user: req.user.id
        });
        res.status(200).json(positions);
    } catch (e) {
        errorHandler(e, res)
    }
};

module.exports.create = async (req, res) => {
    try {
        const position = await new Position({
            name: req.body.name,
            cost: req.body.cost,
            category: req.body.category,
            user: req.user.id
        }).save();
        res.status(201).json(position);
    } catch (e) {
        errorHandler(e, res)
    }
};