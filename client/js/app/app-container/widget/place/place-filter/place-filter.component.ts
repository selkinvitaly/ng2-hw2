import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FilterPlaceItem } from "../../../../../shared/interfaces/FilterPlaceItem";

export interface ChangeTypeEvent {
  selected: string;
}

@Component({
  selector: "place-filter",
  template: require("./place-filter.component.html"),
  styles: [ require("./place-filter.component.styl") ]
})
export class PlaceFilterComponent {

  @Input()
  currentFilterId: string;

  @Output()
  changeType: EventEmitter<ChangeTypeEvent> = new EventEmitter();

  filterTypes: Array<FilterPlaceItem> = [{
    id: "all",
    name: "All"
  }, {
    id: "hotel",
    name: "Hotel"
  }, {
    id: "fishing",
    name: "Fishing"
  }, {
    id: "tour",
    name: "Tour"
  }];

  changeTypeHandler(e: MouseEvent, filterTypeId: string): void {
    e.preventDefault();
    this.changeType.emit({selected: filterTypeId} as ChangeTypeEvent);
  }

  checkSelected(filterId: string): boolean {
    return filterId === this.currentFilterId;
  }

}
