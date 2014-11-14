/**
 * Created by Admin on 14/11/2014.
 */

module WebDFD.Core {
    export interface ILogicOperation {
        tipoOperacionLogica:LogicOperationType;
    }

    export interface IAssiggment  {
        identificador:string;
        expresion:IExpression;
    }

    export interface IFor:ILogicOperation {
        idenficiador:string;
        valorInicial:IExpression;
        valorFinal:IExpression;
        incremento:IExpression;
    }

    export interface  IWhile:ILogicOperation {
        condicion:IExpression;
    }

    export interface  IConditional:ILogicOperation {
        condicion:IExpression;
        flujoVerdadero:ILogicOperation[];
        flujoFalso:ILogicOperation[];
    }
    export interface IRead:ILogicOperation {
        textoMostrado:string;
        idenficador:string;
    }

    interface IExpression {
        sinParsear:string;
        parseada:any;
    }

    export enum LogicOperationType
    {
        Asiggment,
        For,
        While,
        Conditional,
        Read,
        Print,
        Call
    }
}
