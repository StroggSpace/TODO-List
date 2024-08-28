import express from "express";

declare global {
  namespace Express {
    interface Request {
      users: Record<string,any>
    }
  }
}