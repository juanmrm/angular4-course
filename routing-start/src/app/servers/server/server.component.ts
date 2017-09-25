import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.route.params
      .subscribe(
        (params: Params) => {
          console.log(params);
          this.server = this.serversService.getServer(+params['id']);
        }
      );
  }

    // this.route.queryParams
    //   .subscribe(
    //     params => {
    //       console.log(params);
    //     }
    //   );
    //
    // this.route.fragment
    //   .subscribe(
    //     fragment => {
    //       console.log(fragment);
    //     }
    //   );

    onEdit() {
      this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve' }); //Using relative route
    }
}
