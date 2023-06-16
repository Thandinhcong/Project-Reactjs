import React, { useState } from 'react';
import './scroll.css';

const Scroll = () => {
    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 300) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 300) {
            setShowScroll(false);
        }
    };

    window.addEventListener('scroll', checkScrollTop);

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="App">
            {/* Các phần tử trong trang */}
            {showScroll && (
                <div className="scrollTop" onClick={scrollTop}>
                    <i className="fa fa-angle-up"></i>
                </div>
            )}
        </div>
    );
};

export default Scroll;
