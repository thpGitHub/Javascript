/*
	L'objectif est d'�crire un algorithme g�n�tique.
	Il s'agit de reproduire le comportement d'un banc
	de poissons qui nagent dans des directions al�atoires
	dans un aquarium.
	
	L'animation devra �tre produite dans une balise canvas.
	Les poissons devront faire l'objet d'une repr�sentation
	visuelle (par forc�ment r�aliste !).
	
	Le programme doit respecter les r�gles suivantes :
	- Un aquarium contient un nombre al�atoire de poissons (un aquarium
	  est un tableau d'objet de type poisson);
	- Chaque poisson se d�place dans une direction al�atoire (les 
	  poisson on un "vecteur de d�placement" al�atoire);
	- Si un poisson est � une certaine distance d'un autre poisson
	  il doit se mettre � se d�placer dans la m�me direction (un poisson
	  a un "champ de vision");
	- Si un poisson atteint les limites de l'aquarium, il doit changer
	  de direction pour une nouvelle direction al�atoire (un poisson
	  ne peut pas sortir de l'aquarium);
	- Le pointeur de la souris de l'utilisateur peut survoler l'aquarium.
	  Si le pointeur de la souris se situe � un certaine distance d'un
	  poisson, celui-ci doit changer de direction pour une direction al�atoire
	  oppos�e � la position du pointeur de la souris (un poisson "� peur" de
	  la souris).
*/