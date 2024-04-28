 
export interface IRegistrationRequest {
  email: string;
  password: string;
  passwordConfirm: string;
  fullName: string;
  description: string;
  channelPhoto: File | null;
}

export interface IRegistrationResult {
 
  token: string;
  userId: number;
  verificationToken: string;
}
