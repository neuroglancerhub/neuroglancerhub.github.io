import React from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout';

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

class Homepage extends React.Component {
    render() {
        const siteTitle = "Neuroglancer Hub";

        return (
            <Layout>
                <Helmet title={siteTitle} />

                <section id="one" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>A central organization for neuroglancer annotation.</h2>
                            </header>
                            <p> The idea is to provide an entry point for different custom workspaces that leverage the neuroglancer REACT component. Example workspaces could include ones that enable annotations only, focused merge protocols, or data exploration with neuprint.
                            </p>
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src={pic01} alt="" /></span>
                        </div>
                    </div>
                </section>

                <section id="two" className="main style2">
                    <div className="grid-wrapper">
                        <div className="col-6">
                        </div>
                        <div className="col-6">
                        </div>
                    </div>
                </section>

                <section id="three" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Featured Repositories</h2>
                            </header>
                        </div>

                        <div className="col-4">
                            <span className="image fit"><img src={pic02} alt="" /></span>
                            <h3>neuroglancer</h3>
                            <p>A fork of the original google/neuroglancer code.</p>
                            <ul className="actions">
                              <li><a href="https://github.com/neuroglancerhub/neuroglancer" className="button">More</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic03} alt="" /></span>
                            <h3>react-neuroglancer</h3>
                            <p>The wrapper code that makes it possible to include neuroglancer as a REACT component.</p>
                            <ul className="actions">
                              <li><a href="https://github.com/neuroglancerhub/react-neuroglancer" className="button">More</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic04} alt="" /></span>
                            <h3>ng_workspaces</h3>
                            <p>The ng_workspaces website will tie the various annotation plugins together in a central location for annotation efforts. </p>
                            <ul className="actions">
                              <li><a href="https://github.com/neuroglancerhub/ng_workspaces" className="button">More</a></li>
                            </ul>
                        </div>

                    </div>
                </section>
            </Layout>
        );
    }
}

export default Homepage;
