import { Component } from '@angular/core'; 
import { Message } from './messages/message.model';
import { MessageService } from './messages/message.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [MessageService]
})
export class AppComponent {
    // messageBinding: Message = new Message("Texto da Mensagem", "ViniciusRosalen");
    // messageBindingAlias: Message = new Message("Texto da Mensagem Alias", "ViniciusRosalenAlias");

    messageS: Message[] = [
        new Message("Texto da Mensagem", "ViniciusRosalen"),
        new Message("Texto 2 da Mensagem", "RosalenSilva"),
        new Message("Texto 3 da Mensagem", "SilvaVinicius")
    ];
}