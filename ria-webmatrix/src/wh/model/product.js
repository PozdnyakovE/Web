Ext.define('wh.model.Product', {
    extend: 'Ext.data.Model',
    requires: [
        'Ext.data.reader.Json'
    ],

    fields: ['id',
        {name: 'name',  type: 'string'},
        {name: 'country',  type: 'string'},
        {name: 'price',   type: 'int', convert: null},
        {name: 'price_dol',   type: 'int', convert: null},
        {name: 'quantity',   type: 'int', convert: null},

    ],
    

    changeName: function(value) {
        this.set('name', value);
    }
});