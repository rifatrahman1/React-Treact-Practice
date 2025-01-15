import { useEffect } from "react";
import { useState } from "react";
import Desster from "./Desster";

const Desserts = () => {
    const [recipes, set_recipes] = useState ([]);
        useEffect (() => {
            fetch ('./desserts.json')
            .then (res => res.json())
            .then (data => {
                set_recipes(data);
            })
        }, [])
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-20">
                {
                    recipes.map ((recipe) => <Desster key={recipe.id} recipe={recipe}></Desster>)
                }
            </div>
        );
};

export default Desserts;