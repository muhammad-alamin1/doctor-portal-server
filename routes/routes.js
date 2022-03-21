const addAppointmentRouter = require("./addAppointmentRoute");
const userRouter = require("./allUserRoute");
const contactRouter = require("./contactRoute");
const dashboardRouter = require("./dashboardRoute");
const doctorRouter = require("./doctorRoute");
const reviewRouter = require("./reviewRoute");
const rootRouter = require("./rootRoute");

const routes = [
    {
        path: '/users',
        handler: userRouter
    },
    {
        path: '/doctor',
        handler: doctorRouter
    },
    {
        path: '/addAppointment',
        handler: addAppointmentRouter
    },
    {
        path: '/dashboard',
        handler: dashboardRouter
    },
    {
        path: '/review',
        handler: reviewRouter
    },
    {
        path: '/contact-us',
        handler: contactRouter
    },
    {
        path: '/',
        handler: rootRouter
    },
];


const allRoutes = app => {
    routes.forEach(route => {
        app.use(route.path, route.handler);
    })
}


module.exports = allRoutes;