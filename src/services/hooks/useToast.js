import React, { useContext, useEffect } from 'react'
import { AppProvider } from '../../contextProviver/AppContext'


 export const useToast =()=> {

  const { app, setApp} = useContext(AppProvider)

  const createToast = ({ msg, status, action })=>{
     setApp({...app, toast : {
      msg,
      status,
      action
     }})
  }
   

  return {
    createToast
  }
}

