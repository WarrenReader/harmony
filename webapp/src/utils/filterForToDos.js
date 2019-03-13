const filterForToDos = (toDos, listId) => {
  return toDos.filter(toDo => toDo.toDoListId === listId);
};

export default filterForToDos;
