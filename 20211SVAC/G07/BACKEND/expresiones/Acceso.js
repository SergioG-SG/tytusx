class Acceso {
  constructor() {
    this.entornosDoble=[];
  }
  getTipo(ast) {
    return ast.valor.tipo;
  }

  getValorImplicito(entorno, ast,padre) {
    switch (ast.valor) {
      case "ELEMENTO":
        //0->Elemento 1->itemReserva
        return this.getValorImplicito(entorno, ast.hijos[0],null);
      case "SIMBOLOSSECU":
      case "EXPRESION":
        //0-> Simbolos 1->itemReserva 2->itemReserva? consulta sola
        //2-> Expresion si vienen varias
        if (ast.hijos[0].valor == "SIMBOLOS") {
          let ArregloEntorno = this.getAccionNodo(ast.hijos[0], entorno,padre); //Me devuelve el arreglo de entornos
          console.log(ast);
          console.log(ArregloEntorno);
          if (!ArregloEntorno) {
            return null;
          }

          let respuesta = "";
          let instruccion;
          if (ast.hijos[2].valor == "EXPRESION") {
            instruccion = ast.hijos[2];
          } else {
            instruccion = {
              valor: "TODO_", //Si instruccion.valor es TODO etonces muestro todo el entorno
            };
          }
          
          if (instruccion.valor == "TODO_") {
            
            if (ast.hijos[0].hijos[0] == "//") {
              let respuesta = "";
              for (const iterator of ArregloEntorno) {
                respuesta += this.getValorImplicito(iterator, instruccion,entorno);
              }

              return respuesta;
            }

            return this.getValorImplicito(entorno, instruccion,padre);
          } else {
            if(ArregloEntorno.length==0){
              let temrespuesta = this.getValorImplicito(ArregloEntorno, instruccion,entorno);
              return temrespuesta;
            }
            for (const entorno_ of ArregloEntorno) {
              
              //Iteramos el arreglo de entornos para aplicar estos cambios en todos
              let temrespuesta = this.getValorImplicito(entorno_, instruccion,entorno); //Concatenamos todas las respuestas que encontramos
              if (temrespuesta) {
                respuesta += temrespuesta;
              }
            }
          }

          return respuesta;
        } else {
         
          let res = this.comparar(ast.hijos[0], entorno.etiqueta); //Me devuelve el arreglo de entornos
          if (!res) {
            return null;
          }
          //Si solo es nodo entonces si que imprima todo 0->selva
          //si viene mas entonces 0->sselva 1->INTEMRESERVA 2->SimboloSecu
          if(ast.hijos.length>1){
            let respuesta="";
            for (const hijo of entorno.hijos) {
              respuesta+=this.getValorImplicito(hijo, ast.hijos[2],entorno);
            }

            return respuesta;
          }
          let instruccion = {
            valor: "TODO_", //Si instruccion.valor es TODO etonces muestro todo el entorno
          };
          return this.getValorImplicito(entorno, instruccion,padre);
        }

        return null;
      case "TODO_":
        let contenido = "";
        let atributo;
        if (entorno.atributos) {
          atributo = {
            etiqueta: entorno.atributos.nombreAtributo,
            valor: entorno.atributos.valorAtributo,
          };
        } else {
          atributo = "";
        }
        if (entorno.tipo == "completa") {
          for (const iterator of entorno.hijos) {
            contenido += this.getValorImplicito(iterator, ast,entorno);
          }
          let retorno = new Etiqueta(
            entorno.etiqueta,
            entorno.texto,
            contenido,
            atributo
          ); //nombre,texto,contenido
          if (retorno) {
            return retorno.obtenerXML();
          }
        } else if (entorno.tipo == "unica") {
          let retorno = new Etiqueta(
            entorno.etiqueta,
            entorno.texto,
            "",
            atributo,
            entorno.tipo
          ); //nombre,texto,contenido
          if (retorno) {
            return retorno.obtenerXML();
          }
        }

        return null;
      default:
        return null;
    }
  }
  getAccionNodo(AST, entorno,padre) {
    if (AST.hijos[0] == "/") {
      //Accedemos al nodo barra
      if (this.getValidacion(AST.hijos[1], entorno)) {
        //Validamos que la etiqueta del nodo sea igual al entorno actual
        if (!entorno.hijos) {
          return entorno;
        }
        return entorno.hijos;
      }else if(AST.hijos[1].hijos[0]=="@"){
        console.error("Aqui");
        return [padre]
        
      }

    } else if (AST.hijos[0] == "//") {
      this.entornosDoble=[];
      return this.getConsultaDoble(AST.hijos[1].hijos[0],entorno.hijos);
    }
   

    return null;
  }
  getValidacion(etiqueta, entorno) {
    if (etiqueta.valor == "CONTENIDODOS") {
      
      return this.comparar(etiqueta.hijos[0], entorno.etiqueta);
    }
    return false;
  }
  comparar(etiqueta, entorno) {
    
    return etiqueta == entorno;
  }
  getConsultaDoble(etiqueta,entornos){
    if(entornos!=null){
      for (const entorno of entornos) {
       
        this.getConsultaDoble(etiqueta,entorno.hijos);
        if(etiqueta==entorno.etiqueta){
          this.entornosDoble.push(entorno);
        }
        
      }
      if(this.entornosDoble){
        return this.entornosDoble;
      }
    }
    return null;
  }
}
/*
  
let objeto = [];
      for (const hijo of entorno.hijos) {
        
      }
      
      
*/
