import React from 'react'
import './Chessboard.css'

const verticalAxis = ['1','2','3','4','5','6','7','8']
const horizontalAxis = ['a','b','c','d','e','f','g','h']
const board = []

export default function Chessboard() {

  for (let i = 0 ; i < 8 ; i ++){
    for (let j = 0 ; j < 8 ; j++){

      //const number = j + i + 2 ;

      board.push(<div className = "black-tile">{horizontalAxis[i]}{verticalAxis[j]}</div>)
      /*if (number % 2 === 0){

        board.push(<div className = "black-tile">{horizontalAxis[i]}{verticalAxis[j]}</div>)

      }

      else{

        board.push(<div className = "white-tile">{horizontalAxis[i]}{verticalAxis[j]}</div>)
      }
      */

      
      }

      

      

     
    }
  
  return (

    
    <div id = "chessboard">{board}</div>


  )
}
