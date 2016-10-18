import { Component, Input } from "@angular/core";

@Component({
  selector: "stats-component",
  template: require("./stats.component.html")
})
export class StatsComponent {

  @Input()
  private currentPlace;

}
