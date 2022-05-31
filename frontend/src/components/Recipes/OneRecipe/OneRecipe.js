import React from 'react'
import "./OneRecipe.css"

 function OneRecipe(props) {
  return (
    <div className="box">
                <div className="imgBx">
                    <img src={props.img_src}/>
                </div>

                <div className="recipeName">
                    {props.name}
                </div>
            </div>
  )
}

export default OneRecipe;