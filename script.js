// precisamos definir algumas estruturas

//1-  o que é o processo? 
// em js podemos criar um prototipo
class Processo{
    constructor(pid,t_entrada,t_execucao,n_IO){
        this.pid = pid;
        this.t_entrada = t_entrada;
        this.t_execucao = t_execucao;
        this.n_IO = n_IO;
        this.status = "none"; // vai mudar pra execucao,bloqueado,pronto...
    }
}

var p1 = new Processo(1,0,5,0)


// lista de todos os processos que seu sistema vai rodar em algum momento
// ou seja, essa é sua simulação. pode ser inicializada com um número x de processos
var lista_processos = new Array();


var fila_pronto  = new Array();

//3 - como gerenciamos nosso tempo de processamemto? por meio de ciclos
function ciclo()
{
    //o que acontece dentro de um ciclo? 
    // na verdade várias coisas, mas vamos simplificar aqui:
    // escolha: 
    //1 -  uma instrução de um processo é executado
        //1.1 - pra executar, no que devemos pensar?
            // o processo terminou? 
            // vai ser bloqueado? 
    
    // turnaround de cada processo - Só calcula quando termina a execucao
    // média turnaround ,  
    // tempo ocioso da CPU - p% 
    // tempo de uso da CPU -  100 - p% 

    //2 -  um processo pode trocar de contexto com outro após a escolha por um algoritmo de escalonamento 

}

//uma função que serve para inicializar a simulação da execução.
// posso aqui definir o número de processos que serão executados
function init(num_procesos){
    // ... 
    
}