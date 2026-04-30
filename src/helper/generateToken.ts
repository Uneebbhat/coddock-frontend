import jwt from "jsonwebtoken";

export interface Payload {
  id: string;
  email: string;
}

export const generateAccessToken = (payload: Payload) =>
  jwt.sign(
    { id: payload.id, email: payload.email },
    process.env.JWT_ACCESS_SECRET!,
    {
      expiresIn: "15m",
    },
  );

export const generateRefreshToken = (payload: Payload) =>
  jwt.sign(
    { id: payload.id, email: payload.email },
    process.env.JWT_REFRESH_SECRET!,
    {
      expiresIn: "7d",
    },
  );
