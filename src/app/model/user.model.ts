export interface AuthProfile {
	id?: string;
	username?: string;
	email?: string;
	firstName?: string;
	lastName?: string;
	enabled?: boolean;
	emailVerified?: boolean;
	totp?: boolean;
	createdTimestamp?: number;
	attributes?: Record<string, unknown>;
}

export interface User {
  id?: string;
  firstName?: string;
  name?: string;
  mobileNumber?: string;
  email?: string;
  roles?: string[];
}
