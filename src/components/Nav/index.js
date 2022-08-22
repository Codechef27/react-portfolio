import React, {useEffect} from "react";


const Nav = (props) => {

    const {
        navLinks = [],
        setCurrentNavLink,
        currentNavLink
    } = props

    useEffect(() => {
        document.title = (currentNavLink.name);
    }, [ currentNavLink ]); 

    return (
    <header className="container-fluid">
            <section className="d-flex flex-row ">
                <div className="d-flex ms-auto">
                        <nav className="navbar navbar-expand-lg">
                            <button className="navbar-toggler collapsed d-flex d-lg-none d-flex flex-column 
                                justify-content-around" type="button"
                                data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent"
                                aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="toggler-icon top-bar"></span>
                                <span className="toggler-icon middle-bar"></span>
                                <span className="toggler-icon bottom-bar"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarToggleExternalContent">
                                <ul className="navbar-nav">
                                    {navLinks.map((navLink) => (
                                        <li className={`nav-item ${
                                            currentNavLink.name === navLink.name && 'navActive'
                                            }`}
                                            key={navLink.name}                                           
                                            >
                                              <a href={ '#' + (navLink.name)}> <span
                                            onClick = { () => {
                                                setCurrentNavLink(navLink)
                                            }}
                                            >
                                            {navLink.name}
                                            </span></a>
                                        </li>
                                    ))}
                                    
                                </ul>
                            </div>
                        </nav>
                    </div>
            </section>
        
        </header>
    )


}

export default Nav;