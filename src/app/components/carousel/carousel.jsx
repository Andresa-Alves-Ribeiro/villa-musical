import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';

import Corais from '../../assets/corais.jpg';
import CoralInfanto from '../../assets/coral infanto.jpg';
import Cordas from '../../assets/cordas.jpg';
import Libras from '../../assets/libras.jpg';
import Musicalizacao from '../../assets/music infantil.jpg';
import Sax from '../../assets/sax.jpg';
import Violino from '../../assets/violino.jpg';
import Crianças from '../../assets/icon-crianças.png';
import Coral from '../../assets/icon-coral.png';
import Musicalização from '../../assets/icon-menina.png';
import Saxofone from '../../assets/icon-saxofone.png';
import Violino2 from '../../assets/icon-violino.png';
import Libras2 from '../../assets/icon-sinais.png';
import { Guitar } from '@phosphor-icons/react';

export default function CarouselFotos() {
    return (
        <div className='flex flex-row w-4/6 mx-auto bg-zinc-500 justify-between'>
            <div className='w-2/3'>
                <div className='flex flex-row'>
                    <input type='radio' />
                    <Image src={Coral} alt='' />
                    <span>Coral</span>
                </div>

                <div className='flex flex-row'>
                    <input type='radio' />
                    <Image src={Crianças} alt='s' />
                    <span>Coral Infanto-Juvenil</span>
                </div>

                <div className='flex flex-row'>
                    <input type='radio' />
                    <Guitar size={40} weight='fill' />
                    <span>Cordas</span>
                </div>

                <div className='flex flex-row'>
                    <input type='radio' />
                    <Image src={Libras2} alt='s' />
                    <span>Libras</span>
                </div>

                <div className='flex flex-row'>
                    <input type='radio' />
                    <Image src={Musicalização} alt='s' />
                    <span>Musicalização Infantil</span>
                </div>

                <div className='flex flex-row'>
                    <input type='radio' />
                    <Image src={Saxofone} alt='s' />
                    <span>Saxofone</span>
                </div>

                <div className='flex flex-row'>
                    <input type='radio' />
                    <Image src={Violino2} alt='s' />
                    <span>Violino</span>
                </div>
            </div>

            <div className="w-4/6 pl-4">
                <div className='border-l-2 border-white' />
                <Carousel showThumbs={false} showIndicators={false}>
                    <div>
                        <Image src={Corais} alt="Slide 1" height={600} width={900} />
                        <p className="legend">Coral</p>
                    </div>
                    <div>
                        <Image src={CoralInfanto} alt="Slide 2" height={600} width={900} />
                        <p className="legend">Coral Infanto-Juvenil</p>
                    </div>
                    <div>
                        <Image src={Cordas} alt="Slide 2" height={600} width={900} />
                        <p className="legend">Cordas</p>
                    </div>
                    <div>
                        <Image src={Libras} alt="Slide 1" height={600} width={900} />
                        <p className="legend">Libras</p>
                    </div>
                    <div>
                        <Image src={Musicalizacao} alt="Slide 2" height={600} width={900} />
                        <p className="legend">Musicalização Infantil</p>
                    </div>
                    <div>
                        <Image src={Sax} alt="Slide 2" height={600} width={900} />
                        <p className="legend">Saxofone</p>
                    </div>
                    <div>
                        <Image src={Violino} alt="Slide 1" height={600} width={900} />
                        <p className="legend">Violino</p>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}
