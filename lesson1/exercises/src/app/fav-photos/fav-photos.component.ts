import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Bullseye!';
  image1 = 'https://st.depositphotos.com/1002927/1929/i/600/depositphotos_19295757-stock-photo-red-target.jpg';
  image2 = 'https://d1lybq9rkk675u.cloudfront.net/media/images/axe-3.width-1440.jpg';
  image3 = 'https://realhardgames.com/wp-content/uploads/2019/05/How-to-Score-Darts-300x200.jpg?ezimgfmt=rs:350x233/rscb2/ng:webp/ngcb2';

  constructor() { }

  ngOnInit() {
  }

}