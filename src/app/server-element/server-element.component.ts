import {
  AfterContentInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
})
export class ServerElementComponent
  implements OnInit, OnChanges, DoCheck, AfterContentInit
{
  @Input("element") element: Element;
  @Input() name: string;

  constructor() {
    console.log("constructor called");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called", changes);
  }

  ngOnInit(): void {
    console.log("ngoninit called");
  }

  ngDoCheck() {
    console.log("ngDoCheck called");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit called");
  }
}

interface Element {
  type: string;
  name: string;
  content: string;
}
