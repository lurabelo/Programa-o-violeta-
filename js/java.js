try{
    input.innerHTML = eval(equacao);
     }catch (e) {
     alert ('Erro na expressao')
     }

break;
case 67:
case 99:
input.innerHTML = "";
break;
default:
//console.log("Procurando erros?");
break;
}
};
btn[i].addEventListener('click', function(){ 
var btnVal = this.innerHTML,
inputVal = input.innerHTML;
//console.log(btn)

//crio um clear caso o c for clicado 
switch(btnVal){
case "c":
 input.innerHTML = '';
 break;
case "=":
     //crio a variavel de equacao aqui eu utilizo a funcao eval do javascript
     var equacao = inputVal;

     if(equacao){
          try{ 
               input.innerHTML = eval(equacao)
          }catch (e) { 
               alert ('Erro na expressao')

          }
     }
     break;
     default:
          input.innerHTML+=btnVal 
          break;
}
});

