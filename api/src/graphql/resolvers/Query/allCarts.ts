import Brand from "#root/db/models/brands";
import Cart from "#root/db/models/carts";
import Category from "#root/db/models/category";
import FinalProduct from "#root/db/models/finalproduct";
import Models from "#root/db/models/models";
import Product from "#root/db/models/products";

const allCartsResolver = async () => {
  return await Cart.findAll({
    include: [
      {
        model: FinalProduct as any,
        include: [
          {
            model: Product as any,
            include: [Category as any, Brand as any],
          },
          {
            model: Models as any,
          },
        ],
      },
    ],
  });
};

export default allCartsResolver;
