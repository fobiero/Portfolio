import style from '../styles/Layout.module.css'

import Nav from './Nav'
import Footer from './Footer'

const Layout = ({children}) => {
    return(
       <>
            <Nav />
            <div className={style.home}>
                <main className={style.main}>
                    {children}
                </main>
            </div>
            <Footer />
       </>
    )
}

export default Layout