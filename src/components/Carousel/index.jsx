import { useState, useEffect } from 'react';
import { devices } from '../../configs/devices';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react'

import { api } from '../../services/api';

import { SubTitleComponent } from '../../components/SubTitle';
import { ItemCarouselComponent } from '../../components/ItemCarousel';

import { Container } from './styles';

export function CarouselComponent({ description, dishes, ...rest }) {
   
   const [currentSlide, setCurrentSlide] = useState(0);
   const [loaded, setLoaded] = useState(false);
   
   const [sliderRef, instanceRef] = useKeenSlider({
      initial: 2,
      mode: "free",
      slides: { origin: "center", perView: 3.5, spacing: 20 },
      range: {
         align: true,
         min: 1,
         max: dishes.length - 1,
      },
      slideChanged(slider) {
         setCurrentSlide(slider.track.details.rel)
      },
      created() {
         setLoaded(true)
      },
   });

   function Arrow(props) {
      const disabled = props.disabled ? " arrow--disabled" : ""
      return (
         <svg
            onClick={props.onClick}
            className={`arrow ${props.left ? "arrow--left" : "arrow--right"
               } ${disabled}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
         >
            {props.left && (
               <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            )}
            {!props.left && (
               <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
         </svg>
      )
   }

   return (
      <Container>
         <SubTitleComponent className="titleCarousel">
            {description}
         </SubTitleComponent>
         <div className="navigation-wrapper ">
            <div ref={sliderRef} className="keen-slider carouselContainer">
               {
                  dishes.map(dish => (
                     <div key={String(dish.id)} className="keen-slider__slide">
                        <ItemCarouselComponent
                           name={dish.name}
                           description={dish.description}
                           price={dish.price}
                        />
                     </div>
                  ))
               }
            </div>

            {loaded && instanceRef.current && (
               <>
                  <Arrow
                     left
                     onClick={(e) =>
                        e.stopPropagation() || instanceRef.current?.prev()
                     }
                     disabled={currentSlide === 0}
                  />

                  <Arrow
                     onClick={(e) =>
                        e.stopPropagation() || instanceRef.current?.next()
                     }
                     disabled={
                        currentSlide ===
                        instanceRef.current.track.details.slides.length - 1
                     }
                  />
               </>
            )}
         </div>
      </Container>
   );
}