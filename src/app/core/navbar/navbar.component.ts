
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
    },
    {
      displayName: 'Position Reconciliation',
      route: 'keycontrols'
    },
     {
      displayName: 'Roll Forward Reconciliation',
    },
     {
      displayName: 'Research',
       children: [
        {
          displayName: 'Search SRS Trades',
          route: 'createProgramInstance'
        },
        {
          displayName: 'Search TA Trades',
          route: 'editProgramInstance'
        }]
    },
     {
      displayName: 'Maintenance',
      children: [
        {
          displayName: 'Data Provider',
          route: 'controlObjectivesMaintenance'
        },
        {
          displayName: 'Data Provider Assign',
          route: 'riskMaintenance'
        },
        {
          displayName: 'SRS Timing Factor',
          route: 'riskMaintenance'
        },
        {
          displayName: 'Trade Category',
          route: 'riskMaintenance'
        },
        {
          displayName: 'System Value',
          route: 'riskMaintenance'
        },
      ]
    }
  ];
  ngOnInit() {
  }

}
