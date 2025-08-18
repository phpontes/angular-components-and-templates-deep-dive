import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from '../../../@shared/button/button.component';
import { ControlComponent } from "../../../@shared/control/control.component";

@Component({
  selector: 'app-new-ticket',
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  onSubmit(titleElement: HTMLInputElement) {
    const enteredTitle = titleElement.value;
    console.log('ENTERED TITLE: ' + enteredTitle);
  }
}
