import React, {useEffect, useState} from "react";
import Carousel from "../Carousel.js";

const Nav = (props) => {

    const {
        navLinks = [],
        setCurrentNavLink,
        currentNavLink
    } = props

    useEffect(() => {
        document.title = (currentNavLink.name);
    }, [ currentNavLink ]); 

    
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(prev => !prev);
  }
  
  if(currentNavLink.name == 'Portfolio') {
     onclick = (toggleModal())     
  }

    return (
        <>
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
                                        <li> 
                                            <span                                         
                                            >
                                                <a className={`nav-item ${
                                            currentNavLink.name === navLink.name && 'navActive'
                                            }`}
                                            key={navLink.name}                                          
                                            
                                               href={ '#' + (navLink.name)} 
                                               onClick =  {  () => {
                                                setCurrentNavLink(navLink)
                                             }}
                                            >
                                            {navLink.name}
                                            
                                            </a></span>
                                        </li>
                                    ))}
                                         
                                        <li>
                                        
                                        <a className={`nav-item 'navActive'}`}
                                            key={''}
                                            href="#portfolio"  
                                            onClick = { () => {
                                            toggleModal() 
                                        }}
                                          >Portfolio</a> 
                                         </li>
                                      
                                   
                                    
                                </ul>
                            </div>
                        </nav>
                    </div>
            </section>
        
        </header>
        <div>
        <Carousel isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </div>
        </>
    )


}


export default Nav;