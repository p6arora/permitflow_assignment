import { publicProcedure, router } from "./trpc";
import { z } from 'zod'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const appRouter = router({
    createNewPermitProcess: publicProcedure
        .input(z.object({
            process: z.string(),
            nextSteps: z.array(z.string())
        }))
        .output(z.boolean())
        .mutation(async req => {
            const { process, nextSteps } = req.input

            // Try to persist results into database
            try {
                const result = await prisma.permitResult.create({
                    data: {
                        processNeeded: process,
                        steps: nextSteps
                    }
                });
                return true;

                // If an error occurs during the operation, return false
            } catch (error) {
                console.error("Error creating permit result:", error);
                return false;
            }

        })
});

export type AppRouter = typeof appRouter;

