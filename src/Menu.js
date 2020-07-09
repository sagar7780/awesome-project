import React, { Component } from 'react';
import './menustyle.css';
import {Link} from 'react-router-dom';

export default class Menu extends Component {
    render() {
        return (
            <div className="menustyle">
               <ul>
                   <li><Link to="/"> Home </Link> </li>
                   <li><Link to="about">About</Link>      </li>

                   <li><Link to="shop"> Shop  </Link>  </li>

               </ul>
            </div>
        )
    }
}
