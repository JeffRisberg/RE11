import React from 'react'
import { Link } from 'react-router'

/**
 * Appears at bottom of screen
 *
 * @author Jeff Risberg, Brandon Risberg
 * @since April 30, 2016
 */
class Footer extends React.Component {
    render() {
        return (
            <div>
                <div className="footer" style={{marginLeft: '+15px', marginRight: '+15px'}}>
                    <div className="row darkgrey footer-links">
                        <div className="col-md-6 text-left">
                            <a href="https://justgive.org/#/Help">Help</a>
                            <a href="https://justgive.org/#/ContactUs" className="margin-l">Contact Us</a>
                        </div>
                        <div className="col-md-6 text-right">
                            <a href="https://therisbergfamily.com" className="margin-r">
                                The Risberg Family
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;
