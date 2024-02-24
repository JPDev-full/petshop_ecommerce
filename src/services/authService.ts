import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import * as userModel from "../models/userModel";

export class AuthService {
  async login(email: string, password: string) {
    try {
      const user = await userModel.getUserByEmail(email);

      if (!user) {
        return new Error("User not found!");
      }

      const passwordMatch = await compare(password, user.password);

      if (!passwordMatch) {
        return new Error("Invalid password!");
      }

      const token = sign(
        {
          id: user.id_user,
          role: user.isAdmin ? "admin" : "user",
          email: user.email,
        },
        process.env.ACCESS_TOKEN_SECRET as string,
        { expiresIn: "24h" }
      );

      return token;
    } catch (error: any) {
      return new Error(error.message);
    }
  }
}
