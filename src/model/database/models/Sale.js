module.exports = (sequelize, DataTypes) => {
    const Sale = sequelize.define('Sale', {
        id_sales: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        product_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        cash: {
            type: DataTypes.DECIMAL(10, 2),
            defaultValue: 0.00
        },
        debit: {
            type: DataTypes.DECIMAL(10, 2),
            defaultValue: 0.00
        },
        codigo: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'sales',
        timestamps: false
    });

    // Aquí puedes agregar asociaciones si es necesario
    Sale.associate = function(models) {
        // Ejemplo de asociación, si hay una relación con otro modelo
        // Sale.belongsTo(models.OtherModel, {
        //     as: 'OtherModelAlias',
        //     foreignKey: 'foreign_key_field'
        // });
    };

    return Sale;
};
