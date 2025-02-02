import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PizzaPage = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        if (!response.ok) throw new Error('Error al consumir la API');
        const data = await response.json();
        setPizza(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPizza();
  }, [id]);

  if (error) return <p className="text-danger">{error}</p>;
  if (!pizza) return <p>Cargando pizza...</p>;

  return (
    <div className="container mt-4">
      <h2>{pizza.name}</h2>
      <p>Precio: ${pizza.price.toLocaleString()}</p>
      <img src={pizza.img} alt={pizza.name} style={{ width: '100%' }} />
    </div>
  );
};

export default PizzaPage;

