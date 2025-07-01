export interface Profile {
  id: number;
  username: string | null | undefined;
  description: string | null | undefined;
  avatarUrl: string | null;
  subscriptionsAmount: number;
  firstName: string | null | undefined;
  lastName: string | null | undefined;
  isActive: boolean;
  stack: string[];
  city: string;
}
