import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";

const Header = () => {
    return (
        <div className="header">
            <img
                className="header__logo"
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            />
            <span className="header__logoText">.in</span>
            <div className="header__nav">
                <div style={{marginTop: 3}} className="header__option">
                    <PlaceOutlinedIcon className="header__locationIcon" />
                </div>
                <div style={{ marginLeft: -10 }} className="header__option">
                    <span className="header__optionLineOne">Hello</span>
                    <span className="header_optionTwo">Select your address</span>
                </div>
            </div>
            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">Hello, sign in</span>
                    <span className="header_optionTwo">Account & Lists</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header_optionTwo">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header_optionTwo">Prime</span>
                </div>
                <div className="header__optionBasket"></div>
            </div>
        </div>
    );
};

export default Header;
