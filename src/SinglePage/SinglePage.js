import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Sdata from "../components/destinations/Sdata"
import EmptyFile from "../common/Empty/EmptyFile"
import { useParams } from "react-router-dom"
import "./singlepage.css"

const SinglePage = () => {
    const { id } = useParams()
    const [item, setItem] = useState(null)

    useEffect(() => {
        let item = Sdata.find((item) => item.id === parseInt(id))
        if (item) {
            setItem(item)
        }
    }, [id])

    return (
        <>
            {item ? (
                <section className='single-page top'>
                    <div className='container'>
                        {/* --------- main-content--------- */}
                        <article className='content flex'>
                            <div className='main-content'>
                                <img src={item.image} alt='' />
                                <p>{item.desc}</p>
                                <p>{item.desc}</p>

                                <div className='para flex_space'>
                                    <p>{item.sidepara}</p>
                                    <p>{item.sidepara}</p>
                                </div>
                                <h1>Whta is the {item.title} City ?</h1>
                                <p>{item.desc}</p>

                                <div className='image grid1 '>
                                    <img src={item.paraImage_one} alt='' />
                                    <img src={item.paraImage_two} alt='' />
                                </div>
                                <p>{item.desc}</p>
                            </div>
                            {/* --------- main-content--------- */}

                            {/* --------- side-content--------- */}
                            <div className='side-content'>
                                <div className='box'>
                                    <h2>How can we help you?</h2>
                                    <p>{item.sidepara}</p>
                                    <button className='outline-btn'>
                                        <i className='fa fa-phone-alt'></i> Contact Us
                                    </button>
                                </div>

                                <div className='box2'>
                                    <p>{item.sidepara}</p>
                                </div>
                            </div>
                            {/* --------- side-content--------- */}
                           <a href="/"><button>gosdadsdsadsad</button></a>
                        </article>

                    </div>
                </section>
            ) : (
                <EmptyFile />
            )}
        </>
    )
}

export default SinglePage
