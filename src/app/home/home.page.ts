import { Router } from "@angular/router";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';


interface Song {
  image: string;
  title: string;
  artist: string;
  duration: string;
}

@Component({
  selector: "app-playlist",
  templateUrl: "./home.page.html",
  imports: [ IonContent, IonButton, CommonModule],
})
export class HomePage {
  songs: Song[] = [
    { image: "assets/download.jfif", title: "Enemy", artist: "Imagine Dragons", duration: "3:55" },
    { image: "assets/download3.jfif", title: "Fade", artist: "Alan Walker", duration: "3:30" },
    { image: "assets/download1.jfif", title: "Sunflower", artist: "Post Malone", duration: "3:56" },
    { image: "assets/download2.jfif", title: "Perfect", artist: "Ed Sheeran", duration: "3:02" },
    { image: "assets/download4.jfif", title: "Happier", artist: "Marshmello", duration: "3:03" },
    { image: "assets/download.jfif", title: "Enemy", artist: "Imagine Dragons", duration: "3:55" },
    { image: "assets/download3.jfif", title: "Fade", artist: "Alan Walker", duration: "3:30" },
    { image: "assets/download1.jfif", title: "Sunflower", artist: "Post Malone", duration: "3:56" },
    { image: "assets/download2.jfif", title: "Perfect", artist: "Ed Sheeran", duration: "3:02" },
    { image: "assets/download4.jfif", title: "Happier", artist: "Marshmello", duration: "3:03" },
  ];

  constructor(private router: Router) {}

  logout() {
    this.router.navigate(["/login"]);
  }
}


