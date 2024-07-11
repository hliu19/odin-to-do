//factory function to create a to-do object
const todo = (title, description, dueDate, priority) => {
    return {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority
    }
}

export default todo;