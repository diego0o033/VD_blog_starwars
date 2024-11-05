import React,{useContext} from "react";
import "../../styles/home.css";
import CharacterCard from "../component/characterCard.jsx";
import { Context } from "../store/appContext.js";	
	
const HomeBlog = () => {
	
	const{store}=useContext(Context);
	
	
	console.log(store.characters)
    console.log(store.planets)
    console.log(store.vehicles)
	
    const renderCharacters = () => {
        return store.characters && store.characters.length > 0 ? (
            <div className="container-fluid card-group">
               
               <h1 className="text-white"><strong><em>Characters</em></strong></h1>
                <div className="d-flex flex-row overflow-scroll" >
                    {store.characters.map((character, index) => (
                        character.url.split("/")[4] === "people" ? (
                            <CharacterCard
                                key={character.url.split("/")[5]}
                                name={character.name}
                                index={index}
                                type="people"
                                id={character.url.split("/")[5]}
                                eye={character.eye_color}
                                hair={character.hair_color}
                                gender={character.gender}
                                />
                        
                    //   </div>
                        ): null    
                ))}
                    
                </div>
            </div>
        ) : null;
    };

    const renderPlanets = () => {
        return store.planets && store.planets.length > 0 ? (
            <div className="container-fluid card-group">
            
            <h1 className="text-white"><strong><em>Planets</em></strong></h1>
                <div className="d-flex flex-row overflow-scroll">
                    {store.planets.map((planet, index) => (
                       
                       planet.url.split("/")[4] === "planets" ? (
                            <CharacterCard
                                key={planet.url.split("/")[5]}
                                name={planet.name}
                                index={index}
                                type="planets"
                                id={planet.url.split("/")[5]}
                            />
                       
                        ) : null
                    ))}
                </div>
            </div>
                   
        ) : null;
    };

    const renderVehicles = () => {
        return store.vehicles && store.vehicles.length > 0 ? (
            <div className="container-fluid card-group">
            
            <h1 className="text-white"><strong><em>Vehicles</em></strong></h1>
                <div className="d-flex flex-row overflow-scroll">
                    {store.vehicles.map((vehicle, index) => (
                        vehicle.url.split("/")[4] === "vehicles" ? (
                            <CharacterCard
                                key={vehicle.url.split("/")[5]}
                                name={vehicle.name}
                                index={index}
                                type="vehicles"
                                id={vehicle.url.split("/")[5]}
                            />
                            
                        ) : null
                    ))}
                </div>
            </div>
          
    ) : null;
    };

    return (
        <div className="container-fluid home-blog d-flex flex-column min-vh-100">
            {renderCharacters()}
            {renderPlanets()}
            {renderVehicles()}
        </div>
    );
};
export default HomeBlog;