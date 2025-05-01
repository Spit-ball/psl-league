import { Permissions } from "../../../utils/permissions";
import { prisma } from "../../../lib/prisma";
import { User } from "@prisma/client"; //  TODO: I STILL NEED TO GENERATE CLIENT
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

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

export async function GET(request: NextRequest) {
  try {
    // Handle GET request
    return NextResponse.json({ message: "GET success" });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    // Handle POST request
    return NextResponse.json({ message: "POST success", data });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
