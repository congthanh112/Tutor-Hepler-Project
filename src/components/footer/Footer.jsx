import React from 'react';
import './footer.scss';

const Footer = () => {
    return (
        <div>
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h6>About Us</h6>
                            <p className="text-justify">We are TutorHelper Team. This is our subject project, Software Architectural and Design <i> guide by Mr. PhuongLHK</i>. We are Non-profit organization with prupose to help tutor and student contact together </p>
                        </div>
                        <div className="col-xs-6 col-md-3">
                            <h6>Technology</h6>
                            <ul className="footer-links">
                                <li><a href="http://scanfcode.com/category/c-language/">.NET 5.0</a>  <a className="facebook" href="#"><i className="bx bxl-windows" /></a></li>
                                <li><a href="http://scanfcode.com/category/front-end-development/">React JS</a>  <a className="facebook" href="#"><i className="bx bxl-react" /></a></li>
                                <li><a href="http://scanfcode.com/category/back-end-development/">Flutter</a></li>
                                <li><a href="http://scanfcode.com/category/java-programming-language/">Microsoft SQL Server</a></li>
                                <li><a href="http://scanfcode.com/category/android/">Firebase</a></li>
                                <li><a href="http://scanfcode.com/category/templates/">Material UI</a></li>
                            </ul>
                        </div>
                        <div className="col-xs-6 col-md-3">
                            <h6>Member</h6>
                            <ul className="footer-links">
                                <li><a href="https://www.facebook.com/cong.thanh0112/">Pham Dao Cong Thanh</a></li>
                                <li><a href="https://www.facebook.com/xX.haitung.Xx">Dang Thanh Hai</a></li>
                                <li><a href="https://www.facebook.com/dat09.dz">Le Quoc Dat</a></li>
                                <li><a href="https://www.facebook.com/minhnln0712">Nguyen Le Nhat Minh</a></li>

                            </ul>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <p className="copyright-text">Copyright © 2021 by TutorHelper Team</p>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <ul className="social-icons">
                                <li><a className="facebook" href="#"><i className="bx bxl-facebook" /></a></li>
                                <li><a className="instagram" href="#"><i className="bx bxl-instagram" /></a></li>
                                <li><a className="twitter" href="#"><i className="bx bxl-twitter" /></a></li>
                                <li><a className="linkedin" href="#"><i className="bx bxl-linkedin" /></a></li>
                                <li><a className="github" href="#"><i className="bx bxl-github" /></a></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}


export default Footer;