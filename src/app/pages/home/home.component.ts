import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  projects = [
    {
      id: 20,
      title: 'novoaa',
      startAt: '2022-10-17T18:22:41.000Z',
      endAt: null,
    },
    {
      id: 20,
      title: 'nooaa',
      startAt: '2022-10-17T18:22:41.000Z',
      endAt: null,
    },
    {
      id: 20,
      title: 'nvoaa',
      startAt: '2022-10-17T18:22:41.000Z',
      endAt: null,
    },
    {
      id: 20,
      title: 'ovoaa',
      startAt: '2022-10-17T18:22:41.000Z',
      endAt: null,
    },
    {
      id: 20,
      title: 'novoa',
      startAt: '2022-10-17T18:22:41.000Z',
      endAt: null,
    },
    {
      id: 20,
      title: 'novo',
      startAt: '2022-10-17T18:22:41.000Z',
      endAt: null,
    },
  ];
  ngOnInit(): void {}
}
