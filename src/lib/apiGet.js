export default async function apiGet() {
  const res = await fetch(process.env.LOCALHOST + "/api/data");

  const data = await res.json();

  return data;
}
