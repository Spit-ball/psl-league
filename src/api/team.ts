import { Permissions } from "../utils/permissions";
import { prisma } from "../app/lib/prisma";
import { User } from "@prisma/client"; //  TODO: I STILL NEED TO GENERATE CLIENT

export async function addPlayerToTeam(
  userId: string,
  teamId: string,
  currentUser: User
) {
  const team = await prisma.team.findUnique({
    where: { id: teamId },
    include: { coach: true },
  });

  const isTeamCoach = team?.coachId === currentUser.id;

  if (!Permissions.CAN_ADD_PLAYERS(currentUser.role, isTeamCoach)) {
    throw new Error(
      "Unauthorized: You do not have permission to add players to this team"
    );
  }

  // Continue with adding player to team...
}
