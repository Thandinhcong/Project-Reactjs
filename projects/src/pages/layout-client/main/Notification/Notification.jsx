import React, { useState, useEffect } from 'react';
import './Notification.css';

const Notification = () => {
    const [showNotification, setShowNotification] = useState(false);

    useEffect(() => {
        setShowNotification(true);
    }, []);

    const closeNotification = () => {
        setShowNotification(false);
    };

    return (
        <div className="App">
            {/* Các phần tử trong trang */}
            {showNotification && (
                <div className="notification">
                    <p>
                        <h3>Thông báo khuyến mãi</h3>
                        <h1>SALE 70%</h1>
                        Thông báo Thandinhclothes đang có chương trình khuyến mãi đặc biệt cho khách hàng nhân dịp blackfileday <br />
                        <a href="">Xem ngay</a>
                    </p>
                    <button onClick={closeNotification}><img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/delete-sign.png" alt="delete-sign" /></button>
                </div>
            )}
        </div>
    );
};

export default Notification;
