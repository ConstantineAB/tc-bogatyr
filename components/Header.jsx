import Link from 'next/link';
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion';


const Header = () => {
  const { totalPrice, totalCount } = useSelector(({ cart }) => cart);

  return (
    <div>
        <header className="header __container __container__main">
          <div className="nav">
              <Link href="/">
                <div className="logo">тц-Богатырь</div>
              </Link>
              <div className="top-nav nav__container">
                  <ul className="nav-list nav__container">

                    <motion.div
                        whileHover={{ scale: 1.2 }}
                            whileTap={{
                              scale: 1.4
                            }}
                    >
                      <Link href="/"><li className="nav-list_item">Главная</li></Link>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.2 }}
                            whileTap={{
                              scale: 1.4
                            }}
                    >
                      <Link href="/allProducts"><li className="nav-list_item">Все товары</li></Link>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.2 }}
                            whileTap={{
                              scale: 1.4
                            }}
                    >
                      <Link href="/contacts"><li className="nav-list_item">Контакты</li></Link>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.2 }}
                            whileTap={{
                              scale: 1.4
                            }}
                    >
                      <Link href="/howToOrder"><li className="nav-list_item">Как заказать товар</li></Link>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.2 }}
                            whileTap={{
                                scale: 1.4
                            }}
                    >
                      <Link href="/blog"><li className="nav-list_item">Блог</li></Link>
                    </motion.div>
                  </ul>
                  <div className="icon-nav nav__container">
                      <div className="basket">
                        <Link href="/cart">
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          whileTap={{
                            scale: 1.2,
                            rotate: -360,
                            borderRadius: "100%",
                            delay: 10
                          }}
                        >
                            <div>
                              <span>{totalPrice} р</span>
                              <span className="basket__number">
                                {totalCount}
                              </span>
                              <img src="img/basket.svg" />
                            </div>
                          </motion.div>
                        </Link>
                      </div>
                  </div>
              </div>
          </div>
        </header>
    </div>
  )
}

export default Header