import React from 'react';

const ProfilePage = () => {
  const email = "usuario@ejemplo.com"; 

  const handleLogout = () => {
    alert("Sesión cerrada"); 
  };

  return (
    <div className="text-center mt-5">
      <h1>Mi Perfil</h1>
      <p>Email: <strong>{email}</strong></p>
      <button className="btn btn-danger mt-3" onClick={handleLogout}>
        Cerrar sesión
      </button>
    </div>
  );
};

export default ProfilePage;