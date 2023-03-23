import './About.css';

const About = () => {
    return (
        <section className="u-clearfix u-grey-5 u-section-4" id="sec-7e29">
            <div className="u-clearfix u-sheet u-sheet-1">
                <div className="u-clearfix u-expanded-width u-gutter-10 u-layout-wrap u-layout-wrap-1">
                    <div className="u-layout">
                        <div className="u-layout-row">
                            <div className="u-container-style u-layout-cell u-left-cell u-size-30 u-size-xs-60 u-layout-cell-1" src="">
                                <div className="u-container-layout u-container-layout-1">
                                    <h2 className="u-align-center u-text u-text-default u-text-1">About</h2>
                                    <p className="u-align-left u-text u-text-2">
                                        <b>Petya Panayotova Design Studio </b>
                                        is a platform, where you can add your cards for all occasions. The designer Petya will populate them
                                        in the network so your art can be seen by as many people as possible.
                                    </p>
                                </div>
                            </div>
                            <div className="u-align-center u-container-style u-layout-cell u-right-cell u-size-30 u-size-xs-60 u-layout-cell-2">
                                <div className="u-container-layout u-container-layout-2" src="">
                                    <img
                                        className="u-image u-image-default u-image-1"
                                        src="/images/-A6.png"
                                        alt="aboutPicture"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;