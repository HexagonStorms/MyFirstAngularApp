import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bikiniBottomResidents = [
    {
      name: 'Spongebob Squarepants',
      occupation: 'Cook at Krusty Krab',
      image: 'https://vignette.wikia.nocookie.net/spongebob/images/a/ac/Spongebobwithglasses.jpeg/revision/latest?cb=20121014113150',
      species: 'sponge',
      location: 'Pineapple under the sea'
    },
    {
      name: 'Squidward',
      occupation: 'Cashier at Krusty Krab',
      image: 'https://vignette.wikia.nocookie.net/spongebob/images/3/3c/Handsome_Squidward.png/revision/latest?cb=20161130235132',
      species: 'octupus',
      location: 'Tiki Head under the sea'
    },
    {
      name: 'Sandy Cheeks',
      occupation: 'Scientist',
      image: 'https://thespinoff.scdn5.secure.raxcdn.com/wp-content/uploads/2017/03/sandy-1-850x510.jpg',
      species: 'squirrel',
      location: 'Terrarium'
    },
    {
      name: 'Patrick Starr',
      occupation: 'Umemployed',
      image: 'https://vignette.wikia.nocookie.net/spongebobfanon/images/7/70/Patrick_Spongepocalypse.PNG/revision/latest?cb=20170829210358',
      species: 'Starfish',
      location: 'Under a rock under the sea'
    }
  ];

}
