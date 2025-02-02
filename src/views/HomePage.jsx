import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas");
        if (!response.ok) throw new Error("Error al obtener las pizzas");
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error("Error fetching pizzas:", error);
      }
    };

    fetchPizzas();
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Lista de Pizzas</h1>
      <div className="row">
        {pizzas.map((pizza) => (
          <div className="col-md-4 mb-4" key={pizza.id}>
            <div className="card h-100">
              <img
                src={pizza.img}
                className="card-img-top"
                alt={pizza.name}
                style={{ height: "200px", objectFit: "cover" }}
                
              />
              <div className="card-body">
                <h1 className="card-title">{pizza.name}</h1>
                <p className="card-text text-muted small">
                  <b>Ingredientes:</b> {pizza.ingredients.join(", ")}
                </p>
                <hr />
                <p className="card-text text-muted small fst-italic">{pizza.desc}</p>
                <hr />
                <p className="card-text">
                  <strong>Precio:${pizza.price}</strong> 
                </p>
              </div>
              <div className=" text-center">
                <button className="button btn btn-outline-dark">Añadir al carrito</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;