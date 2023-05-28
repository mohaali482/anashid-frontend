import './App.css'
import { useEffect, useState } from 'react';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import router from './routes/index';
import Router from './routes/index';

function App() {
  // const [open, setOpen] = useState(false)
  // const toggleDrawer = () => {
  //   setOpen(!open)
  // }

  // useEffect(() => {
  //   if (open) {
  //     document.body.style.overflow = 'hidden'
  //   }
  //   else {
  //     document.body.style.overflow = 'unset'
  //   }
  // }, [open])

  // useEffect(() => {
  //   document.addEventListener('keydown', (event) => {
  //     if (event.key == 'Escape')
  //       setOpen(false)
  //   })
  // 
  //   return () => {
  //     document.removeEventListener('keydown', (event) => {
  //       if (event.key == 'Escape')
  //         setOpen(false)
  //     })

  //   }
  // }, [])


  return (
    <>
      <BrowserRouter >
        <Router />
      </BrowserRouter>
    </>
  )
}

export default App
