import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() title: string;
  @Output() onCloseModal = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    document.addEventListener('keydown', this.onKeydown);
  }

  ngOnDestroy(): void {
    document.removeEventListener('keydown', this.onKeydown);
  }

  onClose(): void {
    this.onCloseModal.emit();
  }

  dialogStopPropagation(e: any): void {
    e.stopPropagation();
  }

  onKeydown(e: any) {
    if (e?.key === 'Escape') this.onCloseModal.emit();
  }
}
