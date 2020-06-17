import React from 'react';
import NavLinks from './NavLinks';
import { isMobile } from 'react-device-detect';

class TopNav extends React.Component {
    getNav() {
        // if (isMobile) {
        //     return(
        //         <header className="header-down">
        //             <div className="container-left">
        //                 <a href="/">
        //                     <div className="logo">
        //                         <p>MB</p>
        //                     </div>
        //                 </a>
        //             </div>
        //             <div className="container-right">
        //                 <nav>
        //
        //                 </nav>
        //             </div>
        //         </header>
        //     );
        // }
        return (<header className="header-down">
            <div className="container-left">
                <a href="/">
                    <div className="logo">
                        <p>MB</p>
                    </div>
                </a>
            </div>
            <div className="container-right">
                <nav>
                    <ul>
                        <NavLinks display={'About'} href={'#about'} wait={2750}></NavLinks>
                        <NavLinks display={'Work Experience'} href={'#work-exp'} wait={3000}></NavLinks>
                        <NavLinks display={'Personal Projects'} href={'#personal-projects'} wait={3250}></NavLinks>
                        <NavLinks display={'Contact'} href={'#contact'} wait={3500}></NavLinks>
                        <NavLinks display={'Resume'} href={'#'} wait={3750} resume={true}></NavLinks>
                    </ul>
                </nav>
            </div>
        </header>);
    }

    render() {
        return this.getNav();
    }
}

export default TopNav;