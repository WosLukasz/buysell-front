import { Component, Input } from '@angular/core';
import { Auction } from 'app/model/auctions.model';

@Component({
  selector: 'app-auctions-list',
  templateUrl: './auctions-list.component.html',
  styleUrls: ['./auctions-list.component.scss']
})
export class AuctionsListComponent {

  @Input() auctions: Auction[];

}
