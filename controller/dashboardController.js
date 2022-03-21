const BookingData = require("../model/BookingData");

const bookingData = async (req, res, next) => {
    try {
        const data = [
            {
                id: 1,
                subject: 'Teeth Orthodontics',
                visitingHour: '8:00 AM - 9:00 AM',
                totalSpace: 10
            },
            {
                id: 2,
                subject: 'Cosmetic Dentistry',
                visitingHour: '10:50 AM - 11:30 AM',
                totalSpace: 10
            },
            {
                id: 3,
                subject: 'Teeth Cleaning',
                visitingHour: '5:00 PM - 6:00 PM',
                totalSpace: 10
            },
            {
                id: 4,
                subject: 'Cavity Protection',
                visitingHour: '7:00 AM - 8:30 AM',
                totalSpace: 10
            },
            {
                id: 5,
                subject: 'Teeth Orthodontics',
                visitingHour: '8:00 AM - 9:00 AM',
                totalSpace: 10
            },
            {
                id: 6,
                subject: 'Teeth Orthodontics',
                visitingHour: '8:00 AM - 9:00 AM',
                totalSpace: 10
            }
        ]

        BookingData.insertMany(data, function (err, docs) {
            if(err) console.log(err);
            else console.log('Inserted many data successfully');
        })
        
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    bookingData
}