import * as React from 'react';

interface HeaderProps {
    
}
 
const Header: React.FC<HeaderProps> = () => {
    return ( 
        <div className="App">
            <header>
            <h3>TK'Blue</h3>
            </header>
        </div>
     );
}
 
export default Header;