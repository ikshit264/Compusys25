'use client';

import React from 'react';
import ImageFloat from './ImageFloat';

const ShortIntro = () => {
    return (
        <div>
            <div className='flex w-full flex-row items-center justify-around p-8'>
                <ImageFloat
                    image1Start={{ top: '10%', left: '10%' }}
                    image2Start={{ bottom: '30%', right: '30%' }}
                />
                <div>
                    <div className='flex justify-center flex-col items-center text-white text-center'>
                        <h2 className='text-4xl font-bold mb-2 '>Let&apos;s make our world cleaner and Greener!</h2>
                        <p className='text-center text-lg'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, distinctio!
                        </p>
                    </div>
                </div>
                <ImageFloat
                    image1Start={{ top: '20%', left: '50%' }}
                    image2Start={{ bottom: '40%', right: '80%' }}
                />
            </div>
        </div>
    );
};

export default ShortIntro;
