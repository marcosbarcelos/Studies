#include <stdio.h>
#include <string.h>

int main()
{
    //inteiro
    int idade;
    //flutuante
    double salario, altura;
    //caractere
    char genero;
    //texto
    char nome[50];

    idade = 18;
    salario = 5800.5;
    altura = 1.84;
    //caractere � com aspas simples
    genero = 'm';
    //metodo de trabalhar com atribuicao de texto
    strcpy(nome, "Marcos Barcelos");

    printf("IDADE = %d\n", idade);
    printf("SALARIO = %.21f\n", salario);
    printf("ALTURA = %.21f\n", altura);
    printf("GENERO = %c\n", genero);
    printf("NOME = %s\n", nome);



    return 0;
}
