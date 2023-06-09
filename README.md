# [sendSMS]: [Appwrite](https://appwrite.io) [Hashnode](https://hashnode.com) Hackathon

<img width="1128" alt="image" src="https://res.cloudinary.com/promiselxg/image/upload/v1685933233/appwrite/sendSMS_-_sendsms.netlify.app_o7uiko.png">

### Team Details

- Anuforo Okechukwu Deede - @promiselxg

### Description of Project

An easy-to-use, all-in-one SMS application that sends sms messages to any mobile network. the app utilizes Appwrite's Authentication and Database services to authenticate and store user's data respectively.

- The Problem
  - The presence of a third force changed the dynamics of the campaign season of the just concluded Feb 25th, 2023 Nigerian Presidential election, the reason was that the candidature of the labor party presidential candidate motivated the Nigerian Youths. The Nigerian youths across the nation popularly known as "Obidients" gathered themselves together in different support groups with the aim of spreading the message of Mr Peter Obi, the presidential candidate of the Labor Party.
    Because of how organic the movement was, the number of volunteers and support groups became too many to manage and maintain, a mobile app was built with the aim of gathering all the support groups together, sharing information and campaign updates - this approach worked, but only for people with smartphones. we needed something more, something that we can with a single click of the mouse, send customized broadcasts to all the support groups, we needed to reach everyone including members of the opposition party - provided such a person owns a mobile number.

### Tech Stack

- React
  - TailwindCSS
- Appwrite Cloud
  - Authentication
  - Databases
- Netlify

  - Netlify is a remote-first cloud computing company that offers a development platform that includes build, deploy, and serverless backend services for web applications and dynamic websites.

- Termii
  - Termii helps businesses use messaging channels to verify and authenticate customer transactions.

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

### How the App works - How Appwrite helped to build this project.

- The Proposed Solution
  - The election has come and gone and the outcome is seriously been contested in the Presidential election Petition tribunal, a lot of fake news has been spreading across the nation, many of which are misinterpreting what is happening with the PEPT. we needed to still be in contact with members of our support group whose only source of information is the compromised mainstream media. this gave birth to the development of this application; sendSMS - an easy-to-use, all-in-one SMS application that allows the authenticated user to send messages to single or multiple phone numbers across any mobile network in Nigeria. the application utilizes #Appwrite's cloud services such as `Authentication` and `Databases` services. The application was built with the following stack;

The application is grouped into three namely sections;

- The authentication section
  - This section is powered by Appwrite's authentication service, here the user can sign in to the application either via Email and Password or through OAuth authentication providers like Google or Github.
    <img width="400" height="400" alt="image" src="https://res.cloudinary.com/promiselxg/image/upload/v1686337633/appwrite/Auth_vqawxi.png">
- Individual or Group SMS section

  - this section is where the authenticated user sends the sms message to an individual or multiple phone number. storing and retrival of the sent messages and phone numbers are handled by #appwrite's Databases service.

  ```
  const promise = databases.createDocument('[DATABASE_ID]', '[COLLECTION_ID]', '[DOCUMENT_ID]', {});
  const promise = databases.listDocuments('[DATABASE_ID]', '[COLLECTION_ID]');
  const promise = databases.getDocument('[DATABASE_ID]', '[COLLECTION_ID]', '[DOCUMENT_ID]');

  ```

  Single SMS Screen
  <img width="500" height="400" alt="image" src="https://res.cloudinary.com/promiselxg/image/upload/v1686351847/appwrite/single_khkzzf.png">

  Bulk SMS Screen
  <img width="500" height="400" alt="image" src="https://res.cloudinary.com/promiselxg/image/upload/v1686351846/appwrite/bulk_atphqd.png">

- Group contact and file upload section

  - here, the logged in user provides the country code and selects the file(containing the contacts) he or she wants to create a campaign group for. the accepted file format is .CSV.

  Contact.csv
  <img width="500" height="200" alt="image" src="https://res.cloudinary.com/promiselxg/image/upload/v1686352653/appwrite/contact_bre8l4.png">

  Create new Contact Screen
  <img width="500" height="350" alt="image" src="https://res.cloudinary.com/promiselxg/image/upload/v1686338482/appwrite/upload_xjhtg0.png">

### Challenges We Faced

In the upload phone numbers section(as seen in the attached image), the initial plan was for the user to select the contacts(stored as a .CSV file) enter the country code and click on the submit button, this would use appwrites `Storage` service to upload and store the file. then when the owner of the application choose to send a bulk SMS, the application will read through the uploaded contact and send the message to the supplied phone numbers. i was able to upload to appwrite cloud but reading the uploaded file became a challange, this was because there was no generated URL which i can use to pass to my application as the only possible option was for me to first download the file then read through it. at the end i had to discard the option of uploading the file to storage but instead read through the selected file and store the values in Appwrite `Database` instead.

```
NB: SMS delivery is not applicable to US,UK and Canada Phone numbers.

```

### Public Code Repo

- [Repository](https://github.com/promiselxg/appwrite-hashnode-may-hackathon)

### Demo Link

- [Demo App](https://sendsms.netlify.app) <br/>
- [Video Illustration](https://res.cloudinary.com/promiselxg/video/upload/v1685933230/appwrite/sendSMS_hb7ble.mp4)
