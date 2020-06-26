import React, { useState } from 'react'
import Chess from 'chess.js'
import ChessBoard from 'chessboardjsx'
import Control from './Control'
import { parse } from 'pgn-parser'

const chess = new Chess()
const pgn = "1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 { B33 Sicilian Defense: Open } 5. Nxc6 bxc6 6. e5?? { (0.00 → -1.60) Blunder. Bd3 was best. } (6. Bd3 e5 7. O-O Bc5 8. Nc3 O-O 9. Na4 Be7 10. f4 Qc7) 6... Nd5?? { (-1.60 → -0.01) Blunder. Qa5+ was best. } (6... Qa5+ 7. Nd2 Qxe5+ 8. Be2 Qb8 9. O-O e5 10. f4 e4 11. c4) 7. Bc4 e6 8. O-O d6 9. Re1 dxe5 10. Rxe5 Bd6 11. Re2? { (-0.50 → -1.67) Mistake. Rh5 was best. } (11. Rh5 O-O) 11... O-O?! { (-1.67 → -0.77) Inaccuracy. Qh4 was best. } (11... Qh4) 12. b3?! { (-0.77 → -1.46) Inaccuracy. Nd2 was best. } (12. Nd2 Qc7 13. Nf3 Bb7 14. Re1 c5 15. c3 Nf4 16. Bxf4 Bxf4 17. h3 Rab8 18. Qe2 h6) 12... Re8? { (-1.46 → -0.35) Mistake. Qf6 was best. } (12... Qf6 13. c3 Rd8 14. Qc2 a5 15. Nd2 Qxc3 16. Qxc3 Nxc3 17. Re1 a4 18. Nf3 Nd5 19. Bg5) 13. Bb2 Qb6? { (-0.65 → 0.73) Mistake. Qc7 was best. } (13... Qc7 14. Kh1 Rd8 15. Nc3 Bb7 16. Qd4 c5 17. Nxd5 cxd4 18. Nxc7 Bxc7 19. f3 e5 20. a4) 14. Nd2 Ba6 15. a4 Bxc4?? { (0.33 → 4.01) Blunder. Bb4 was best. } (15... Bb4) 16. Nxc4 Qa6? { (3.93 → 7.35) Mistake. Qd8 was best. } (16... Qd8 17. Nxd6 Qxd6 18. c4 e5 19. Rc1 Rad8 20. cxd5 cxd5 21. Rec2 d4 22. Rc6 Qb8 23. R1c4) 17. Nxd6 Red8 18. Nxf7?? { (10.67 → 0.00) Blunder. Rxe6 was best. } (18. Rxe6) 18... Kxf7?? { (0.00 → 4.07) Blunder. Nc3 was best. } (18... Nc3 19. Qxd8+ Rxd8 20. Bxc3 Kxf7 21. Re4 c5 22. Rf4+ Kg8 23. Re1 Rd5 24. Rfe4 Kf7 25. Rf4+) 19. Rxe6?! { (4.07 → 3.15) Inaccuracy. Re4 was best. } (19. Re4) 19... Kxe6 20. Qg4+ Kd6 21. Rd1?? { (3.19 → 0.00) Blunder. c4 was best. } (21. c4 Re8) 21... Kc7 22. Qxg7+ Kb8?? { (-0.45 → 8.37) Blunder. Kb6 was best. } (22... Kb6 23. a5+) 23. Be5+ Kc8 24. Rxd5 cxd5? { (8.11 → Mate in 1) Checkmate is now unavoidable. Qb6 was best. } (24... Qb6 25. Qg4+) 25. Qc7# { White wins by checkmate. } 1-0"

const board = (props) => {

	const foward = () =>{
		const moves = parse(pgn)[0].moves.map(move=>move.move)
		const move = moves[chess.history().length]
		chess.move(move)
		updateBoard()
	}
	const back = () => {
		chess.undo()
		updateBoard()
	}

	const updateBoard = () =>{
		const props = Object.assign({},state)
		console.log(chess.pgn())
		props.position = chess.fen()
		console.log(chess)

		update(props)
	}

	const onDrop = ({ sourceSquare,targetSquare}) =>{
		const moves = chess.moves()
		const move = chess.move({
			from: sourceSquare,
			to: targetSquare,
			promotion: 'q'
		})

		if(move===null)
			return

		chess.move(move)
		updateBoard()
	}	
	
	const [state,update] = useState(props)
	props = Object.assign({},state)
	props.onDrop = onDrop
	props.onDrop = onDrop

	return (
		<div>
			<ChessBoard {...props} />
			<Control events={{foward:foward,back:back}} />
		</div>
	)
	
}

export default () => board({ 
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
})
