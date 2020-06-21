import React, { useState } from 'react'
import Chess from 'chess.js'
import ChessBoard from 'chessboardjsx'
const chess = new Chess()

const get_board = (props) => {
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
		update({ position: chess.fen() })
	}	

	state.onDrop = onDrop
	return <ChessBoard {...state}/>
}

export default () => get_board({ position: 'start' })