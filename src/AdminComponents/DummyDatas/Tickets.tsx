import { TicketType } from "../../Types/TicketType";

export const SingleTicket: TicketType = {
   id: 29983,
   authorId: 123,
   authorName: "Abdolah",
   createdAt: "20/05/2005",
   status: "in-progress",
   subject: "Lorem ipsum dolor sit amet",
   text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, praesentium! Cupiditate, reiciendis voluptates eum laudantium odit distinctio laborum atque placeat ipsa incidunt nobis corporis ducimus. Amet fugiat tempore magnam illo.",
   replies: [
      {
         id: 12345,
         ticketId: 3233,
         authorName: "3DavinciGroup",
         authorId: 999999,
         receiverName: "Abdolah",
         receiverId: 4545,
         text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, praesentium! Cupiditate, reiciendis voluptates eum laudantium odit distinctio laborum atque placeat ipsa incidunt nobis corporis ducimus. Amet fugiat tempore magnam illo.",
         createdAt: "21/05/2005",
      },
      {
         id: 12346,
         ticketId: 3233,
         authorName: "Abdolah",
         authorId: 999999,
         receiverName: "3DavinciGroup",
         receiverId: 4545,
         text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
         createdAt: "22/05/2005",
      },
      {
         id: 12347,
         ticketId: 3233,
         authorName: "3DavinciGroup",
         authorId: 999999,
         receiverName: "Abdolah",
         receiverId: 4545,
         text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, praesentium! Cupiditate,  incidunt nobis corporis ducimus. Amet fugiat tempore magnam illo.",
         createdAt: "23/05/2005",
      },
   ],
};
