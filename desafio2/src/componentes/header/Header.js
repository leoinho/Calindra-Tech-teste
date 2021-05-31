import React, { Component } from 'react';
import Logo from '../svg/Logo';
import LogoMobile from '../svg/LogoMobile';
import Menu from '../svg/Menu';

import "../../assets/sass/_geral.scss";
import './Header.scss';



class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
    };
  }
  menuClicked() {
    var menu = !this.state.menu;
    this.setState({ menu: menu });
    console.log(this.state.menu)
    if(menu){
      document.getElementById("menu").className = "menu-mobile-itens-ativo";
    }else{
      document.getElementById("menu").className = "menu-mobile-itens";
    }
  }
  render = () => {
    
    return (
      <div className="container header">
        <div className="flex" >
          <div onClick={() => this.menuClicked()}>
            <Menu  />
          </div>
          <Logo />
          <LogoMobile />
          <div>
            <h1 className="titulo">zutterman</h1>
            <p className="sub-titulo">Measure Tapes</p>
          </div>
        </div>
          <div className="links">
            <a>ABOUT US</a>
            <a>MODELS</a>
            <a>GUARANTEE</a>
          </div>
          <div id="menu" className="menu-mobile-itens">
            <a>ABOUT US</a>
            <a>MODELS</a>
            <a>GUARANTEE</a>
          </div>
      </div>
    );

  };
}

export default Header;
