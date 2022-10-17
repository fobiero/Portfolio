import Link from 'next/link'

import navStyles from '../styles/Nav.module.css'

const Nav = () => {
    return(
        <nav class="navbar bg-light fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Felix Onyango</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li class="nav-item">
                            <Link href='/about' className={navStyles.nav_link}>About</Link>
                        </li>
                        <li class="nav-item">
                            <Link href='/work' className={navStyles.nav_link}>Project</Link>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;