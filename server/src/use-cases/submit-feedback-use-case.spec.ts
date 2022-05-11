import { SubmitFeedBackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedBackUseCase(
    {create: createFeedbackSpy },
    {sendMail: sendMailSpy}
)

describe('Submit Feedback', () => {
    it('should be able to submit a feedback', async () => {
       await expect(submitFeedback.execute({
           type: 'BUG',
           comment: 'exemplew comment',
           screenshot: 'data:image/png;base64, 54465454545',
       })).resolves.not.toThrow();

       expect(createFeedbackSpy).toHaveBeenCalled();
       expect(sendMailSpy).toHaveBeenCalled();
    });



    it('should not able to submit a feedback without type', async () => {
        await expect(submitFeedback.execute({
            type: '',
            comment: 'exemplew comment',
            screenshot: 'data:image/png;base64, 54465454545',
        })).rejects.toThrow();
     });



     it('should not able to submit a feedback without comment ', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64, 54465454545',
        })).rejects.toThrow();
     });



     it('should not able to submit a feedback withA invalid screenshot', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'ta tudo bugado',
            screenshot: 'teste.jpg',
        })).rejects.toThrow();
     });
});