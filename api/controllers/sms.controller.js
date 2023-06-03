const asyncHandler = require('express-async-handler');
const sdk = require('node-appwrite');
const { v4: uuidv4 } = require('uuid');
const axios = require('axios');

//@desc     Single Messaging
//@route    POST /api/v1/sms/single
//@access   Public
const sendSingleSMS = asyncHandler(async (req, res) => {
  try {
    const { country_code, phone_number, message } = req.body;
    let numWithCountryCode = [];
    const nom = phone_number.split(',');
    nom.forEach((number) => {
      numWithCountryCode.push(country_code + '' + number);
    });

    if (!country_code || !phone_number || !message) {
      return res.status(401).json({
        status: false,
        message: 'Please fill out the form',
      });
    } else {
      const client = new sdk.Client();
      const databases = new sdk.Databases(client);
      client
        .setEndpoint(process.env.APP_ENDPOINT)
        .setProject(process.env.PROJECT_ID)
        .setKey(process.env.API_SECRET_KEY);

      const response = await databases.createDocument(
        process.env.DATABASE_ID,
        '647a60fc987094c23e79',
        uuidv4(),
        {
          country_code,
          phone_number: [phone_number],
          message,
        }
      );
      // send SMS to receipient's phone number(s)
      let axiosConfig = {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      };

      let data = {
        to: numWithCountryCode,
        from: 'devapi',
        sms: message,
        type: 'plain',
        api_key: process.env.TERMII_API_KEY,
        channel: 'generic',
      };
      try {
        const smsResponse = await axios.post(
          'https://api.ng.termii.com/api/sms/send',
          data,
          axiosConfig
        );

        if (smsResponse) {
          return res.status(201).json({
            status: true,
            response,
          });
        }
      } catch (error) {
        console.log(error.response.data);
      }
    }
  } catch (error) {
    res.status(400).json({
      status: false,
      response: error.response,
    });
  }
});

//@desc     Login User
//@route    POST /api/v1/auth/login
//@access   Public
const sendBulkSMS = asyncHandler(async (req, res) => {});

//  export controllers
module.exports = {
  sendSingleSMS,
  sendBulkSMS,
};
