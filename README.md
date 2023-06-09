# [Name of your Project]: [Appwrite](https://appwrite.io) [Hashnode](https://hashnode.com) Hackathon

<img width="1128" alt="image" src="https://res.cloudinary.com/promiselxg/image/upload/v1685933233/appwrite/sendSMS_-_sendsms.netlify.app_o7uiko.png">

### Team Details

- Anuforo Okechukwu Deede - @promiselxg

### Description of Project

<!--- Add the description of your project in this section -->

An easy-to-use, all-in-one SMS application that sends sms messages to any mobile network. the app utilizes Appwrite's Authentication and Database services to authenticate and store user's data respectively.

### Tech Stack

- React
  - TailwindCSS
- Appwrite Cloud
  - Authentication
  - Databases
- Netlify
- Termii

### React :

- This is a javascript framework, it was used in the development of the applications frontend.
  - TailwindCSS is a utility-first CSS framework, it was used in Positioning of text and images and general layout of the application.

### Appwrite Cloud:

- Appwrite is a backend-as-a-service platform that provides developers with all the core APIs required to build any application.

- Authentication Service:

  - Appwrite provides an authentication service that we can use to authenticate our application users.
    This application made use of <br>
    `Email and password Authentication, as well as OAuth authentication using Google and Github Oauth providers.`
    <br/><br/>
    <img width="1128" alt="image" src="https://res.cloudinary.com/promiselxg/image/upload/v1686337633/appwrite/Auth_vqawxi.png">

- Databases Service:
  - The Databases Service allows you to store your application and users' data and fetch it using different supported queries.
    the application made use of `databases.create()` / `databases.createCollection()` / `databases.createDocument()` / `databases.listDocuments()` databases attributes.

### Netlify

- Netlify is a remote-first cloud computing company that offers a development platform that includes build, deploy, and serverless backend services for web applications and dynamic websites.

### Termii

- Termii helps businesses use messaging channels to verify and authenticate customer transactions.

### Challenges We Faced

<img width="1128" alt="image" src="https://res.cloudinary.com/promiselxg/image/upload/v1686338482/appwrite/upload_xjhtg0.png">
In the upload phone numbers section(as seen in the attached image), the initial plan was for the user to select the contacts(stored as a .CSV file) enter the country code and click on the submit button, this would use appwrites  `Storage` service to upload and store the file. then when the owner of the application choose to send a bulk SMS, the application will read through the uploaded contact and send the message to the supplied phone numbers. i was able to upload to appwrite cloud but reading the uploaded file became a challange, this was because there was no generated URL which i can use to pass to my application as the only possible option was for me to first download the file then read through it. at the end i had to discard the option of uploading the file to storage but instead read through the selected file and store the values in Appwrite `Database` instead.

### Public Code Repo

[Repository](https://github.com/promiselxg/appwrite-hashnode-may-hackathon)

### Demo Link

[Demo App](https://sendsms.netlify.app)
