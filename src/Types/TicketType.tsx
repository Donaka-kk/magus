export interface TicketType {
   id: number;
   authorName: string;
   authorId: number;
   subject: string;
   text: string;
   status: string;
   replies: ReplayType[];
   createdAt: string;
}

export interface ReplayType {
   id: number;
   ticketId: number;
   authorName: string;
   authorId: number;
   receiverName: string;
   receiverId: number;
   text: string;
   createdAt: string;
}

export interface NewTicketType {
   subject: string;
   text: string;
}
