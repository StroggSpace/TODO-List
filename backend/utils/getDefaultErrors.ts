import { Response } from "express";
import { Error } from "mongoose";

export const getDefaultErrors = (err, res: Response) => {
  if (err instanceof Error.ValidationError) {
    return res
      .status(400)
      .json({ message: "Validation error", details: err.message });
  } else if (err instanceof Error) {
    return res
      .status(500)
      .json({ message: "Database error", details: err.message });
  } else {
    return res
      .status(500)
      .json({ message: "Internal server error", details: err.message });
  }
};
