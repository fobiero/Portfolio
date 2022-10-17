import style from '../styles/Layout.module.css'

import Nav from './Nav'

const Layout = ({children}) => {
    return(
       <>
            <Nav />
            <div className={style.home}>
                <main className={style.main}>
                    {children}
                </main>
            </div>
       </>
    )
}

export default Layout