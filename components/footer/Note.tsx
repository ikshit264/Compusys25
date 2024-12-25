import React from 'react'
import "./fotter.css"

const Note = () => {
    return (
        <div className=''>
            <div className="relative bg-[#FFAA2B] text-black p-6 rounded-lg w-80 -rotate-[4deg] shadow-[#FFAA2B]/60 shadow-lg">
                <h3 className="text-black font-bold mb-2">NOTE FROM MDS</h3>

                <p className="text-black leading-relaxed">
                    Everything here—words, curriculum, recording, editing, design, code—was produced by my own two fallible human hands. I wanted to personally showcase my own capabilities by using the exact same techniques that I teach in the course. Thanks for taking the time to check out everything!
                </p>

                <div className="mt-4">
                    <div className="w-16 h-4 bg-black rounded-full"></div>
                </div>

                <div className="absolute top-0 right-0 w-10 h-10 bg-[#FFAA2B] border-b border-b-white/70 shadow-black/50 shadow-sm">
                    <div className="absolute inset-0 transform  diagonal-split"></div>

                </div>
            </div>
        </div>

    )
}

export default Note
