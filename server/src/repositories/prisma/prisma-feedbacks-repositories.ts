import { prisma } from "../../prisma";
import { feedBackCreateData, FeedBacksRepository } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedBacksRepository {
    async create({type, comment, screenshot}: feedBackCreateData) {
        await prisma.feedback.create({
            data: {
                type,
                comment,
                screenshot,
            }
        });
    }
}