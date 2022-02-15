programa
{
	
	funcao inicio()
	{
		real janeiro,fevereiro,marco,abril,soma,media
		
		escreva("Digite seus ganhos em janeiro")
		leia(janeiro)
		escreva("Digite seus ganhos em fevereiro")
		leia(fevereiro)
		escreva("Digite seus ganhos em março")
		leia(marco)
		escreva("Digite seus ganhos em abril")
		leia(abril)

		soma = (janeiro+fevereiro+marco+abril)
		media = (janeiro+fevereiro+marco+abril)/4
		escreva("Sua média é de: " + media)
		
		se(media>=5000) {
			escreva("Parabéns, você ganhará um abono de 10%")
		}

		se(media<5000) {
			escreva("Você ganhará um abono de 5%")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 401; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */