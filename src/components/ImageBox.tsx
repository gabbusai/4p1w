import React from 'react'


type ImageBoxProps = {
    // Define any props you need here
    imageUrl: string;
    }
function ImageBox({ imageUrl }: ImageBoxProps) {
  return (
    <div>
      <img src={imageUrl} alt="" className='h-[400px] w-[400px]'/>
    </div>
  )
}

export default ImageBox
