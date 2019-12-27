
import { Express } from 'express';

function startApp(app: Express, port: number): void {
    try {
        app.listen(port, () => console.log('Server Started @:', port));
    } catch (e) {
        console.error('Server Failed to Start');
    }
}

export default startApp;