const fs = require('fs')

class Archivo {
    constructor (archivo) {
      this.archivo = archivo;
      this.largo = 0
    }

   
     // Método Guardar
    guardar (nombre,precio,url) {
        var arrego =[]
        var guardados
        async function leer(archivo){
            
            try{
                await fs.promises.readFile(`./${archivo}.txt`,`utf-8`).then(contenido =>{
                   guardados =  contenido
                })
            }
            catch{
                console.log([])
                
            }
              

        }

        leer(this.archivo).then(()=>{
            if(guardados) arrego = JSON.parse(guardados)
            this.largo = arrego.length
            var objeto =  {
                id :this.largo,
                title: nombre,
                price: precio,
                thumbnail: url
            }
            arrego.push(objeto)
            async function agregar(archivo){
                
                try{
                    await fs.promises.writeFile(`./${archivo}.txt`,`${JSON.stringify(arrego, null,'\t') }\n`)
                }
                catch{
                    console.log('error')
                    
                }
            }
            agregar(this.archivo)
            
        })
        
  

    }

    // Método Borrar

    borrar () {

              async function borrar(archivo){
                  try{
                      await fs.promises.unlink(`./${archivo}.txt`)
                  }
                  catch{
                      console.log('error')
                      
                  }
              }
              borrar(this.archivo)
          }
 // Método Leer
 leer () {

      async function leer(archivo){
          try{
              await fs.promises.readFile(`./${archivo}.txt`,`utf-8`).then(contenido =>{
                  console.log(contenido)
              })
          }
          catch{
              console.log([])
              
          }
      }
      leer(this.archivo)
  }

  }
  
  const archivo = new Archivo("datos")
  //archivo.guardar("nombre",324214,"url")
 //archivo.borrar()
 archivo.leer()