import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from './../../services/post.service';

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html',
    providers :[PostsService]
})

export class TableComponent{
   users : string[];
   _id: string;
   showsearch:boolean;
   constructor (private postsService : PostsService){
    this.postsService.getUser().subscribe(users => {
    this.users = users;
    this._id = "dsfd";
    console.log(this.users)
   	this.showsearch = false;
    })
    this.showsearch = false;
   }
   searchValue(ds){
    this.postsService.getSearch(ds, "user").subscribe(users => {
    this.users = users.data;
    this.showsearch = true;
    })
   return false;
   }
   resetData(){
   this.postsService.getUser().subscribe(users => {
    this.users = users;
    this.showsearch = false;
    })
   }
}
