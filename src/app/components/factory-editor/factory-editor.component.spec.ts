import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoryEditorComponent } from './factory-editor.component';

describe('FactoryEditorComponent', () => {
  let component: FactoryEditorComponent;
  let fixture: ComponentFixture<FactoryEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FactoryEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FactoryEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
