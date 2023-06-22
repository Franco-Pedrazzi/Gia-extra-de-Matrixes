function MultMatrix(nro){

   
    let j=0
    let nros2
    let suma=[]
    let letras=0
    let resultado=[]
    let resultado2=0
  let respuesta=[]
  for(let x=0;x<nro.length;x++){
    respuesta[x]=[]
  }

      
       for(let x=0;x<nro.length;x++){
        for(let y=0;y<nro[x].length;y++){
        nros2=dectrucion(nro[x][y])
        resultado2=0
       
        for(let z=0;z<nros2.length;z++){
     resultado[z]= Math.pow(nros2[z],nros2.length)
       
     
        }
      
        for(let w=0;w<resultado.length;w++){
         resultado2+=resultado[w]
        }
        for(let z=0;z<nros2.length;z++){
            resultado[z]= 0
              
            
               }
        if(resultado2==nro[x][y]){
         respuesta[x][y]=true
         console.log(resultado2+"true")
        }
        else{
            respuesta[x][y]=false
            console.log(resultado2+"false")
        }
       }
    }
    return respuesta     

}
function dectrucion(nro){
    let resultado=[]
    let aparte=0
    let buleano=false
    let indice=0
    if(nro<0){
   nro*=-1
   buleano=true
  
    }
    resultado[indice]=Math.floor((nro)%10)
   
    for(let x=100;x<=nro*10;x*=10){
        aparte+=resultado[indice]
        indice++
resultado[indice]=Math.floor((nro-aparte)%x)

 
}
indice=0
for(let x=1;x<resultado.length;x++){
    indice++
    resultado[indice]=resultado[indice]/Math.pow(10,x)
}

if(buleano==true){
  
    for(let x=0;x<resultado.length;x++){
   
        resultado[x]*=-1
  
        
    }
}
return resultado
}
console.log(MultMatrix([[1,9,1],[18,32,1],[13,21,5],[25,46,77],[-21,-61,1]]))