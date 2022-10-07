import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public fbURL: string = "https://www.facebook.com/profile.php?id=100073955277141";
  public twitterURL: string = "https://twitter.com/mschoudhary81";
  public googleURL: string = "https://sites.google.com/view/mahipalchoudhary";
  public instaURL: string = "https://www.instagram.com/mahi_0107/";
  public linkedinURL: string = "https://www.linkedin.com/in/mahipal-singh-choudhary-b0290494/";
  public githubURL: string = "https://github.com/choudharymahipal";
  public whatsappURL: string = "//api.whatsapp.com/send?phone=917568787918&text=Hello Mahipal, I have just viewed your profile.";

  constructor() {

  }

  mainMenuActive(id: string) {
    //Remove for others
    document.getElementById("homemenu").classList.remove("active");
    document.getElementById("aboutmenu").classList.remove("active");
    document.getElementById("projectmenu").classList.remove("active");
    document.getElementById("contactmenu").classList.remove("active");
    //Active current
    document.getElementById(id).classList.add("active");
  }
}
