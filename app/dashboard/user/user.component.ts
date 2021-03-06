import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { PostsService } from './../../services/post.service';


@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html',
     providers :[PostsService]
})

export class UserComponent implements OnInit{
    _id : string;
    photoURL : string;
    name : string;
    email : string;
    bio : string;
    city : string;
    state : string;
    phone : string;
    pincode : number;
    gender : string;
    posts : Post;
    likes : Like;
    comments : Comment;
    postCount : number;
    likeCount : number ;
    commentCount : number;
    payload : any;


    ngOnInit(){
        // $.getScript('../../../assets/js/material-dashboard.js');
    this.postsService.getAdmin("person/"+this._id).subscribe(user => {
    this._id = user._id;
    this.photoURL = user.photoURL;
    this.name = user.name;
    this.email = user.email;
    this.bio = user.bio;
    this.city = user.city;
    this.state = user.state;
    this.phone = user.phone;
    this.pincode = user.pincode;
    this.gender = user.gender;
    })
     this.postsService.getAdmin("userinfo/"+this._id).subscribe(infos => {
           this.posts = infos.posts.data
           this.comments = infos.comments.data
           this.likes = infos.likes.data
           this.postCount = infos.posts.count
           this.likeCount = infos.likes.count
           this.commentCount = infos.comments.count

    })

        }
   updateUser(dw){
   console.log(this.name);
   console.log(this.bio)
   this.payload["_id"] = this._id;

   this.postsService.sendData("/admin/user/detail/",this.payload).subscribe(infos => {

   });
   return false;
   }
   public onSubmit(empForm: any, id : any, event: Event) {
    event.preventDefault();
    console.log(empForm.value);
    empForm.value["_id"] = id;

    this.postsService.sendData("/admin/user/detail/",empForm.value).subscribe(infos => {

    });
   }
   constructor(private route: ActivatedRoute, private location: Location, private postsService : PostsService) {
        this._id = route.snapshot.params['_id'];
     }
   open(e, data){
     var $container = $("html,body");
     var $scrollTo = $('.editPost');
     $scrollTo.attr("backId",data._id);
     $scrollTo.find('img').attr("src",data.files.url);
     $scrollTo.find('textarea').val(data.description);
     $scrollTo.parent().parent().show();
     $container.animate({scrollTop: $scrollTo.offset().top - $container.offset().top, scrollLeft: 0},300);
     }
     backToList(){
       var $container = $("html,body");
       var $scrollTo =$("#"+$('.editPost').attr("backId"));
        $container.animate({scrollTop: $scrollTo.offset().top - $container.offset().top, scrollLeft: 0},300);
     }
     updatePost(){
       var id = $('.editPost').attr("backId");
        var text = $('.editPost').find('textarea').val();
        var obj = {};
        obj["description"]=text;
       this.postsService.putData("/post/update/"+id,obj).subscribe(infos => {
         this.postsService.getAdmin("userinfo/"+this._id).subscribe(infos => {
               this.posts = infos.posts.data
               this.comments = infos.comments.data
               this.likes = infos.likes.data
               this.postCount = infos.posts.count
               this.likeCount = infos.likes.count
               this.commentCount = infos.comments.count

        })
       });



     }
}
interface Post{
    files :Files
}
interface Like{

}
interface Comment{

}
interface Files{
   url : string;
}
