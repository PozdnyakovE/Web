Ext.define('wh.view.product.List' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.productlist',

    title : 'Список товаров',
    store: 'Products',

    columns: [
        {header: 'Наименование',  dataIndex: 'name',  flex: 1},
        {header: 'Страна-производитель',  dataIndex: 'country',  flex: 1},
        {header: 'Цена', dataIndex: 'price', flex: 1},
        {header: 'Цена в долларах', dataIndex: 'price_dol', flex: 1},
        {header: 'Количество', dataIndex: 'quantity', flex: 1},
    ]
});