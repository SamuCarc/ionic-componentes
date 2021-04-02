import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
})
export class AvatarPage implements OnInit {

  items:Avatar[] = [
    {name: 'Stan Lee',src: '/assets/stan-lee.jpg'},
    {name: 'Emma Watson',src: '/assets/emma-watson.jpeg'},
    {name: 'Jennifer Lawrence',src: '/assets/jennifer-lawrence.jpg'},
    {name: 'Will Smith',src: '/assets/will-smith.jpeg'},
    {name: 'Scarlett Johannson',src: '/assets/scarlett-johansson.jpeg'},
    {name: 'Chris Hemsworth',src: '/assets/chris-hemsworth.jpg'},
  ]
  
  constructor() { }

  ngOnInit() {
  }

}

interface Avatar {
  name:string;
  src:string;
}