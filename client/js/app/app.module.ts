"use strict";

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppContainerComponent } from "./app-container/app-container.component";
import { WidgetComponent } from "./app-container/widget/widget.component";
import { PlaceComponent } from "./app-container/widget/place/place.component";
import { WeatherComponent } from "./app-container/widget/weather/weather.component";
import { StatsComponent } from "./app-container/widget/stats/stats.component";
import { PlaceItemComponent } from "./app-container/widget/place/place-item/place-item.component";
import { PlaceFilterComponent } from "./app-container/widget/place/place-filter/place-filter.component";
import { FilterTypePipe } from "./app-container/widget/place/filter-type.pipe";

@NgModule({
  declarations: [
    AppContainerComponent,
    WidgetComponent,
    PlaceComponent,
    WeatherComponent,
    StatsComponent,
    PlaceItemComponent,
    PlaceFilterComponent,
    FilterTypePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppContainerComponent]
})
export class AppModule {}
