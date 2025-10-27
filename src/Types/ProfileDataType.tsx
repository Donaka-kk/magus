import { NotificationType } from "./NotificationType";
import { TicketType } from "./TicketType";
import { OrderType } from "./OrderType";
import { WishListItemType } from "./WishListItemType";
import { MileStoneType } from "./MileStoneType";
import { GiftCardType } from "./GiftCardType";
import { UserType } from "./UserType";

export interface ProfileDataType {
   notifications: NotificationType[];
   tickets: TicketType[];
   orders: OrderType[];
   wishList: WishListItemType[];
   mileStones: MileStoneType[];
   giftCards: GiftCardType[];
   user: UserType;
}
