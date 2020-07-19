import { Injectable } from '@angular/core';
import { CanDeactivate, Router } from '@angular/router';
import { AddProductComponent } from '../components/add-product/add-product.component';

@Injectable({ providedIn: 'root' })

export class CanDeactivateFormGuard implements CanDeactivate<AddProductComponent> {
    constructor(
        private router: Router,
    ) { }
    canDeactivate(component: AddProductComponent) {
        let c = confirm("Do you want to navigate?");
        if (c == true)
            return component.hasUnsavedChanges === false;
        else
            return component.hasUnsavedChanges === true;
    }
}