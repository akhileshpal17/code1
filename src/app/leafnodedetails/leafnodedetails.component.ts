import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-leafnodedetails',
  templateUrl: './leafnodedetails.component.html',
  styleUrls: ['./leafnodedetails.component.css']
})

export class LeafnodedetailsComponent implements OnInit{

  name!: string;
  cluster!: number;


  constructor(private route: ActivatedRoute) {

  }

ngOnInit(): void
{
  this.route.paramMap.subscribe(params => {
    const leafNodeData = JSON.parse(params.get('data'));
    this.name = leafNodeData.name;
    this.cluster = leafNodeData.cluster;
  });
}
}
