import React from 'react'
import GirlBg from '../assets/girl_child.mp4'

const Home = () => {
    return (
        <div className="w-full flex justify-center mt-[50px]">
            <div className="w-full max-w-[1000px] mt-[50px] flex flex-col">

                {/* CONTENT 1 */}
                <div>
                    <img src="/image/home/main.svg" alt="" loading="lazy"/>
                </div>

                {/* CONTENT 2 */}
                <div className="flex flex-col justify-center items-center w-full">
                    <div className="w-[610px] text-[80px] text-center leading-[90px]" style={{fontFamily: 'SF Pro Bold'}}>
                        Zero - Worries. 
                        Zero - Hassle.
                    </div>

                    <div>
                        A child's learning world begins in the classroom, using tools that are 
                        flexible, easy to operate, prioritise privacy, accessibility, and sustainability. 
                        Parents will have a better understanding of their child's journey in 
                        kindergarten because of our products.
                    </div>
                </div>

                {/* CONTENT 3 */}
                <div>
                    <video src={GirlBg} autoPlay loop muted />
                </div>
            </div>
        </div>
    );
};
  
export default Home;