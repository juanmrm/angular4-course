
import { UserService } from './user.service';
import { async, ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';

class UserServiceSpy {
  user: {
    name: 'Max'
  };
}

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;


  beforeEach(async(() => {

    // Use this service Stub if in the user component we don't have a UserService provider.
    // This way we will insert a suitable UserService mock

    // const userServiceStub = {
    //   isLoggedIn: true,
    //   user: { name: 'Test User'}
    // };

    TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true } // Activate Automatic Change Detection
        // { provide: UserService, useValue: userServiceStub } // Make use of these mock service provider only if the
                                                              //  user component doesn't provide a UserService
      ]
    })
    .overrideComponent(UserComponent, {
      set: {
        providers: [
          { provide: UserService, useClass: UserServiceSpy }
        ]
      }
    })

    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should use the user name from the service', () => {
    // const userServiceSpy2 = TestBed.get(UserService);
    const userServiceSpy = fixture.debugElement.injector.get(UserService);
    // fixture.detectChanges();
    console.log(userServiceSpy);
    expect(userServiceSpy.user.name).toEqual(component.user.name);
  });

});


