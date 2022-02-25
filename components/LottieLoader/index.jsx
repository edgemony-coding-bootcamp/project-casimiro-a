import Lottie from "lottie-react";
import travelLoader from './../../public/travel-load.json';

export default function LottieLoader() {
    return(
        <Lottie animationData={travelLoader} loop={true} style={{height:'100vh', width:'30%', margin:'auto'}}/>
    )
};