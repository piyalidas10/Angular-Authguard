import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogService } from '../../services/dialog/dialog.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent{
  @Input() data: any;
  @Output() closeModal: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private dialogService: DialogService
  ) {}

  close(event: Event) {
      this.dialogService.isCloseDialog.next(true);
  }

  selected(btnValue: string) {
    if (btnValue === 'ok') {
      this.dialogService.isLeavePage.next(true);
    } else {
      this.dialogService.isLeavePage.next(false);
    }
    this.dialogService.isCloseDialog.next(true);
  }

}
