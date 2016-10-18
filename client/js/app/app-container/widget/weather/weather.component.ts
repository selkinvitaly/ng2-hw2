import { Component, Input } from "@angular/core";

@Component({
  selector: "weather-component",
  template: require("./weather.component.html")
})
export class WeatherComponent {

  @Input()
  public currentPlace;

}
