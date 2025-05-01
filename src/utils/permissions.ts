export enum Role {
  ADMIN = "ADMIN",
  OWNER = "OWNER",
  MANAGER = "MANAGER",
  COACH = "COACH",
  PLAYER = "PLAYER",
}

export const Permissions = {
  // Team permissions
  CAN_CREATE_TEAM: (userRole: Role) =>
    [Role.ADMIN, Role.MANAGER].includes(userRole),
  CAN_EDIT_TEAM: (userRole: Role, isTeamCoach: boolean) =>
    [Role.ADMIN, Role.MANAGER].includes(userRole) || isTeamCoach,
  CAN_ADD_PLAYERS: (userRole: Role, isTeamCoach: boolean) =>
    [Role.ADMIN, Role.MANAGER].includes(userRole) || isTeamCoach,

  // League permissions
  CAN_CREATE_LEAGUE: (userRole: Role) => userRole === Role.ADMIN,
  CAN_MANAGE_LEAGUE: (userRole: Role, isLeagueAdmin: boolean) =>
    userRole === Role.ADMIN || isLeagueAdmin,

  // Match permissions
  CAN_CREATE_MATCH: (userRole: Role, isLeagueAdmin: boolean) =>
    [Role.ADMIN, Role.MANAGER].includes(userRole) || isLeagueAdmin,
};
