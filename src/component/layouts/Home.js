import React from "react";
import Slider from "react-slick";
import img1 from '../../assests/main-61.png';
import img2 from '../../assests/main-63.png';
import img3 from '../../assests/main-64.png';
import img4 from '../../assests/main-65.png';
import img5 from '../../assests/main-66.png';


const Home = (props) =>{
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows:true,
        autoplay:true,
        
      };
      const searchData=[
        {img:img1,km:'85,000 km',price:'$8 300'},
        {img:img2,km:'85,000 km',price:'$8 300'},
        {img:img3,km:'85,000 km',price:'$8 300'},
        {img:img4,km:'85,000 km',price:'$8 300'},
        {img:img5,km:'85,000 km',price:'$8 300'},
        {img:img1,km:'85,000 km',price:'$8 300'},
        {img:img1,km:'85,000 km',price:'$8 300'},
        {img:img2,km:'85,000 km',price:'$8 300'},
        {img:img3,km:'85,000 km',price:'$8 300'},
        {img:img4,km:'85,000 km',price:'$8 300'},
        {img:img5,km:'85,000 km',price:'$8 300'},
        {img:img1,km:'85,000 km',price:'$8 300'},
    ]
    return(
    <div>
        <div id="home">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="formDiv">
                            <h4>Marketplace for buyers and sellers who love cars</h4>
                            <h1>Find your next car here</h1>
                            <form>
                                <div className="formContent">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="selectDiv">
                                            <i class="fa fa-map-marker" aria-hidden="true"></i>
                                            <select name="cars" id="cars">
                                                <option value="volvo">Toronto (+100km)</option>
                                                <option value="saab">Saab</option>
                                                <option value="mercedes">Mercedes</option>
                                                <option value="audi">Audi</option>
                                            </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="selectDiv">
                                            <i class="fa fa-car" aria-hidden="true"></i>
                                            <select name="cars" id="cars" className="brands_model">
                                                <option value="volvo">Brands and model</option>
                                                <option value="saab">Saab</option>
                                                <option value="mercedes">Mercedes</option>
                                                <option value="audi">Audi</option>
                                            </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-2">
                                            <div className="selectDiv">
                                            <i class="fa fa-money" aria-hidden="true"></i>
                                            <input type="number" placeholder="Max price"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-2">
                                           
                                        </div>
                                        
                                    </div>
                                </div>
                                <button className="searchBtn">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="marketStatus">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h4>Market status</h4>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="chartDiv">
                                    <canvas id="myChart" width="300" height="300"></canvas>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <ul>
                                    <li className="active"><span></span></li>
                                    <li><span></span></li>
                                    <li><span></span></li>
                                    <li><span></span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="yourSearchDiv">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h2>Continue your search</h2>
                                    <p>All makes, +1 filter</p>
                                    
                                    <Slider {...settings}>
                                     {searchData.map((item)=>(
                                         <div>
                                            <div className="searchDiv">
                                                <img src={item.img} className="img-responsive"/>
                                                <div className="imgContent">
                                                    <p>{item.km}</p>
                                                    <span>{item.price}</span>
                                                </div>
                                            </div>
                                        </div>
                                     ))}                              
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)}
export default Home ;