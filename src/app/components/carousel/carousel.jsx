import React, { useState } from 'react';
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
import Violoes from '../../assets/violões.jpg';

export default function CarouselFotos() {

    return (
        <div className=" max-w-3xl mx-auto bg-gray-100">
            <Carousel>
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
    )
}
