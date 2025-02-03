import React from 'react';
import { useCart } from '../context/CartContext';

const CardPizza = ({ id, name, price, ingredients, img }) => {
  const { addToCart } = useCart();

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img src={img} className="card-img-top" alt={`Imagen de ${name}`} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="text-muted">Precio: ${price.toLocaleString()}</p>
          <h6>Ingredientes:</h6>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>🍕 {ingredient}</li>
            ))}
          </ul>
          <button className="btn btn-dark mt-3" 
            onClick={() => addToCart({ id, name, price, img, quantity: 1 })}>
            🛒 Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;



