function MultMatrix(matrix1,matrix2){
    let valor=[];
    let indice=0;
    let indice2=0;
    let indice3=0;
    let indice4=0;
    let indice6=0;
    let indice5=0;
    let veces=matrix1.length
    let nros=[]
    let j=0
    let nros2=0
    let suma=[]
    let letras=0
    let resultado=[]
    for(let x=0;x<veces;x++){
        nros[x]=matrix1[x].length
     
        valor[x]=[0]
        
        for(let y=0;y<nros[x];y++){
        valor[x][y]=0
       
           }
         }
   
    for(let x=0;x<veces*2;x++){

       
        if(indice<nros[j]){
            for(let y=0;y<nros[j];y++){
                for(let z=0;z<nros[j];z++){
                    
            valor[indice4][indice3]+=matrix1[indice4][indice5]*matrix2[indice2][nros2]
        
           
            indice5++
            indice2++
            }
            indice2=0
            nros2++
            indice5=0
            indice3++
            indice++
            if(letras==nros[j]){
                nros2++
                console.log(6)
            }
           }
        
       }
       else{
        indice2=0
       indice3=0
        indice4++
        indice=0
        j++
        letras++
       nros2=0
    }

}

return valor

}
console.log(MultMatrix([[2,3,1],[1,3]],[[-1,-1,-1],[5,6,7],[-1,-1,-1]]))