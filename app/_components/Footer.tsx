import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='grid md:grid-cols-2 items-center justify-between gap-14'>
      <div className='grid-cols-1 gap-8 items-center justify-center'>
        <div>
          <div>
            <Image src={"/Logo.png"}
              alt="AI Courses Generator"
              width={50}
              height={50} />
          </div>
        </div>
        <p>

        </p>
        <div>

        </div>
      </div>
      <div className='flex md:justify-end justify-center gap-10'>

      </div>
    </div>
  )
}

export default Footer