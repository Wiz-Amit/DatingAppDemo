import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { AlertifyService } from 'src/app/services/alertify.service';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
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
}
