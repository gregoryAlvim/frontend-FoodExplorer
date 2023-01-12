import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

import { sizes, devices } from '../../configs/devices';
import { useAuth } from '../../hooks/auth';

import { SubTitleComponent } from '../../components/SubTitle';
import { ItemCarouselComponent } from '../../components/ItemCarousel';
import { AddNewDishCardComponent } from '../../components/AddNewDishCard';

import { Container } from './styles';

export function CarouselComponent({ children, arraylength, description, ...rest }) {

   const { user } = useAuth();
   const navigate = useNavigate();
   const isAdmin = user.role === "Admin";
 
   const [checkScreenWidth, setCheckScreenWidth] = useState(window.innerWidth <= parseInt(sizes.laptop));
   const [isNarrowScreen, setIsNarrowScreen] = useState(checkScreenWidth);

   const [currentSlide, setCurrentSlide] = useState(0);
   const [loaded, setLoaded] = useState(false);

   const [sliderRef, instanceRef] = useKeenSlider({
      initial: 1,
      mode: "free",
      slides: {
         origin: "center",
         ...(isNarrowScreen ? { perView: 1 } : { perView: 3.5 }),
         spacing: 20
      },
      range: {
         align: true,
         ...(isNarrowScreen ? { perView: 0 } : { min: 1 }),
         max: arraylength,
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
   };

   function redirectToCreateNewDish() {
      navigate('/create-dish');
   }

   useEffect(() => {
      
      const mediaWatcher = window.matchMedia(devices.laptop);

      function updateIsNarrowScreen(event) {
         setIsNarrowScreen(event.matches);
      }

      function updateCheckScreenWidth() {
         setCheckScreenWidth(window.innerWidth <= parseInt(sizes.laptop));
      }

      mediaWatcher.addEventListener("change", updateIsNarrowScreen);
      window.addEventListener("resize", updateCheckScreenWidth);

   }, [isNarrowScreen, checkScreenWidth]);

   return (
      <Container>
         <SubTitleComponent className="titleCarousel">
            {description}
         </SubTitleComponent>
         <div className="navigation-wrapper slidesContainer">
            <div className="rightOpacityEffect"></div>
            <div ref={sliderRef} className="keen-slider">
               {isAdmin ? <div className="keen-slider__slide"><AddNewDishCardComponent onClick={redirectToCreateNewDish} /></div> : <div className="keen-slider__slide"></div>}
               
               {children}

            </div>
            <div className="leftOpacityEffect"></div>

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
                        currentSlide === instanceRef.current.track.details.slides.length - 1
                     }
                  />
               </>
            )}
         </div>
      </Container>
   );
}