import { Router, type IRouter } from "express";
import { db, applicationsTable, insertApplicationSchema } from "@workspace/db";

const router: IRouter = Router();

router.post("/applications", async (req, res) => {
  const result = insertApplicationSchema.safeParse(req.body);

  if (!result.success) {
    res.status(400).json({ error: "Please provide a valid name and email." });
    return;
  }

  try {
    await db.insert(applicationsTable).values(result.data);
    res.status(201).json({ status: "ok" });
  } catch {
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
});

export default router;
