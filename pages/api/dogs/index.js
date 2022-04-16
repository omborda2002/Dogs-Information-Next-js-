export default async function handler(req, res) {
  const response = await fetch("https://api.thedogapi.com/v1/breeds", {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "f5cd8e6f-1304-49b0-8bcf-0bc247f65a37",
    },
  });
  let data = await response.json();

  res.status(200).json(data);
}
