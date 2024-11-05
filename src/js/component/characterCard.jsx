import React, { useState,useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const CharacterCard = ({ type, name, id, eye, hair, gender }) => {
  const [isClickedButton,setIsClickedButton]=useState(false);
  const { store, actions } = useContext(Context);
  const characterFavorite = store.favorites.includes(name);

  const handleClick = () => {
    setIsClickedButton(!isClickedButton); 
    toogleFavoriteSelection(); 
  };
  
  const toogleFavoriteSelection = () => {
    if (characterFavorite) {
      actions.deleteFavorite(name);
    } else {
      actions.addFavorite(name);
    }
  };

  const getImageUrl = (type, id) => {
    switch (type) {
      case "people":
        return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
      case "planets":
        return `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
      case "vehicles":
        return `https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`;
      default:
        return "https://via.placeholder.com/150";
    }
  };

  const captureImgError = (e) => {
    e.target.src =
      name === "Tatooine"
        ? "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357"
        : "https://img.asmedia.epimg.net/resizer/v2/MU26SQXB6NL3FIT56BKO4F57ZQ.jpg?auth=a13f41083dcb40f2faf7a113eac73783d4e9c77abee9f0ba7b1d2846385d1aed&width=1472&height=1104&smart=true";
  };

  const renderDescription = () => {
    if (type === "people") {
      return (
        <>
          <p><strong>Gender:</strong> {gender}</p>
          <p><strong>Hair Color:</strong> {hair}</p>
          <p><strong>Eye Color:</strong> {eye}</p>
        </>
      );
    } else if (type === "planets") {
      return (
        <>
          <p><strong>Climate:</strong> <span className="fst-italic fs-5">{store.planets[id - 1]?.climate || "Unknown"}</span></p>
          <p><strong>Population:</strong> <span className="fst-italic fs-5">{store.planets[id - 1]?.population || "Unknown"}</span></p>
          <p><strong>Diameter:</strong> <span className="fst-italic fs-5">{store.planets[id - 1]?.diameter || "Unknown"}</span></p>
        </>
      );
    } else if (type === "vehicles") {
      const vehicle = store.vehicles.find(vehicle => {
        const vehicleId = vehicle.url.split("/").filter(Boolean).pop();
        return vehicleId === id.toString();
      });

      if (!vehicle) {
        return <p>No data available</p>;
      }

      return (
        <>
          <p><strong>Model:</strong> <span style={{ fontSize: "0.75rem" }}>{vehicle.model || "Unknown"}</span></p>
          <p><strong>Cargo Capacity:</strong> <span style={{ fontSize: "0.75rem" }}>{vehicle.cargo_capacity || "Unknown"}</span></p>
          <p><strong>Speed:</strong> {vehicle.max_atmosphering_speed || "Unknown"}</p>
        </>
      );
    }
  };

  return (
    <div
      className="card"
      style={{
        width: "100%", // Prueba diferentes valores o porcentajes
        maxWidth: "100%", // Asegúrate de que no esté restringiendo el ancho
        minWidth: "300px", // Configura un mínimo para evitar que se reduzca demasiado
        margin: "10px",
        border: "none",
        overflow: "hidden",
      
      
      }}
    >
      <div className="row g-0" style={{ height: "100%", position: "relative" }}>
        <div
          className="col-md-12"
          style={{
            width: "400px",
            height: "250px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <img
            src={getImageUrl(type, id)}
            className="img-fluid"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "fill",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 1,
            }}
            onError={captureImgError}
          />
        </div>
        <div
          className="col-md-12 d-flex flex-column"
          style={{
            padding: "10px",
          }}
        >
          <p className="fs-4 text-center">
            <strong>{name}</strong>
          </p>
          {renderDescription()}
          <div className="d-flex justify-content-start mt-auto align-items-center">
            <div className="col md-8">
            <Link
              to={`/detailsElement/${type}/${id}`}
              className="btn btn-outline-primary ms-3 p-0"
              style={{ height: "40px", width: "140px" }}
            >
              Learn More!
            </Link>
            </div>
            <div className="col md-4">
            <button
              className="d-flex align-items-center btn btn-link border-warning border-3 rounded-start"
              style={{width: "60px", height: "50px", marginLeft: "50px", backgroundColor: isClickedButton ? "yellow" : "transparent"}}
              onClick={handleClick}
              onMouseEnter={(e)=>{
                if (!isClickedButton) {
                  e.target.style.backgroundColor = "yellow";

              }
              }}
              onMouseLeave={(e)=>{
                if (!isClickedButton) {
                  e.target.style.backgroundColor = "transparent";
                }
              
              }}
            >
              <i
                className={`bi ${
                  characterFavorite ? "bi-heart-fill text-danger" : "bi-heart"
                }`}style={{ fontSize: "25px" }}
              ></i>
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;