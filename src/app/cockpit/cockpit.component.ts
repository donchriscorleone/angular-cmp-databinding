import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"],
})
export class CockpitComponent implements OnInit {
  @Output("serverCreated") serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output("blueprintCreated") blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  // newServerName = "";
  @ViewChild("serverContentInput", { static: true })
  newServerContent: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  onAddServer(serverNameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.newServerContent.nativeElement.value,
    });
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.newServerContent.nativeElement.value,
    });
  }
}
