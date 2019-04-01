import { IPortOutput, IPortInput } from "./port.interface";
import { PortType, OutputType, InputType } from "./types";
import { IdGenerator } from "../../utils";

export class PortUtils{

    static getNewInput(): IPortInput{
        let inp: IPortInput = <IPortInput>{
            id: IdGenerator.getId(),
            name: 'sample_input', 
            isConnected: false,
            type: PortType.Input,
            value: undefined,
            default: undefined,
            meta: {
                mode: InputType.SimpleInput,
                opts: {}
            }
        };

        return inp;
    };

    static getNewOutput(): IPortOutput{
        let oup: IPortOutput = <IPortOutput>{
            id: IdGenerator.getId(),
            name: 'sample_output', 
            isConnected: false,
            type: PortType.Output,
            meta: {
                mode: OutputType.Text, 
            }
        }
        return oup;
    };

}