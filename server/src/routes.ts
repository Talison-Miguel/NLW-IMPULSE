import express from 'express';
import { NodemailMailerAdapter } from './adapters/nodemailer/nodemailer-mailAdapter';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repositories';
import { SubmitFeedBackUseCase } from './use-cases/submit-feedback-use-case';

export const routes = express.Router()

routes.post('/feedbacks' , async (req, res) => {
    const {type, comment, screenshot} = req.body;
    const nodemailerMailerAdapter = new NodemailMailerAdapter();

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
    const submitFeedbackUseCase = new SubmitFeedBackUseCase(
        prismaFeedbacksRepository,
        nodemailerMailerAdapter
    )

    await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot,
    })



    return res.status(201).send()
})