console.log('-----------------customFunctions.js loaded--------------------------');

const textAccordingToType = (type) => {
    if (type === "onTraining") {
      return "No chatbot is currently undergoing training.";
    } else if (type === "active") {
      return "No chatbot is currently  active.";
    } else if (type === "inactive") {
      return "No chatbot is currently  inactive.";
    } else {
      return "No chatbot is currently  saved.";
    }
  };