import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() model: string;
  @Input() placeholder: string;

  @Output() onChange = new EventEmitter();
  @Output() onSave = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onChangeEvent(event: any): void {
    this.onChange.emit(event);
  }

  onKeyPress(): void {
    if (this.model?.trim()) {
      this.onSave.emit();
    }
  }
}
