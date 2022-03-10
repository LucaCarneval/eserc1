type Car= {
    id: number | null;
    marca: string | null;
    modello: string | null;
}
var cars: Car[];
cars= [{id:1, marca:"bmw",modello:"serie1"},
       {id:2, marca:"bmw",modello:"serie2"},
       {id:3, marca:"bmw",modello:"serie3"},
       {id:4, marca:"bmw",modello:"serie4"},
       {id:5, marca:"bmw",modello:"serie5"},
      ]

      function delay(ms: number) {
          return new Promise ( resolve => setTimeout(resolve, ms) );
      }

      async function stampArray() {
          for (let i = 0; i < cars.length; i++){
              console.log (cars[i])
              await delay (2000);
          }       
          console.log(`fine del popolamento dell'array`);
      }
      console.log(`avvio del popolamento dell'array`);
      stampArray();   
     


    
    
