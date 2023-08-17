import React from "react";

export default function Comments() {
    return(
<section id="comment">


<div className="container px-5 py-10 mx-auto text-center">
<h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">Testimonial </h1>
</div>
<div class="flex justify-center relative top-1/3">
<div class="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg">
    <div class="relative flex gap-4">
        <img src="avathar.png" class="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20" alt="" loading="lazy"></img>
        <div class="flex flex-col w-full">
            <div class="flex flex-row justify-between">
                <p class="relative text-xl whitespace-nowrap truncate overflow-hidden">Ömer F. Sözcü</p>
                <a class="text-gray-500 text-xl" href="#"><i class="fa-solid fa-trash"></i></a>
            </div>
            <p class="text-gray-400 text-sm">20 April 2022, at 14:88 PM</p>
        </div>
    </div>
    <p class="-mt-4 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Maxime quisquam vero adipisci beatae voluptas dolor ame.</p>

</div>
</div>
</section>
    );
    }
