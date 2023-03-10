// @ts-ignore
import {Component, Inject, OnInit} from '@angular/core';
// @ts-ignore
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Trademark} from "../../entity/trademark";
import {Commodity} from "../../entity/commodity";
import {CommodityService} from "../../service/commodity.service";
// @ts-ignore
import {ActivatedRoute, Router} from "@angular/router";
import {TrademarkService} from "../../service/trademark.service";
// @ts-ignore
import {AngularFireStorage} from "@angular/fire/storage";
// @ts-ignore
import {finalize} from "rxjs/operators";
// @ts-ignore
import {Observable} from "rxjs";
import Swal from "sweetalert2";
import {Title} from "@angular/platform-browser";

// @ts-ignore
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
  clickButton = false;
  errors = {
    name: '',
    cpu: '',
    capacity: '',
    trademark: '',
    price: '',
    image: '',
    camera: '',
    selfie: '',
    screenSize: '',
    guarantee: '',
    origin: '',
    codeQr: ''
  }

  constructor(private title: Title, private router: Router, private commodityService: CommodityService, private activatedRoute: ActivatedRoute,
              private trademarkService: TrademarkService, @Inject(AngularFireStorage) private storage: AngularFireStorage) {

    this.commodityForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z0-9\\+ ]*"), Validators.minLength(5), Validators.maxLength(30)]),
      cpu: new FormControl('', [Validators.required, Validators.pattern("[-a-zA-Z0-9\\+ ]*"), Validators.minLength(5), Validators.maxLength(30)]),
      capacity: new FormControl('', [Validators.required, Validators.pattern("[0-9]+"), Validators.minLength(2), Validators.maxLength(3)]),
      trademark: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required, Validators.min(0), Validators.max(2000000000)]),
      image: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(200)]),
      camera: new FormControl('', [Validators.required, Validators.pattern("[0-9]+"), Validators.maxLength(3)]),
      selfie: new FormControl('', [Validators.required, Validators.pattern("[0-9]+"), Validators.maxLength(3)]),
      screenSize: new FormControl('', [Validators.required, Validators.pattern("[0-9]+[.]?[0-9]?"), Validators.maxLength(3)]),
      guarantee: new FormControl('', [Validators.required, Validators.pattern("[0-9]*"), Validators.maxLength(2)]),
      origin: new FormControl('', [Validators.required, Validators.pattern("[a-vxy???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????A-Z ]*"), Validators.maxLength(10)]),
      description: new FormControl(''),
      codeQr: new FormControl(''),
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
    this.title.setTitle("Ch???nh s???a th??ng tin h??ng h??a")
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
              // l???y l???i url
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
    if (this.commodityForm.valid) {
      this.commodityService.editCommodity(this.commodityForm.value.id, this.commodityForm.value).subscribe(() => {
        this.router.navigateByUrl("/commodity/list")
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Ch???nh s???a th??nh c??ng!',
          showConfirmButton: false,
          timer: 2000
        });
      }, error => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Ch???nh s???a th???t b???i!',
          text: 'Ch???nh s???a th???t b???i vui l??ng ??i???n ????ng t???t c??? th??ng tin',
          showConfirmButton: false,
          timer: 2000
        });
        for (let i = 0; i < error.error.length; i++) {
          if (error.error && error.error[i].field === 'name') {
            this.errors.name = error.error[i].defaultMessage;
          }
          if (error.error && error.error[i].field === 'codeQr') {
            this.errors.codeQr = error.error[i].defaultMessage;
          }
        }
      })
    } else {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Ch???nh s???a th???t b???i!',
        text: 'Ch???nh s???a th???t b???i vui l??ng ??i???n ????ng t???t c??? th??ng tin',
        showConfirmButton: false,
        timer: 2000
      });

      this.clickButton = true;
    }
  }

  cancel() {
    Swal.fire({
      title: 'H???y b???',
      html: 'B???n c?? mu???n h???y b??? th??m m???i th??ng tin h??ng h??a ?',
      icon: 'question',
      showCancelButton: true,
      cancelButtonText: 'H???y',
      showConfirmButton: true,
      confirmButtonText: 'C??',
      confirmButtonColor: 'red'
    }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigateByUrl("/commodity/list");
        }
      }
    );
  }
}
