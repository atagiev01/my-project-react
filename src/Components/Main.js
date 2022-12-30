import React, { useState } from 'react'
import Card from './Card';

function Main(props) {

    const [type, setType] = useState('series');
    const { cars, searchQuery } = props;
    
    return (
<main className='d-flex flex-column'>
    <div className='main__buttons d-flex'>
        <h3>NEW PRODUCT</h3>
        <button onClick={() => setType('Qadin')} type='button' className='btn-success'>Qadin</button>
        <button onClick={() => setType('Kişi')} type='button'>Kişi</button>
        <button onClick={() => setType('Kids')} type='button'>Kid's</button>
        <button onClick={() => setType('Accessories')} type='button'>Accessories</button>
        <button onClick={() => setType('Cosmetics')} type='button'>Cosmetics</button>
    </div>
<div className='main__content grid-container'>
    {
        cars.map(car => {
            return (
                car.type === type ?
                    (
                        car.title.toLowerCase().includes(searchQuery.toLowerCase()) ? <Card
                            src={car.src}
                            title={car.title}
                            Marka={car.marka}
                            price={car.price}
                        /> : null
                    )
                    : null
            )
        })
    }
</div>
<section className='carousel-show'>
    <div id="demo" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <span>The Chloe Collection</span>
                <h1>The Project Jacket</h1>
                <button class="button-shop">Shop now</button>
            </div>
            <div class="carousel-item">
                <span>The Chloe Collection</span>
                <h1>The Project Jacket</h1>
                <button class="button-shop">Shop now</button>
            </div>
            <div class="carousel-item">
                <span>The Chloe Collection</span>
                <h1>The Project Jacket</h1>
                <button class="button-shop">Shop now</button>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
        </button>
    </div>
</section>
<div class="container  d-flex justify-content-center">
    <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-6 w-20">
            <div class="trend__content">
                <div class="section-title">
                    <h4>Hot Trend</h4>
                </div>
                <div class="trend__item">
                    <div class="trend__item__pic">
                        <img src="https://preview.colorlib.com/theme/ashion/img/trend/ht-1.jpg.webp" alt=""></img>
                    </div>
                    <div class="trend__item__text">
                        <h6>Chain bucket bag</h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="product__price">$ 59.0</div>
                    </div>
                </div>
                <div class="trend__item">
                    <div class="trend__item__pic">
                        <img src="https://preview.colorlib.com/theme/ashion/img/trend/ht-2.jpg.webp" alt=""></img>
                    </div>
                    <div class="trend__item__text">
                        <h6>Pendant earrings</h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="product__price">$ 59.0</div>
                    </div>
                </div>
                <div class="trend__item">
                    <div class="trend__item__pic">
                        <img src="https://preview.colorlib.com/theme/ashion/img/trend/ht-3.jpg.webp" alt=""></img>
                    </div>
                    <div class="trend__item__text">
                        <h6>Cotton T-Shirt</h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="product__price">$ 59.0</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-6 w-20">
            <div class="trend__content">
                <div class="section-title">
                    <h4>Best seller</h4>
                </div>
                <div class="trend__item">
                    <div class="trend__item__pic">
                        <img src="img/trend/bs-1.jpg" alt=""></img>
                    </div>
                    <div class="trend__item__text">
                        <h6>Cotton T-Shirt</h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="product__price">$ 59.0</div>
                    </div>
                </div>
                <div class="trend__item">
                    <div class="trend__item__pic">
                        <img src="" alt=""></img>
                    </div>
                    <div class="trend__item__text">
                        <h6>Zip-pockets pebbled tote <br />briefcase</h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="product__price">$ 59.0</div>
                    </div>
                </div>
                <div class="trend__item">
                    <div class="trend__item__pic">
                        <img src="img/trend/bs-3.jpg" alt=""></img>
                    </div>
                    <div class="trend__item__text">
                        <h6>Round leather bag</h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="product__price">$ 59.0</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-6 w-20">
            <div class="trend__content">
                <div class="section-title">
                    <h4>Feature</h4>
                </div>
                <div class="trend__item">
                    <div class="trend__item__pic">
                        <img src="img/trend/f-1.jpg" alt=""></img>
                    </div>
                    <div class="trend__item__text">
                        <h6>Bow wrap skirt</h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="product__price">$ 59.0</div>
                    </div>
                </div>
                <div class="trend__item">
                    <div class="trend__item__pic">
                        <img src="img/trend/f-2.jpg" alt=""></img>
                    </div>
                    <div class="trend__item__text">
                        <h6>Metallic earrings</h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="product__price">$ 59.0</div>
                    </div>
                </div>
                <div class="trend__item">
                    <div class="trend__item__pic">
                        <img src="img/trend/f-3.jpg" alt=""></img>
                    </div>
                    <div class="trend__item__text">
                        <h6>Flap cross-body bag</h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="product__price">$ 59.0</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</main>

        
    )
}



export default Main;