import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Trademark} from "../../entity/trademark";
import {Commodity} from "../../entity/commodity";
import {CommodityService} from "../../service/commodity.service";
import {ActivatedRoute, Router} from "@angular/router";
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
  commodities: Commodity[] = [];

  constructor(private router: Router, private commodityService: CommodityService, private activatedRoute: ActivatedRoute, private trademarkService: TrademarkService, @Inject(AngularFireStorage) private storage: AngularFireStorage) {
    this.commodityForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z0-9\\+ ]*"), Validators.minLength(5), Validators.maxLength(200)]),
      cpu: new FormControl('', [Validators.required, Validators.pattern("[-a-zA-Z0-9\\+ ]*"), Validators.minLength(5), Validators.maxLength(50)]),
      capacity: new FormControl('', [Validators.required, Validators.pattern("[0-9]* [G][B]"), Validators.minLength(5), Validators.maxLength(20)]),
      trademark: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required, Validators.min(0), Validators.max(2000000000)]),
      image: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(200)]),
      camera: new FormControl('', [Validators.required, Validators.pattern("[0-9]* [M][P]"), Validators.minLength(2), Validators.maxLength(50)]),
      selfie: new FormControl('', [Validators.required, Validators.pattern("[0-9]* [M][P]"), Validators.minLength(2), Validators.maxLength(50)]),
      screenSize: new FormControl('', [Validators.required, Validators.pattern("[0-9.]* [a-z]*"), Validators.minLength(5), Validators.maxLength(20)]),
      guarantee: new FormControl('', [Validators.required, Validators.pattern("[0-9]*"), Validators.maxLength(2)]),
      origin: new FormControl('', [Validators.required, Validators.pattern("[a-vxyỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđA-Z ]*"), Validators.minLength(2), Validators.maxLength(20)]),
      description: new FormControl('', [Validators.required]),
      codeQr: new FormControl('', [Validators.required, Validators.pattern("[Q][R][0-9]*"), Validators.minLength(5), Validators.maxLength(5)])
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
    this.commodityService.getAll2().subscribe(next => {
      this.commodities = next;
      console.log(next)
    })
  }


  compareFun(item1, item2) {
    return item1 && item2 ? item1.id === item2.id : item1 === item2;
  }

  checkDuplicationName(name: string) {
    for (let i = 0; i < this.commodities.length; i++) {
      if (this.commodities[i].name == name) {
        this.commodityForm.controls.name.setErrors({'inValidName': true})
      }
    }
  }

  checkDuplicationQR(codeQr: string) {
    for (let i = 0; i < this.commodities.length; i++) {
      if (this.commodities[i].codeQr == codeQr) {
        this.commodityForm.controls.codeQr.setErrors({'invalidCodeQR': true})
      }
    }
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
              this.commodityList.image = url;
            }
            this.src = url;
            console.log('link', this.commodityList.image);
          });
        })
      )
      .subscribe();
  }

  editCommodity() {
    if (this.commodityForm.invalid) {
      alert("Chú ý: Form phải điền đúng định dạng")
    } else {
      this.commodityService.editCommodity(this.commodityForm.value.id, this.commodityForm.value).subscribe(() => {
        alert("Chỉnh sửa thành công");
        this.router.navigateByUrl('/commodity/list');
      })
    }
  }
}
