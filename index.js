const fs = require('fs')

class Archivo {
    constructor (archivo) {
      this.archivo = archivo;
      this.largo = 0
    }

   
     // Método Guardar
    guardar (nombre,precio,url) {
        /*
        async function leer(archivo){
            try{
                await fs.promises.readFile(`./desafio6node/${archivo}.txt`,`utf-8`).then(contenido =>{
                 console.log(JSON.parse(contenido))   
                })
            }
            catch{
                console.log("error")
                
            }
        }
        leer(this.archivo)
        
  */
      var objeto =  {
            id :this.largo,
            title: nombre,
            price: precio,
            thumbnail: url
        }
        
        async function agregar(archivo){
            
            try{
                await fs.promises.appendFile(`./desafio6node/${archivo}.txt`,`${JSON.stringify(objeto, null,'\t') }\n`)
            }
            catch{
                console.log('error')
                
            }
        }
        agregar(this.archivo)
    }

    // Método Borrar

    borrar () {

              async function borrar(archivo){
                  try{
                      await fs.promises.unlink(`./desafio6node/${archivo}.txt`)
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
              await fs.promises.readFile(`./desafio6node/${archivo}.txt`,`utf-8`).then(contenido =>{
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
  archivo.guardar("nombre",324214,"url")
 //archivo.borrar()
 //archivo.leer()