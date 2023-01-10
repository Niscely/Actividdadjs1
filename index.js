//Ingrese un numero de tres cifras y mostrar la suma de las tres cifras.
Algoritmo detarea
	Definir n,a,b,c,suma Como Entero
	Escribir "Ingresa un numero"
	leer n
	suma = 0
	si (n > 99 y n < 1000) o  (n < -99 y n > -1000) Entonces
		a = n mod 10
		n = trunc(n/10)
		b = n mod 10
		n = trunc(n/10)
		c = n mod 10
		suma = a + b + c
		Escribir c
		Escribir b
		Escribir a
		Escribir "La suma de los dÃ­gitos es: ",suma
	SiNo
		Escribir "EL numero no es de 3 cifras"
	FinSi
FinAlgoritmo

//Ingresar un nÃºmero de 3 cifras y luego mostrar la suma de sus cifras elevada al cuadrado
Algoritmo detarea
	Definir n,a,b,c,suma Como Entero
	Escribir "Ingresa un numero"
	leer n
	suma = 0
	si (n > 99 y n < 1000) o  (n < -99 y n > -1000) Entonces
		a = n mod 10
		n = trunc(n/10)
		b = n mod 10
		n = trunc(n/10)
		c = n mod 10
		suma = a*a + b*b + c*c
		Escribir c*c
		Escribir b*b
		Escribir a*a
		Escribir "La suma de los dÃ­gitos elevado al cuadrado es: ",suma
	SiNo
		Escribir "EL numero no es de 3 cifras"
	FinSi
FinAlgoritmo