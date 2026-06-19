import { Router, type IRouter } from "express";
import { db, waitlistTable, insertWaitlistSchema } from "@workspace/db";
import { eq } from "drizzle-orm";

const router: IRouter = Router();

router.post("/waitlist", async (req, res) => {
  const result = insertWaitlistSchema.safeParse(req.body);

  if (!result.success) {
    res.status(400).json({ error: "A valid email address is required." });
    return;
  }

  const { email } = result.data;

  try {
    const existing = await db
      .select()
      .from(waitlistTable)
      .where(eq(waitlistTable.email, email))
      .limit(1);

    if (existing.length > 0) {
      res.status(200).json({ status: "already_registered" });
      return;
    }

    await db.insert(waitlistTable).values({ email });
    res.status(201).json({ status: "ok" });
  } catch (err) {
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
});

export default router;
