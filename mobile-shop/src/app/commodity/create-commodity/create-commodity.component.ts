import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Trademark} from "../../entity/trademark";
import {CommodityService} from "../../service/commodity.service";
import {TrademarkService} from "../../service/trademark.service";
import {AngularFireStorage} from "@angular/fire/storage";
import {finalize} from "rxjs/operators";
import {Observable} from "rxjs";
import {Commodity} from "../../entity/commodity";
import Swal from "sweetalert2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-commodity',
  templateUrl: './create-commodity.component.html',
  styleUrls: ['./create-commodity.component.css']
})
export class CreateCommodityComponent implements OnInit {
  commodityForm: FormGroup;
  trademarkList: Trademark[] = [];
  selectedImage: any = null;
  url: any;
  downloadURL: Observable<string> | undefined;
  fb: string | undefined;
  src: string | undefined;
  commodityList: Commodity[] = [];

  constructor(private router: Router, private commodityService: CommodityService, private trademarkService: TrademarkService, private storage: AngularFireStorage) {
    this.commodityForm = new FormGroup({
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
    this.trademarkService.getAllTrademark().subscribe(next => {
      this.trademarkList = next;
    });
  }

  ngOnInit(): void {
    this.commodityService.getAll2().subscribe(next => {
      this.commodityList = next;
      console.log(next)
    })
  }

  checkDuplicationName(name: string) {
    for (let i = 0; i < this.commodityList.length; i++) {
      if (this.commodityList[i].name == name) {
        this.commodityForm.controls.name.setErrors({'invalidName': true})
      }
    }
  }

  checkDuplicationQR(codeQr: string) {
    for (let i = 0; i < this.commodityList.length; i++) {
      if (this.commodityList[i].codeQr == codeQr) {
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
              this.fb = url;
            }
            this.commodityForm.patchValue({image: url});
            this.src = url;
            console.log('link: ', this.fb);
            this.src = url;
            // console.log('link: ', this.fb);
          });
        })
      )
      .subscribe();
  }

  addCommodity() {
    if (this.commodityForm.invalid) {
      Swal.fire({
        title: 'Chú ý',
        html: 'Thông tin phải điền đầy đủ và đúng định dạng !',
        icon: 'warning',
        confirmButtonColor: 'blue',
        confirmButtonText: 'Đã hiểu'
      })
    } else {
      this.commodityService.addCommodity(this.commodityForm.value).subscribe(() => {
        Swal.fire(
          'Thành công',
          'Thêm mới thông tin hàng hóa thành công',
          'success'
        );
        this.commodityForm.reset();
      })
    }
  }

  cancel() {
    Swal.fire({
      title: 'Hủy bỏ',
      html: 'Bạn có muốn hủy bỏ thêm mới thông tin hàng hóa ?',
      icon: 'question',
      showCancelButton: true,
      cancelButtonText: 'Hủy',
      showConfirmButton: true,
      confirmButtonText: 'Có',
      confirmButtonColor: 'red'
    }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigateByUrl("/commodity/list");
        }
      }
    );
  }
}
