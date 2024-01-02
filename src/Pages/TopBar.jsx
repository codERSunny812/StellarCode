import { Button } from '@chakra-ui/react'
import Logo from '../assets/LeetCode_logo.png'


const TopBar = () => {
  return (
   <>
          <div className=" w-full bg-[#282828]">
    <div className="flex items-center justify-between">
     <div className="logo">
        <img src={Logo}/>
     </div>
     <div className="buttonAndLogin px-3 mx-2">
        <Button
        backgroundColor="#3E3D3D"
        color="orange"
        >buy me a coffe</Button>
       <Button className='mx-1'>sign in</Button>
     </div>
    </div>
   </div>
   </>
  )
}

export default TopBar