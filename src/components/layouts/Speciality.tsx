import React, { useState } from 'react'

const Speciality = ({ data }: unknown) => {

    const [dataText] = useState({
        subtitle: 'Our Speciality',
        title: 'Complete Solutions for your NFT',
        desc: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
    })
    console.log(data, "data")

    return (
        <section className="tf-section section-speciality">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-md-12">
                        <div className="block-text pt-128 pd-0">
                            <h5 className='sub-title mb-10' data-aos="fade-up" data-aos-duration="1000">
                                {dataText.subtitle}
                            </h5>
                            <h3 className='title mb-28' data-aos="fade-up" data-aos-duration="1000">{dataText.title}</h3>
                            <p className='fs-21' data-aos="fade-up" data-aos-duration="1000">{dataText.desc}</p>
                        </div>
                    </div>

                    <div className='col-xl-7 col-md-12'>
                        <div className="section-speciality__box">
                            {
                                data.map((data: unknown, index: number) => {
                                    return (
                                        <div key={index} className={`box-item bg-2`} data-aos="flip-left">
                                            <h3 className='color-main'>{data.stt}</h3>
                                            <p>{data.desc}</p>
                                        </div>)
                                })
                            }
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Speciality