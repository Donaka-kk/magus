import axios from "axios";
const dummyDataNotif = [
   {
      subject: "qwerty1",
      text: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      read: false,
   },
   {
      subject: "qwerty2",
      text: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
      read: true,
   },
   {
      subject: "qwerty3",
      text: "ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc",
      read: false,
   },
];

export async function GetNotificationData() {
   try {
      await axios.get("https://reqres.in/api/login", {
         headers: {
            "x-api-key": "reqres-free-v1",
         },
      });
      return dummyDataNotif;
   } catch (error) {
      console.log(error);
   }
}
