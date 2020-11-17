import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { SystemNavigatorService } from './system-navigator.service';
import { AppUrl } from './models';
import { Observable } from 'rxjs';

@Component({
  selector: 'lib-system-navigator',
  templateUrl: './system-navigator.component.html',
  styleUrls: ['./system-navigator.component.scss'],
})
export class SystemNavigatorComponent implements OnInit {
  @Input() inputAppUrls: Observable<AppUrl[]>;

  isMenuOpen = false;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event): void {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isMenuOpen = false;
    }
  }

  @HostListener('document:keyup.escape', ['$event'])
  onEscKeyUp(event: KeyboardEvent) {
    this.isMenuOpen = false;
  }

  constructor(private service: SystemNavigatorService, private eRef: ElementRef) {}

  ngOnInit(): void {
    if (this.service.api) {
      this.getUrls();
    }
  }

  getUrls(): void {
    this.inputAppUrls = this.service.getUrls();
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
