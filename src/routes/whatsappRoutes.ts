import { Router } from 'express';
import { sendMessage, receiveMessage, sendImageMessage, sendVideoMessage  } from '../controllers/whatsappController';

const router = Router();

// Route to send a message
router.post('/send', sendMessage);
router.post('/send/image', sendImageMessage); // For sending image
router.post('/send/video', sendVideoMessage); // For sending video

// Route to handle incoming messages (webhook)
router.post('/receive', receiveMessage);

export default router;
