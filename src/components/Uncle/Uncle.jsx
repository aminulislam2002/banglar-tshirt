import React from 'react';
import Cousin from '../Cousin/Cousin';

const Uncle = () => {
    return (
        <div>
            <h1>Uncle</h1>
            <section className='flex'>
                <Cousin>Miraj</Cousin>
                <Cousin>Meme</Cousin>
            </section>
        </div>
    );
};

export default Uncle;