//inclusao de bibliotecas
#include <stdio.h>
#include <string.h>

int main() {
  int inteiro = 10;
  double real = 3.265;
  char nome[50] = "Maria";
  char sexo = 'f';

  //%d ou %i indica saída de inteiros
  printf("%d\n", inteiro); //10

  // \n indica quebra de linha

  //%lf indica saída de reais duplo, o .2 indica o número de casas decimais
  printf("%.2lf\n", real); //3.27

  //%s indica saida de char[texto], %c indica saida de char unico, %lf saida de double e %d saida de real
  printf("A funcionaria %s, sexo %c, ganha %.3lf, e tem %d casas.", nome, sexo, real, inteiro);
  return 0;
}