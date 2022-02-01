# ionic-ng-pwa

This project has scaffolding/boilerplate setup for building out ionic applictions for Web, iOS and Android.
It also has been setup to follow the PWA standards.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.0.

## Install dependencies

Install a package manager like `npm` on your machine to resolve all the dependencies for this project. 
Using a `CLI`, run the command `npm install` to setup up the project.

## Angular Development server with live reload

Run `npm start` for a usual Angular dev server hosted at `http://localhost:4200/`. 
The app will automatically reload if you change any of the source files.


## Android Development server with live reload

This requires you to already have `Android Studio` pre-installed on your machine 
along with compatible devices or equivalent emulators.

Run the command `npm run android-start`

This command launches two commands in parallel.
1. It uses the ionic builder to build artifacts and watch for new file changes.
2. It also launches the capacitor sync for android.

Please wait for step `1.` to finish. Then hit the cursor keys (Up or Down Arrows) on 
your keyboard while focused on the command line window to select an emulator or a connected device 
from the list of available android devices and hit enter

The web code hosted in the emulator or device will automatically reload if you change any of the source files.

You can also run the command `npm run android-ide` to automatically compile web code and launch `Android Studio` (without live reload).


## iOS Development server with live reload

This requires you to already have `XCode` pre-installed on your machine 
along with compatible devices or equivalent emulators.

Run the command `npm run ios-start`

This command launches two commands in parallel.
1. It uses the ionic builder to build artifacts and watch for new file changes.
2. It also launches the capacitor sync for iOS.

Please wait for step `1.` to finish. Then hit the cursor keys (Up or Down Arrows) on 
your keyboard while focused on the command line window to select an emulator or a connected device 
from the list of available iOS devices and hit enter.

The web code hosted in the emulator or device will automatically reload if you change any of the source files.

You can also run the command `npm run ios-ide` to automatically compile web code and launch `XCode` (without live reload).


## Build Angular code

Run `npm run build` to build the angular code with the production configuration. 
The build artifacts will be stored in the `www/` directory.


## Build Ionic Code

Run `npm run ionic-prod` to build the ionic code with the production configuration. 
The build artifacts will be stored in the `www/` directory.


## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).


## Help docs

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
To get more help on the Ionic go check out the [Introduction to ionic framework](https://ionicframework.com/docs/intro/cli) page.
