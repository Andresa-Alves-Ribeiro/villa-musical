import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';

import Corais from '../../assets/corais.jpg';
import Cordas from '../../assets/cordas.jpg';
import Libras from '../../assets/libras.jpg';

import { Guitar, HandWaving, MicrophoneStage } from '@phosphor-icons/react';

export default function CarouselFotos() {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (index) => {
        setSelectedItem(index);
    };

    return (
        <div className='flex flex-row w-3/5 mx-auto bg-zinc-900 border-2 shadow-sm shadow-yellow-300 border-yellow-300 border-opacity-30 justify-between rounded-xl'>
            <div className='w-1/3 my-auto max-xl:mt-12 pl-4 space-y-8'>
                <button
                    onClick={() => handleItemClick(0)}
                    className={`flex w-full items-center cursor-pointer ${selectedItem === 0 ? 'border-r-4 border-yellow-300 text-yellow-300' : 'hover:text-yellow-200 hover:border-r-4 hover:border-yellow-200'}`}
                >
                    <MicrophoneStage size={32} weight='fill' />
                    <span className='flex mx-auto'>Coral</span>
                </button>

                <button
                    onClick={() => handleItemClick(1)}
                    className={`flex w-full items-center cursor-pointer ${selectedItem === 1 ? 'border-r-4 border-yellow-300 text-yellow-300' : 'hover:text-yellow-200 hover:border-r-4 hover:border-yellow-200'}`}
                >
                    <Guitar size={36} weight='fill' />
                    <span className='flex mx-auto'>Cordas</span>
                </button>

                <button
                    onClick={() => handleItemClick(2)}
                    className={`flex w-full items-center cursor-pointer ${selectedItem === 2 ? 'border-r-4 border-yellow-300 text-yellow-300' : 'hover:text-yellow-200 hover:border-r-4 hover:border-yellow-200'}`}
                >
                    <HandWaving size={36} weight='fill' />
                    <span className='flex mx-auto'>Libras</span>
                </button>
            </div>

            <div className='my-auto h-60 mr-4 border-r-2 border-gray-400' />

            <div className="w-full h-full">
                <Carousel showThumbs={false} showIndicators={false} showStatus={false} selectedItem={selectedItem}>
                    <div>
                        <Image src={Corais} alt="Slide 1" height={600} width={900} className='rounded-tr-xl rounded-br-xl' />
                    </div>
                    <div>
                        <Image src={Cordas} alt="Slide 2" height={600} width={900} className='rounded-tr-xl rounded-br-xl' />
                    </div>
                    <div>
                        <Image src={Libras} alt="Slide 3" height={600} width={900} className='rounded-tr-xl rounded-br-xl' />
                    </div>
                </Carousel>
            </div>
        </div>
    )
}