import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';

import Corais from '../../assets/corais.jpg';
import Cordas from '../../assets/cordas.jpg';
import Libras from '../../assets/libras.jpg';
import Sax from '../../assets/sax.jpg';
import Violino from '../../assets/violino.jpg';
import Coral from '../../assets/icon-coral.png';
import Saxofone from '../../assets/icon-saxofone.png';
import Violino2 from '../../assets/icon-violino.png';
import Libras2 from '../../assets/icon-sinais.png';
import { Guitar } from '@phosphor-icons/react';

export default function CarouselFotos() {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (index) => {
        setSelectedItem(index);
    };

    return (
        <div className='flex flex-row w-4/5 mx-auto bg-zinc-900 border-2 shadow-md shadow-yellow-300 border-yellow-300 border-opacity-30 justify-between rounded-xl'>
            <div className='w-1/3 my-auto max-xl:mt-12 pl-4 space-y-4'>
                <button
                    onClick={() => handleItemClick(0)}
                    className={`flex w-full items-center cursor-pointer ${selectedItem === 0 ? 'border-r-4 border-yellow-300 text-yellow-300' : 'hover:text-yellow-200 hover:border-r-4 hover:border-yellow-200'}`}
                >
                    <Image src={Coral} alt='' width={42} height={40} />
                    <span className='flex mx-auto'>Coral</span>
                </button>

                <button
                    onClick={() => handleItemClick(1)}
                    className={`flex w-full items-center cursor-pointer ${selectedItem === 1 ? 'border-r-4 border-yellow-300 text-yellow-300' : 'hover:text-yellow-200 hover:border-r-4 hover:border-yellow-200'}`}
                >
                    <Guitar size={40} weight='fill' />
                    <span className='flex mx-auto'>Cordas</span>
                </button>

                <button
                    onClick={() => handleItemClick(2)}
                    className={`flex w-full items-center cursor-pointer ${selectedItem === 2 ? 'border-r-4 border-yellow-300 text-yellow-300' : 'hover:text-yellow-200 hover:border-r-4 hover:border-yellow-200'}`}
                >
                    <Image src={Libras2} alt='s' width={36} height={36} />
                    <span className='flex mx-auto'>Libras</span>
                </button>

                <button
                    onClick={() => handleItemClick(3)}
                    className={`flex w-full items-center cursor-pointer ${selectedItem === 3 ? 'border-r-4 border-yellow-300 text-yellow-300' : 'hover:text-yellow-200 hover:border-r-4 hover:border-yellow-200'}`}
                >
                    <Image src={Saxofone} alt='s' width={36} height={36} />
                    <span className='flex mx-auto'>Saxofone</span>
                </button>

                <button
                    onClick={() => handleItemClick(4)}
                    className={`flex w-full items-center cursor-pointer ${selectedItem === 4 ? 'border-r-4 border-yellow-300 text-yellow-300' : 'hover:text-yellow-200 hover:border-r-4 hover:border-yellow-200'}`}
                >
                    <Image src={Violino2} alt='s' width={40} height={40} />
                    <span className='flex mx-auto'>Violino</span>
                </button>
            </div>

            <div className='my-auto h-80 mr-4 border-r-2 border-gray-400' />

            <div className="w-full h-full">
                <Carousel showThumbs={false} showIndicators={false} selectedItem={selectedItem}>
                    <div>
                        <Image src={Corais} alt="Slide 1" height={600} width={900} className='rounded-tr-xl rounded-br-xl' />
                    </div>
                    <div>
                        <Image src={Cordas} alt="Slide 2" height={600} width={900} className='rounded-tr-xl rounded-br-xl' />
                    </div>
                    <div>
                        <Image src={Libras} alt="Slide 3" height={600} width={900} className='rounded-tr-xl rounded-br-xl' />
                    </div>
                    <div>
                        <Image src={Sax} alt="Slide 4" height={600} width={900} className='rounded-tr-xl rounded-br-xl' />
                    </div>
                    <div>
                        <Image src={Violino} alt="Slide 5" height={600} width={900} className='rounded-tr-xl rounded-br-xl' />
                    </div>
                </Carousel>
            </div>
        </div>
    )
}