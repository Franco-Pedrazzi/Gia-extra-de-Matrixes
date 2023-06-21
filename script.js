function SumMatrix(matrix1,matrix2){
    let valor=[];
    let indice=0;
    let indice2=0;
    let indice3=0;
for(let x=0;x<matrix1.length*2;x++){
    valor[indice]=matrix1[indice2][indice3]+matrix2[indice2][indice3]
    indice++
    indice3++
    if(indice3==matrix1[indice2].length && indice2<matrix1.length){
        indice3=0;
        indice2++
        console.log("s")
    }
}



return valor

}
console.log(SumMatrix([[1,2],[3,4],[1,2]],[[5,6],[7,8],[5,6]]))