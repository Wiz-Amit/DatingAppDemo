import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Photo } from 'src/app/models/photo';
import { environment } from 'src/environments/environment';
import { FileUploader } from 'ng2-file-upload';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-photo-editor',
  templateUrl: './photo-editor.component.html',
  styleUrls: ['./photo-editor.component.css']
})
export class PhotoEditorComponent implements OnInit {
  @Input() photos: Photo[];
  baseUrl = environment.apiUrl;
  uploader: FileUploader;
  hasBaseDropZoneOver = false;
  currentMainPhoto: Photo;
 
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private alertify: AlertifyService) { }

  ngOnInit() {
    this.initializeUploader();
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  initializeUploader() {
    this.uploader = new FileUploader({
      url: this.baseUrl + "users/" + this.authService.getId() + "/photos",
      authToken: "Bearer " + localStorage.getItem("token"),
      isHTML5: true,
      allowedFileType: ["image"],
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: 10 * 1024 * 1024
    });

    this.uploader.onAfterAddingFile = (file) => {file.withCredentials = false;}
  
    this.uploader.onSuccessItem = (item, response, status, headers) => {
      if(response) {
        const res: Photo = JSON.parse(response);

        const photo = {
          id: res.id,
          url: res.url,
          dateAdded: res.dateAdded,
          description: res.description,
          isMain: res.isMain
        }
        this.photos.push(photo);
        if(photo.isMain) {
          var user: User = JSON.parse(localStorage.getItem("user"));
          user.photoUrl = photo.url;
          localStorage.setItem("user", JSON.stringify(user));
        }
      }
    };
  }

  setMainPhoto(photo: Photo) {
    this.userService.setMainPhoto(this.authService.getId(), photo.id)
      .subscribe(
        () => {
          this.currentMainPhoto = this.photos.filter(p => p.isMain === true)[0];
          this.currentMainPhoto.isMain = false;
          photo.isMain = true;

          var user: User = JSON.parse(localStorage.getItem("user"));
          user.photoUrl = photo.url;
          localStorage.setItem("user", JSON.stringify(user));
        },
        error => {
          this.alertify.error(error);
        }
      )
  }

  deletePhoto(photoId: number) {
    this.alertify.confirm("Are you sure you want to delete this photo?", () => {
      this.userService.deletePhoto(this.authService.getId(), photoId).subscribe(() => {
        this.photos.splice(this.photos.findIndex(p => p.id == photoId), 1);
        this.alertify.success("Photo has been deleted");
      }, error => {
        this.alertify.error("Failed to delete the photo");
      });
      return 0;
    });
  }
}
