import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { LandingPageService } from '../../service/landing-page.service';
import { AssetsTypes } from '../../../utility/assets-list';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  assetslist!: FormGroup;
  assetsData!: AssetsTypes;

  apiValues: string[] = [];
  videoValue: string[] = [];
  documentValue: string[] = [];
  consultancyServiceValue: string[] = [];

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  constructor(
    private formBuilder: FormBuilder,
    private landingPageService: LandingPageService
  ) {
    this.assetslist = this.formBuilder.group({
      apis: [false],
      videos: [false],
      documents: [false],
      consultancy_service: [false],
    });
    this.assetslist.valueChanges.subscribe((data: AssetsTypes) => {
      if (data.apis === true) {
        this.getApiDetails();
      }
    });
  }

  ngOnInit(): void {
    this.getAssetsDetails();
  }

  private getAssetsDetails() {
    this.landingPageService.getAssetsDetails().subscribe((data) => {
      this.assetsData = data;
      this.apiValues = data.apis[0].category;
      this.videoValue = data.videos[0].category;
      this.documentValue = data.documents[0].category;
      this.consultancyServiceValue = data.consultancy_service[0].category;
    });
  }

  private getApiDetails() {
    this.landingPageService.getApiDetails().subscribe((data) => {
      console.log(data);
    });
  }

  get apis(): AbstractControl {
    return this.assetslist.get('apis')?.value;
  }
  get videos(): AbstractControl {
    return this.assetslist.get('videos')?.value;
  }
  get documents(): AbstractControl {
    return this.assetslist.get('documents')?.value;
  }
  get consultancy_service(): AbstractControl {
    return this.assetslist.get('consultancy_service')?.value;
  }
}

export interface AssetsList {
  category: string[];
  collection: string[];
}

export interface AssetsTypes {
  apis: boolean;
  videos: boolean;
  documents: boolean;
  consultancy_service: boolean;
}

export interface APiDetail {
  name: string;
  isVerified: boolean;
  description: string;
  userRating: number;
}

export interface APiDetailResponse {
  count: number;
  list: APiDetail[];
}

// assets listing - component name
