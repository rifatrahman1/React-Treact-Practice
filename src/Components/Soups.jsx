import { useEffect } from "react";
import { useState } from "react";
import Soup from "./Soup";

const Soups = () => {
    const [recipes, set_recipes] = useState ([]);
        useEffect (() => {
            fetch ('./soup.json')
            .then (res => res.json())
            .then (data => {
                set_recipes(data);
            })
        }, [])
        return (
            <div className="lg:px-0 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:mt-20 mt-12">
                {
                    recipes.map ((recipe) => <Soup key={recipe.id} recipe={recipe}></Soup>)
                }
            </div>
        );
};

export default Soups;