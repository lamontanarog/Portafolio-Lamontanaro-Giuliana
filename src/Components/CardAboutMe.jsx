import  { useState } from 'react';
import './Card.css'; // Estilo CSS para la tarjeta

// eslint-disable-next-line react/prop-types
const CardAboutMe = ({ title, content }) => {
    const [flipped, setFlipped] = useState(false);

    const handleCardClick = () => {
        setFlipped(!flipped);
    };

    return (
        <div className={`Card-container ${flipped ? 'flipped' : ''}`} onClick={handleCardClick}>
            <div className="Card">
                <div className="front Card-body">
                    <h5 className="Card-title">{title}</h5>
                </div>
                <div className="back Card-body">
                    <p className="Card-text">{content}</p>
                </div>
            </div>
        </div>
    );
};

export default CardAboutMe;
