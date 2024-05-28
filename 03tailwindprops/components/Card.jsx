let newArr = [1,3,4,5,6]
let object ={
    name: "rowdy",
    city: "hyderabad"
}
 import React from 'react'  
 
 function Card( {userName ="hc" ,income = "0Rs" }) {
   return (
    <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800"> 
        <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://tse4.mm.bing.net/th?id=OIP.ar4Iqk4Cjg9kMVh2VbdYCAHaFj&pid=Api&P=0&h=220" alt="nature image" width="384" height="512"/>
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
               <p class="text-lg font-medium">hello let start</p>
            </blockquote>
            <figcaption class="font-medium">
                <div class="text-sky-500 dark:text-sky-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolor doloremque, ipsa accusantium odit ratione architecto nam velit quam repellat cumque rem quo facilis enim cum deserunt dicta minus consequuntur.

                </div>
                <div class="text-slate-700 dark:text-slate-500">
                    Staff Engineer, {userName}
                </div>
            </figcaption>
        </div>
    </figure>
   )
    
   
 }
 
export default Card


