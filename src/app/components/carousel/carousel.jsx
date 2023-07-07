import Image from 'next/image';
import Equipe from '../../assets/integrantes.jpeg'


export default function Carousel() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <Image className="d-block w-90" src={Equipe} alt="First slide" style={{ height: '80vh' }} />
                </div>
                <div className="carousel-item">
                    <Image className="d-block w-100" src={Equipe} alt="Second slide" style={{ height: '80vh' }} />
                </div>
                <div className="carousel-item">
                    <Image className="d-block w-100" src={Equipe} alt="Third slide" style={{ height: '80vh' }} />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}