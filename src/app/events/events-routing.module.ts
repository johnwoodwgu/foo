import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EventsComponent } from "./events.component";
import { FooComponent } from "./foo/foo.component";
import { SchedulingComponent } from "./scheduling/scheduling.component";

const routes: Routes = [
  {
    path: "",
    component: EventsComponent,
    children: [
      { path: "scheduling", component: SchedulingComponent },
      { path: "foo", component: FooComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsRoutingModule {}
