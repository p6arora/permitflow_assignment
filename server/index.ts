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
        // Define the output schema for the mutation (optional)
        .output(z.boolean()) // Specify that the output will be a boolean value
        .mutation(async req => {
            const { process, nextSteps } = req.input
            // Perform some mutation logic (in this case, create a new entry in the database)
            try {
                // Assuming some database operation
                const result = await prisma.permitResult.create({
                    data: {
                        processNeeded: process,
                        steps: nextSteps
                    }
                });
                // Return true if the operation was successful
                console.log(result)
                return true;
            } catch (error) {
                // If an error occurs during the operation, return false
                console.error("Error creating permit result:", error);
                return false;
            }

        })
});

export type AppRouter = typeof appRouter;

