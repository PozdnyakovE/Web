Ext.define('wh.view.product.Edit', {
    extend: 'Ext.window.Window',
    alias : 'widget.productedit',

    requires: ['Ext.form.Panel'],

    title : 'Редактирование Товара',
    layout: 'fit',
    autoShow: true,
    width: 280,

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                padding: '5 5 0 5',
                border: false,
                style: 'background-color: #fff;',

                items: [
                    {
                        xtype: 'textfield',
                        name : 'name',
                        fieldLabel: 'Название'
                    },
                    {
                        xtype: 'textfield',
                        name : 'country',
                        fieldLabel: 'Страна-производитель'
                    },
                    {
                        xtype: 'textfield',
                        name : 'price',
                        fieldLabel: 'Цена'
                    },
                    {
                        xtype: 'textfield',
                        name : 'price_dol',
                        fieldLabel: 'Цена в долларах'
                    },
                    {   xtype: 'numberfield',
                        anchor: '100%',
                        name: 'quantity',
                        fieldLabel: 'Количество',
                        value: 1,
                        maxValue: 99,
                        minValue: 1
                    }
                ],
                buttons: [{
                        text: 'How many?',
                        handler: function() {
                            this.up('form').down('[name=quantity]').spinUp();
                        }
                }]
            }
        ];

        this.buttons = [
            {
                text: 'Сохранить',
                action: 'save'
            },
            {
                text: 'Отмена',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
    }
});
