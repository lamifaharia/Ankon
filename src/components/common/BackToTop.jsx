import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";


const BackToTop = () => {

const [visible,setVisible]=useState(false);


useEffect(()=>{

const scroll = () => {

setVisible(window.scrollY > 500);

};


window.addEventListener(
"scroll",
scroll
);


return ()=>window.removeEventListener(
"scroll",
scroll
);


},[]);



return (

visible && (

<motion.button

initial={{
opacity:0,
scale:0
}}

animate={{
opacity:1,
scale:1
}}

onClick={()=>window.scrollTo({
top:0,
behavior:"smooth"
})}

className="
fixed
bottom-8
left-8
z-50
w-14
h-14
rounded-full
bg-gradient-to-r
from-pink-500
to-purple-600
shadow-xl
flex
items-center
justify-center
"

>

<FaArrowUp/>

</motion.button>

)

);

};


export default BackToTop;