import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  // dynamic menu items
  items: MenuItem[] | any;

  // active menu items
  activeItem: MenuItem | any;

  // card data
  products: any = [
    {
      title: 'BPPS',
      key1: 'NPCI',
      key2: 'NETC',
      price: '123',
      img: '../../../assets/images/home/card/bpps.svg',
      des: 'Bharat Bill Payment System (BBPS) is a unified bill payment system for India. The BBPS intends to Bharat Bill.',
    },
    {
      title: 'RETAIL LOANS',
      key1: 'NPCI',
      key2: 'NETC',
      price: '123',
      img: '../../../assets/images/home/card/img2.svg',
      des: 'Bharat Bill Payment System (BBPS) is a unified bill payment system for India. The BBPS intends to Bharat Bill.',
    },
    {
      title: 'KARZA',
      key1: 'NPCI',
      key2: 'NETC',
      price: '123',
      img: '../../../assets/images/home/card/img3.svg',
      des: 'Bharat Bill Payment System (BBPS) is a unified bill payment system for India. The BBPS intends to Bharat Bill.',
    },
    {
      title: 'BPPS',
      key1: 'NPCI',
      key2: 'NETC',
      price: '123',
      img: '../../../assets/images/home/card/bpps.svg',
      des: 'Bharat Bill Payment System (BBPS) is a unified bill payment system for India. The BBPS intends to Bharat Bill.',
    },
    {
      title: 'BPPS',
      key1: 'NPCI',
      key2: 'NETC',
      price: '123',
      img: '../../../assets/images/home/card/bpps.svg',
      des: 'Bharat Bill Payment System (BBPS) is a unified bill payment system for India. The BBPS intends to Bharat Bill.',
    },
    {
      title: 'BPPS',
      key1: 'NPCI',
      key2: 'NETC',
      price: '123',
      img: '../../../assets/images/home/card/bpps.svg',
      des: 'Bharat Bill Payment System (BBPS) is a unified bill payment system for India. The BBPS intends to Bharat Bill.',
    },
  ];

  // to make card responsive
  responsiveOptions: any;
  constructor() {
    // responsive break points
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  ngOnInit(): void {}
}
