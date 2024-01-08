import { useState } from 'react'
import TopBar from '../Pages/TopBar'
import Question from '../Componets/WorkSpace/Question';



const ProblemsQuestion = () => {
    const[isTimerVisible,setTimerVisible]=useState(true);
    
  
   

    const handleClockStatus=()=>{
        isTimerVisible ? setTimerVisible(false) : setTimerVisible(true)
    }
  return (
    <>
    <TopBar  boolValue={true}  isTimerVisible={isTimerVisible}  handleClockStatus={handleClockStatus}/>
    <Question/>
    </>
  )
}

export default ProblemsQuestion