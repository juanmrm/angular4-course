
import { UserService } from './user.service';
import { async, ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';

// class UserServiceSpy {
//   user: {
//     name: 'Max'
//   };
// }
describe('Component: User', () => {
  beforeEach(async(() => {
    // Use this service Stub if in the user component we don't have a UserService provider.
    // This way we will insert a suitable UserService mock
    // const userServiceStub = {
    //   isLoggedIn: true,
    //   user: { name: 'Test User'}
    // };
    TestBed.configureTestingModule({
      declarations: [ UserComponent ]
      // providers: [
         // { provide: ComponentFixtureAutoDetect, useValue: true } // Activate Automatic Change Detection
         // { provide: UserService, useValue: userServiceStub } // Make use of these mock service provider only if the
                                                                //  user component doesn't provide a UserService
      // ]
    }).compileComponents();
  }));
  it('should create the app', () => {
    const fixture = TestBed.createComponent(UserComponent);
    const component = fixture.debugElement.componentInstance;
    console.log(component.user);
    expect(component).toBeTruthy();
  });

  it('should use the user name from the service', () => {
    const fixture = TestBed.createComponent(UserComponent);
    const component = fixture.debugElement.componentInstance;
    const userService = fixture.debugElement.injector.get(UserService);
    fixture.detectChanges();
    expect(userService.user.name).toEqual(component.user.name);
  });

  it('should display the user name if the user is logged in', () => {
    const fixture = TestBed.createComponent(UserComponent);
    const component = fixture.debugElement.componentInstance;
    component.isLoggedIn = true;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect (compiled.querySelector('p').textContent).toContain(component.user.name);
  });

  it('shouldn\'t display the user name if the user is logged in', () => {
    const fixture = TestBed.createComponent(UserComponent);
    const component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect (compiled.querySelector('p').textContent).not.toContain(component.user.name);
  });

});


