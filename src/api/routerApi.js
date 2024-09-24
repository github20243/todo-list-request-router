const API_BASE_URL = "https://66f28e6c71c84d805875be8e.mockapi.io/items";

export const postRequest = async (data) => {
  try {
    const response = await fetch(API_BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Network response was not ok: ${errorMessage}`);
    }

    console.log("Успешно добавлено");
    await getRequest(); 
  } catch (error) {
    console.error("Ошибка добавления задачи:", error);
  }
};

export const getRequest = async (setTasks) => {
  try {
    const response = await fetch(API_BASE_URL);
    
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Network response was not ok: ${errorMessage}`);
    }

    const data = await response.json();
    setTasks(data);
  } catch (error) {
    console.log("Ошибка получения задач:", error);
  }
};

export const deleteRequest = async (id, setTasks) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Network response was not ok: ${errorMessage}`);
    }

    await getRequest(setTasks); 
  } catch (error) {
    console.error("Ошибка удаления задачи:", error);
  }
};

export const putRequest = async (id, data) => {
    try {
      const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Network response was not ok: ${errorMessage}`);
      }
  
      console.log("Успешно обновлено");
      await getRequest(); 
    } catch (error) {
      console.error("Ошибка обновления задачи:", error);
    }
  };
  