import Image from 'next/image'
import { ArrowUpRight, Youtube, Facebook } from 'lucide-react'

export default function Hero() {
    return (
      <div className="min-h-screen relative">
        <div className="grid lg:grid-cols-2 gap-6 p-6 relative">
          {/* Left Column */}
          <div className="bg-[#f3f859] rounded-3xl p-12 flex flex-col justify-between text-stone-950">
            <div>
              <div className="flex items-center gap-2 mb-12">
                <div className="h-5 w-5 bg-black rounded-full" />
                <span className="font-medium">Atacama Group</span>
              </div>
              <h1 className="text-5xl font-bold leading-tight mb-12">
                Saving{' '}
                <span className="inline-flex items-center">
                  Nature <ArrowUpRight className="h-8 w-8 border-2 border-black rounded-full border-dashed" />
                </span>{' '}
                & Fighting Climate Change Together.
              </h1>
            </div>
          </div>
  
          {/* Right Column */}
          <div className="relative rounded-3xl overflow-hidden">
            <Image
              src="/assets/images/manzar.jpg?height=600&width=800"
              alt="Desert landscape"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
  
            {/* Volunteer Card */}
            <div className="absolute top-6 left-6 bg-white/80 backdrop-blur-sm p-3 rounded-2xl flex items-center gap-3">
              <Image
                src="/next.svg?height=40&width=40"
                alt="Volunteer"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-sm font-medium">We & Our Volunteers</span>
              <ArrowUpRight className="h-5 w-5" />
            </div>
  
            {/* Bottom Section */}
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
              <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-2xl">
                Join us in fighting environmental problems
              </div>
              <div className="flex gap-2">
                <Youtube className="h-8 w-8 text-white" />
                <Facebook className="h-8 w-8 text-white" />
                <span className="text-white text-sm">Find us on social networks</span>
              </div>
            </div>
          </div>
        </div>
  
        {/* White Rectangle */}
        <div
          className="h-20 w-28 rounded-t-3xl bg-[#0a0a0a] absolute left-1/2 top-[70%] transform -translate-x-1/2 -bottom-10 z-10"
        ></div>
      </div>
    );
  }
  