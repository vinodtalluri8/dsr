
/**
 * This file should contains all logic
 * or the data releated to side nav bar
 */

import {
  Component, OnDestroy, ViewEncapsulation, Input, HostListener, Inject, OnInit
} from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, RouterLink, UrlSegment, RouterLinkActive } from '@angular/router';
import {
  MediaChange,
  MatchMedia,
  ObservableMedia,
  BreakPointRegistry
} from '@angular/flex-layout';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navItems = [
    {
      displayName: 'Trade Reconciliation',
      route: 'salesRecon'
    },
        {
      displayName: 'Position Reconciliation',
      route: 'salesRecon'
    },
        {
      displayName: 'Roll Forward Reconciliation',
      route: 'salesRecon'
    },
        {
      displayName: 'Research',
      route: ''
    },
        {
      displayName: 'Maintenance',
      route: ''
    },
  ];
  ngOnInit() {
  }

}
