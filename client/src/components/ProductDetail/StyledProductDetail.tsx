import styled from "styled-components";
import {
  blanco,
  verdeMain,
  violeta,
  productWidth,
} from "../../containers/App/GlobalStyles";

export const StyledProductDetail = styled.div`
  ul {
    display: flex;
    flex-flow: row wrap;
    list-style: none;
    gap: 12px;
    justify-content: center;
  }
  .container {
    border: 1px black solid;
    background-color:${blanco};
    display: flex;
    flex-direction: column;
  }

  .mainProduct {
    display: flex;
  }

  .photo, .photoMain {
    width: 50vw;
    object-position: 20% 90%;
    object-fit: cover;
    margin: 0 2rem 2rem 2rem;
    position: relative;
    top: 2.5rem;
  }
  .photoMain{
    height: 50vw;
  }
  h1 {
    font-size: 4.5rem;
    position: relative;
    top: 5rem;
    width: 25rem;
    height: 15rem;
    margin: 0 3rem;
    align-self: flex-start;
  }
  .info {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .description {
    position: relative;
    top: 8rem;
    font-size: 1.3rem;
  }
  .botones {
    position: relative;
    top: 15rem;
    width: 100%;
    display: inherit;
    flex-direction: inherit;
    align-items: inherit;
    * {
      margin: 0.3rem;
    }
  }
  .precios {
    position: relative;
    top: 12rem;
    margin: 0 2rem;
    align-self: flex-start;
    h2 {
      font-size: 3rem;
      font-weight: 500;
    }
  }
  .photoDetail {
    width: 10vw;
    height: 10vw;
    object-position: 20% 90%;
    object-fit: cover;
  }
  .fondoVioleta {
    background-color: ${violeta};
    width: 100%;
    height: 17rem;
    position: absolute;
    left: 0;
    margin-top: 2rem;
    filter: blur(2px);
  }

  .related {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 3rem;
    padding-bottom:1rem;
    border-top:solid 3px black;
    background-color: rgba(100, 223, 223, 0.3);
    h3 {
      color: ${violeta};
      margin: 1rem 0 0 0;
    }
    img {
      width: 15rem;
    }
    .photo {
      display: flex;
      justify-content: center;
      width: 100%;
    }
    a {
      color: white;
      text-decoration: none;
      font-weight: 750;
      display: inherit;
      flex-direction: column;
      align-items: center;
      position: relative;
      width: 15rem;
      margin: 0 3rem;
      .similData {
        opacity: 0;
        background-color: rgba(0, 0, 0, 0.2);
        padding: 0.2rem;
        width: 15rem;
        position: absolute;
        top: 10rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: opacity 500ms ease;
      }
      &:hover .similData {
        opacity: 1;
      }
    }
  }
  .product {
    display: flex;
  }
  .category {
    opacity: 70%;
    cursor: pointer;
    transition: opacity 500ms ease;
    &:hover {
      opacity: 100%;
    }
  }
`;
