class foodItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set food(food) {
        this._food = food;
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                :host {
                    display: block;
                    background-color: #fd8f00f1;
                    margin-bottom: 18px;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                    border-radius: 10px;
                    overflow: hidden;
                }
               
                .fan-art-food {
                    width: 100%;
                    max-height: 300px;
                    object-fit: cover;
                    object-position: center;
                }
               
                .food-info {
                    padding: 24px;
                }
               
                .food-info > h2 {
                    font-weight: lighter;
                }
               
                .food-info > p {
                    margin-top: 10px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 10; /* number of lines to show */
                }
            </style>
            <img class="fan-art-food" src="${this._food.strMealThumb}" alt="Fan Art">
            <div class="food-info">
                <h2>${this._food.strMeal}</h2>
                <p><strong>Category :</strong> ${this._food.strCategory}</p>
                <p><strong>Area :</strong> ${this._food.strArea}</p>
                <p><strong>Instruction :</strong> ${this._food.strInstructions}</p>
                <p><strong>Ingredient :</strong></p>
                <p><strong>1.</strong> ${this._food.strIngredient1} : ${this._food.strMeasure1}</p>
                <p><strong>2.</strong> ${this._food.strIngredient2} : ${this._food.strMeasure2}</p>
                <p><strong>3.</strong> ${this._food.strIngredient3} : ${this._food.strMeasure3}</p>
                <p><strong>4.</strong> ${this._food.strIngredient4} : ${this._food.strMeasure4}</p>
                <p><strong>5.</strong> ${this._food.strIngredient5} : ${this._food.strMeasure5}</p>
                <p><strong>6.</strong> ${this._food.strIngredient6} : ${this._food.strMeasure6}</p>
                <p><strong>7.</strong> ${this._food.strIngredient7} : ${this._food.strMeasure7}</p>
                <p><strong>8.</strong> ${this._food.strIngredient8} : ${this._food.strMeasure8}</p>
                <p><strong>9.</strong> ${this._food.strIngredient9} : ${this._food.strMeasure9}</p>
                <p><strong>10.</strong> ${this._food.strIngredient10} : ${this._food.strMeasure10}</p>
                <p><strong>11.</strong> ${this._food.strIngredient11} : ${this._food.strMeasure11}</p>
                <p><strong>12.</strong> ${this._food.strIngredient12} : ${this._food.strMeasure12}</p>
                <p><strong>13.</strong> ${this._food.strIngredient13} : ${this._food.strMeasure13}</p>
                <p><strong>14.</strong> ${this._food.strIngredient14} : ${this._food.strMeasure14}</p>
                <p><strong>15.</strong> ${this._food.strIngredient15} : ${this._food.strMeasure15}</p>
                <p><strong>16.</strong> ${this._food.strIngredient16} : ${this._food.strMeasure16}</p>
                <p><strong>17.</strong> ${this._food.strIngredient17} : ${this._food.strMeasure17}</p>
                <p><strong>18.</strong> ${this._food.strIngredient18} : ${this._food.strMeasure18}</p>
                <p><strong>19.</strong> ${this._food.strIngredient19} : ${this._food.strMeasure19}</p>
                <p><strong>20.</strong> ${this._food.strIngredient20} : ${this._food.strMeasure20}</p>
            </div>`;
    }
 }
 
  
 customElements.define("food-item", foodItem);