const extractListNames = lists => {
  return lists.reduce((accum, e) => {
    return [...accum, e.name.toLowerCase()];
  }, []);
};

export default extractListNames;
