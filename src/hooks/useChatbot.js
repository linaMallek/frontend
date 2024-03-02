import axios from "@/config/axiosConfig";

async function sendMessage(chatHistory, userInput) {
  const userMessage = userInput.value;
  userInput.value = ""; // Clear input field
  try {
    const response = await axios.post("chatBot/", {
      userInput: userMessage,
    });

    const data = response.data;
    // Add chat message to the chat history
    chatHistory.innerHTML += `<div class="user-message">${userMessage}</div>`;
    chatHistory.innerHTML += `<div class="bot-message">${data.response}</div>`;

    // Scroll to the bottom of the chat history
    chatHistory.scrollTop = chatHistory.scrollHeight;
  } catch (error) {
    console.error("Error:", error);
    // Handle errors gracefully, e.g., display an error message to the user
  }
}

export default sendMessage;
