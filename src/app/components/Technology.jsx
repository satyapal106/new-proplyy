import React from 'react'
import Image from 'next/image';
export const Technology = () => {
  return (
    <>
      <section className="technology-section">
        <video className="tech-video w-100" autoPlay loop muted>
          <source src="/assets/images/technology.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="container">
          <div className="row">
            {/* <div className="col-md-12">
        <h2 className="text-center mb-4">Technology Section</h2>
      </div> */}
            <div className="col-12">

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
