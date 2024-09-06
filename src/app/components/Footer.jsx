import React from 'react'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faEnvelope, faPhone, faAngleRight } from '@fortawesome/free-solid-svg-icons';

export const Footer = () => {
    return (
        <>
            {/*-----Footer section--------*/}
            <footer className="footer-area footer--light">
                <div className="footer-big">
                    {/* start .container */}
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-sm-12">
                                <div className="footer-widget">
                                    <div className="footer-menu">
                                        <h4 className="footer-widget-title">
                                            <Image
                                                className="img-responsive"
                                                src='/assets/images/logo/logo.png'
                                                width={150}
                                                height={60}
                                                alt="logo"
                                            />
                                        </h4>
                                        <p>
                                            Latest Trends|Technology &amp; Innovation|Industry
                                            Relations|Business News|Market Research
                                        </p>
                                    </div>
                                </div>
                                {/* Ends: .footer-widget */}
                            </div>
                            {/* end /.col-md-4 */}
                            <div className="col-6 col-md-2 col-sm-4">
                                <div className="footer-widget">
                                    <div className="footer-menu footer-menu--1">
                                        <h4 className="footer-widget-title">Services</h4>
                                        <ul>
                                            <li>
                                                <a href="#"><FontAwesomeIcon icon={faAngleRight} aria-hidden="true" /> Residential</a>
                                            </li>
                                            <li>
                                                <a href="#"><FontAwesomeIcon icon={faAngleRight} aria-hidden="true" /> Value Added Services</a>
                                            </li>
                                            <li>
                                                <a href="#"><FontAwesomeIcon icon={faAngleRight} aria-hidden="true" /> Land Services</a>
                                            </li>
                                            <li>
                                                <a href="#"><FontAwesomeIcon icon={faAngleRight} aria-hidden="true" /> Retail</a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* end /.footer-menu */}
                                </div>
                                {/* Ends: .footer-widget */}
                            </div>
                            {/* end /.col-md-3 */}
                            <div className="col-6 col-md-2 col-sm-4">
                                <div className="footer-widget">
                                    <div className="footer-menu">
                                        <h4 className="footer-widget-title">Technology</h4>
                                        <ul>
                                            <li>
                                                <a href="#"><FontAwesomeIcon icon={faAngleRight} aria-hidden="true" /> ACRM</a>
                                            </li>
                                            <li>
                                                <a href="#"><FontAwesomeIcon icon={faAngleRight} aria-hidden="true" /> ASTRA</a>
                                            </li>
                                            <li>
                                                <a href="#"><FontAwesomeIcon icon={faAngleRight} aria-hidden="true" /> ACP</a>
                                            </li>
                                            <li>
                                                <a href="#"><FontAwesomeIcon icon={faAngleRight} aria-hidden="true" /> ANACITY</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-4">
                                <div className="footer-widget">
                                    <div className="footer-menu no-padding">
                                        <h4 className="footer-widget-title">Contact Us</h4>
                                        <ul>
                                            <li>
                                                <a href="#"><FontAwesomeIcon icon={faMapMarker} aria-hidden="true" /> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</a>
                                            </li>
                                            <li>
                                                <a href="#"><FontAwesomeIcon icon={faPhone} aria-hidden="true" /> +911111111111</a>
                                            </li>
                                            <li>
                                                <a href="#"><FontAwesomeIcon icon={faEnvelope} aria-hidden="true" /> example@gmail.com</a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* end /.footer-menu */}
                                </div>
                                {/* Ends: .footer-widget */}
                            </div>
                            {/* Ends: .col-lg-3 */}
                        </div>
                        {/* end /.row */}
                    </div>
                    {/* end /.container */}
                </div>
                {/* end /.footer-big */}
                <div className="mini-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="copyright-text">
                                    <p>© 2024 . All rights reserved.</p>
                                </div>
                                <div className="go_top">
                                    <span className="icon-arrow-up" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/*-----End Footer Section----*/}
        </>

    )
}
