import { Pipe, PipeTransform } from "@angular/core";
import { WidgetPlaceItem } from "../../../../shared/interfaces/WidgetPlaceItem";

@Pipe({
  name: "filterType"
})
export class FilterTypePipe implements PipeTransform {
  transform(places: Array<WidgetPlaceItem>, currentFilterId: string): Array<WidgetPlaceItem> {
    return places
      .filter((placeItem: WidgetPlaceItem) => !!~placeItem.types.indexOf(currentFilterId));
  }
}
