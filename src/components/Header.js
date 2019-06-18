import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <FontAwesomeIcon icon={faCodeBranch} size="4x"/>
                    <h1>Neuroglancer Hub</h1>
                    <p>Set of tools that work with and enhance the Google neuroglancer tool for volume visualization and annotation.</p>
                    <ul className="actions">
                        <li><a href="#one" className="button scrolly">Discover</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header
