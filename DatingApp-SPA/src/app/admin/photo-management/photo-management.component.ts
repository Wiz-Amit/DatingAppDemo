import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/photo';
import { AdminService } from 'src/app/services/admin.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-photo-management',
  templateUrl: './photo-management.component.html',
  styleUrls: ['./photo-management.component.css']
})
export class PhotoManagementComponent implements OnInit {
  photos: Photo[];

  constructor(
    private adminService: AdminService,
    private alertify: AlertifyService) { }

  ngOnInit() {
    this.getPhotos();
  }

  getPhotos() {
    this.adminService.getPhotosForModeration().subscribe(
      (photos: Photo[]) => {
        this.photos = photos;
      },
      error => {
        console.log(error);
        this.alertify.error(error);
      }
    );
  }

  approvePhoto(photoId: number) {
    this.adminService.approvePhoto(photoId).subscribe(
      () => {
        console.log("Approved");
        this.alertify.success("Approved");
        this.photos.splice(this.photos.findIndex(p => p.id == photoId), 1);
      },
      error => {
        console.log(error);
        this.alertify.error(error);
      }
    );
  }

  rejectPhoto(photoId: number) {
    this.adminService.rejectPhoto(photoId).subscribe(
      () => {
        console.log("Rejected");
        this.alertify.message("Rejected");
        this.photos.splice(this.photos.findIndex(p => p.id == photoId), 1);
      },
      error => {
        console.log(error);
        this.alertify.error(error);
      }
    );
  }

}
