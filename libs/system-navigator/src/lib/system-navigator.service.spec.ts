import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { SystemNavigatorService, SystemNavigatorServiceConfig } from './system-navigator.service';
import { SystemNavigatorServiceConfigStub } from './stubs';

describe('SystemNavigatorService', () => {
    let service: SystemNavigatorService;
    let httpSpy: any;

    beforeEach(() => {
        httpSpy = jasmine.createSpyObj('http', ['get']);

        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [
                {
                    provide: SystemNavigatorServiceConfig,
                    useValue: SystemNavigatorServiceConfigStub,
                },
                {
                    provide: HttpClient,
                    useValue: httpSpy,
                },
                SystemNavigatorService,
            ],
        });
        service = TestBed.inject(SystemNavigatorService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
