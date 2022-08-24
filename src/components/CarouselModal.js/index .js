import React from 'react';

function CarouselModal({ onClose, currentPhoto}) {
    const { index } = currentPhoto;

    return(
        <div className='modalBackdrop'>
            <div className='modalContainer'>
                <img alt='recent work' src={require(`../../assets/images/carousel${index}.*`)}/>   
                <button onClick={onClose} type='button'>
                    Close Recent Work
                </button>
            </div>
        </div>

    )
}

export default CarouselModal;