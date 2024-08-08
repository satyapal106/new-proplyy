import React from 'react'
import Image from 'next/image';
export const Technology = () => {
  return (
    <>
      <section className='technology-section'  style={{backgroundColor: '#e4edf6'}}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className='text-center mb-4'>Technology Section</h2>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <Image src="/assets/images/blog/technology.png" className='tech-image' width={700} height={400} alt="" />
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </section>
    </>
  )
}
