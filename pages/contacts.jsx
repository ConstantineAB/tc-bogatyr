import Futter from "../components/Futter"
import Header from "../components/Header"

const Contacts = () => {
  return (
    <div className="__container">
        <Header />
          <h1 className="howToOrder__title">Наши контакты</h1>
          <p>Телефон: +790084447777</p>
          <p>Почта: --------------</p>
          <p>Адрес: 1-я Заводская ул., 1, Лысково, Нижегородская обл., 606210</p>
        <Futter/>
    </div>
  )
}

export default Contacts