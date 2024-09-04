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
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>
            </ul>
            </div>
            <div>
                <h3>Contact Information</h3>
            <ul>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
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