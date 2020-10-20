const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

 function decode(expr) {
    let morze=expr.split('');
    let Morzecode='';
   for(let i=1;i<expr.length;i++){
       if(morze[i]=='1'&& morze[i-1]=='1'){
        Morzecode+='-'
           if(i%10==9){
            Morzecode+=',';
           }
           i+=1;
       } else if(morze[i]=='0'&&morze[i-1]=='1'){
        Morzecode+='.'
           if(i%10==9){
            Morzecode+=',';
        }
        i+=1;
   } else if(morze[i]=='*'&&morze[i-1]=='*'){
          Morzecode+=' ,';
          if(i%10==9){
              Morzecode+=',';
          }
          i+=9;
   } 
} 
let result='';
    rezMorze=Morzecode.split(',')
     for(let i=0;i<rezMorze.length-1;i++){
         if(rezMorze[i]==' '){
            result+=' ';
            i++; 
         }
         result+=MORSE_TABLE[rezMorze[i]];
     }
     console.log(result);
     return result;
} 

module.exports = {
    decode
}