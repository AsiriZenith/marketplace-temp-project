import { Component, OnInit } from '@angular/core';
class VideoSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-video-upload',
  templateUrl: './video.upload.component.html',
  styleUrls: ['./video.upload.component.css'],
})
export class VideoUploadComponent implements OnInit {
  public url: any;
  videoToUpload!: VideoSnippet;

  ngOnInit(): void {}

  onSelectFile(event: any) {
    const file = event.target.files && event.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = (event) => {
        this.url = (<FileReader>event.target).result;

      };
    }
  }
}
