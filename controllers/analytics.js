module.exports.overview = (req, res) => {
    res.status(200).json({
        overview: 'overview from controller'
    })
};

module.exports.analytics = (req, res) => {
    res.status(200).json({
        analytics: 'analytics from controller'
    })
};