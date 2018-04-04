/**
 * Data.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    attributes: {
        temperature: {
            type: 'number',
            required: true,
        },

        humidity: {
            type: 'number',
            required: true,
        },

        date: {
            type: 'ref',
            columnType: 'datetime',
            required: true,
        },

        device: {
            model: 'Device',
            required: true,
            columnName: 'iddevice',
        }
    }
};

