export interface CatererDto {
    id: string;
    firstName: string;
    lastName: string;
    userId: string;
    rating:number;
    products: ProductDto[];
    ratings?:RatingDto;
    pictureUrl: string;
  }

  export interface CatererForUpdateDto {
    firstName: string;
    lastName: string;
    pictureUrl: string;
  }

  export interface ProductDto {
    id: string;
    name: string;
    description: string;
    price: number;
    pictureUrl: string;
    highlight: boolean;
    catererId: string; 
  }

  export interface ProductForCreationDto {
    name: string;
    description: string;
    price: number;
    pictureUrl: string;
    catererId: string; 
  }

  export interface ProductForUpdateDto {
    name: string;
    description: string;
    price: number;
    pictureUrl: string;
    hightlight? : boolean;
  }

  export interface PictureDto{
    id: string;
    pictureUrl: string;
  }

  export interface PictureForUpdateDto{
    catererId: string; 
    pictureUrl: string;
  }

  export interface RatingDto {
    firstName: string;
    lastName: string;
    reviewBody: string;
    createdDate: Date;
    starsCount: number;
}

export interface RatingForCreationDto {
  userId?: string;
  reviewBody: string;
  starsCount: number;
  catererId: string; 
}
