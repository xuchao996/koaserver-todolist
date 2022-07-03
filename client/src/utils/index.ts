export const formatDataWrap = async (p: Promise<Response>) => {
  return await p.then((res) => res.json()).then((res) => res.data);
};
