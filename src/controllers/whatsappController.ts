import { Request, Response } from 'express';
import axios from 'axios';

// Your WhatsApp API base URL and token
const WHATSAPP_API_URL = 'https://graph.facebook.com/v16.0/WHATSAPP_NUMBER_ID/messages';
const ACCESS_TOKEN = 'YOUR_ACCESS_TOKEN';

// Send Message Controller
export const sendMessage = async (req: Request, res: Response) => {
    try {
        const { to, message } = req.body;
        const response = await axios.post(
            WHATSAPP_API_URL,
            {
                messaging_product: 'whatsapp',
                to,
                type: 'text',
                text: { body: message }
            },
            {
                headers: {
                    Authorization: `Bearer ${ACCESS_TOKEN}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        res.status(200).json({ success: true, data: response.data });
    } catch (error:any) {
        console.error('Error sending message:', error);
        res.status(500).json({ success: false, error: error.message });
    }
};

// send image
export const sendImageMessage = async (req: Request, res: Response) => {
    try {
        const { to, imageUrl, caption } = req.body;

        const response = await axios.post(
            WHATSAPP_API_URL,
            {
                messaging_product: 'whatsapp',
                to,
                type: 'image',
                image: {
                    link: imageUrl, // URL of the image
                    caption, // Optional caption for the image
                },
            },
            {
                headers: {
                    Authorization: `Bearer ${ACCESS_TOKEN}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        res.status(200).json({ success: true, data: response.data });
    } catch (error:any) {
        console.error('Error sending image message:', error);
        res.status(500).json({ success: false, error: error.message });
    }
};
// send video
export const sendVideoMessage = async (req: Request, res: Response) => {
    try {
        const { to, videoUrl, caption } = req.body;

        const response = await axios.post(
            WHATSAPP_API_URL,
            {
                messaging_product: 'whatsapp',
                to,
                type: 'video',
                video: {
                    link: videoUrl, // URL of the video
                    caption, // Optional caption for the video
                },
            },
            {
                headers: {
                    Authorization: `Bearer ${ACCESS_TOKEN}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        res.status(200).json({ success: true, data: response.data });
    } catch (error:any) {
        console.error('Error sending video message:', error);
        res.status(500).json({ success: false, error: error.message });
    }
};


// Receive Message Controller (Webhook Handler)
export const receiveMessage = (req: Request, res: Response) => {
    console.log('Incoming message:', req.body);
    // Process incoming message
    res.sendStatus(200); // Respond with 200 OK to WhatsApp API
};
