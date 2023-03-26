import axios from 'axios';

class PlanesService {
    async addPlane(plane: any) {
        try {
            const response = await axios.post('/api/planes', plane);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async deletePlane(planeId: string) {
        try {
            await axios.delete(`/api/planes/${planeId}`);
        } catch (error) {
            throw error;
        }
    }
}

export default new PlanesService();
