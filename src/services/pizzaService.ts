export const fetchPizzas = async () => {
    try {
        const response = await fetch('https://private-anon-b26f96742a-pizzaapp.apiary-mock.com/restaurants/1/menu?category=Pizza&orderBy=rank');
        if (!response.ok) {
            throw new Error("Network response was not ok");
          }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching pizzas:', error);
        throw error;
    }
};
