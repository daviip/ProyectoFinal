import Image from 'next/image'
import Sliderimg from '../public/slider.webp'
import Styles from '../styles/Home.module.css'

export const Slider = () => {
    return(
        <div className="slider">
           <Image src={Sliderimg} layout="responsive" height={250}/>
        </div>
    )

}
