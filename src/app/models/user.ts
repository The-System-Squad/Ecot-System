export interface UserForRegistrationDto {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface RegistrationResponseDto {
    isSuccessfulRegistration: boolean;
    errros: string[];
}

export interface UserForAuthenticationDto {
    email: string;
    password: string;
}

export interface AuthResponseDto {
    isAuthSuccessful: boolean;
    errorMessage: string;
    token: string;
}