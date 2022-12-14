import Link from 'next/link';

function NavBar() {
    return (
        <nav>
        <ul>
            <li>
               <Link href="/">
                        <a>
                            Home
                        </a>
               </Link>
            </li>
            <li>
               <Link href="/about">
                        <a>
                            About
                        </a>
               </Link>
            </li>
        </ul>
        <style jsx>{`
                ul {
                    list-style-type: none; 
                    padding : 0px;
                }
                li {
                    display: inline;
                    
                }
                
                li:not(:first-child){
                    margin-left:00.75rem; 
                }
        
        `} </style>
        
    </nav>
    ); 
}

export default NavBar; 