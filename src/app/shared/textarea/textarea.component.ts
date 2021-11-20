import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent implements OnInit {
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
