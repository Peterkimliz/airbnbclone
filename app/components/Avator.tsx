
import Image from 'next/image'

const Avator = () => {
  return (
    <div>
      <Image
      className=' rounded-full'
      src="/assets/profile.png"
      width="30"
      height="30"
      alt='Avator'/>
    </div>
  )
}

export default Avator
