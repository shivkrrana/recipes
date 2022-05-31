import React from 'react'
import { Link } from 'react-router-dom';
import OneRecipe from './OneRecipe/OneRecipe';

 function RecipesView() {
  return (
    <section className="menu" id="menu">
        <div className="title">
            <h2 className="titletext"><span>R</span>ecipes</h2>
        </div>
        <div className="content">
            
        <Link to="/brownie" style={{ textDecoration:'none' }}><OneRecipe img_src ={"assets/img/brownie/brownie1.jpg"} name={"CARAMEL BROWNIES"} /></Link>
        <Link to="/donut" style={{ textDecoration:'none' }}><OneRecipe img_src ={"assets/img/donut/donut.jpg"} name={"HOMEMADE DONUTS"} /></Link>
        <Link to="/chicken" style={{ textDecoration:'none' }}><OneRecipe img_src ={"assets/img/chicken/chicken.jpg"} name={"CHICKEN PICCATA"} /></Link>
        <Link to="/salad" style={{ textDecoration:'none' }}><OneRecipe img_src ={"assets/img/salad/salad.jpg"} name={"BROCCOLI SALAD"} /></Link>
        
            
            
            

        </div> 
     </section>      
  )
}

export default RecipesView;