const rootRouter = require('express').Router({ caseSensitive: true });

rootRouter.post('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Root API Server'
    })
});


module.exports = rootRouter;