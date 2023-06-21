function makingAnagrams(matrix){
    let valor=[];
    let indice=0;
let palabra=""
    for(let x=0;x<matrix.length;x++){
         valor[x]=[]
    }
for(let x=0;x<matrix.length;x++){

    for(let z=0;z<matrix[x].length;z++){

        for(let y=matrix[x][z].length-1;y>=0;y--){
            palabra+=matrix[x][z][y]
          
           
         }
         valor[x][indice]=palabra
         indice++
         palabra=""
    }
indice=0
}


return valor

}
console.log(makingAnagrams([["casa","arbol","leña"],["Messi","es","el","mas","grande"],["islas","Malvinas","Argentinas"]]))