import { useDispatch, useSelector } from 'react-redux';

import SortPopup from '../components/SortPopup';
import Categories from '../components/Categories';
import ProductBlock from '../components/ProductBlock';
import LoadingBlock from '../components/ProductBlock/LoadingBlock';

import { setCategory, setSortBy } from '../store/actions/filters';
import { fetchProducts } from '../store/actions/products';
import { useCallback, useEffect } from 'react';
import Header from '../components/Header';
import Futter from '../components/Futter';



const categories = ['Кровати', 'Кресла', 'Стулья', 'Освещение'];

const sortItems = [
    { name: 'популярности', type: 'popular', order: 'desc' },
    { name: 'цене', type: 'price', order: 'desc' },
    { name: 'алфавит', type: 'name', order: 'asc' },
]

const AllProducts = () => {
    const dispatch = useDispatch();
    const items = useSelector(({ products }) => products.items);
    const cartItems = useSelector(({ cart }) => cart.items);
    const isLoaded = useSelector(({ products }) => products.isLoaded);
    const { category, sortBy } = useSelector(({ filters }) => filters);
    
    useEffect(() => {
        dispatch(fetchProducts(sortBy, category));
    }, [category, sortBy])

    const onSelectCategory = useCallback((index) => {
        dispatch(setCategory(index));
    }, [])

    const onSelectSortType = useCallback((type) => {
        dispatch(setSortBy(type));
    }, [])

    const handleAddProductToCart = (obj) => {
        dispatch({
            type: 'ADD_PRODUCT_CART',
            payload: obj,
        })
    }

    return (
        <>
            <Header />
                <section className="section__products __container">
                    <div className="section__products__container">
                        <div className="section__products__nav">
                            <div className="section__products__nav__top">
                                <span className="section__products__nav__top__left">
                                    <span className="section__products__nav__top__left-title">ВСЕ ТОВАРЫ</span>
                                </span>
                                <span className="section__products__nav__top__see-all">
                                    {<SortPopup
                                        activeSortType={sortBy.type}
                                        items={sortItems}
                                        onClickSortType={onSelectSortType}
                                    />}
                                </span>
                            </div>
                                {<Categories
                                    activeCategory={category}
                                    onClickCategory={onSelectCategory}
                                    items={categories}
                                />}
                        </div>

                        <div className="section__products__cards__container">
                            {items.map((obj) => 
                                <ProductBlock
                                    onClickAddProducts={handleAddProductToCart}
                                    key={obj.id}
                                    addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                                    {...obj} 
                            />)}
                        </div>
                    </div>
                </section>
            <Futter />
        </>
    );
}

export default AllProducts;