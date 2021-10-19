import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { MatCardModule } from "@angular/material/card";

@NgModule({
  exports: [MatToolbarModule, MatIconModule, MatTableModule, MatCardModule],
})
export class AppMaterialModule {}
