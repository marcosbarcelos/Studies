//inclusao de bibliotecas
#include <stdio.h>
#include <string.h>
#include <math.h>

void limpar_entrada() {
  char c;
  while ((c = getchar()) != '\n' && c != EOF) {}
}

void ler_texto(char *buffer, int length) {
  fgets(buffer, length, stdin);
  strtok(buffer, "\n");
}

//identifica o entry point do programa, onde come�a
int main() {
  double altura, peso, valorImc, valorPI;
  char sexo;
  char classificacaoIMC[100];

  printf("Digite sua altura: ");
  scanf("%lf", &altura);

  printf("Digite seu peso: ");
  limpar_entrada();
  scanf("%lf", &peso);

  printf("Digite um sexo (F/M): ");
  limpar_entrada();
  scanf("%c", &sexo);

  valorImc = (peso / (altura * altura));
  
  if (valorImc < 18.5) {
    strcpy(classificacaoIMC, "peso abaixo do normal");
  } else if (valorImc < 25) {
    strcpy(classificacaoIMC, "a classificacao excelente");
  } else if (valorImc < 30) {
    strcpy(classificacaoIMC, "sobrepeso");
  } else if (valorImc < 35) {
    strcpy(classificacaoIMC, "Obesidade grau I");
  } else if (valorImc < 40) {
    strcpy(classificacaoIMC, "Obesidade grau II");
  } else if (valorImc > 40) {
    strcpy(classificacaoIMC, "Obesidade Morbida");
  }

  if (sexo == "F") {
    valorPI = (21 * (altura * altura));
  } else {
    valorPI = (22 * (altura * altura));
  }
  
  printf("Seu IMC e %.1lf, voce esta com %s e seu peso ideal e %.1lf", valorImc, classificacaoIMC, valorPI);
  return 0;
}
  
  
  
