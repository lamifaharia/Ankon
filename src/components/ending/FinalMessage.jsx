import { motion } from "framer-motion";


const FinalMessage = () => {

return (

<section
className="
min-h-screen
flex
items-center
justify-center
px-6
text-center
"
>


<motion.div

initial={{
opacity:0,
scale:.7
}}

animate={{
opacity:1,
scale:1
}}

transition={{
duration:1
}}

>


<h1
className="
font-heading
text-6xl
md:text-9xl
font-black
bg-gradient-to-r
from-pink-400
via-purple-400
to-cyan-400
text-transparent
bg-clip-text
"
>

Happy Birthday
<br/>
Bhai ❤️

</h1>


<p
className="
mt-10
text-xl
text-gray-300
max-w-2xl
leading-10
"
>

If I had the chance...

I would choose you as my first university friend
all over again.

Thank you for being my family.

</p>


</motion.div>


</section>

)

}


export default FinalMessage;