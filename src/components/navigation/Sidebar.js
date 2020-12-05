/* copyright (c) 2020 Otso Kurkela*/

//import react and 3rd party components
import React, {useState} from 'react';
import { slide as Menu } from 'react-burger-menu';
import {Link} from 'react-router-dom';

//import stylesheets
import './Sidebar.css';

class Sidebar extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        menuOpen: false,
        user: this.props.user
      }
    }
  
    handleStateChange (state) {
      this.setState({menuOpen: state.isOpen})  
    }
    
    closeMenu () {
      this.setState({menuOpen: false})
    }
  
    toggleMenu () {
      this.setState(state => ({menuOpen: !state.menuOpen}))
    }
    render () {
      return (
        <div>
          <Menu 
            isOpen={this.state.menuOpen}
            onStateChange={(state) => this.handleStateChange(state)}>
          
          <Link to="/profile" onClick={() => this.closeMenu()}>Profile</Link>
          <Link to="/settings" onClick={() => this.closeMenu()}>Settings</Link>  
          </Menu>
        </div>
      )
    }
  }
export default Sidebar;
