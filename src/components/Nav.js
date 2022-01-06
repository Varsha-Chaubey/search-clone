import React from "react";
import { Link, useNavigate} from 'react-router-dom';

const Nav = () => {
    return (
        <div>
             <ul className="nav-ul">
                 <li><Link to="/"> Home</Link></li>
                 <li><Link to="/show_content">Show_content</Link></li>
             </ul>
        </div>
    );
};

export default Nav;
