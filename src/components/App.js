import React, { useState } from 'react'
import Chess from 'chess.js'
import ChessBoard from 'chessboardjsx'

const chess = new Chess()
const props = { 
	position: 'start',
	pieceTheme: 'chess24_theme',
	lightSquareStyle: { backgroundColor: 'rgb(250, 200, 200)' },
	darkSquareStyle: { backgroundColor: 'rgba(15, 50, 50,.5)' },
	boardStyle:{
        borderRadius: "5px",
        boxShadow: '0 5px 15px rgba(30, 0, 0, 0.5)',
        display:'block',
        margin:'0 auto'
  	},
  	dropSquareStyle:{
		boxShadow: 'inset 0 0 1px 4px #d88'
  	},
}

// var stockfish = new Worker("./stockfish.js");

const board = (props) => {
	const [state,update] = useState(props)
	const onDrop = ({ sourceSquare,targetSquare})=>{
		const moves = chess.moves()
		const move = chess.move({
			from: sourceSquare,
			to: targetSquare,
			promotion: 'q'
		})

		if(move===null)
			return

		chess.move(move)
		const props = Object.assign({},state)
		props.position = chess.fen()
		update(props)
	}	

	state.onDrop = onDrop
	state.onDrop = onDrop
	return <ChessBoard {...state} />
}

export default () => board(props)