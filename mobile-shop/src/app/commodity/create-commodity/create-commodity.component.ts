import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Trademark} from "../../entity/trademark";
import {CommodityService} from "../../service/commodity.service";
import {TrademarkService} from "../../service/trademark.service";
import {AngularFireStorage} from "@angular/fire/storage";
import {finalize} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'app-create-commodity',
  templateUrl: './create-commodity.component.html',
  styleUrls: ['./create-commodity.component.css']
})
export class CreateCommodityComponent implements OnInit {
  commodityForm: FormGroup;
  trademarkList: Trademark[] = [];
  selectedImage: any = null;
  downloadURL: Observable<string> | undefined;
  fb: string | undefined;
  src: string | undefined;

  constructor(private commodityService: CommodityService, private trademarkService: TrademarkService, private storage: AngularFireStorage) {
    this.commodityForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z0-9\\+ ]*"), Validators.minLength(5), Validators.maxLength(200)]),
      cpu: new FormControl('', [Validators.required]),
      capacity: new FormControl('', [Validators.required]),
      trademark: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required, Validators.min(0), Validators.max(2000000000)]),
      image: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(200)]),
      camera: new FormControl('', [Validators.required]),
      selfie: new FormControl('', [Validators.required]),
      screenSize: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z0-9\\+. ]*"), Validators.minLength(5), Validators.maxLength(20)]),
      guarantee: new FormControl('', [Validators.required]),
      origin: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      codeQr: new FormControl('', [Validators.required])
    });
    this.trademarkService.getAllTrademark().subscribe(next => {
      this.trademarkList = next;
    });
  }

  ngOnInit(): void {
  }

  showPreview(event: any) {
    this.selectedImage = event.target.files[0];
    const filePath = this.selectedImage.name;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, this.selectedImage);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              // lấy lại url
              this.fb = url;
            }
            this.src = url;
            // console.log('link: ', this.fb);
          });
        })
      )
      .subscribe();
  }

  addCommodity() {
    // upload image to firebase
    const nameImg = this.selectedImage.name;
    const fileRef = this.storage.ref(nameImg);
    this.storage.upload(nameImg, this.selectedImage).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {

          this.commodityForm.patchValue({image: url});

          // Call API to create commodity
          this.commodityService.addCommodity(this.commodityForm.value).subscribe(() => {
            alert("Thêm mới thành công")
            this.commodityForm.reset();
          })
        });
      })
    ).subscribe();
  }
}
