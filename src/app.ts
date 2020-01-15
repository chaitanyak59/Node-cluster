
import { Express } from 'express';

async function startApp(app: Express, port: number): Promise<void> {
    try {
        app.listen(port, () => console.log('Server Started @:',process.env.NODE_ENV, port));
    } catch (e) {
        console.error('Server Failed to Start', e);
    }
}

export default startApp;