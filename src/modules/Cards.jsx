import React, {Component} from 'react';
import CardUI from './CardUI';
import Data from "./card_data.json";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './carousel_card-style.css'

const resp={
    desktop: {
        breakpoint: { max: 3000, min: 2500 },
        items: 2,
        slidesToSlide: Data.length, // optional, default to 1.
        paritialVisibilityGutter: 0
      },
      tablet: {
        breakpoint: { max: 2500, min: 464 },
        items: 2,
        paritialVisibilityGutter: 0
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        paritialVisibilityGutter: 0            
      }
}
class Cards extends Component{   
    render(){
        return(
            <div className="containMe">
                <div  >
                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={resp}
                    ssr={false} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={1000}
                    keyBoardControl={false}
                    customTransition="all .5"
                    transitionDuration={1000}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={[ "mobile", "desktop"]}
                    deviceType="tablet"
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    centerMode={true}
                    // eslint-disable-next-line react/jsx-no-duplicate-props
                    customTransition="transform 300ms ease"
                >
                {
                    Data.map((carddata, index)=>{
                        return(
                            <div className="col-lg-2" key={carddata.Image}>
                                <CardUI 
                                    imgsrc={carddata.Image} 
                                    cardtitle={carddata.Title}
                                    carddate={carddata.ADate}
                                    cardstarttime={carddata.Start_Time}
                                    carddescription={carddata.Description}
                                    />
                            </div>
                        );
                    })
                }</Carousel>
                </div>
            </div>
        );
    }
}
export default Cards;