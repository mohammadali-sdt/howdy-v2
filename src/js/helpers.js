export const getJSON = async function (url, msg = 'Something was wrong!') {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(msg);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(msg);
  }
};
