import { Request, Response } from '../types';

class IndexController {
    getIndex(req: Request, res: Response): void {
        res.send('Welcome to the application!');
    }
}

export default IndexController;