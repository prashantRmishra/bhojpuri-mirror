# [Bhojpuri-Mirror](https://bhojpuri-mirror.herokuapp.com/ "App on heroku")

## Angular-SpringBoot App Deployed On Heroku

**References I used**
***
[File upload and download reference example](https://www.callicoder.com/spring-boot-file-upload-download-jpa-hibernate-mysql-database-example/ )


[How to merge angular and spring boot app as single jar file using gradle](https://ordina-jworks.github.io/architecture/2018/10/12/spring-boot-angular-gradle.html) </br>
_(Not implemented in this app)_


[How to add interceptors in your spring boot app](https://www.baeldung.com/spring-mvc-handlerinterceptor )

[Adding jwt web token with spring security](https://www.javainuse.com/spring/boot-jwt)


[Adding global exception handler in spring boot for all exceptions thrown from the controller](https://www.studytonight.com/spring-bootspring-boot-global-exception-handling)

[Custom Exception Handling for JWT Exceptions](https://medium.com/fullstackblog/spring-security-jwt-token-expired-custom-response-b85437914b81)
***
## Hosting your angular app on heroku </br>
**_Changes to be made in angular project for preparing it for production_**

 ```environment.ts```
 ```typescript
 /*Change baseUrl for development */
export const environment = {
  production: false,
  baseUrl:'http://localhost:8080/'
};


 ```
  ```environment.prod.ts```
 ```typescript
 /* Change your baseUrl for production  */
export const environment = {
  production: true,
  baseUrl:'https://urlofyourspringbootapphostedonherokuapp.com'
};


 ```
_Use ```baseUrl``` in your ```service.ts``` files that makes api requests_
example:

```typescript

 baseUrl = environment.baseUrl;
  constructor(private http:HttpClient) { }

  loginUser(credentials):Observable<any>{
    return this.http.post(this.baseUrl+'login',credentials);
  }


```


 ```package.json```
  ```typescript
 "scripts": {
    "ng": "ng",
    "heroku-postbuild": "ng build --prod && npm install -g http-server-spa",
    "start": "http-server-spa dist/bhojpuriMirrorClient index.html $PORT",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e",
    "postinstall": "ngcc"
  },


 ```
 ***
 **_Changes to be made in SpringBoot App_** </br>
 _You must handle CORS (Cross Origin Resource Sharing)_</br>
 For all the ```Controllers.java``` add annotation ```@CrossOrigin```
 
 
 ```Java
 @RestController
@CrossOrigin(origins = {"http://localhost:4200","https://urlofyourangularapphostedonherokuapp.com"})
public class Controller {
    //your menthods
}
```
***
**IMP: Commit your Angular and SpringBoot app on GitHub**
***
**_Heroku setup_**

Install Heroku </br>
_(As this project was developed on linux os)_

```$ sudo snap install --classic heroku```

Login in your Heroku Account </br>
([_Create Heroku account if you don't have one_](https://www.heroku.com/))

```$ heroku login```
_(It will open login page in browser)_

Create heroku app for your AngularApp

```$ heroku create angualar_app_name_of_your_choice```

Create heroku app for your SpringBoot app </br>
```$ heroku create springboot_app_name_of_your_choice```

Link your GitHub repository to your heroku app
(_Do it for both of your app i.e for Angular app and Spring boot app_)

Deploy your linked GitHub repos ffrom Hroku app
(_Once deployed you can visit URL generated to see your app)

***
**_If you are using databse for you SpringBoot app then you must add Heroku addons for db support_** </br>
(_Heroku provide postgres db addon of size 1 GB for free, for any other db like MySQL you may have to pay to get the addons_ )

```$ heroku addons:create heroku-postgresql:<PLAN_NAME>```

If tables are not created automatically, then you will have to import your local db runing on ```localhost:5432``` (default) to your Heroku postgres server </br>
**_Steps to import your local db to Heroku postgres server_** </br>
1.Create backup file of your local db. </br>
2.create new connection to your Heroku .postgres server with pgAdmin.</br>
 _(All the Heroku postgres Credentials will be present in Database credentials on your Heroku app)_ </br>
3.Import your backup in your Heroku postgres db. </br>
4.You should see all the table in Heroku postgres db. </br>









