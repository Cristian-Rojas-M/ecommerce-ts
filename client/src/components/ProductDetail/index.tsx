import React, { useEffect } from "react";
import { StyledProductDetail } from "./StyledProductDetail";
import { useQuery, useLazyQuery, useMutation } from "@apollo/client";
import {
  FINAL_PRODUCTS,
  GET_PRODUCT_DETAIL,
  GET_PRODUCTS_BY_CATEGORIES,
  GET_CART, GET_STOCK
} from "../../graphql/queries";
import { fotosZapa } from "./mockup";
import { Link } from "react-router-dom";
import Loader from "../Loader";
import { ADD_TO_CART } from "../../graphql/mutations";
import { useAuth } from "../../hooks/AuthProvider";

export default function ProductDetail({ match }: any) {
  const productId = match.params.id;
  const { userId } = useAuth();
  const [addToCart, { error: errorMutationCart }] = useMutation(ADD_TO_CART);

  const { data: dataCart, loading: loadingCart, error: errorCart } = useQuery(
    GET_CART,
    {
      variables: {
        userId: userId && userId,
      },
    }
  );

  const { loading, error, data: mainProduct } = useQuery(GET_PRODUCT_DETAIL, {
    variables: {
      id: productId,
    },
  });

  const [
    getSimils,
    { data: similProducts, loading: loadingSimil, error: errorSimil },
  ] = useLazyQuery(GET_PRODUCTS_BY_CATEGORIES);

  const [
    getStock,
    { data: dataStock, loading: loadingStock, error: errorStock },
  ] = useLazyQuery(GET_STOCK);

  const [
    finalproducts,
    { data: finalData, loading: finalLoading, error: finalError },
  ] = useLazyQuery(FINAL_PRODUCTS, {
    onCompleted: (finalData) => {
      if (finalData.finalproducts[0].stock > 0) {
        addToCart({
          variables: {
            finalproductId: finalData.finalproducts[0].id,
            cartId: dataCart.cart[0]?.id,
            price,
            quantity: 1,
          },
        });
        alert("Producto añadido al carrito")
      }
      else{
        alert("No queda stock de ese modelo")
      }
    },
  });

  useEffect(() => {
    if (mainProduct) {
      const {
        productDetail: { models, categories },
      } = mainProduct;
      // getStock({variables:{productId, modelId:"5"}})
      getStock({variables:{productId, modelId:"3"}})
      console.log(models)
      colors = models.map((model) => model.color);
      colors = Array.from(new Set(colors));
      sizes = models.filter((model) => model.color === colors[0]);
      sizes = sizes.map((model) => model.size);
      sizes = Array.from(new Set(sizes));
      setModelsState({ sizes, colors });
      if (categories[0]) {
        getSimils({ variables: { name: categories[0].name } });
      }
    }
  }, [mainProduct]);

  const [modelsState, setModelsState] = React.useState({
    colors: [],
    sizes: [],
  });

  let colors = [];
  let sizes = [];

  if (loading || loadingSimil || loadingStock) return <Loader />;
  if (error || errorSimil || errorStock) return <div>`Error! ${error?.message}`</div>;
  const {
    name,
    brand,
    price,
    muestraimg,
    categories,
    models,
    id,
  } = mainProduct.productDetail;

  function filterModels(value) {
    sizes = models.filter((prop) => prop.color === value);
    sizes = sizes.map((model) => model.size);
    setModelsState({ ...modelsState, sizes });
  }

  const {
    photo,
    photoDetail1,
    photoDetail2,
    photoDetail3,
    priceBefore,
  } = fotosZapa;
  

  const handleClick = () => {
    const sizeSelect: any = document.querySelector("#size-select");
    const colorSelect: any = document.querySelector("#color-select");
    const model = models.find(
      (current) =>
        current.size === sizeSelect.value && current.color === colorSelect.value
    );
    const finalproductId = finalproducts({
      variables: {
        productId: id,
        modelId: model.id,
      },
    });
  };
  return (
    <StyledProductDetail>
      <div className="container">
        <div className="fondoVioleta"></div>
        <div className="imagenes">
          <img className="photoMain" src={muestraimg || photo} alt={name} />
          <ul>
            <li>
              <img
                className="photoDetail"
                src={photoDetail1}
                alt={`photoDetail 1 - ${name}`}
              />
            </li>
            <li>
              <img
                className="photoDetail"
                src={photoDetail2}
                alt={`photoDetail 2 - ${name}`}
              />
            </li>
            <li>
              <img
                className="photoDetail"
                src={photoDetail3}
                alt={`photoDetail 3 - ${name}`}
              />
            </li>
          </ul>
        </div>
        <div className="info">
          <h1 className={name.length > 20 ? "tituloLargo" : "tituloCorto"}>
            {name}
          </h1>
          <div className="description">
            {categories?.map((category) => (
              <span
                className="category"
                onClick={() =>
                  getSimils({ variables: { name: category.name } })
                }
              >
                {category.name},{" "}
              </span>
            ))}
            <span>{brand.name}</span>
          </div>
          <div className="precios">
            <h4 className="priceBefore">${priceBefore}</h4>
            <h2 className="price">${price}</h2>
          </div>
          <div className="botones">
            {dataStock? <h3>Stock: {dataStock.stockProduct.stock}</h3>: console.log("no hay stock")}
            <select
              className="botonInvertido"
              onChange={(e: any) => filterModels(e.target.value)}
              id="color-select"
            >
              {modelsState.colors?.map((color, i) => (
                <option value={color} key={`${color} ${i}`}>
                  {color}
                </option>
              ))}
            </select>
            <select className="botonInvertido" id="size-select">
              {modelsState.sizes?.map((size, i) => (
                <option value={size} key={`${size} ${i}`}>
                  {size}
                </option>
              ))}
            </select>
            <button className="boton" onClick={() => handleClick()}>
              Agregar al carrito
            </button>
          </div>
        </div>
        <div className="related">
          <h3>Relacionados</h3>
          <div className="photo">
            <ul>
              {similProducts?.productForCategory?.map((item, i) =>
                item.id === id ? null : (
                  <li>
                    <Link
                      to={`/product/${item.id || 1}`}
                      key={item.id}
                      onClick={() => window.scroll(0, 0)}
                    >
                      <img
                        src={item.muestraimg || fotosZapa.photo}
                        alt="name"
                        className="productImg"
                      />
                      <div className="similData">
                        <h5>{item.name}</h5>
                        <h5>${item.price}</h5>
                      </div>
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </StyledProductDetail>
  );
}
