import React from 'react'

export const LastContent = () => {
    return (
        <>
            {/*----Last-section*/}
            <div className="parallax-wrap">
                <div className="content-last">
                    <div
                        className="heading wow fadeInUp animated"
                        style={{ visibility: "visible", animationName: "fadeInUp" }}
                    >
                        We have much more, <br />
                        {`let's get started`}
                    </div>
                    <div
                        className="text wow fadeInUp animated"
                        style={{ visibility: "visible", animationName: "fadeInUp" }}
                    >
                        Latest Trends|Technology &amp; Innovation|Industry Relations|Business
                        News|Market Research
                    </div>
                    <a
                        href="#"
                        className="tf-button-primary btn btn-primary style-green m-auto wow fadeInUp animated"
                        style={{ visibility: "visible", animationName: "fadeInUp" }}
                    >
                        View Properties
                        <i className="icon-arrow-right-add" />
                    </a>
                </div>
            </div>
            {/*---End Last Section*/}
        </>

    );
}
