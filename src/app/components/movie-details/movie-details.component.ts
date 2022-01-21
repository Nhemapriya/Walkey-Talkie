import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie:any;
  constructor(private service: ContentService, 
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .subscribe(params=>{
      let id = params['imdbID'];
      this.service.getDetails(id)
      .subscribe(resp=> this.movie=resp)
    })
  }

  back()
  {
    window.history.back();
  }

}
