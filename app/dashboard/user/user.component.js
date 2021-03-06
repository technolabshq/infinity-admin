"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var post_service_1 = require("./../../services/post.service");
var UserComponent = (function () {
    function UserComponent(route, location, postsService) {
        this.route = route;
        this.location = location;
        this.postsService = postsService;
        this._id = route.snapshot.params['_id'];
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        // $.getScript('../../../assets/js/material-dashboard.js');
        this.postsService.getAdmin("person/" + this._id).subscribe(function (user) {
            _this._id = user._id;
            _this.photoURL = user.photoURL;
            _this.name = user.name;
            _this.email = user.email;
            _this.bio = user.bio;
            _this.city = user.city;
            _this.state = user.state;
            _this.phone = user.phone;
            _this.pincode = user.pincode;
            _this.gender = user.gender;
        });
        this.postsService.getAdmin("userinfo/" + this._id).subscribe(function (infos) {
            _this.posts = infos.posts.data;
            _this.comments = infos.comments.data;
            _this.likes = infos.likes.data;
            _this.postCount = infos.posts.count;
            _this.likeCount = infos.likes.count;
            _this.commentCount = infos.comments.count;
        });
    };
    UserComponent.prototype.updateUser = function (dw) {
        console.log(this.name);
        console.log(this.bio);
        this.payload["_id"] = this._id;
        this.postsService.sendData("/admin/user/detail/", this.payload).subscribe(function (infos) {
        });
        return false;
    };
    UserComponent.prototype.onSubmit = function (empForm, id, event) {
        event.preventDefault();
        console.log(empForm.value);
        empForm.value["_id"] = id;
        this.postsService.sendData("/admin/user/detail/", empForm.value).subscribe(function (infos) {
        });
    };
    UserComponent.prototype.open = function (e, data) {
        var $container = $("html,body");
        var $scrollTo = $('.editPost');
        $scrollTo.attr("backId", data._id);
        $scrollTo.find('img').attr("src", data.files.url);
        $scrollTo.find('textarea').val(data.description);
        $scrollTo.parent().parent().show();
        $container.animate({ scrollTop: $scrollTo.offset().top - $container.offset().top, scrollLeft: 0 }, 300);
    };
    UserComponent.prototype.backToList = function () {
        var $container = $("html,body");
        var $scrollTo = $("#" + $('.editPost').attr("backId"));
        $container.animate({ scrollTop: $scrollTo.offset().top - $container.offset().top, scrollLeft: 0 }, 300);
    };
    UserComponent.prototype.updatePost = function () {
        var _this = this;
        var id = $('.editPost').attr("backId");
        var text = $('.editPost').find('textarea').val();
        var obj = {};
        obj["description"] = text;
        this.postsService.putData("/post/update/" + id, obj).subscribe(function (infos) {
            _this.postsService.getAdmin("userinfo/" + _this._id).subscribe(function (infos) {
                _this.posts = infos.posts.data;
                _this.comments = infos.comments.data;
                _this.likes = infos.likes.data;
                _this.postCount = infos.posts.count;
                _this.likeCount = infos.likes.count;
                _this.commentCount = infos.comments.count;
            });
        });
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        selector: 'user-cmp',
        moduleId: module.id,
        templateUrl: 'user.component.html',
        providers: [post_service_1.PostsService]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, common_1.Location, post_service_1.PostsService])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map