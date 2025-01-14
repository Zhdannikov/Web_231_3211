class Api {
    constructor() {
        this.key = 'e69fbe1d-3d77-40c8-8f97-4dea13746819';
        this.url = 'https://edu.std-900.ist.mospolytech.ru';
    }

    // запрос списка товаров
    async getItems() {
        const req = `/exam-2024-1/api/goods?api_key=${this.key}`;
        try {
            const response = await fetch(this.url + req, {
                method: 'GET',
                headers: {
                'Content-Type': 'application/json', // Указываем формат данных
                }
            });

            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response}`);
            }
        
            return await response.json();
        } catch (error) {
            console.error('Произошла ошибка:', error.message);
        }
    }

    // запрос одного товара
    async getItem(id) {
        const req = `/exam-2024-1/api/goods/${id}?api_key=${this.key}`;
        try {
            const response = await fetch(this.url + req, {
                method: 'GET',
                headers: {
                'Content-Type': 'application/json', // Указываем формат данных
                }
            });

            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response}`);
            }
        
            return await response.json();
        } catch (error) {
            console.error('Произошла ошибка:', error.message);
        }
    }

    // запрос списка заказов
    async getOrders() {
        const req = `/exam-2024-1/api/orders?api_key=${this.key}`;
        try {
            const response = await fetch(this.url + req, {
                method: 'GET',
                headers: {
                'Content-Type': 'application/json',
                }
            });

            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response}`);
            }
        
            return await response.json();
        } catch (error) {
            console.error('Произошла ошибка:', error.message);
        }
    }

    async createOrder(formData) {
        const req = `/exam-2024-1/api/orders`;
        try {
            const response = await fetch(`${this.url}${req}?api_key=${this.key}`, {
                method: 'POST',
                body: formData,
            });
    
            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response.status}`);
            }
    
            return await response.json();
        } catch (error) {
            console.error('Ошибка при отправке данных:', error.message);
        }
    }

    async editOrder(id, formData) {
        const req = `/exam-2024-1/api/orders/${id}?api_key=${this.key}`
        try {
            const response = await fetch(this.url + req, {
                method: 'PUT',
                body: formData,
            });
    
            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response.status}`);
            }
    
            return await response.json();
        } catch (error) {
            console.error('Ошибка при отправке данных:', error.message);
        }
    }

    async deleteOrderById(id) {
        const req = `/exam-2024-1/api/orders/${id}?api_key=${this.key}`;
        try {
            const response = await fetch(this.url + req, {
                method: 'DELETE',
                headers: {
                'Content-Type': 'application/json',
                }
            });

            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response}`);
            }
        
            return await response.json();
        } catch (error) {
            console.error('Произошла ошибка:', error.message);
        }
    }
}

export default new Api();