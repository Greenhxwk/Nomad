import React from 'react';
import './hero.styles.scss';

const Hero = () => {
    return (
        <section class="hero is-large is-info hero-image">
            <div className="hero-body">
                <h1 className="hero-title">
                    Bags reimagined for modern life
                </h1>
                <p className="subtitle">
                    <div className='shop-now-btn'> 
                        <button className='button is-black' id='shop-now'>
                            SHOP NOW
                        </button>
                    </div>
                </p>
            </div>
        </section>   
    );
}

export default Hero;