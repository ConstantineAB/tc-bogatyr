import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import classNames from 'classnames';



const ProductBlock = ({ id, name, price, imageUrl, types, sizes, onClickAddProducts, addedCount }) => {

const availableTypes = ['тонкое', 'традиционное'];
const availableColors = ['красный', 'синий', 'зеленый'];
  
const [activeType, setActiveType] = React.useState(types[0]);
const [activeSize, setActiveSize] = React.useState(0);
  
const onSelectType = (index) => {
    setActiveType(index);
};
  
const onSelectSize = (index) => {
    setActiveSize(index);
};
  
const onAddProduct = () => {
    const obj = {
        id,
        name,
        imageUrl,
        price,
        size: availableSizes[activeSize],
        type: availableTypes[activeType],
    };
    onClickAddProducts(obj);
};
    return ( 
            <div className="section__products__cards">
                <div>
                {/*<div className="pizza-block__selector">
                    {availableTypes.map((type, index) => (
                        <span
                        key={type}
                        onClick={() => onSelectType(index)}
                        className={classNames({
                            active: activeType === index,
                            disabled: !types.includes(index),
                        })}>
                        {type}
                        </span>
                    ))}
                </div>
                <div>
                {availableColors.map((size, index) => (
                    <span
                        key={size}
                        onClick={() => onSelectSize(index)}
                        className={classNames({
                            active: activeSize === index,
                            disabled: !sizes.includes(size),
                    })}>
                        {size}
                    </span>
                ))}
                </div>*/}
            </div>
          <Button onClick={onAddProduct} className="section__products__cards__button" outline>
              <p>В корзину</p>
              <div className="section__products__cards__basket-img" >
                {addedCount && <i>{addedCount}</i>}
              </div>
          </Button>
          <div className="section__products__cards__title">
              <p>{name}</p>
          </div>
          <div className="section__products__cards__price">
              <span>{price}р</span>
          </div>
          <div className="section__products__cards__img">
              <img src={imageUrl} />
          </div>
      </div>
  )
}

ProductBlock.propTypes = {
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number,
    types: PropTypes.arrayOf(PropTypes.number),
    sizes: PropTypes.arrayOf(PropTypes.number),
    onAddProduct: PropTypes.func,
    addedCount: PropTypes.number
};
  
ProductBlock.defaultProps = {
    name: '---',
    price: 0,
    types: [],
    sizes: [],
};

export default ProductBlock;