export interface OrderCreationDto {
    firstName: string;
    lastName: string;
    hostelName: string;
    roomNumber: string;
    phone: string;
    subtotal?: number;
    catererId: string;
    basketId?: string;
    orderItems?: IOrderItem[];
}

export interface IOrderItem {
    productId: string | null;
    productName: string;
    price: number;
    quantity: number;
    pictureUrl: string;
}

export interface OrderDto {
    id: string;
    firstName: string;
    lastName: string;
    hostelName: string;
    roomNumber: string;
    phone: string;
    subtotal?: number;
    received?: boolean;
    catererId: string;
    basketId?: string;
    orderItems: IOrderItem[];
}


export interface IAddress {
    firstName: string
    lastName: string
    hostelName: string
    roomNumber: string
    phone: string
  }
  
  export interface Address {
    firstName: string
    lastName: string
    hostelName: string
    roomNumber: string
    phone: string
  }


