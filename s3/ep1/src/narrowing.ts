function traiteurValeur(param: string | number): number {
   if(typeof param === 'string') {
      return param.length;
   } else {
      return param * 2;
   }
   }

   console.log(traiteurValeur("abc")); 
   console.log(traiteurValeur(5));