import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Message } from "./message.model";
import { MessageService } from "./message.service";

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html',
    // providers: [MessageService]
})
export class MessageInputComponent{
    constructor (private messageService: MessageService){}

    onSubmit(form: NgForm){
    // onSave(textoConsole: string){
        const messageAux = new Message(form.value.myContentngForm, 'Vini');
        this.messageService.addMessage(messageAux);
        console.log(form);
        form.resetForm();
    }
}