import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { AppModule } from '../app.module';

import { PlaygroundTemplateDrivenFormsComponent } from './playground-template-driven-forms-component.component';

describe('PlaygroundTemplateDrivenFormsComponent', () => {
  let component: PlaygroundTemplateDrivenFormsComponent;
  let fixture: ComponentFixture<PlaygroundTemplateDrivenFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    })
    .compileComponents();
  });

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PlaygroundTemplateDrivenFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should not valid', () => {
    console.log(component.ngForm.form.controls)
    expect(component.ngForm.form.valid).not.toBeTruthy();
  });

  it('should valid', () => {
    const inputElement = document.getElementById("first");
    inputElement.value="asdf";
    inputElement.dispatchEvent(new Event('input'));
    // console.log(component.ngForm.form.controls.first.value);
    expect(component.ngForm.form.valid).toBeTruthy();
    inputElement.value="";
    inputElement.dispatchEvent(new Event('input'));
    expect(component.ngForm.form.valid).not.toBeTruthy();
  });
});
