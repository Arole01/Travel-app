const Footer = () => {
    return (
        <section className="footer">
            <div className="box-container">
                <div className="box">
                    <h3>about us</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                <div className="box">
                    <h3>branch locations</h3>
                    <a href="#">india</a>
                    <a href="#">USA</a>
                    <a href="#">japan</a>
                    <a href="#">france</a>
                </div>
                <div className="box">
                    <h3>quick links</h3>
                    <a href="#">home</a>
                    <a href="#">book</a>
                    <a href="#">packages</a>
                    <a href="#">services</a>
                    <a href="#">gallery</a>
                    <a href="#">review</a>
                    <a href="#">contact</a>
                </div>
                <div className="box">
                    <h3>follow us</h3>
                    <a href="#">facebook</a>
                    <a href="#">twitter</a>
                    <a href="#">instagram</a>
                    <a href="#">linkedin</a>
                </div>
            </div>
            <h1 className="credit">created by <span>Mr. Ajose David</span>| all rights reserved!</h1>
        </section>
    )
}

export default Footer;