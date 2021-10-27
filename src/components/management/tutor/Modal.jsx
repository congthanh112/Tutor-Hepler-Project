import React from 'react';
import "./modal.scss";

const Modal = () => {
    return (
        <div>
            <div>
                <div className="wrapper">
                    <a href="#demo-modal">Open Demo Modal</a>
                </div>
                <div id="demo-modal" className="modal">
                    <div className="modal__content">
                        <h1>CSS Only Modal</h1>
                        <p>
                            You can use the :target pseudo-class to create a modals with Zero JavaScript. Enjoy!
                        </p>
                        <div className="modal__footer">
                            Made with <i className="fa fa-heart" />, by <a href="https://twitter.com/denicmarko" target="_blank">@denicmarko</a>
                        </div>
                        <a href="#" className="modal__close">×</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;