import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Trademark} from "../../entity/trademark";
import {Commodity} from "../../entity/commodity";
import {CommodityService} from "../../service/commodity.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {TrademarkService} from "../../service/trademark.service";
import {AngularFireStorage} from "@angular/fire/storage";
import {finalize} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'app-edit-commodity',
  templateUrl: './edit-commodity.component.html',
  styleUrls: ['./edit-commodity.component.css']
})
export class EditCommodityComponent implements OnInit {
  commodityForm: FormGroup;
  trademarkList: Trademark[] = [];
  selectedImage: any = null;
  commodityList: Commodity = {};
  src: string | undefined;
  downloadURL: Observable<string> | undefined;

  constructor(private router: Router,private commodityService: CommodityService, private activatedRoute: ActivatedRoute, private trademarkService: TrademarkService, @Inject(AngularFireStorage) private storage: AngularFireStorage) {
    this.commodityForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required]),
      cpu: new FormControl('', [Validators.required]),
      capacity: new FormControl('', [Validators.required]),
      trademark: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      camera: new FormControl('', [Validators.required]),
      selfie: new FormControl('', [Validators.required]),
      screenSize: new FormControl('', [Validators.required]),
      guarantee: new FormControl('', [Validators.required]),
      origin: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      codeQr: new FormControl('', [Validators.required]),
      quantity: new FormControl('')
    });
    this.commodityService.findCommodityById(this.activatedRoute.snapshot.paramMap.get("id")).subscribe(next => {
      console.log(this.commodityForm.patchValue(next));
      console.log(next);
      this.commodityList = next;
    });
    this.trademarkService.getAllTrademark().subscribe(next => {
      this.trademarkList = next;
    });

  }

  ngOnInit(): void {
  }


  compareFun(item1, item2) {
    return item1 && item2 ? item1.id === item2.id : item1 === item2;
  }

  showPreview(event: any) {
    this.selectedImage = event.target.files[0];
    const filePath = this.selectedImage.name;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,this.selectedImage);


    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              // lấy lại url
              this.commodityList.image = url;
            }
            this.src = url;
            // console.log('link', this.commodityList.image);
          });
        })
      )
      .subscribe();
  }

  editCommodity() {
    // upload image to firebase
    const nameImg = this.selectedImage.name;
    const fileRef = this.storage.ref(nameImg);
    this.storage.upload(nameImg, this.selectedImage).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          this.commodityForm.patchValue({image: url});
          // Call API to edit commodity
          this.commodityService.editCommodity(this.commodityForm.value.id, this.commodityForm.value).subscribe(() => {
            alert("Chỉnh sửa thành công");
            this.router.navigateByUrl('/commodity/list');
          })
        });
      })
    ).subscribe();
  }
}
