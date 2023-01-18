import React from 'react'

export default function Footer({ text }) {
    return (
        <>
            <footer className="page-footer font-small blue pt-4 bg bg-success">

                <div className="container-fluid text-center text-md-left">

                    <div className="row">

                        <div className="col-md-6 mt-md-0 mt-3">

                            <h5 className="text-uppercase">{text}</h5>
                            <p>Here you can use rows and columns to organize your footer content.</p>

                        </div>

                        <hr className="clearfix w-100 d-md-none pb-3"/>

                            <div className="col-md-3 mb-md-0 mb-3">

                                <h5 className="text-uppercase">Links</h5>

                                <ul className="list-styled">
                                    <li>
                                        <a href="#!">Link 1</a>
                                    </li>
                                </ul>

                            </div>

                            <div className="col-md-3 mb-md-0 mb-3">

                                <h5 className="text-uppercase">Links</h5>

                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#!">Link 1</a>
                                    </li>
                                  
                                </ul>

                            </div>

                    </div>

                </div>

                <div className="footer-copyright text-center py-3">© 2022 Copyright:
                    <a href="/"> MDBootstrap.com</a>
                </div>

            </footer>
        </>
    )
}
