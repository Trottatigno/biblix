import axios from "axios";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
  fetchFavorite: () => {},
});

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  // récupère tous les livre db et les stocke dans la constante favorites
  const fetchFavorite = async () => {
    try {
      const res = await axios.get("http://localhost:5000/favorites");
      setFavorites(res.data);
    } catch (error) {
      console.log("Erreur lors de la récupération des favoris", error);
    }
  };

  // ajoute un livre des favoris
  const addFavorite = async (id) => {
    try {
      const res = await axios.post("http://localhost:5000/favorites", { id });
      setFavorites((prevFavorites) => [...prevFavorites, res.data]);
    } catch (error) {
      console.log("Erreur lors de l'ajout aux favoris'", error);
    }
  };

  // supprime un livre des favoris
  const removeFavorite = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/favorites/${id}`);
      setFavorites((prevFavorites) =>
        prevFavorites.filter((favorite) => favorite.id !== id)
      );
    } catch (error) {
      console.log(`erreur lors de la suppresion des favoris`, { error });
    }
  };

  useEffect(() => {
    fetchFavorite();
  }, []);

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

FavoritesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FavoritesContext;
