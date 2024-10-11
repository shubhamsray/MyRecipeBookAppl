import { NgModule } from "@angular/core";
import { AlertComponent } from "./alert/alert.component";
import { DropdownDirective } from "./dropdown.directive";
import { LoadingSpinner } from "./loading-spinner/loading-spinner.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        DropdownDirective,
        LoadingSpinner,
        AlertComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        DropdownDirective,
        LoadingSpinner,
        AlertComponent,
        CommonModule
    ]

})
export class SharedModule{}