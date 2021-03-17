import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
  HasMany
} from "sequelize-typescript";

import Product from "./products";
import Models from "./models";

// Definitions of tables and sequelize models
// Table productmodels
@Table({
  defaultScope: {
    attributes: { exclude: ["deleteAt"] },
  },
  paranoid: true,
  tableName: "productmodels",
})
export class ProductModel extends Model {
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.INTEGER,
  })
  id?: string;

  @Column({
    allowNull: false,
    type: DataType.INTEGER,
  })
  @ForeignKey(() => Product)
  productId: string;

  //  @HasMany(() => Product)
  // products: Product[];

  @Column({
    allowNull: false,
    type: DataType.INTEGER,
  })
  @ForeignKey(() => Models)
  modelId: string;

  @Column({
    allowNull: true,
    type: DataType.TEXT,
  })
  img: string;

}

export default ProductModel;
