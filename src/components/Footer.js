import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

class Footer extends React.Component {
    render() {
        return (
            <section id="footer">
                <ul className="icons">
                  <li><a href="https://github.com/neuroglancerhub"><FontAwesomeIcon icon={faGithub} size="2x"/></a></li>
                </ul>
                <ul className="copyright">
                    <li>&copy; 2019 HHMI</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                </ul>
            </section>
        )
    }
}

export default Footer
