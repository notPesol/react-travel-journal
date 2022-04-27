import world from "../images/world.png";

const Header = () => {
    return ( 
        <header className="Navbar">
            <img src={world} alt="world" /> &nbsp; <span>my travel journal.</span>
        </header>        
     );
}
 
export default Header;