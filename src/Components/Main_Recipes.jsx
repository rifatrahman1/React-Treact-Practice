import { useEffect } from "react";
import { useState } from "react";
import Main_Recipe from "./Main_Recipe";

const Main_Recipes = () => {
    const [recipes, set_recipes] = useState ([]);
        useEffect (() => {
            fetch ('./main.json')
            .then (res => res.json())
            .then (data => {
                set_recipes(data);
            })
        }, [])
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-20">
                {
                    recipes.map ((recipe) => <Main_Recipe key={recipe.id} recipe={recipe}></Main_Recipe>)
                }
            </div>
        );
};

export default Main_Recipes;