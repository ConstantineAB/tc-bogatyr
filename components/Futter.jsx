import Link from 'next/link'

const Futter = () => {
    return (
        <div>
            <div className="futter __container__main">
                <div className="futter__container __container">
                    <div className="nav futter__nav">
                    <Link href="/">
                        <div className="logo">Mebel-tech</div>
                    </Link>
                        <div className="top-nav nav__container">
                            <ul className="nav-list nav__container">
                                <li className="nav-list_item">О нас</li>
                                <li className="nav-list_item"><Link href="/all">Все товары</Link></li>
                                <li className="nav-list_item">Контакты</li>
                            </ul>
                            <div className="icon-nav nav__container">
                                <div>
                                    <img src="img/vk.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Futter