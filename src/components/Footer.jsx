import React from "react";
import SVGLogo from "../assets/icons/logo.svg";

const Footer = React.forwardRef((props, ref) => {
    return (
        <footer className="footer" ref={ref}>
            <div className="container">
                <div className="footer__icon">
                    <SVGLogo />
                </div>

                <div className="footer__texts">
                    <p>
                        Desenvolvido com <span>&hearts;</span>, React e SASS!
                        Por {"\n"}
                        <a
                            href="https://www.linkedin.com/in/leonardo-henrique-/"
                            target="_blank"
                            rel="external noopener noreferrer"
                        >
                            Leonardo Henrique
                        </a>
                        .
                    </p>
                </div>
            </div>
        </footer>
    );
}) 

export default Footer;