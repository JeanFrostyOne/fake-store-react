export default function parseJwt(token) {
  const tokenParts = token.split("."); // Разделяем токен на части
  const decodedPayload = JSON.parse(atob(tokenParts[1])); // Декодируем полезную нагрузку
  return decodedPayload;
}
