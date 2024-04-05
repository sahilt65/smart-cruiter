const mongoose = require('mongoose');


const OrganizationSchema = new mongoose.Schema({

    username: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },


    organization_name: {

        type: String,
        required: [true, 'Name is required'],

    },
    phoneNo: {
        type: Number,
        required: [true, 'Phone No is required'],
    },
    website: {
        type: String,
        required: [true, 'Website URL is required'],
    },
    logo: {
        type: String,
        required: true
    },
    departments: {
        type: [String],
        min: 1,

    },
    office_address: {
        type: String,

    },
    office_city: {
        type: String,

    },
    office_country: {
        type: String,
    
    },

    fb_url: {
        type: String,

    },
    linkedIn_url: {
        type: String,

    },
    insta_url: {
        type: String,

    },
    yt_url: {
        type: String,

    },
    // team_members: [

    //     {
    //         name: String,
    //         email: String,
    //         role: String
    //     }
    // ]
    team_members: [{

        name: { type: String, required: true },
        email: { type: String, required: true, max: 20 },
        role: { type: String, required: true }

    }]

})


const OrganizationModal = mongoose.model('organization', OrganizationSchema);

module.exports = OrganizationModal;