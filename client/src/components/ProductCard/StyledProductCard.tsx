import styled from "styled-components";
import { blanco, violeta } from "../../containers/App/GlobalStyles";

export const StyledProductCard = styled.div`
  border-radius: 10px;
  overflow:hidden;
  width: 100%;
  height: 100%;
  max-width: 20rem;
  max-height: 25rem;

  a {
    text-decoration: none;
    color: ${blanco};
    text-align: center;
    width:100%;
    max-width: 20rem;
    max-height: 25rem;
    img.productImg {
      width:100%;
      height: 80%;
      max-width: 20rem;
      max-height: 23rem;
      border-radius: 10px;
      &:hover {
        border-radius: 10px;
        transform: scale(1.3);
        transition: all 300ms ease;
      }
    }
  }
  .productData {
    position: relative;
    color: ${blanco};
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    bottom: 0;
    width: 100%;
    background-color: ${violeta};
    padding: 0.7vh 0 0.7vh 0;
  }
  .discount {
    background-color: red;
    position: absolute;
    top: 0;
    right: 0;
    color: white;
    font-weight: bold;
    padding: 0.2rem 0.1rem 0.2rem 0.1rem;
  }
`;
