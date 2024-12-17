
const truncateText = (text) => {
    if (!text) return ""; // Retornar vacío si no hay texto
    return text.length > 53 ? text.substring(0, 50) + "..." : text; // Retornar texto truncado
  };




export const helpUtil = {
    truncateText
}