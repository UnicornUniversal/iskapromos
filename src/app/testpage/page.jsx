'use client'
import React from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const page = () => {




  const handleTest = async () => {
    try {
      const response = await axios.post('/api/test' );
      toast.success('Test successful');
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting email:', error);
    }
  }



  return (
    <div>
      <h1>Testing to aseee</h1>



      <button onClick={ handleTest }>Test</button>
    </div>
  )
}

export default page
