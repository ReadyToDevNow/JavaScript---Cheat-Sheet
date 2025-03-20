function descendingOrder(n) {
    return parseInt(n.toString().split('').sort((a, b) => b - a).join(''))
  }

//Cette fonction prend en paramêtre un nombre n qui est retourner en triant chacun des ses numéros par ordre croissante
  // 12345 -> 54321 
  //19919 -> 99911

/*
    ## n.toString() : Cette ligne convertit l'entier en une chaîne de caractères pour pouvoir manipuler ses chiffres individuellement.

    ## split('') : Cette méthode divise la chaîne en un tableau de caractères, où chaque caractère est un chiffre du nombre.

    ##  sort((a, b) => b - a) : Cette ligne trie les chiffres en ordre décroissant. La fonction de comparaison (a, b) => b - a indique que b doit être avant a si b est plus grand.

    ## join('') : Cette méthode reassemble les chiffres triés en une seule chaîne de caractères.

    ##parseInt(...) : Enfin, cette fonction convertit la chaîne de caractères résultante en un entier.
*/