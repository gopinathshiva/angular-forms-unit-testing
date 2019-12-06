import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'custom-playground-template-driven-forms',
  templateUrl: './playground-template-driven-forms-component.component.html',
  styleUrls: ['./playground-template-driven-forms-component.component.css']
})

export class PlaygroundTemplateDrivenFormsComponent {

  @ViewChild("f")
    public ngForm: NgForm;

  @ViewChild("first")
  public first: string;

  public onSubmit(form: NgForm): void {
        console.log(this.first.value);
        console.log(form.valid);
    }
}
