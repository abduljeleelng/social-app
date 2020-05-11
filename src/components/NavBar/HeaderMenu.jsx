import React,{Fragment, useState} from 'react';
import {Collapse,Navbar,NavbarBrand,NavbarToggler,Nav,NavItem,NavLink,Container} from 'reactstrap';
import {Link,Router,Switch} from 'react-router-dom';
import classnames from "classnames";

export default function HeaderMenu(props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = ()=> setIsOpen(!isOpen);
    
    const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");

    const [navbarCollapse, setNavbarCollapse] = React.useState(false);

    const toggleNavbarCollapse = () => {
      setNavbarCollapse(!navbarCollapse);
      document.documentElement.classList.toggle("nav-open");
    };
  
    React.useEffect(() => {
      const updateNavbarColor = () => {
        if (
          document.documentElement.scrollTop > 299 ||
          document.body.scrollTop > 299
        ) {
          setNavbarColor("");
        } else if (
          document.documentElement.scrollTop < 300 ||
          document.body.scrollTop < 300
        ) {
          setNavbarColor("navbar-transparent");
        }
      };
      window.addEventListener("scroll", updateNavbarColor);
      return function cleanup() {
        window.removeEventListener("scroll", updateNavbarColor);
      };
    });
    return (
    <Navbar
      className={classnames("fixed-top", navbarColor)}
      color-on-scroll="300"
      expand="lg"
    >
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            to="/index"
            target="_blank"
            title="Coded by Creative Tim"
            //tag={Link}
          >
            Paper Kit 2
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", { toggled: navbarCollapse })}
            onClick={toggle}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={isOpen}
        >
          <Nav navbar>
            <NavItem>
              <NavLink 
              to="/index" 
              //tag={Link}
              >
                <i className="nc-icon nc-layout-11" /> Components
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="https://demos.creative-tim.com/paper-kit-react/#/documentation?ref=pkr-examples-navbar"
                target="_blank"
              >
                <i className="nc-icon nc-book-bookmark" /> Documentation
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://twitter.com/CreativeTim?ref=creativetim"
                target="_blank"
                title="Follow us on Twitter"
              >
                <i className="fa fa-twitter" />
                <p className="d-lg-none">Twitter</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.facebook.com/CreativeTim?ref=creativetim"
                target="_blank"
                title="Like us on Facebook"
              >
                <i className="fa fa-facebook-square" />
                <p className="d-lg-none">Facebook</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                target="_blank"
                title="Follow us on Instagram"
              >
                <i className="fa fa-instagram" />
                <p className="d-lg-none">Instagram</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.github.com/CreativeTimOfficial?ref=creativetim"
                target="_blank"
                title="Star on GitHub"
              >
                <i className="fa fa-github" />
                <p className="d-lg-none">GitHub</p>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>

        /*
        <Fragment>
            <Navbar  color="light" light expand="md" >
                <NavbarBrand className="" >Wi Brand</NavbarBrand>
                <div style={{float:"right",paddingLeft:'800px'}} >
                <NavbarToggler onClick={toggle} className="mr-2" />
                <Collapse isOpen={isOpen} navbar className="mr-sm-2"  >
                    <Nav navbar >
                        <NavItem>
                            <NavLink href="#"> Home </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#"> Home </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#"> Home </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#"> Home </NavLink>
                         </NavItem>
                    </Nav>
                </Collapse>
                </div>

            </Navbar>
        </Fragment>
        */
    )
}
