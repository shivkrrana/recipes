import React from 'react'
import "./AllRecipes.css"

function Donut() {
    return (
        <div className="main-container">
            <div className="heading">

                <span>H</span>OMEMADE DONUTS

            </div>


            <div className="recipe-container">
                <p>Homemade Donuts are easier to make than you might think! And yes, I’m talking about soft and fluffy fried yeasted donuts, dressed in your choice of vanilla or chocolate glaze.</p>
                <p>Have a hankering for more comforting fried dough? Try this Easy Beignets Recipe, or these delicious and tender Apple Fritters. You can even skip the fair and make your very own homemade Funnel Cake!</p>
                <div className="img-container">
                    <img src="assets/img/donut/donut1.jpg" alt="Donut Image" />
                    <img src="assets/img/donut/donut2.jpg" alt="Donut Images" />
                </div>
                <h1>Homemade Donuts Recipe</h1>
                <p>Do you prefer baked donuts or fried donuts? I do love both but I think I love fried yeasted donuts just a little bit more. If you’re a tiny bit afraid of frying like I used to be, my biggest tip is to invest in a thermometer! Knowing the oil temperature made a huge difference in my frying confidence.</p>


                <h1>Easy Homemade Donuts Ingredients</h1>
                <p>This homemade donut dough is exactly the same as my milk bread dough. The list of ingredients is very simple and can be halved or doubled easily to make less or more donuts in just a pinch.</p>

                <ul>
                    <li><span>Heavy cream:</span>Used for the added fat content for more tender bread dough.</li>
                    <li><span>Whole milk:</span>You can use 2% milk but remember more fat yields more tender bread. And we’re not adding eggs or butter in this recipe, so the fat comes directly from milk and heavy cream.</li>
                    <li><span>Granulated sugar:</span>  For added sweetness in the dough. The majority of the sweetness will still come from the glaze.</li>
                    <li><span>Active Dry yeast:</span> to help the bread dough rise.</li>
                    <li><span>Salt::</span> For flavor</li>
                    <li><span>Flour:</span>  All purpose flour will do.</li>
                </ul>
                <h1>How to Make Homemade Donuts</h1>

                <ol>
                    <li>Heat up the cream, milk and sugar and allow it to cool down a bit before adding the yeast to activate it.</li>
                    <li>Once the yeast mixture is bubbly, mix it with the flour and salt to form a dough.</li>
                    <li>Shape the dough into a ball and place it in an oiled bowl. Allow to rise until at least double in size.</li>

                </ol>
                <div className="img-container">
                    <img src="assets/img/donut/donut3.jpg" alt="Donut Images" />

                </div>
                <h1>Cutting Homemade Yeast Donuts </h1>
                <ol>
                    <li>Roll the dough out to about ½” thick and cut with a donut cutter if you have one. Don’t have a donut cutter? I used a 3” round cookie cutter for the outer ring and a 1 ½” round cookie cutter for the donut holes.</li>
                    <li>Reroll the scraps and donut holes to cut out more donuts. Option: You can keep the donut holes for frying if you want, but you’ll end up making less donuts.</li>
                    <li>Tip for rerolling: You will need to allow the dough to rest a bit when rerolling so the gluten has time to relax, otherwise when you cut the donuts, they will shrink.</li>

                </ol>

                <div className="img-container">
                    <img src="assets/img/donut/donut4.jpg" alt="Donut Images" />

                </div>
                <h1>Frying the Donuts</h1>
                <ol>
                    <li>Heat the oil in a thick bottom pot. I used a cast iron pan. Use a thermometer to keep the temperature between 350°F – 375°F. You will need to adjust the heat during the frying process.</li>
                    <li>Fry 3 – 4 donuts at a time depending on the size of your pan until golden brown, flip the donuts halfway through frying. Don’t crowd your pan.</li>
                </ol>
                <div className="img-container">
                    <img src="assets/img/donut/donut5.jpg" alt="Donut Images" />

                </div>
                <h1>Homemade Glazed Donuts</h1>
                <p>I included 2 options for glaze in this recipe: a vanilla glaze and a chocolate glaze. Both are very easy sugar glaze made with powdered sugar and milk. But there are endless options of glaze you can try to pair with these donuts.</p>
                <ul>
                    <li>Try a sweet maple glaze like in these <span>baked apple donuts.</span></li>
                    <li>Go fancy with a brown butter glaze like in these <span>baked pumpkin donuts.</span></li>
                    <li>Or embrace the holiday with an eggnog glaze like in this <span>eggnog pound cake.</span></li>
                </ul>
                <h1>Storing Donuts</h1>
                <p>Fried homemade donuts are best the day they are made but they will stay soft up to 2 days, just keep them at room temperature in a lightly covered container.</p>

            </div>
        </div>
    )
}

export default Donut;