import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { SystemNavigatorComponent } from './system-navigator.component';
import { SystemNavigatorService, SystemNavigatorServiceConfig } from './system-navigator.service';
import { SystemNavigatorServiceConfigStub } from './stubs';

describe('SystemNavigatorComponent', () => {
    let component: SystemNavigatorComponent;
    let fixture: ComponentFixture<SystemNavigatorComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientModule],
            declarations: [SystemNavigatorComponent],
            providers: [
                {
                    provide: SystemNavigatorServiceConfig,
                    useValue: SystemNavigatorServiceConfigStub,
                },
                SystemNavigatorService,
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SystemNavigatorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
