//inclusao de bibliotecas
#include <stdio.h>

//identifica o entry point do programa, onde começa
int main() {
  //operadores aritméticos
    int soma = 10 + 1; 
    int sub = 10 - 1; 
    int mult = 10 * 2; 
    int divisao = 10 / 2; 
    int resto = 10 % 2; 

    printf("%d\n", soma); //11
    printf("%d\n", sub); //9
    printf("%d\n", mult); //20
    printf("%d\n", divisao); //5
    printf("%d\n", resto); //0
    
    //operadores comparativos
    int maiorQ = soma > sub;
    int menorQ = soma < sub;
    int maiorI = soma >= sub;
    int menorI = soma <= sub;
    int igual = soma == sub;
    int dif =  soma != sub;

    printf("%d\n", maiorQ); //retorna 1(true)
    printf("%d\n", menorQ); //retorna 0(false)
    printf("%d\n", maiorI); //retorna 1(true)
    printf("%d\n", menorI); //retorna 0(false)
    printf("%d\n", igual); //retorna 0(false)
    printf("%d\n", dif); //retorna 1(true)

    //operadores lógicos
    int E = maiorQ == 1 && menorQ == 0;
    int OU = maiorQ == 1 || menorQ == 0;
    int NAO = !E;

    printf("%d\n", E); //retorna 1(true)
    printf("%d\n", OU); //retorna 1(true)
    printf("%d\n", NAO); //retorna 0(false)
    return 0;
}