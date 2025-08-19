import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
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
  // @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  onSubmit(title: string, ticketText: String) {
    console.log(title);
    console.log(ticketText);
    this.form().nativeElement.reset();
  }
}
