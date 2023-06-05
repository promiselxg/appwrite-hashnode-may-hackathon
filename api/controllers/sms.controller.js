const asyncHandler = require('express-async-handler');
const sdk = require('node-appwrite');
const csv = require('csvtojson');
// const csvToJson = require('convert-csv-to-json');
const { v4: uuidv4 } = require('uuid');
const axios = require('axios');
const client = new sdk.Client();
const databases = new sdk.Databases(client);

//@desc     Single Messaging
//@route    POST /api/v1/sms/single
//@access   Private
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

//@desc     Get Contact List
//@route    POST /api/v1/sms/bulk
//@access   Private
const getSingleSMS = asyncHandler(async (req, res) => {
  try {
    client
      .setEndpoint(process.env.APP_ENDPOINT)
      .setProject(process.env.PROJECT_ID)
      .setKey(process.env.API_SECRET_KEY);
    const { documents } = await databases.listDocuments(
      process.env.DATABASE_ID,
      '647a60fc987094c23e79'
    );
    return res.status(200).json({
      status: true,
      response: documents,
    });
  } catch (error) {
    return res.status(400).json({
      status: false,
      error,
    });
  }
});

//@desc     Bulk Messaging
//@route    POST /api/v1/sms/bulk
//@access   Private
const sendBulkSMS = asyncHandler(async (req, res) => {
  client
    .setEndpoint(process.env.APP_ENDPOINT)
    .setProject(process.env.PROJECT_ID)
    .setKey(process.env.API_SECRET_KEY);

  try {
    // Retrieve the contact list
    const contactList = await databases.getDocument(
      process.env.DATABASE_ID,
      '647b26b1d636fd4c9e91',
      req.body.group_name
    );
    // send sms
    let numWithCountryCode = [];
    const nom = contactList.phone_numbers.toString().split(',');
    nom.forEach((number) => {
      numWithCountryCode.push(req.body.country_code + '' + number);
    });
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
      sms: req.body.message,
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
        //  Insert Record to DB
        const response = await databases.createDocument(
          process.env.DATABASE_ID,
          '647ba05c136208e07059',
          uuidv4(),
          {
            country_code: req.body.country_code,
            group_id: req.body.group_name,
            message: req.body.message,
          }
        );
        return res.status(201).json({
          status: true,
          response,
        });
      }
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    return res.status(400).json({
      status: false,
      error,
    });
  }
});

//@desc     Create Contact List
//@route    POST /api/v1/sms/bulk/contact
//@access   Private
const createContact = asyncHandler(async (req, res) => {
  if (!req.body.group_name || !req.file.originalname) {
    return res.status(400).json({
      status: false,
      message: 'Please fill out the form',
    });
  } else {
    try {
      client
        .setEndpoint(process.env.APP_ENDPOINT)
        .setProject(process.env.PROJECT_ID)
        .setKey(process.env.API_SECRET_KEY);
      let phone_numbers = [];
      const jsonArray = await csv().fromFile(req.file.path);
      jsonArray.map((item) => {
        phone_numbers.push(item.Phone_Number);
      });
      try {
        const response = await databases.createDocument(
          process.env.DATABASE_ID,
          '647b26b1d636fd4c9e91',
          uuidv4(),
          {
            group_name: req.body.group_name,
            phone_numbers: [phone_numbers.toString()],
          }
        );
        return res.status(201).json({
          status: true,
          response,
        });
      } catch (error) {
        return res.status(400).json({
          status: false,
          error,
        });
      }
    } catch (error) {
      return res.status(400).json({
        status: false,
        error,
      });
    }
  }
});

//@desc     Get Contact List
//@route    GET /api/v1/sms/group
//@access   Private
const listContactGroups = asyncHandler(async (req, res) => {
  try {
    client
      .setEndpoint(process.env.APP_ENDPOINT)
      .setProject(process.env.PROJECT_ID)
      .setKey(process.env.API_SECRET_KEY);
    const { documents } = await databases.listDocuments(
      process.env.DATABASE_ID,
      '647b26b1d636fd4c9e91'
    );
    return res.status(200).json({
      status: true,
      response: documents,
    });
  } catch (error) {
    return res.status(400).json({
      status: false,
      error,
    });
  }
});

//@desc     Get Group Statistics
//@route    GET /api/v1/sms/group/stats
//@access   Private
const getContactsGroupStats = asyncHandler(async (req, res) => {
  try {
    //  initialize appwrite with credentials
    client
      .setEndpoint(process.env.APP_ENDPOINT)
      .setProject(process.env.PROJECT_ID)
      .setKey(process.env.API_SECRET_KEY);
    // get collection info
    const { documents } = await databases.listDocuments(
      process.env.DATABASE_ID,
      '647b26b1d636fd4c9e91'
    );
    return res.status(200).json({
      status: true,
      documents,
    });
  } catch (error) {
    return res.status(400).json({
      status: false,
      error,
    });
  }
});

//@desc     Get Balance
//@route    GET /api/v1/sms/balance
//@access   Private
const getSMSBalance = asyncHandler(async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.ng.termii.com/api/get-balance?api_key=${process.env.TERMII_API_KEY}`
    );
    return res.status(200).json({
      status: true,
      response: response.data,
    });
  } catch (error) {
    return res.status(200).json({
      status: true,
      response: error.data,
    });
  }
});

//  export controllers
module.exports = {
  sendSingleSMS,
  getSingleSMS,
  getSMSBalance,
  sendBulkSMS,
  createContact,
  listContactGroups,
  getContactsGroupStats,
};
