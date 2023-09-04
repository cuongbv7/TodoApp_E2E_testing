export interface todoModel {
    summary: string,
    description: string,
    status:statusType,
    assignee:assigneeType
}

export enum statusType {
    todo="To Do",
    inprogress="In Progress",
    completed="Completed"
}

export enum assigneeType {
  admin="Admin",
  supervisor="Supervisor",
  staff="Staff"
}

