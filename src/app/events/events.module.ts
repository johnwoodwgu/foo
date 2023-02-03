import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EventsRoutingModule } from "./events-routing.module";
import { SchedulingComponent } from "./scheduling/scheduling.component";
import { EventsComponent } from "./events.component";
import { MatListModule } from "@angular/material/list";
import { MatTabsModule } from "@angular/material/tabs";
import { FooComponent } from "./foo/foo.component";
import { MatToolbarModule } from "@angular/material/toolbar";

@NgModule({
  declarations: [SchedulingComponent, EventsComponent, FooComponent],
  imports: [
    CommonModule,
    EventsRoutingModule,
    MatListModule,
    MatTabsModule,
    MatToolbarModule,
  ],
})
export class EventsModule {}
