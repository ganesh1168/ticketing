import express, { Request, Response } from 'express';
import { Ticket } from '../models/ticket';

const router = express.Router();

router.get('/api/ticketsUser', async (req: Request, res: Response) => {
  const tickets = await Ticket.find({
   userId:req.currentUser!.id
  });

  res.send(tickets);
});

export { router as userTicketRouter };
