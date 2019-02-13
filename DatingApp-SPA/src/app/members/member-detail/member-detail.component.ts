import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { AlertifyService } from 'src/app/services/alertify.service';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { TabsetComponent } from 'ngx-bootstrap';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  @ViewChild("memberTabs") memberTabs: TabsetComponent;
  user: User;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(
    private userService: UserService,
    private alertify: AlertifyService,
    private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.loadUser();

    this.galleryOptions = [{
      width: "500px",
      height: "500px",
      imagePercent: 100,
      thumbnailsColumns: 4,
      imageAnimation: NgxGalleryAnimation.Slide,
      preview: false
    }];

    this.activeRoute.queryParams.subscribe(params => {
      const selectedTab = params["tab"];
      selectedTab > 0 ? this.selectTab(selectedTab) : 0;
    })
  }

  getImages() {
    const imageUrl = [];

    this.user.photos.forEach(photo => {
      imageUrl.push({
        small: photo.url,
        medium: photo.url,
        big: photo.url,
        description: photo.description
      });
    })
    return imageUrl;
  }

  loadUser() {
    this.userService.getUser(+this.activeRoute.snapshot.params["id"])
      .subscribe(
        user => {
          this.user = user;
        },
        error => {
          this.alertify.error(error);
        },
        () => {
          this.galleryImages = this.getImages();
        }
      )
  }

  selectTab(tabId: number) {
    this.memberTabs.tabs[tabId].active = true;
    document.querySelector("#memberTabs")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
