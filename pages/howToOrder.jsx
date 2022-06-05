import Futter from "../components/Futter"
import Header from "../components/Header"

const howToOrder = () => {
  return (
    <div className="__container">
        <Header />
            <h1 className="howToOrder__title">Как заказа товар на нашем сайте?</h1>
            <p>1. Добавьте товар в корзину</p>
            <p>2. Перейдите в корзину</p>
            <p>3. Под кажды товаром в корзине нажмите кнопку "отправить"</p>
            <p>4. Заполните форму под заголовком "Данные о вас"</p>
            <p>5. Переведите общюю сумму заказа на намер карты ???????????????</p>
            <h3 className="howToOrder__subtitle">Если у вас остались вопросы или возникли трудности, вы можете позванить по номеру +790084447777</h3>
        <Futter/>
    </div>
  )
}

export default howToOrder