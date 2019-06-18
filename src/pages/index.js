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
                        <div className="col-12">
                            <header className="major">
                              <h2>Roadmap</h2>
                            </header>
                            <ul>
                              <li>Build out ng workspaces to support different neuroglancer-based applications (for data mining, proofreading, etc).  Create a generic environment that allows components to be composited into a workspace based on user preference.</li>
                              <li>Enhance 3D annotation capabilities in neuroglancer.  Create a REACT component that works with neuroglancer to display and query annotations.</li>
                              <li>Support ‘protocols’ in neuroglancer whereby a REACT component allows users to sequence through a set of actions (such as proofreading decisions) in neuroglancer.</li>
                              <li>Improve flexibility of key bindings in neuroglancer.  Support different ‘modes’ such as ‘view’, ‘annotate’, ‘merge’ to better delineate different types of operations in neuroglancer.</li>
                              <li>Protocols to enable focused merging between two or more neurons.</li>
                              <li>Integrate simple neuprint plugins into ng workspaces to enable users to explore connectomics data with neuroglancer. (edited)</li>
                            </ul>

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
                            <p>A fork of the original google/neuroglancer code that will be regularly updated and synced.</p>
                            <ul className="actions">
                              <li><a href="https://github.com/neuroglancerhub/neuroglancer" className="button">More</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                          <span className="image fit">
                            <img src={pic03} alt="" />
                          </span>
                            <h3>react-neuroglancer</h3>
                            <p>Wrapper code that makes it possible to include neuroglancer as a REACT component.</p>
                            <ul className="actions">
                              <li><a href="https://github.com/neuroglancerhub/react-neuroglancer" className="button">More</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic04} alt="" /></span>
                            <h3>ng workspaces</h3>
                            <p>Web application framework that provides generic resources for sharing components between different applications using neuroglancer.</p>
                            <ul className="actions">
                              <li><a href="https://github.com/neuroglancerhub/ng_workspaces" className="button">More</a></li>
                            </ul>
                        </div>

                    </div>
                </section>
                <section id="four" className="main style2 special">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                              <h2>Collaborators</h2>
                            </header>
                            <p>Google - Jeremy Maitin-Shepard (neuroglancer)</p>
                            <p>Janelia Scientific Computing</p>
                            <p>Janelia FlyEM</p>

                        </div>
                        <div className="col-6">
                          <p>We are excited about collaborations with neuroglancer users and also desire a lot of feedback on potential enhancements. Please make general requests or comments in our <a href="https://github.com/neuroglancerhub/neuroglancerhub.github.io/issues">issue tracker</a> or email us</p>
                        </div>
                    </div>
                </section>


            </Layout>
        );
    }
}

export default Homepage;
