import React, { Component } from 'react'

export default class Header extends Component { //Header phải viết hoa chữ H
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <a className="navbar-brand" href="/#">Title</a>
                <ul className="nav navbar-nav">
                    <li className="active">
                        <a href="/#">Home</a>
                    </li>
                    <li>
                        <a href="/#">Link</a>
                    </li>
                </ul>
            </nav>
            
        )
    }
}
