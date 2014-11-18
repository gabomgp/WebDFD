/**
 * Created by Admin on 14/11/2014.
 */

module WebDFD.Debugger
{
    export interface  IDebugger
    {
        runToEnd();
        markBreakpoint(procedure:string, status:boolean);
        runToNextBreakpoint();
        runToNextLogicOperation();
        runToOuterCall();
        getCallStack():ICallStack;
        getWatcher():IDebuggerWatcher;
        status:StatusDebugger;
    }

    export enum StatusDebugger
    {
        Created,
        Running,
        Paused,
        Stopped
    }

    export interface ICallStack
    {

    }

    export interface IStackFrame
    {
        procedure:Core.IProcedure;

    }
}

module WebDFD.Core {
    export interface ILogicOperation {
        logicOperationType:LogicOperationType;
        breakpoint:boolean;
    }

    export interface IGraphicalElement
    {
        calculateAppearance();
        x:number
        y:number
        width:number;
        height:number;
    }

    export interface IO
    {
        print(message:string);
        read():any;
    }



    export interface IProcedure
    {
        name:string;
        paramaters:string[];
        description:string;
        body:ILogicOperation[];
    }

    export interface IUniverse
    {
        procedures:IProcedure[]
    }

    export interface IAssignment extends ILogicOperation  {
        identifier:string;
        expression:IExpression;
    }

    export interface IFor extends ILogicOperation {
        identifier:string;
        initialValue:IExpression;
        finalValue:IExpression;
        increment:IExpression;
    }

    export interface  IWhile extends ILogicOperation {
        condition:IExpression;
    }

    export interface  IConditional extends ILogicOperation {
        condition:IExpression;
        trueBranch:ILogicOperation[];
        falseBranch:ILogicOperation[];
    }
    export interface IRead extends ILogicOperation {
        displayedText:string;
        identifier:string;
    }

    export interface IPrint extends ILogicOperation
    {
        displayed:IExpression;
    }

    export interface  ICall extends ILogicOperation
    {
        procedure:string
    }

    export interface IExpression {
        original:string;
        parsed:any;
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
