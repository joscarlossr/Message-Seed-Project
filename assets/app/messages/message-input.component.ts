import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Message } from "./message.model";
import { MessageService } from "./message.services";

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html',
    // providers: [MessageService]
})
export class MessageInputComponent{
    constructor (private router: Router, private messageService: MessageService){ }

    onSubmit(form: NgForm){
        const nome = localStorage.getItem("nome");
        if (!nome) this.router.navigate(["/"]);
    // onSave(textoConsole: string){
        const messageAux = new Message(form.value.myContentngForm, nome);
        this.messageService.addMessage(messageAux)
            .subscribe(
                dadosSucesso => console.log(dadosSucesso),
                dadosErro => console.log(dadosErro)
            );
        console.log(form);
        // console.log(messageAux);
        form.resetForm();
    }

    // onSave(textoConsole: string){
    //     const messageAux = new Message(textoConsole, 'Vini');
    //     this.messageService.addMessage(messageAux);
    //     console.log(textoConsole);
    // }
}