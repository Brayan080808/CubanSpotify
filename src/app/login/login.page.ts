import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { IonContent,IonButton } from "@ionic/angular/standalone";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [FormsModule, CommonModule,IonContent,IonButton],
  templateUrl: './login.page.html', 
  styleUrls: ['./login.page.scss'], 
})
export class Login {
  email = "";
  password = "";

  constructor(private router: Router) {}

  onSubmit() {
    // Lógica de inicio de sesión aquí
    this.router.navigate(["/home"]);
  }
}
