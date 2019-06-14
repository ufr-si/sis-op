// algumas funções 


function gera_proc(n){
    //essa função serve pra gerar aleatoriamente um número
    // n de processos que vão ser colocados na fila de pronto
    // em algum momento t_entrada 
    let lista = {}

    // vou aqui deixar fixo algumas coisas, posso querer mudar depois
    let max_IO = 5; ///máximo de entrada e saída
    let max_execucao = 10; // máximo de tempo de execução
    
    entrada = 0; // valor pra ser incrementado de pouco em pouco pra simular a entrada de novos processos no sistema
    var entrada = 0;
    var salto = 0;
    for(let i=0;i<n;i++){
        //gere um proceso e armazene 
        //salto no tempo de entrada é aleatório
        salto = Math.floor(Math.random() *5); // até 5 ciclos entre um processo e outro
        
        console.log("salto: "+salto)
        entrada = entrada + salto;
        console.log("entrada: "+entrada);
        // pro meu caso só esses valores já servem, mas pro seu quais valores serão necessários?
        let proc = {pid: i,
                    t_entrada: entrada,
                    t_execucao: Math.floor(Math.random() *max_execucao), // assumimos que 1 ciclo,1 instrução. lembre-se que nesse ciclo acontecem várias coisas relacioanadas a execução daquela instrução
                    n_IO:Math.floor(Math.random() *max_IO),
                    status:"novo",
                    pc: 0 // contador de programa que aqui nos ajuda a contar o número de ciclos do proceso. 
                    }

        lista[proc.pid] = proc;
    }
    return lista;
}

// um contador de tempo de troca de processos
tempo_troca=0;

// o contador de ciclos
var ciclo = 0;

// Precisamos criar um processo.
// usando a estrutura mais adequada na linguagem de programação 
// que conhece, voce deve criar algo que possa manipular.
// aqui escolhi um objeto javascript. podia até ser uma classe
// exemplo: var processo = {1:{"pid":1,"n_IO":3,"t_entrada":10,"t_execucao":20}}

// lista de todos os processos que seu sistema vai rodar em algum momento
// ou seja, essa é sua simulação. pode ser inicializada com um número x de processos
// usando o gera_proc(n) ali de cima. a cada ciclo, verifico se alguém naquele 
// tempo de execução precisa ser colocado no estado de pronto
var lista_processos = new Array();

// você pode escolher "emular" a CPU, criando por exemplo uma variável que guarde o processo.
//exemplo: var cpu = {"pid":1,"n_IO":3,"t_entrada":10,"t_execucao":20,"status":"exec"} // exemplo de um processo em execucao
var cpu = null;

// você deve certamente simular a fila de pronto
var fila_pronto  = new Array();

//3 - como gerenciamos nosso tempo de processamemto? por meio de ciclos
function ciclo()
{
    //o que acontece dentro de um ciclo? 
    // instruções são executadas. 
        // instrução de troca de contexto (pode levar mais de um ciclo mas aqui assumimos que é 1 só)
        // uma instrução de um processo é executada, que pode levar a:
            // o processo terminar (preciso buscar novo processo) - escalonamento + troca de processos
            // o processo bloquear (também preciso buscar novo processo) - escalonamento +troca de processos
            // o processo executar a instrução normalmente 
    
    //precisamos também: 
    // verificar se chegou alguém novo (lista_processos) nesse ciclo
    
    // verificar se algum processo bloqueado volta para a fila de pronto
    // e o que mais for necessário em seu algortimo, especificamente. 

    // se não tem processo na cpu...
    if(cpu == null){
        //adiciona um (gasto um ciclo fazendo isso)
        ciclo++;

        cpu = escalona(); // aqui roda o algoritmo de escalonamento.


    }else{
        //existe algo na CPU, o que vamos fazer?
        //será que é algo que já terminou?
        
        // será que é algo que vai bloquear? - conto ciclo gasto 
        // ...
        tempo_troca = tempo_troca+1  // pra dizer que gastei um ciclo no bloqueio.

        
        // o tempo de execucao encerrou? 
        // escalona! 
        tempo_troca = tempo_troca+1 // também gasto um ciclo fazendo o escalonamento
        
        // só vou executar mais um passo no processo
        // ... 
        

        // por fim...
        ciclo++; 
    }
        
    
        //1.1 - pra executar, no que devemos pensar?
            // o processo terminou? 
            // vai ser bloqueado? 
    
    // turnaround de cada processo - Só calcula quando termina a execucao
    // média turnaround ,  
    // tempo ocioso da CPU - p% 
    // tempo de uso da CPU -  100 - p% 

    //2 -  um processo pode trocar de contexto com outro após a escolha por um algoritmo de escalonamento 

}

var id = 0;

//uma função que serve para inicializar a simulação da execução.
// posso aqui definir o número de processos que serão executados

function init(){
        // inicializa uma simulação
        lista_processos = gera_proc(10);
}

function run_ciclo(){
    // podemos rodar a cada segundo um ciclo()
    // em javascript fazemos isso usando a função setInterval 
    // vou definir a cada 1000 ms, ou seja, 1 segundo, ele rodar um ciclo.
    id = setInterval(ciclo,1000);
}

function stop_ciclo(){
    clearInterval(id);
}