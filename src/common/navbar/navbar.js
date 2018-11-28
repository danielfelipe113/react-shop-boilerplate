import React, { Component } from 'react';
import { NavLink, Link, withRouter  } from "react-router-dom";
import './navbar.css';

class Navbar extends Component {
    constructor(props) {
        //Generic
        super(props);
        //Custom
       
        this.initLinks();
    }

    initLinks() {
        this.links = [
            {
                name: 'home',
                route: '/',
                disabled: false
            },
            {
                name: 'cart',
                route: '/cart',
                disabled: false
            },
            {
                name: 'checkout',
                route: '/checkout',
                disabled: true
            }
        ];
        this.menuLinks = this.links.map(link => {
            return (
                <li className="nav-item">
                    <NavLink  activeClassName="active" className={'nav-link ' + (link.disabled ? 'disabled' : '')} to={link.route}>{link.name}</NavLink >
                </li>
            );
        });
        
    }

    setActionButtons(props=this.props) {
        this.goBackButton = '';
        this.filtersButton = '';
        if(props.showGoBackButton) {   
            this.goBackButton = (
                <Link to="" className="float-left col-sm-1 d-none d-sm-block" onClick={this.props.history.goBack} style={{
                    position: 'relative',
                    top: '5px',
                    left: '13px'
                }}>
                    <span className="fa-stack">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fa fa-chevron-left fa-stack-1x fa-inverse" style={{left: '-1px'}}></i>
                    </span>
                </Link>
            );
        }
        if(props.showSidebarButton) {
            this.filtersButton = (
                <Link to="" className="float-left col-sm-1 d-none d-sm-block"  style={{
                    position: 'relative',
                    top: '5px',
                    left: '13px'
                }}>
                    <span className="fa-stack ">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fa fa-filter fa-stack-1x fa-inverse" style={{left: '-1px'}}></i>
                    </span>
                </Link>
            );
        }
        
    }

    componentWillReceiveProps(nextProps) {
        this.setActionButtons(nextProps);
    }

    componentWillUpdate() {
        
    }

    componentDidMount() {
        
        
    }

    componentDidUpdate() {
       
    }
    
    componentWillUnmount() {
    
    }

    render() {
        return (
            <nav>
                {this.filtersButton}
                {this.goBackButton}
                <ul className="navbar nav justify-content-end col-xs-12 col-sm-11">
                    {this.menuLinks}
                </ul>
            </nav>
        );
    }
}


export default withRouter(Navbar);