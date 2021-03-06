import { Link } from 'next/link';
import { motion } from 'framer-motion';

export const Home = () => {
    
return (
    <div>
        <div className="header__content __container">
              <div className="header__text-content">
                <div className="header__text-content__title">
                        Торговый центр "Богатырь"<br />
                        Товары для дома и дачи
                </div>

                  <div className="header__text-content__text">
                      
                      <div>Качественные товары для дома и дачи<br />
                      с доставкой по всей Нижегородской области</div>
                    </div>

                  <div className="header__text-content__text">
                    Сервис для поиска и сравнения продукции. На нашем<br />
                    сайте Вы можете выбрать и заказать товар<br />
                    всех российских производителей мебели.

                  </div>
                  <a href="#categories"><button className="header__text-content-2">Категории</button></a>
              </div>
      </div>

      <div className="section__clients __container__main">
          <div className="section__clients-container">
              <div className="section__clients-container__title">"Богатырь" это</div>
              <div className="section__clients-container__images">
                  <div>Быстрая доставка</div>
                  <div>Гарантия качества</div>
                  <div>Более 21-го года опыта на рынке</div>
              </div>
          </div>
        </div>

      <div className="section__categories __container__main">
              <div className="furniture__collection__1__container">
                  <div className="furniture__collection__1-text__container">
                      <div className="furniture__collection__1-title">
                          <div>Изделия из метала</div>
                      </div>
                  </div>
                  <div className="furniture__collection__1-img">
                  </div>
              </div>
              <div className="furniture__collection__2__container">
                  <div className="furniture__collection__2-text__container">
                      <div className="furniture__collection__2-title">
                            <div>Cтрой материалы</div>
                        </div>
                    </div>
                    <div className="furniture__collection__2-img">
                    </div>
                </div>
        </div>
    </div>
  );
}




export default Home;