import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import Skeleton from "react-loading-skeleton";
import { addCart } from "../redux/action"; // Assure-toi que cette action existe

import { Navbar, Footer } from "../components"; // Assure-toi d'avoir ces composants

const DetailProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const dispatch = useDispatch();

  const addProductToCart = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const fetchProductDetails = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Erreur de récupération des données", error);
      }
      setLoading(false);
    };

    fetchProductDetails();
  }, [id]);

  const Loading = () => (
    <div className="container my-5 py-2">
      <div className="row">
        <div className="col-md-6 py-3">
          <Skeleton height={400} width={400} />
        </div>
        <div className="col-md-6 py-5">
          <Skeleton height={30} width={250} />
          <Skeleton height={90} />
          <Skeleton height={40} width={70} />
          <Skeleton height={50} width={110} />
          <Skeleton height={120} />
          <Skeleton height={40} width={110} inline={true} />
          <Skeleton className="mx-3" height={40} width={110} />
        </div>
      </div>
    </div>
  );

  const ShowProductDetails = () => (
    <div className="container my-5 py-2">
      <div className="row">
        <div className="col-md-6 col-sm-12 py-3">
          <img
            className="img-fluid"
            src={product.image}
            alt={product.title}
            width="400px"
            height="400px"
          />
        </div>
        <div className="col-md-6 col-sm-12 py-5">
          <h4 className="text-uppercase text-muted">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead">
            {product.rating && product.rating.rate} <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 my-4">${product.price}</h3>
          <p className="lead">{product.description}</p>
          <button
            className="btn btn-outline-dark"
            onClick={() => addProductToCart(product)}
          >
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">{loading ? <Loading /> : <ShowProductDetails />}</div>
      </div>
      <Footer />
    </>
  );
};

export default DetailProduct;
