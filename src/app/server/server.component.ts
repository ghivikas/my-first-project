import { Component } from '@angular/core';

@Component({
  selector: 'app-server1',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  serverId:number=10;
  serverState:string="offline";
}