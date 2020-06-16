import React from 'react';
import Slide from 'react-reveal/Slide';

class NavLinks extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Slide top delay={this.props.wait}>
                <li>
                        <a href={this.props.href}>
                            {this.props.display}
                        </a>
                </li>
            </Slide>
        );
    }
}

export default NavLinks;