import React, { Component } from 'react';
import "./css/Header.css";
import logo from "../../public/logo/logo.svg";
import {Link} from 'react-router-dom';

import discord from "../../public/icon/discord.svg";
import patreon from "../../public/icon/patreon.png";
import github from "../../public/icon/github.png";
import twitter from "../../public/icon/twitter.svg";

class Header extends Component {
    render() {

        return (
            <div className="header">
                <Link to="/" className="logo-link">
                    <img className="logo" src={logo} alt="Logo" draggable="false"/>
                    <div className="logo-text">FredBoat</div>
                </Link>
                <div className="header-right">
                    <a className="header-button" href="/docs#music-commands">Commands</a>
                    <a className="header-button" href="/docs/faq">FAQ</a>
                    <a className="header-button" href="https://goo.gl/cFs5M9">Add to Discord</a>
                    <div className="icons">
                        <a className="discord" href="https://discord.gg/cgPFW4q">
                            <img src={discord} alt="Discord"/>
                        </a>
                        <a className="patreon" href="https://www.patreon.com/fredboat">
                            <img src={patreon} alt="Patreon"/>
                        </a>
                        <a className="twitter" href="https://twitter.com/DiscordFredBoat">
                            <img src={twitter} alt="Twitter"/>
                        </a>
                        <a className="github" href="https://github.com/Frederikam/FredBoat">
                            <img src={github} alt="GitHub"/>
                        </a>
                    </div>

                </div>
            </div>
        )
    }
}

export default Header;
