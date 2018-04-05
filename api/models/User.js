/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    attributes: {
        first_name: {
            type: 'string',
            required: true,
        },

        last_name: {
            type: 'string',
            required: true,
        },

        email: {
            type: 'string',
            required: true,
            isEmail: true,
        },

        password: {
            type: 'string',
            required: true,
            //encrypt: true,
            custom: function (value) {
                // • be a string
                // • be at least 6 characters long
                // • contain at least one number
                // • contain at least one letter
                return _.isString(value) && value.length >= 8 && value.match(/[a-z]/i) && value.match(/[0-9]/);
            }
        },

        description: {
            type: 'string',
            allowNull: true,
        },

        customers: {
            collection: 'customer',
            via: 'users'
        }
    }
};

