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
                      <Link href="/"><li className="nav-list_item">Главная</li></Link>
                      <li className="nav-list_item">О нас</li>
                      <Link href="/allProducts"><li className="nav-list_item">Все товары</li></Link>
                      <Link href="/contacts"><li className="nav-list_item">Контакты</li></Link>
                      <Link href="/blog"><li className="nav-list_item">Блог</li></Link>
                  </ul>
                  <div className="icon-nav nav__container">

                  <motion.div initial="hidden" animate="visible" variants={{
                        hidden: {
                            scale: .8,
                            opacity: 0
                        },
                        visible: {
                            scale: 1,
                            opacity: 1,
                            transition: {
                                delay: .4
                            }
                        }
                    }}>
                      <div className="basket">
                        <Link href="/cart">
                          <div>
                            <span>{totalPrice} р</span>
                            <span className="basket__number">
                              {totalCount}
                            </span>
                            <img src="img/basket.svg" />
                          </div>
                        </Link>
                      </div>
                      </motion.div>

                      <div>
                          <img src="img/person.svg" />
                      </div>
                  </div>
              </div>
          </div>
        </header>
    </div>
  )
}

export default Header