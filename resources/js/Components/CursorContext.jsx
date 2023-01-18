import React, { createContext, useEffect, useState } from 'react'
import { transparent } from 'tailwindcss/colors'

export const CursorContext = createContext()
export default function CursorProvider({ children }) {
    const [cursorPos, setCursorPos] = useState({
        x: 0,
        y: 0
    })
    const [cursorBG, setCursorBG] = useState('default')
    useEffect(() => {
        const move = (e) => {
            setCursorPos({
                x: e.clientX,
                y: e.clientY
            })
        }
        window.addEventListener('mousemove', move)
            return () => {
              window.removeEventListener('mousemove', move)
          }
    }, [])
    const cursorVariants = {
        default: {
            x: cursorPos.x - 16,
            y: cursorPos.y - 16,
            backgroundColor: 'transparent',
            borderWidth: '2px',
            borderColor: '#0000FF'
        },
        text: {
            width: '150px',
            height: '150px',
            x: cursorPos.x - 72,
            y: cursorPos.y - 72,
            backgroundColor: '#fff',
            mixBlendMode: 'difference'
        }
    }
    const mouseEnterHandler = () => {
        setCursorBG('text')
    }
     const mouseLeaveHandler = () => {
        setCursorBG('default')
    }
  return (
      <CursorContext.Provider value={{cursorVariants, cursorBG, mouseEnterHandler, mouseLeaveHandler}}>
          {children}
    </CursorContext.Provider>
  )
}
