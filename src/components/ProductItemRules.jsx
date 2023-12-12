import { useEffect } from "react";
import { formatCurrency } from "../helpers/currency";

function Item(props) {
  const { imgUrl, name, description, price } = props;

  const handleClick = () => {
    // dont call inside nested function
    useEffect(() => {})
    alert(`Item ${name} diklik`);
  };

  // dont call inside condition
  if (true) {
    useEffect()
  }

  if (true) {
    return <></>
  }

// dont call inside loops
  for (let index = 0; index < array.length; index++) {
    useEffect()
  }

  useEffect()

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={imgUrl ?? "https://via.placeholder.com/300"} alt="Placeholder" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{name}</p>
            <p className="subtitle is-6">{description}</p>
            <p className="subtitle is-6">{formatCurrency(price)}</p>
          </div>
        </div>
      </div>
      <footer className="card-footer">
        <span onClick={handleClick} className="card-footer-item">
          Detail
        </span>
      </footer>
    </div>
  );
}

export default Item;
