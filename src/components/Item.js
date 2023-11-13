import React, {userstate} from "react";

function Item({ name, category }) {
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add">Add to Cart</button>
    </li>
  );
}
  const [inCart, setInCart] = useState(false);

  const handleButtonClick = () => {
    setInCart(!inCart);
  };

  return (
    <div>
      <li className={inCart ? "in-cart" : ""}>
        {/* the item is in the cart */}
      </li>
      <button onClick={handleButtonClick}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </div>
    );
  
  

export default Item;
