import React, {Component} from 'react';
import {Sidebar} from "../Sidebar/Sidebar";

class Layout extends Component {
    render() {
        return (
            <div className="layout">
                <Sidebar/>
                <main className="content-container">
                    <div className="main-content">
                        {this.props.children}
                    </div>
                </main>
            </div>
        );
    }
}

export default Layout;