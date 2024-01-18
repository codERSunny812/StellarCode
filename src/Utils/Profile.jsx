// import React from 'react'
import { useEffect , useState } from 'react'
import TopBar from '../Pages/TopBar'
import axios from 'axios';


const Profile = () => {
  const[name,setName] = useState('');
  const[rank,setRank] = useState(0);

  useEffect(()=>{
    getName();
    getRank();

  },[]);

  const getName = async() =>{
    

    const options = {
      method: 'GET',
      url: 'https://leetcodeapi.p.rapidapi.com/codeERASunny/name',
      headers: {
        'X-RapidAPI-Key': '8ea2f8c9d3msheed4df389aec10bp1d2453jsn1ccfe7bde100',
        'X-RapidAPI-Host': 'leetcodeapi.p.rapidapi.com'
      }
    };


    try {
      const response = await axios.request(options);
      setName(response?.data)
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const getRank = async() =>{
    const options = {
      method: 'GET',
      url: 'https://leetcodeapi.p.rapidapi.com/codeERASunny/rank',
      headers: {
        'X-RapidAPI-Key': '8ea2f8c9d3msheed4df389aec10bp1d2453jsn1ccfe7bde100',
        'X-RapidAPI-Host': 'leetcodeapi.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      console.log(response?.data);
      setRank(response.data)
    } catch (error) {
      console.error(error);
    }

  }


  return (
    <>
    <TopBar/>
    <div className="body h-screen w-screen bg-black flex text-white gap-10">

      <div className="container1 h-96 border-2 border-white">
         <div className="border-2 border-white">
          <div className="user">
            <h1>image of the user</h1>
            <h1>{name}</h1>
            <h1>codersunny812</h1>
            <h1>Rank:{rank}</h1>
          </div>
         </div>
      </div>
      <div className="container2 h-96 border-2 border-white">
         this is  the UI for the about the user section
      </div>


    </div>
    </>
  )
}

export default Profile