import React, {useState} from "react";
import PropTypes from "prop-types";

import styles from "./styles.css";

const Item = ({ item }) => {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button 
        className="item"
        onClick={() => setIsOpen(!isOpen)}>
        {item.name}
      </button>
      {isOpen && item.children && (
        <div className="submenu">
          {item.children.map((subitem) => (
            <Item item={subitem} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Item;

Item.propTypes = {
  item: PropTypes.shape({}),
};

Item.defaultProps = {
  item: {},
};
