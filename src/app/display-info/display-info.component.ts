import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-display-info",
  templateUrl: "./display-info.component.html",
  styleUrls: ["./display-info.component.sass"]
})
export class DisplayInfoComponent implements OnInit {
  @Input() text: string;
  @Output() data: EventEmitter<{key: string, value: string}>;

  constructor() {
    this.data = new EventEmitter();
  }

  ngOnInit() {}

  displayInfo() {
    this.data.emit({key: 'id', value: '123456789'});
  }
}
