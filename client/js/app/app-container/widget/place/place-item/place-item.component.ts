import { Component, Input, Output, EventEmitter } from "@angular/core";
import { WidgetPlaceItem } from "../../../../../shared/interfaces/WidgetPlaceItem";

export interface ChangePlaceEvent {
  selected: string;
}

@Component({
  selector: "place-item",
  template: require("./place-item.component.html")
})
export class PlaceItemComponent {

  @Output()
  changePlace: EventEmitter<ChangePlaceEvent> = new EventEmitter();

  @Input()
  private placeItem: WidgetPlaceItem;

  @Input()
  private isSelected: boolean;

  changePlaceHandler(placeItemId: string): void {
    if (this.isSelected) {
      return;
    }

    this.changePlace.emit({ selected: placeItemId } as ChangePlaceEvent);
  }

}
