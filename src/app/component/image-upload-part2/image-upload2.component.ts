import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../../service/file-upload.service';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'image-upload-part2',
  templateUrl: './image-upload2.component.html',
  styleUrls: ['./image-upload2.component.css'],
})
export class ImageUploadPart2Component implements OnInit {
  selectedFile!: ImageSnippet;

  constructor(private imageService: FileUploadService) {}

  ngOnInit(): void {}

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.imageService.uploadImage(this.selectedFile.file).subscribe(
        (res) => {},
        (err) => {}
      );
    });
    reader.readAsDataURL(file);
  }
}
