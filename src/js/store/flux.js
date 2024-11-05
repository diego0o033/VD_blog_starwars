const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			vehicles: [],
			favorites:[],
			charactersLearnMore:[{type:"people",id:1,name: "Luke Skywalker", url_img:"https://static.wikia.nocookie.net/dominios-encantados/images/e/e3/Luke_4.jpg/revision/latest?cb=20150531172829&path-prefix=es",
				descripcion:`Luke fue llevado a Tatooine en secreto, y alejado del mundo conocido y de su padre, el poderoso Jedi Anakin Skywalker, que se había pasado al Lado Oscuro y se convirtió en un lord Sith, Darth Vader. 
				Luke soñaba con ir a la Academia Espacial y ponerse al servicio del Imperio, pero su tío no lo aprobaba. Un día, Luke se encuentra con dos droides extraviados, C-3PO Y R2-D2. Esta extraña pareja llevaba consigo un mensaje de socorro para Obi Wan Kenobi, un viejo loco del desierto, de parte de la princesa Leia. `
				, url_img_starship:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjLu8lYslvkLZ_-g4LAc3LiT94LJU8S52kYmJvKunGzzjM7da-4e7lslG1oL-pw5CgdVJrJ8JD-mPghVXsoq9zgZdcNacJotoAmntJZpXkdWTt1MSzYJgZLlj-C74STRxAL8jCZzih8NWBq/w1200-h630-p-k-no-nu/ETA+2.jpg"
			},{type:"people",id:4,name: "Darth Vader", url_img:"https://cdn.pixabay.com/photo/2016/02/18/13/32/darth-vader-1207142_1280.jpg",
				descripcion:`Darth Vader es probablemente el villano más temible de Star Wars y de Hollywood.Pese a ser más bien un anti-héroe y tener una triste y trágica historia, su lado oscuro es innegable, y es tan siniestro como poderoso.`
			},],
			planetsLearnMore:[{}],
			vehiclesLearnMore:[{}],
			element: {}
		
		},
		actions: {
			
			getCharacter: async() => {
			  try{
			  	
				let response= await fetch('https://swapi.dev/api/people') 
				let data = await response.json()	
				setStore({characters:data.results})	
				return true;
			  
				}catch(error){
				console.log(error);
				return false;
			  }
			},
			  getPlanet: async() => {
				try{
					
				  let response= await fetch('https://swapi.dev/api/planets') 
				  let data = await response.json()	
				  setStore({planets:data.results})	
				  return true;
				
				  }catch(error){
				  console.log(error);
				  return false;
				}
			},
				getVehicle: async() => {
					try{
						
					  let response= await fetch('https://swapi.dev/api/vehicles') 
					  let data = await response.json()	
					  setStore({vehicles:data.results})	
					  return true;
					
					  }catch(error){
					  console.log(error);
					  return false;
					}
			},
			
			// getElement: async (type,id) =>	{
			// 	try{
						
			// 		let response= await fetch(`https://swapi.dev/api/${type}/${id}`)
			// 		let data = await response.json()	
			// 		setStore({ element:data })	
			// 		return true;
				  
			// 		}catch(error){
			// 		console.log(error);
			// 		return false;
			// 	  }
			// },
			
			addFavorite: (name) => {
                const store = getStore();
                if (!store.favorites.includes(name)) {
                    setStore({ favorites: store.favorites.concat(name) });
					return true;
				}
					return false;
			},
			deleteFavorite: (characterFavorite) => {
				const store = getStore();
				setStore({favorites: store.favorites.filter(item => item !== characterFavorite)
				});
			},
			
			
				// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
