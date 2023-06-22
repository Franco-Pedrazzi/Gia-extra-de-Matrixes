function RailFence(text,key){
    let letras=text.length
    let codigo=[];
    let nros2
    y1=0;
    y2=key-1;
    let buleano=false;
 let nros=0;
 for(let y=0;y<key && y<letras;y++){
    codigo[y]=[];
    console.log(codigo)
}
let xm=0;
 for(let x=0;x<letras;x++){
    console.log(4)

 if(buleano==false){
    
 for(let y=0;y<key;y++){
    if( xm!=letras){
   
    codigo[y][xm]=text[xm];

    xm++
   
 
 }
 else{
 
 }
}
 if( xm!=letras){
     buleano=true
   
    nros2=xm
 }
 }
 
 if(buleano==true){
     nros=0;
 for(let y=key-2;y>=0;y--){
    if( xm!=letras){
 
    codigo[y][xm]=text[nros2];
    xm++
    nros2++
   
   
 }
 else{

 }
 }
 if(xm!=letras){
     buleano=false
    
 }
 }

 
 }
 
}
   
  console.log( RailFence("LosPicaPiedras ",10))
 