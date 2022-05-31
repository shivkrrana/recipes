import React from "react"
import { Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Register from "./components/Register/Register";
import Recipes from "./components/Recipes/Recipes";
import Brownie from "./components/Recipes/AllRecipes/Brownie";
import Donut from "./components/Recipes/AllRecipes/Donut";
import Chicken from "./components/Recipes/AllRecipes/Chicken";
import Salad from "./components/Recipes/AllRecipes/Salad"
import Login from "./components/Login/Login";


function App() {
  return (
    <>
    <Navbar/>
    
    <Routes>

    <Route path="/" element ={<Recipes/>}/>
    <Route exact path="/login" element ={<Login/>}/>
    <Route exact path="/register" element ={<Register/>}/>
    <Route exact path="/donut" element ={<Donut/>}/>
    <Route exact path="/chicken" element ={<Chicken/>}/>
    <Route exact path="/salad" element ={<Salad/>}/>
    <Route exact path="/brownie" element ={<Brownie/>}/>
    </Routes>
    </>
  );
}

export default App;
