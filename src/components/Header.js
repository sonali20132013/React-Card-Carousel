import React from 'react';
import image from './logo.JPG';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

function Header() {
    return (
      <React.Fragment>
        <div class="header">
            <a href="#default" class="logo"><img src={image} /></a>
            <div class="header-right">
                <a className="search"><SearchOutlinedIcon /></a>
                <a className="personal">Personal <ExpandMoreOutlinedIcon /></a>
            </div>
        </div>
      </React.Fragment>
    );
}
export default Header;