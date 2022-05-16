import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css"
import logo from "./logo.png"

// ! Problem with the svg file.
// ! SyntaxError: unknown: Namespace tags are not supported by default.
// ! React's JSX doesn't support namespace tags. You can set `throwIfNamespace: false` to bypass
// ! this warning.
// import logo from "./logo.svg"

const MainNavigation = () => {
    return ( 
        <header className={classes.header}>
            <div>
                <p>
                    <img src={logo} alt="logo"></img>
                </p>
            </div>
            <nav>
                <ul>
                    <li><Link to='/'>Accueil</Link></li>
                    <li><Link to='/a-propos'>À propos</Link></li>
                </ul>
            </nav>
        </header>
     );
}
 
export default MainNavigation;