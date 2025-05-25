import image from "public/image.jpg"
import Image from "next/image"
export default function PicnicImage(){
return(
    <div className="relative h-screen">
        <div className="absolute inset-0 -z-10">
        <Image 
        src={image}
        fill
        alt="picnic"
        style={{objectFit:'cover'}}
        />
        </div>
        <div>
            <h1 className="font-bold text-4xl ">Picnic day</h1>
        </div>
    </div>
)
}