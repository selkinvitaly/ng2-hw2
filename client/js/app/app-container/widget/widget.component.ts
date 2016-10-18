import { Component } from "@angular/core";
import { WidgetPlaceItem } from "../../../shared/interfaces/WidgetPlaceItem";
import { places as fixtures } from "./fixtures";

@Component({
  selector: "widget",
  template: require("./widget.component.html")
})
export class WidgetComponent {

  places: WidgetPlaceItem[] = fixtures;
  selectedId: string = fixtures[0].id;

  changePlace(placeItemId: string): void {
    this.selectedId = placeItemId;
  }

  get currentPlace(): WidgetPlaceItem {
    return this.places
      .filter((placeItem: WidgetPlaceItem) => placeItem.id === this.selectedId)[0];
  }

}
