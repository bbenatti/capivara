# [Capivara](https://pt.wikipedia.org/wiki/Gloss%C3%A1rio_de_enxadrismo#Pato)

Uma tentativa de perder menos no xadrez.

## Instalação
```bash
	git clone https://github.com/bbenatti/capivara.git
	cd capivara
	npm i -D @babel/core @babel/preset-env @babel/preset-react
	npm i
	npm start
```

## Roadmap

- [x] Integração chessboardjsx e chessjs
- [x] Inclusão de regras 
- [ ] Interface para escolha de peça promovida
- [ ] Integração engine stockfish
- [ ] Cálculo de vantagem em centipawns
- [ ] Extração de melhores jogadas/linhas
- [ ] Integração com notação pgn
- [ ] Botões com funções voltar jogada, desistir, dica, virar tabuleiro
- [ ] Integração com livro de aberturas (ECO)
- [ ] Importar/exportar pgn/fen
- [ ] MapReduce de set de pgn
- [ ] Visualização de análises com d3.js
- [ ] Implementação de [engine com deepleaning](https://medium.com/applied-data-science/how-to-build-your-own-alphazero-ai-using-python-and-keras-7f664945c188)