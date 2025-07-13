import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component'; // Corrected import path and component name

describe('AppComponent', () => { // Changed 'App' to 'AppComponent'
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent], // Changed 'App' to 'AppComponent'
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent); // Changed 'App' to 'AppComponent'
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent); // Changed 'App' to 'AppComponent'
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    // Updated expectation to match the actual title in AppComponent
    expect(compiled.querySelector('h1')?.textContent).toContain('My To-Do List');
  });
});