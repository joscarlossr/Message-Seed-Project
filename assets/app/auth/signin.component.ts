import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
    selector: 'app-signin',
    templateUrl: './signin-component.html'
})
export class SigninComponent{
    myForm : FormGroup;

    constructor(private router: Router) {}

    onSubmit(){
        localStorage.setItem("name", this.myForm.get("emailTS").value.split("@")[0])
        this.router.navigate(["/"])
        this.myForm.reset();
    }
    
    ngOnInit(){
        this.myForm = new FormGroup({
            emailTS: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9\-\_\.]+")
            ]),
            passwordTS: new FormControl(null, Validators.required)
        });
    }
}