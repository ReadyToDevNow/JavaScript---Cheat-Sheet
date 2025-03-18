// Cette fonction retourne un tableau en supprimant les éléments étant de type string
// Par exemple [1,2,a,b,3] => [1,2,3]
function filter_list(l) {
    return l.filter(elem => typeof elem !== "string")
   } 