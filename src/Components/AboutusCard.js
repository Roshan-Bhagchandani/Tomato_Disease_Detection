import React from "react";
// import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const AboutusCard = (props) => {
    const { name, github, instagram, linkedin } = props;
    return (
        <div className="pic">
            <img src="/images/passphoto.png" alt="" />
            <h3>{name}</h3>
            {/* <a href="https://www.instagram.com/rashid_._mohammad?igsh=MTE5NG00czF5czBxaQ==" target="_blank" rel="noopener noreferrer" className="mr-4">
                <FontAwesomeIcon icon={faInstagram} className="text-5xl hover:text-gray-500 m-5" />
            </a>
            <a href="https://www.linkedin.com/in/rashid-aziz-68a208200/" target="_blank" rel="noopener noreferrer" className="mr-4">
                <FontAwesomeIcon icon={faLinkedin} className="text-5xl hover:text-gray-500 m-5" />
            </a> */}

        </div>
    )
}