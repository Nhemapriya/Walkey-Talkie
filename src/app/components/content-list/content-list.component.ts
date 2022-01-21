import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  
  contents: any[] = [];
  constructor(private service: ContentService, private activatedRoute:ActivatedRoute) { }

  ngOnInit()  {

    this.activatedRoute.queryParams.subscribe(
      qparams=>{
        this.service.search(qparams['q']).subscribe(resp=>this.contents=resp.Search)
      }
    );
    
 
  }

}
