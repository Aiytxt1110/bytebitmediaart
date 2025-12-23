import api from '../api';

export const checkBackendHealth = async () => {
    try {
        const response = await api.get('/test');
        return response.data;
    } catch (error) {
        console.error('Error connecting to backend:', error);
        throw error;
    }
};

export const getExampleData = async () => {
    // Placeholder for future API calls
    // const response = await api.get('/example');
    // return response.data;
};

export const getAdminStats = async () => {
    try {
        const response = await api.get('/auth/stats');
        return response.data;
    } catch (error) {
        console.error('Error fetching admin stats:', error);
        throw error;
    }
};

export const verifyAdminToken = async (adminToken: string) => {
    try {
        const response = await api.post('/auth/verify-admin', { adminToken });
        return response.data;
    } catch (error) {
        throw error;
    }
};
