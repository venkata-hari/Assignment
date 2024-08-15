import React, { useState } from 'react';
import './Styles/Main.css';
import { Buddha } from '../Utils/assets/index';
import { JSON_Data } from './JSON';
const App = () => {
    const [state, setState] = useState(JSON_Data)
    const [isNavOpen, setIsNavOpen] = useState(false);
    const openNav = () => {
        setIsNavOpen(!isNavOpen);
    

    };
    const closeNav = () => {
        setIsNavOpen(false);
    };

    return (
        <div>
            <div className="sidenav" style={{ width: isNavOpen ? '330px' : '0' }}>
           
                <section style={{ padding: '16px', marginBottom: '20%' }}>
                    <div className="closebtn" onClick={closeNav}>
                    <i className="fa-solid fa-angle-left"></i>
                    </div>
                    <div className="title">{state.Title}</div>
                    <section className='icons'>
                        <section>
                            <div><i className='far fa-heart'></i></div>
                            <section className='count'>0</section>
                        </section>
                        <section>
                            <div><i className="fas fa-share-alt"></i></div>
                            <section className='count'>120</section>
                        </section>
                        <section>
                            <div> <i className="fa-regular fa-eye"></i></div>
                            <section className='count'>27</section>
                        </section>

                    </section>
                    {Object.entries(JSON_Data.data).map(([key, value]) => (
                        <div key={key} className="details">
                            {key}:{value}
                        </div>
                    ))}
                    <div>
                        <div className="description_title">Description</div>
                        <div className="description">{state.Description}</div>
                    </div>
                    <div className='read_more'>
                    <span>&rarr;</span> <span>Read More</span>
                    </div>
                    <div className='share_content_btns'>
                    <button>ADD TO COLLECTION</button>
                    <button>SOUVENIR</button>
                    </div>
                </section>
            </div>

            <div className='main_container'>
                <button
                    className={isNavOpen ? 'open_nav_btn':'open_nav_btn1'}
                    
                    onClick={openNav}
                >
                    <i className="fa fa-angle-double-left" aria-hidden="true"></i>
                </button>
                <div className={isNavOpen ? 'image_container1' : 'image_container'}>
                    <img src={Buddha} alt='' />
                </div>

            </div>
        </div>
    );
};

export default App;
