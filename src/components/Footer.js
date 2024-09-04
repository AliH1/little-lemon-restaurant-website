import logo from "../images/logo.svg"

const Footer = () => {
    return(
        <footer>
            <section>
            <div>
                <img src={logo} alt="Logo" />
            </div>
            <div>
                <h3>Document Navigation</h3>
            <ul>
            <li><a href="Home">Home</a></li>
                <li><a href="About">About</a></li>
                <li><a href="Menu">Menu</a></li>
                <li><a href="Reservation">Reservations</a></li>
                <li><a href="Order">Order Online</a></li>
                <li><a href="Login">Login</a></li>
            </ul>
            </div>
            <div>
                <h3>Contact Information</h3>
            <ul>
                <li><a href="Adress">Address</a></li>
                <li><a href="Phone Number">Phone Number</a></li>
                <li><a href="Email">Email</a></li>
            </ul>
            </div>
            <div>
                <h3>Social Media Links</h3>
            <ul>
                <li><a href="facebook">Facebook</a></li>
                <li><a href="instagram">Instagram</a></li>
                <li><a href="twitter.com">X Formerly</a></li>
            </ul>
            </div>
            </section>
        </footer>
    )
}

export default Footer;