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
var core_1 = require("@angular/core");
var post_service_1 = require("./../../services/post.service");
var TableComponent = (function () {
    function TableComponent(postsService) {
        var _this = this;
        this.postsService = postsService;
        this.postsService.getUser().subscribe(function (users) {
            _this.users = users;
            _this._id = "dsfd";
            console.log(_this.users);
            _this.showsearch = false;
        });
        this.showsearch = false;
    }
    TableComponent.prototype.searchValue = function (ds) {
        var _this = this;
        this.postsService.getSearch(ds, "user").subscribe(function (users) {
            _this.users = users.data;
            _this.showsearch = true;
        });
        return false;
    };
    TableComponent.prototype.resetData = function () {
        var _this = this;
        this.postsService.getUser().subscribe(function (users) {
            _this.users = users;
            _this.showsearch = false;
        });
    };
    return TableComponent;
}());
TableComponent = __decorate([
    core_1.Component({
        selector: 'table-cmp',
        moduleId: module.id,
        templateUrl: 'table.component.html',
        providers: [post_service_1.PostsService]
    }),
    __metadata("design:paramtypes", [post_service_1.PostsService])
], TableComponent);
exports.TableComponent = TableComponent;
//# sourceMappingURL=table.component.js.map