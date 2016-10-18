import { Component, Input, Output, EventEmitter } from "@angular/core";
import { WidgetPlaceItem } from "../../../../shared/interfaces/WidgetPlaceItem";

export interface ChangePlaceEvent {
  selected: string;
}

@Component({
  selector: "place-component",
  template: require("./place.component.html")
})
export class PlaceComponent {

  @Input()
  places: Array<WidgetPlaceItem>;

  currentFilterId = "all";

  @Output()
  changePlace: EventEmitter<ChangePlaceEvent> = new EventEmitter();

  @Input()
  selected: string;

  get headerImage(): string {
    return this.places
      .filter((placeItem: WidgetPlaceItem) => placeItem.id === this.selected)[0].firstImage;
  }

  changeTypeHandler(currentFilterId: string): void {
    this.currentFilterId = currentFilterId;
  }

  changePlaceHandler(placeItemId: string): void {
    this.changePlace.emit({ selected: placeItemId } as ChangePlaceEvent);
  }
}
