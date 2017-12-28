import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChildData } from '../interfaces';

@Component({
  selector: 'reactive-child-list',
  templateUrl: './child-list.component.html',
  styleUrls: ['./child-list.component.css']
})
export class ChildListComponent implements OnInit {

  @Input('parentForm')
  public parentForm: FormGroup;

  @Input('children')
  public children: ChildData[];

  constructor(private cd: ChangeDetectorRef, private fb: FormBuilder) { }

  ngOnInit() {
    console.log('Initializing child list!', this.children);
    this.parentForm.addControl('children', new FormArray([]));
  }

  addChild() {
    const child: ChildData = {
      id: Math.floor(Math.random() * 100),
      childField1: '',
      childField2: '',
      childHiddenField1: ''
    };

    this.children.push(child);

    //https://stackoverflow.com/questions/39787038/how-to-manage-angular2-expression-has-changed-after-it-was-checked-exception-w
    //call detectChanges explicitly to avoid ExpressionChangedAfterItHasBeenCheckedError!!!
    //in this way we force creation of the child component before leaving the addChild() function,
    //thanks to this the new component is created in the current change detection loop!
    this.cd.detectChanges();
    return false;
  }


  addChildByFormArray() {

    //it looks that then we do not have to call detectChanges()
    //why it does not work???
    //even I call detectChanges() exception ExpressionChangedAfterItHasBeenCheckedError is thrown!!!

    //on Angular.io they do it in this way https://angular.io/guide/reactive-forms#add-a-new-lair-to-the-formarray
    //but their example is in one component!
    (<FormArray>this.parentForm.get('children')).push(
      this.fb.group({
          id: [ Math.floor(Math.random() * 100) ],
          childField1: [ '', Validators.required ],
          childField2: [ '', Validators.required ],
          childHiddenField1: [ '' ]
        }
      )
    );

    this.cd.detectChanges();

    return false;

  }

  removeChild(idx: number) {
    if (this.children.length > 1) {
      this.children.splice(idx, 1);
      (<FormArray>this.parentForm.get('children')).removeAt(idx);
    }
    return false;
  }

}
