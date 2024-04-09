import React, { useContext } from "react";
import { GlobalContext } from "../../Context";
import RecipeItem from "../../Components/recipe-item";

const Home = () => {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading) {
    return <div>Loading... please wait</div>;
  }
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0
        ? recipeList.map((item) => <RecipeItem item={item} />)
        : <div>
        <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
          Nothing to show. Please search something
        </p>
      </div> }
    </div>
  );
};

export default Home;