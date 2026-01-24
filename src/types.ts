export const UserRoleEnum = {
  REGULAR: 'REGULAR',
  CLIENT: 'CLIENT',
  ADMIN: 'ADMIN',
} as const;

export type UserRole = (typeof UserRoleEnum)[keyof typeof UserRoleEnum];
