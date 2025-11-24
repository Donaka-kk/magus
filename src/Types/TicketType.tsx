export interface TicketType {
   id: number;
   subject: string;
   text: string;
   status: string;
}

export interface NewTicketType {
   subject: string;
   text: string;
}
