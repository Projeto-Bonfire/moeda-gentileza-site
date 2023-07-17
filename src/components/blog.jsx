import { React, useRef } from 'react';
import './blog.css'
import nextIcon from './img/next.svg';
const Blog = () => {
    const carousel = useRef(null)
    const handleLeftClick = (e) => {
        carousel.current.scrollLeft -= carousel.current.offsetWidth
    }

    const handleRightClick = (e) => {
        carousel.current.scrollLeft += carousel.current.offsetWidth
    }

    return (
        <div className='container'>
            <h1 className='blog-title'>
                Blog
            </h1>
            <div className='carousel-field'>
                <div>
                    <button onClick={handleLeftClick}>
                        <img src={nextIcon} alt="next" className='next' />
                    </button>
                </div>
                <div className='carousel' ref={carousel}>
                    <div className='slot'>
                        <div className='image'>
                            <img src='' alt='image-1' />
                        </div>
                        <div className='info'>
                            <span className='title'>
                                <h1>
                                    Título
                                </h1>
                            </span>
                            <span className='description'>
                                <h3>
                                    Descrição
                                </h3>
                            </span>
                            <span className='description-text'>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur. Sem pharetra id rhoncus tellus dignissim egestas sapien. Quam ultrices in vel egestas. Velit cursus commodo semper viverra pharetra consequat suscipit. Ut vitae consequat interdum nibh arcu ut. Diam id id sem lorem. Orci feugiat eget mollis eget. Quis viverra enim dui ipsum at diam vel arcu. Sollicitudin feugiat tincidunt ut lorem.
                                </p>
                            </span>
                        </div>
                    </div>

                    <div className='slot'>
                        <div className='image'>
                            <img src='' alt='image-2' />
                        </div>
                        <div className='info'>
                            <span className='title'>
                                <h1>
                                    Título
                                </h1>
                            </span>
                            <span className='description'>
                                <h3>
                                    Descrição
                                </h3>
                            </span>
                            <span className='description-text'>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur. Sem pharetra id rhoncus tellus dignissim egestas sapien. Quam ultrices in vel egestas. Velit cursus commodo semper viverra pharetra consequat suscipit. Ut vitae consequat interdum nibh arcu ut. Diam id id sem lorem. Orci feugiat eget mollis eget. Quis viverra enim dui ipsum at diam vel arcu. Sollicitudin feugiat tincidunt ut lorem.
                                </p>
                            </span>
                        </div>
                    </div>

                    <div className='slot'>
                        <div className='image'>
                            <img src='' alt='image-3' />
                        </div>
                        <div className='info'>
                            <span className='title'>
                                <h1>
                                    Título
                                </h1>
                            </span>
                            <span className='description'>
                                <h3>
                                    Descrição
                                </h3>
                            </span>
                            <span className='description-text'>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur. Sem pharetra id rhoncus tellus dignissim egestas sapien. Quam ultrices in vel egestas. Velit cursus commodo semper viverra pharetra consequat suscipit. Ut vitae consequat interdum nibh arcu ut. Diam id id sem lorem. Orci feugiat eget mollis eget. Quis viverra enim dui ipsum at diam vel arcu. Sollicitudin feugiat tincidunt ut lorem.
                                </p>
                            </span>
                        </div>
                    </div>

                    <div className='slot'>
                        <div className='image'>
                            <img src='' alt='image-4' />
                        </div>
                        <div className='info'>
                            <span className='title'>
                                <h1>
                                    Título
                                </h1>
                            </span>
                            <span className='description'>
                                <h3>
                                    Descrição
                                </h3>
                            </span>
                            <span className='description-text'>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur. Sem pharetra id rhoncus tellus dignissim egestas sapien. Quam ultrices in vel egestas. Velit cursus commodo semper viverra pharetra consequat suscipit. Ut vitae consequat interdum nibh arcu ut. Diam id id sem lorem. Orci feugiat eget mollis eget. Quis viverra enim dui ipsum at diam vel arcu. Sollicitudin feugiat tincidunt ut lorem.
                                </p>
                            </span>
                        </div>
                    </div>

                    <div className='slot'>
                        <div className='image'>
                            <img src='' alt='image-5' />
                        </div>
                        <div className='info'>
                            <span className='title'>
                                <h1>
                                    Título
                                </h1>
                            </span>
                            <span className='description'>
                                <h3>
                                    Descrição
                                </h3>
                            </span>
                            <span className='description-text'>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur. Sem pharetra id rhoncus tellus dignissim egestas sapien. Quam ultrices in vel egestas. Velit cursus commodo semper viverra pharetra consequat suscipit. Ut vitae consequat interdum nibh arcu ut. Diam id id sem lorem. Orci feugiat eget mollis eget. Quis viverra enim dui ipsum at diam vel arcu. Sollicitudin feugiat tincidunt ut lorem.
                                </p>
                            </span>
                        </div>
                    </div>

                    <div className='slot'>
                        <div className='image'>
                            <img src='' alt='image-6' />
                        </div>
                        <div className='info'>
                            <span className='title'>
                                <h1>
                                    Título
                                </h1>
                            </span>
                            <span className='description'>
                                <h3>
                                    Descrição
                                </h3>
                            </span>
                            <span className='description-text'>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur. Sem pharetra id rhoncus tellus dignissim egestas sapien. Quam ultrices in vel egestas. Velit cursus commodo semper viverra pharetra consequat suscipit. Ut vitae consequat interdum nibh arcu ut. Diam id id sem lorem. Orci feugiat eget mollis eget. Quis viverra enim dui ipsum at diam vel arcu. Sollicitudin feugiat tincidunt ut lorem.
                                </p>
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    <button onClick={handleRightClick}>
                        <img src={nextIcon} alt="next" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Blog;