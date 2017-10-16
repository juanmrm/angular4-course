
import { UserService } from './user.service';
import { async, ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';

describe('Component: User', () => {
  beforeEach(async(() => {

    // Use this service Stub instead of the real user service.
    // This way we will insert a suitable UserService mock
    const userServiceStub = {
      isLoggedIn: true,
      user: { name: 'Test User'}
    };

    TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      // providers:    [ UserService ]  // NO! Don't provide the real service!
      // Provide a test-double instead
      providers: [ { provide: UserService, useValue: userServiceStub } ]
         // { provide: ComponentFixtureAutoDetect, useValue: true } // Activate Automatic Change Detection
    }).compileComponents();
  }));
  it('should create the app', () => {
    const fixture = TestBed.createComponent(UserComponent);
    const component = fixture.componentInstance;
    console.log(component.user);
    expect(component).toBeTruthy();
  });

  it('should use the user name from the service', () => {
    const fixture = TestBed.createComponent(UserComponent);
    const component = fixture.componentInstance;
    // UserService actually injected into the component
    // const userService = fixture.debugElement.injector.get(UserService);
    // UserService from the root injector
    const userService = TestBed.get(UserService);
    fixture.detectChanges();
    expect(userService.user.name).toEqual(component.user.name);
  });

  it('should display the user name if the user is logged in', () => {
    const fixture = TestBed.createComponent(UserComponent);
    const component = fixture.componentInstance;
    component.isLoggedIn = true;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect (compiled.querySelector('p').textContent).toContain(component.user.name);
  });

  it('shouldn\'t display the user name if the user is logged in', () => {
    const fixture = TestBed.createComponent(UserComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect (compiled.querySelector('p').textContent).not.toContain(component.user.name);
  });

});


