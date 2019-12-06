import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from '../app.module';

import { PlaygroundTemplateDrivenFormsComponent } from './playground-template-driven-forms-component.component';

describe('PlaygroundTemplateDrivenFormsComponent', () => {
  let component: PlaygroundTemplateDrivenFormsComponent;
  let fixture: ComponentFixture<PlaygroundTemplateDrivenFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundTemplateDrivenFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should not valid', () => {
    fixture.whenStable().then( () => {
      console.log(component.ngForm.form.valid);
      expect(component.ngForm.form.valid).not.toBeTruthy();
    })
    expect(component.ngForm.form.valid).not.toBeTruthy();
  });
});
